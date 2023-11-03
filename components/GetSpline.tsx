"use client";

import { useState } from "react";

const GetSpline = () => {
  const [isActive, setIsActive] = useState("Browser");

  return (
    <section className="py-32 max-lg:px-4">
      <div className="max-w-5xl mx-auto space-y-4">
        <h1 className="text-gray-300 text-center text-2xl font-medium md:text-3xl">
          Get Anibal Now
        </h1>
        <p className="text-zinc-500 text-center text-lg md:text-2xl max-w-2xl mx-auto">
          We would love to see what you can build with Anibal! Please tag us on
          𝕏 / Twitter or Instagram with your work.
        </p>
        <div className="pt-8 flex flex-col justify-center items-center gap-4 lg:flex-row">
          <button
            onClick={() => setIsActive("Browser")}
            className={`bg-[#181A1E] flex items-center justify-center py-4 px-8 rounded-2xl hover:bg-[#202124] duration-150 hover:text-white w-full sm:w-[203px] lg:aspect-square ${
              isActive === "Browser"
                ? "bg-blue-600 hover:bg-blue-700 duration-150 text-white"
                : "text-zinc-400"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7 pr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>
            <h1 className="font-medium">Browser</h1>
          </button>
          <button
            onClick={() => setIsActive("m1")}
            className={`bg-[#181A1E] flex items-center justify-center py-4 px-8 rounded-2xl hover:bg-[#202124] duration-150 hover:text-white w-full sm:w-[203px] lg:aspect-square ${
              isActive === "m1"
                ? "bg-blue-600 hover:bg-blue-700 duration-150 text-white"
                : "text-zinc-400"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7 pr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>

            <h1 className="font-medium">macOS (m1)</h1>
          </button>
          <button
            onClick={() => setIsActive("intel")}
            className={`bg-[#181A1E] flex items-center justify-center py-4 px-8 rounded-2xl hover:bg-[#202124] duration-150 hover:text-white w-full sm:w-[203px] lg:aspect-square ${
              isActive === "intel"
                ? "bg-blue-600 hover:bg-blue-700 duration-150 text-white"
                : "text-zinc-400"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7 pr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>

            <h1 className="font-medium">macOS (intel)</h1>
          </button>
          <button
            onClick={() => setIsActive("windows")}
            className={`bg-[#181A1E] flex items-center justify-center py-4 px-8 rounded-2xl hover:bg-[#202124] duration-150 hover:text-white w-full sm:w-[203px] lg:aspect-square ${
              isActive === "windows"
                ? "bg-blue-600 hover:bg-blue-700 duration-150 text-white"
                : "text-zinc-400"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7 pr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>

            <h1 className="font-medium">Windows</h1>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetSpline;
