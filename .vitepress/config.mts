import { defineConfig } from "vitepress";
import { sidebar } from "./sidebar.mts";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/",
  title: "MediaX Doc",
  description:
    "A MediaX Doc website describe how to learn and use MediaX SDK and MediaX Studio",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "MediaX", link: "/docs/mediax/index.md" },
      { text: "MediaX Studio", link: "/docs/mediax-studio/index.md" },
    ],

    sidebar: sidebar,

    socialLinks: [
      { icon: "github", link: "https://github.com/ArtisanCloud/MediaX" },
    ],
  },
});
