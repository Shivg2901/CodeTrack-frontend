import React, { useState, useEffect } from "react";
import { Code, BookOpen, Activity, Clock } from "lucide-react";
import CP31 from "./cp31_page";

const Cp_Sheets = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [page, setPage] = useState(null);

  // Load initial content
  useEffect(() => {
    setPage(<CP31 />);
  }, []);

  const handleTabChange = (tabIndex) => {
    if (tabIndex === activeTab) return;
    setActiveTab(tabIndex);
    setPage(<CP31 />);
  };

  // Simplified tab data - only CP31
  const tabs = [
    {
      title: "CP31 Sheet",
      icon: <Code />,
      description:
        "A structured problem set covering key competitive programming concepts with progressive difficulty",
      color: "from-blue-600 to-blue-800",
      lightColor: "from-blue-500/20 to-blue-700/20",
      problemCount: 450,
      topics: 31,
      difficulty: "Beginner to Advanced",
      tags: ["Implementation", "Greedy", "DP", "Graphs"],
    },
  ];

  return (
    <div className="min-h-full text-white">
      {/* Tab Navigation */}
      <div className="mb-6">
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => handleTabChange(index)}
              className={`
                py-3 px-5 rounded-xl transition-all duration-200
                flex items-center gap-3
                ${
                  activeTab === index
                    ? `bg-gradient-to-r ${tab.color} text-white shadow-lg`
                    : "bg-black/40 text-gray-300 hover:bg-black/50 hover:text-white border border-gray-700/50"
                }
              `}
            >
              <div
                className={`
                p-1.5 rounded-lg bg-gradient-to-r 
                ${
                  activeTab === index
                    ? "from-white/20 to-white/5"
                    : tab.lightColor
                }
              `}
              >
                {React.cloneElement(tab.icon, {
                  className: `h-4 w-4 ${
                    activeTab === index ? "text-white" : "text-blue-400"
                  }`,
                })}
              </div>
              {tab.title}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="backdrop-blur-xl rounded-xl shadow-xl border border-gray-700/50 overflow-hidden">
        <div className="transition-opacity duration-300 p-6">{page}</div>
      </div>

      {/* Simplified description section */}
      <div className="mt-8 max-w-4xl mx-auto">
        <div className="p-6 rounded-xl border border-blue-500/30 shadow-blue-500/20">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700">
              <Code className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">CP31</h3>
              <p className="text-sm text-gray-400">Problem Set</p>
            </div>
          </div>
          <p className="text-gray-300 mb-4">
            A curated collection of problems designed to improve your competitive
            programming skills systematically.
          </p>
          <div className="flex flex-wrap gap-4 mb-4">
            <span className="text-xs bg-gray-800 rounded-full px-3 py-1">
              31 Problems
            </span>
            <span className="text-xs bg-gray-800 rounded-full px-3 py-1">
              Rating Based
            </span>
            <span className="text-xs bg-gray-800 rounded-full px-3 py-1">
              Progress Tracking
            </span>
          </div>
          <div className="flex gap-4 text-sm text-gray-500">
            <span>Difficulty: Beginner to Intermediate</span>
            <span>Estimated Time: 2-4 weeks</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cp_Sheets;