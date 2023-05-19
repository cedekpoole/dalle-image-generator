"use client"

import { FC } from 'react'

const Prompt: FC = ({}) => {
  return <div className="mt-14">
    <form className="mx-auto w-5/6 flex flex-col lg:flex-row lg:divide-x border shadow-gray-300 rounded-md">
        <textarea className="flex-1 outline-none p-2 rounded-md rounded-b-none lg:rounded-bl-md lg:rounded-r-none text-gray-400"/>
        <button type="submit" className="p-3">Generate</button>
        <button type="button" className="p-3 bg-dark-col-1000 transition-colors duration-200 disabled:text-gray-500 disabled:cursor-not-allowed disabled:bg-gray-300">Use Suggestion</button>
        <button type="button" className="p-3 bg-dark-col-500 border-none transition-colors rounded-b-md md:rounded-r-md md:rounded-bl-none">New Suggestion</button>
    </form>
    </div>
}

export default Prompt