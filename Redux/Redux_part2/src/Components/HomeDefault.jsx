import { Sparkles, Search } from "lucide-react";

const HomeDefault = () => {
  const suggestions = [
    "Nature",
    "Mountains",
    "Cars",
    "Travel",
    "Space",
    "Food",
    "Coding",
    "Animals",
  ];

  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center px-6">

      <Sparkles size={60} className="text-blue-500 mb-5" />

      <h1 className="text-5xl font-extrabold text-center">
        Search Photos & Videos
      </h1>

      <p className="text-gray-500 text-center mt-4 max-w-2xl text-lg">
        Discover millions of high-quality photos and videos from Unsplash and
        Pexels in one place.
      </p>

      <div className="flex flex-wrap justify-center gap-3 mt-10">
        {suggestions.map((item) => (
          <button
            key={item}
            className="bg-gray-800 hover:bg-blue-600 transition px-5 py-2 rounded-full"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HomeDefault;