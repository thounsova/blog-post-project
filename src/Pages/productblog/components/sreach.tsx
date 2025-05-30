import React from "react";

interface SearchProps {
  query: string;
  setQuery: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ query, setQuery }) => {
  return (
    <div className="bg-white shadow-sm rounded-xl p-4 mx-auto max-w-3xl mt-40">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="🔍 Search blog posts..."
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
      />
    </div>
  );
};

export default Search;
