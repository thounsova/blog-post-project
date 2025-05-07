export default {
  darkMode: "class", // Enables class-based dark mode
  theme: {
    extend: {},
  },
  plugins: [],
};

export const theme = {
  extend: {
    animation: {
      "ping-slow": "ping 3s cubic-bezier(0, 0, 0.2, 1) infinite",
      "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      "float-slow": "float 5s ease-in-out infinite",
      twinkle: "twinkle 4s ease-in-out infinite",
      "twinkle-delayed": "twinkle 4s ease-in-out infinite 2s",
    },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) scale(1)", opacity: "0.6" },
          "50%": { transform: "translateY(-10px) scale(1.1)", opacity: "0.8" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0", transform: "scale(0.5) rotate(0deg)" },
          "50%": { opacity: "1", transform: "scale(1) rotate(180deg)" },
        },
      },
    },
  },
};
