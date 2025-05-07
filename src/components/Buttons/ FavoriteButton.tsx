export default function FavoriteButton() {
  return (
    <button className="flex items-center gap-2 w-36 h-14 bg-[#F8275F] text-black text-xl font-bold py-2 px-4 rounded-xl hover:bg-[#EB5757] transition duration-300 ease-in-out">
      <svg
        className="w-8 h-8 fill-current text-white"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
      >
        <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4 13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z" />
      </svg>
      Favorite
    </button>
  );
}
