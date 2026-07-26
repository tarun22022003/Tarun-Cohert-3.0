import React from "react";
import { Download, Heart } from "lucide-react";

const ResultCard = ({ item }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">

      {/* Media */}
      <a
        href={item.url}
        target="_blank"
        rel="noreferrer"
        className="block h-80"
      >
        {item.type === "photo" ? (
          <img
            src={item.thumbnail}
            alt={item.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
          />
        ) : (
          <video
            src={item.src}
            autoPlay
            muted
            loop
            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
          />
        )}
      </a>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>

      {/* Bottom Content */}
      <div className="absolute bottom-0 left-0 w-full p-5 flex items-end justify-between">
        <div className="w-[70%]">
          <h2 className="text-white text-lg font-semibold line-clamp-2 capitalize">
            {item.title || "Untitled"}
          </h2>

          <p className="text-gray-300 text-sm capitalize">
            {item.type}
          </p>
        </div>

        <button className="bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full transition active:scale-90">
          <Heart size={18} />
        </button>
      </div>

      {/* Top Right */}
      <a
        href={item.src}
        target="_blank"
        rel="noreferrer"
        className="absolute top-4 right-4 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
      >
        <Download size={18} className="text-gray-700" />
      </a>
    </div>
  );
};

export default ResultCard;