import React from 'react';

const SearchBar = () => {
  return (
    <div className="flex justify-center">
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="block w-48 sm:w-64 py-2 px-4 rounded-md bg-gray-100 border border-gray-200 focus:outline-none focus:bg-white focus:border-gray-300"
        />
        <button
          type="submit"
          className="ml-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
