import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, fetchvideos } from "../API/MediaApi";
import HomeDefault from "../Components/HomeDefault";
import {
  setLoading,
  setResults,
  setError,
} from "../Redux/Features/SearchSlice";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const dispatch = useDispatch();

  const { query, activeTab, results, loading, error } = useSelector(
    (state) => state.search
  );

  useEffect(() => {
    if (!query) {
        return 
    };

    const getData = async () => {
      try {
        dispatch(setLoading());

        let data = [];

        if (activeTab === "photos") {
          const response = await fetchPhotos(query);

          data = response.results.map((item) => ({
            id: item.id,
            type: "photo",
            title: item.alt_description || "Untitled",
            thumbnail: item.urls.small,
            src: item.urls.full,
            url: item.links.html,
          }));
        }

        if (activeTab === "videos") {
          const response = await fetchvideos(query);

          data = response.videos.map((item) => ({
            id: item.id,
            type: "video",
            title: item.user.name || "Video",
            thumbnail: item.image,
            src: item.video_files[0].link,
          }));
        }

        dispatch(setResults(data));
      } catch (err) {
        dispatch(setError(err.message));
      }
    };

    getData();
  }, [query, activeTab, dispatch]);

  if (!query) {
  return <HomeDefault />;
}

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <div className="w-14 h-14 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <h1 className="text-red-600 text-2xl font-semibold">
          {error}
        </h1>
      </div>
    );
  }

  if (!loading && results.length === 0 && query) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <h1 className="text-3xl text-gray-500 font-semibold">
          No Results Found 😔
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-10 py-8">
      <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {results.map((item) => (
          <ResultCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ResultGrid;