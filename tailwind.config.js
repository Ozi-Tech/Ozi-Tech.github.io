/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          950: "#050709",
          900: "#0A0D14",
          800: "#10141E",
          700: "#181D2A",
          600: "#222938",
        },
        accent: {
          DEFAULT: "#00E09E",
          light: "#5CFFCA",
          dim: "rgba(0, 224, 158, 0.08)",
          glow: "rgba(0, 224, 158, 0.15)",
          border: "rgba(0, 224, 158, 0.2)",
        },
        text: {
          primary: "#E8ECF4",
          secondary: "#8B95A8",
          muted: "#5A6477",
        },
      },
      fontFamily: {
        heading: ['"Outfit"', "system-ui", "sans-serif"],
        body: ['"DM Sans"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
    },
  },
  plugins: [],
};
