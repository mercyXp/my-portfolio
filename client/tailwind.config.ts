import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: ["class", ".dark"], // enable class-based dark mode
  content: [
    "./src/app/**/*.{ts,tsx}",         // pages and layouts
    "./src/components/**/*.{ts,tsx}",  // components
    "./src/**/*.{ts,tsx,js,jsx}",      // fallback for any other files
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsl(203.7736 87.6033% 52.5490%)",
        primaryForeground: "hsl(0 0% 100%)",
        secondary: "hsl(0 0% 8.24%)",
        secondaryForeground: "hsl(70.91 21.57% 90%)",
        muted: "hsl(72 12.82% 84.71%)",
        mutedForeground: "hsl(72 2.39% 40.98%)",
        accent: "hsl(292.13 48.03% 75.1%)",
        accentForeground: "hsl(0 0% 8.24%)",
        destructive: "hsl(0.49 54.19% 55.49%)",
        destructiveForeground: "hsl(0 0% 100%)",
        hoverLink: "hsl(203 100% 70%)",
        footerBg: "hsl(203.7736 87.6033% 52.5490%)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Space Grotesk", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
        serif: ["Source Serif Pro", "serif"],
      },
      borderRadius: {
        lg: "0.875rem",
      },
      spacing: {
        sm: "0.25rem",
      },
      letterSpacing: {
        normal: "0em",
      },
    },
  },
  plugins: [animate, typography],
};

export default config;
