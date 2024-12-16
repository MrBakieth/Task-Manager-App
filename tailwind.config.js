/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          background: "#FFF8E1",   // Arka plan rengi
          primary: "#FFAB91",      // Görev oluşturma düğmesi
          secondary: "#80CBC4",    // Tamamlanmış görevler
          accent: "#FFD54F",       // Vurgulamak için
          text: "#37474F",         // Metin renkleri
        }
      },
    },
  },
  plugins: [],
}

