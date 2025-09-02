/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "var(--text-primary)",
                secondary: "var(--text-secondary)",
                background: "var(--bg)",
                gradient: "var(--gradient)",
                card_bg: "var(--card-bg)",
                accent: "var(--accent)",
                accent_text: "var(--accent-text)",
                danger: "var(--danger)",
            },
            fontFamily: {
                outfit: ["Outfit", "sans-serif"],
                nunito: ["Nunito", "sans-serif"],
                logo: ["Baloo 2", "cursive"],
            },
            backgroundImage: {
                hero_dark: "url('/src/images/darkBg[0].jpg')",
                hero_light: "url('/src/images/lightBg[0].jpg')",
            }
        },
    },
    plugins: [],
}

