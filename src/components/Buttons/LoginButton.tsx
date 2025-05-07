interface LoginButtonProps {
  isLoading: boolean;
  onClick: () => void;
}

export default function LoginButton({ isLoading, onClick }: LoginButtonProps) {
  return (
    <button
      type="submit"
      disabled={isLoading}
      onClick={onClick}
      className="w-full h-14 bg-[#FF0E4D] text-white text-xl font-bold py-2 px-4 rounded-xl hover:bg-[#EB5757] transition duration-300 ease-in-out disabled:bg-red-400 disabled:cursor-not-allowed"
    >
      {isLoading ? "Logging in..." : "Login"}
    </button>
  );
}
