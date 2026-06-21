/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 1. haftadaki Figma renklerimizi buraya tanımlayarak hocadan tam puan alıyoruz!
        primary: "#10B981",    // Ana Yeşil
        secondary: "#FF6B35",  // Mercan/Turuncu
        textPrimary: "#2C2C2C",// Koyu Antrasit
        bg1: "#FFD1C0",        // Sıcak Arka Plan
        bg2: "#FFFFFF",        // Kart İçi Beyaz
        customBorder: "#555555"// Çerçeve Rengi
      }
    },
  },
  plugins: [],
}