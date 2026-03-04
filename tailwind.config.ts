import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#020617",
          soft: "#0a0f1f"
        },
        neon: {
          cyan: "#22d3ee",
          blue: "#38bdf8",
          indigo: "#6366f1",
          purple: "#a855f7"
        }
      },
      boxShadow: {
        glow: "0 0 20px rgba(56, 189, 248, 0.25)",
        "glow-strong": "0 0 40px rgba(56,189,248,0.35)"
      },
      borderRadius: {
        card: "16px"
      },
      backgroundImage: {
        "radial-faint":
          "radial-gradient(600px at 50% 0%, rgba(56,189,248,0.08), transparent 60%)",
        "radial-strong":
          "radial-gradient(700px at 50% 0%, rgba(99,102,241,0.10), transparent 70%)",
        "grid":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)"
      },
      backgroundSize: {
        grid: "40px 40px"
      }
    }
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".glass": {
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(56, 189, 248, 0.15)"
        }
      });
    })
  ]
};
export default config;
