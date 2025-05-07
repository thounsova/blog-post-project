export default function ExploreStoriesButton() {
  return (
    <a href="/story" className="inline-block">
      <button
        className="bg-[#FF0E4D] hover:bg-gray-800 text-white font-medium py-2 px-5 sm:py-3 sm:px-6 rounded-md transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 cursor-pointer flex items-center gap-2"
        aria-label="Explore Stories"
      >
        <span>Explore Stories</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
        >
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </button>
    </a>
  );
}
