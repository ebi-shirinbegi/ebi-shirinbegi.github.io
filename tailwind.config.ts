import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "var(--canvas)",
        card: "var(--card)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        line: "var(--border)",
        dark: "var(--dark)",
        ondark: "var(--on-dark)",
        ondarkmuted: "var(--on-dark-muted)",
        live: "var(--live)"
      },
      fontFamily: {
        display: ["Instrument Serif", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"]
      }
    }
  },
  plugins: []
};
export default config;
