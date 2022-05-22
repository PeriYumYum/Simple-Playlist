import { useState } from 'react'
//className="px-8 py-2 border border-gray-300 focus:ring-blue-500 block w-full rounded-md bg-white text-gray-900"
//className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
export default function SearchBar(props) {
  const [input, setInput] = useState('')
  return (
    <div className="relative flex w-max  flex-row ">
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search here"
        className="block flex w-max rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900"
        onKeyDown={(e) => {
          e.key === 'Enter' ? props.handleSearch(input) : null
        }}
      />
      <button onClick={() => props.handleSearch(input)}>
        <svg
          className="right-3 top-3 m-2 h-5 w-5 justify-end text-gray-400 dark:text-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </div>
  )
}
