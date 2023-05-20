"use client";

import { FC, useState } from "react";

const Prompt: FC = ({}) => {
  const [input, setInput] = useState("");

  return (
    <div className="mt-14">
      <form className="mx-auto w-5/6 flex flex-col lg:flex-row lg:divide-x divide-gray-500 border border-gray-500 shadow-gray-300 rounded-md">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a prompt..."
          className="flex-1 outline-none p-1 px-2 rounded-md rounded-b-none lg:rounded-bl-md lg:rounded-r-none text-gray-400"
        />
        <button type="submit" 
                disabled={!input} 
                className={`p-3 ${
                    input
                    ? "bg-dark-col-1000 transition-colors duration-200 hover:bg-dark-col-600"
                    : "text-gray-500 bg-gray-300 cursor-not-allowed"
                }`}>
          Generate
        </button>
        <button
          type="button"
          className="p-3 bg-dark-col-700 transition-colors duration-200 disabled:text-gray-500 disabled:cursor-not-allowed disabled:bg-gray-300"
        >
          Use Suggestion
        </button>
        <button
          type="button"
          className="p-3 bg-dark-col-500 transition-colors rounded-b-md lg:rounded-r-md lg:rounded-bl-none"
        >
          New Suggestion
        </button>
      </form>
    </div>
  );
};

export default Prompt;
