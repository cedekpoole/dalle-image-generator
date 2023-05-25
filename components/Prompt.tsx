"use client";

import fetchImages from "@/lib/fetchImages";
import fetchSuggestion from "@/lib/fetchSuggestion";
import { FC, FormEvent, useState } from "react";
import useSWR from "swr";

const Prompt: FC = ({}) => {
  const [input, setInput] = useState("");

  const {
    data: suggestion,
    isLoading,
    mutate,
    isValidating,
  } = useSWR("api/suggestion", fetchSuggestion, {
    revalidateOnFocus: false,
  });

  const { mutate: refreshImages } = useSWR("api/getImages", fetchImages, {
    revalidateOnFocus: false,
  })

  const submitPrompt = async (useSuggestion?: boolean) => {
    const inputPrompt = input;
    setInput("");

    // text is the prompt that will be sent to the API
    const text = useSuggestion ? suggestion : inputPrompt;

    const res = await fetch('api/generateImg', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({  prompt: text  })
    })

    const data = await res.json();

    refreshImages()
  }

  const handleSubmit =  async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await submitPrompt();
  }

  const load = isLoading || isValidating;

  return (
    <div className="mt-14 mx-auto w-5/6">
      <form 
      className=" flex flex-col lg:flex-row lg:divide-x divide-gray-500 border border-gray-500 shadow-gray-300 rounded-md"
      onSubmit={handleSubmit}
      >
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={
            (load && "Thinking of suggestion...") ||
            suggestion ||
            "Enter a prompt..."
          }
          className="flex-1 outline-none p-1 px-2 bg-dark-col-600 rounded-md rounded-b-none lg:rounded-bl-md lg:rounded-r-none text-gray-400"
        />
        <button
          type="submit"
          disabled={!input}
          className={`p-3 ${
            input
              ? "bg-dark-col-800 transition-colors duration-200 hover:bg-dark-col-1000"
              : "text-gray-500 bg-gray-400 cursor-not-allowed"
          }`}
        >
          Generate
        </button>
        <button
          type="button"
          className="p-3 bg-dark-col-700 transition-colors duration-200 disabled:text-gray-500 disabled:cursor-not-allowed disabled:bg-gray-300 hover:bg-dark-col-900"
          onClick={() => submitPrompt(true)}
        >
          Use Suggestion
        </button>
        <button
          type="button"
          className="p-3 bg-dark-col-500 transition-colors hover:bg-dark-col-800 duration-200 rounded-b-md lg:rounded-r-md lg:rounded-bl-none"
          onClick={mutate}
        >
          New Suggestion
        </button>
      </form>

      {input && (
        <p className="pt-3 p-1 italic">
          Suggestion:{" "}
          <span className="text-dark-col-200 ">
            {load ? "Thinking of a suggestion..." : suggestion}
          </span>
        </p>
      )}
    </div>
  );
};

export default Prompt;
