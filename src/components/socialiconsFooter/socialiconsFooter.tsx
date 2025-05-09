export default function SocialIconsFooter() {
  return (
    <div className="flex justify-center md:justify-center gap-4 mt-2">
      {/* Facebook Icon */}
      <a href="#" className="text-pink-500 text-2xl hover:text-pink-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-6 h-6"
        >
          <path
            fill="currentColor"
            d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"
          />
        </svg>
      </a>
      {/* Pinterest Icon */}
      <a href="#" className="text-pink-500 text-2xl">
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 496 512"
        >
          <path
            fill="currentColor"
            d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3 .8-3.4 5-20.3 6.9-28.1 .6-2.5 .3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"
          />
        </svg>
      </a>
      {/* Twitter Icon */}
      <a href="#" className="text-pink-500 text-2xl hover:text-pink-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-6 h-6"
        >
          <path
            fill="currentColor"
            d="M459.4 151.7c.3 4.2 .3 8.5 .3 12.8 0 131-99.6 282-282 282-56 0-108-16.2-152-44 8 1 15.7 1.2 24 1.2 46.5 0 89-15.5 123-41.3-43.6-.8-80.4-29.5-93.2-69 6 .8 12 .8 18 .8 8.8 0 17.5-1.2 25.8-3.5-45.4-9.2-79.6-49.2-79.6-97.3v-1.2c13.2 7.3 28.2 11.7 44.2 12.2-26.2-17.5-43.5-47.5-43.5-81.5 0-18 .5-34.8 11-49 48.5 60 121 99 202 103-1.8-7.3-2.8-15.2-2.8-23.2 0-55.2 44.8-100 100-100 28.5 0 54.3 11.7 72.5 30.8 22.5-4.3 43.4-12.5 62-24-7.3 22.8-22.8 41.8-43 54 20.2-2.2 39.4-7.8 57.2-15.8-13.7 20-31 37.7-50.8 51.8z"
          />
        </svg>
      </a>
    </div>
  );
}
