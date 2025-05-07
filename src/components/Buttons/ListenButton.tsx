export default function ListenButton() {
  return (
    <button className="flex items-center gap-2 w-36 h-14 bg-[#FF0E4D] text-white text-xl font-bold py-2 px-4 rounded-xl hover:bg-[#EB5757] transition duration-300 ease-in-out">
      <svg
        className="w-8 h-8 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
      >
        <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
      </svg>
      Listen
    </button>
  );
}
