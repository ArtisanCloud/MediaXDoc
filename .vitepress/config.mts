import { defineConfig } from "vitepress";
import { sidebar } from "./sidebar.mts";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/",
  title: "MediaX",
  description: "A MediaX 是一套配合自媒体",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "MediaX", link: "/docs/mediax/index.md" },
      { text: "MediaX Studio", link: "/docs/mediax-studio/index.md" },
      {
        text: "更多产品",
        items: [
          {
            text: "PowerWechat",
            link: "https://powerwechat.artisan-cloud.com",
          },
          { text: "MediaX", link: "https://mediax.artisan-cloud.com" },
          { text: "PowerX", link: "https://powerx.artisan-cloud.com" },
        ],
      },
      // { text: "购买MediaX Studio", link: "/docs/mediax-studio/pricing.md" },
      { text: "联系我们", link: "/docs/contact-us.md" },
    ],

    sidebar: sidebar,

    socialLinks: [
      { icon: "github", link: "https://github.com/ArtisanCloud/MediaX" },
    ],
  },
});
