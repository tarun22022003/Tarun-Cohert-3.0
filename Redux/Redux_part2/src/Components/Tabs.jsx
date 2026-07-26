import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Image, Video } from "lucide-react";
import { setActiveTab } from "../Redux/Features/SearchSlice";

const Tabs = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);

  const tabs = [
    {
      name: "photos",
      icon: <Image size={18} />,
    },
    {
      name: "videos",
      icon: <Video size={18} />,
    },
  ];

  return (
    <div className="w-full bg-gray-900 px-4 py-6">
      <div className="mx-auto flex w-fit rounded-xl bg-gray-800 p-1 shadow-lg">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => dispatch(setActiveTab(tab.name))}
            className={`flex items-center gap-2 rounded-lg px-6 py-3 text-sm sm:text-base font-semibold transition-all duration-300 active:scale-95 ${
              activeTab === tab.name
                ? "bg-blue-600 text-white shadow-md"
                : "text-gray-300 hover:bg-gray-700 hover:text-white"
            }`}
          >
            {tab.icon}
            {tab.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;