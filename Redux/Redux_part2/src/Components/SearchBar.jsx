import React, { useState } from "react";
import { Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { setQuery } from "../Redux/Features/SearchSlice";

const SearchBar = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setQuery(text));
    setText("");
  };

  return (
    <div className="w-full bg-gray-900 py-6 px-4 sm:px-8 md:px-12 shadow-lg">
      <form
        onSubmit={submitHandler}
        className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center gap-4"
      >
        <div className="relative w-full">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
            size={22}
          />

          <input
            type="text"
            required
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Search Photos & Videos..."
            className="w-full rounded-xl border text-black border-gray-300 bg-white pl-12 pr-4 py-3 text-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition"
          />
        </div>

        <button
          type="submit"
          className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl transition active:scale-95"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;