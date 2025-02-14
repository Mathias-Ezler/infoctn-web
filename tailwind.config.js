/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}", // Incluye todos los archivos relevantes
    ],
    theme: {
      extend: {
        colors: {
          primary: "#0369a1",
        },
      },
    },
    plugins: [],
  };
  