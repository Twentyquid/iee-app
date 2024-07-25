import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { VitePWA } from "vite-plugin-pwa";

const manifestForPlugIn = {
  registerType:'prompt',
  includeAssests:['favicon.ico', "apple-touc-icon.png", "masked-icon.svg"],
  manifest:{
    prefer_related_applications: false,
    name:"IEEE APP",
    short_name:"react-vite-app",
    description:"I am a simple vite app",
    icons:[{
      src: '/android-chrome-192-192.png',
      sizes:'192x192',
      type:'image/png',
      
    },
    {
      src:'/android-chrome-512-512.png',
      sizes:'512x512',
      type:'image/png',
      
    },
    {
      src: '/apple-touch-icon.png',
      sizes:'180x180',
      type:'image/png',
    },
    {
      src: '/maskable_icon.png',
      sizes:'512x512',
      type:'image/png',

    }
  ],
  screenshots: [
    {
      src: "/screenshot-narrow.png",
      type: "image/png",
      form_factor: "narrow",
      sizes: "462x812"
    },
    {
      src: "/screenshot-wide.png",
      type: "image/png",
      form_factor: "wide",
      sizes: "1610x927"
    }
  ],
  theme_color:'#171717',
  background_color:'#f0e7db',
  display:"standalone",
  scope:'/',
  start_url:"/",
  orientation:'portrait'
  }
}

export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugIn)],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
