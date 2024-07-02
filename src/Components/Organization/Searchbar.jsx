import React from 'react';

const SearchBar = () => {
  return (
    <div className="flex items-center mt-9 ml-9 mr-9 p-2 rounded-xl border space-x-4">
      <select className="p-2 border-r focus:outline-none text-blue-900 rounded-lg">
        <option>Department</option>
      </select>
      <select className="p-2 border-r text-blue-900 focus:outline-none rounded-lg">
        <option>Location</option>
      </select>
      <input type="text" className="p-2 border focus:outline-none rounded-xl flex-grow" placeholder="Search" />
      <button className="p-2 text-blue-900 rounded-lg ml-4">Clear Filter</button>
    </div>
  );
}

export default SearchBar;
