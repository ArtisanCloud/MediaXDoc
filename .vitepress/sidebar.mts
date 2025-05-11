import { menusBiliBili, pathBiliBili } from "./menus/bilibili.mts";
import { menusByteDance, pathByteDance } from "./menus/byteDance.mts";
import { menusGoogle, pathGoogle } from "./menus/google.mts";
import { menusRedBook, pathRedBook } from "./menus/redBook.mts";
import { menusWechat, pathWechat } from "./menus/wechat.mts";

export const sidebar = [
  {
    text: "MediaX",
    // collapsed: true,
    items: [
      { text: "概述", link: "/docs/mediax/index.md" },
      { text: "快速开始", link: "/docs/mediax/quickStart.md" },
      { text: "授权类型", link: "/docs/mediax/token.md" },
      {
        text: "字节",
        link: pathByteDance + "/index.md",
        // collapsed: true,
        items: menusByteDance,
      },
      {
        text: "小红书",
        link: pathRedBook + "/index.md",
        // collapsed: true,
        items: menusRedBook,
      },
      {
        text: "微信",
        link: pathWechat + "/index.md",
        items: menusWechat,
      },
      {
        text: "哔哩哔哩",
        link: pathBiliBili + "/index.md",
        items: menusBiliBili,
      },
      {
        text: "google",
        link: pathGoogle + "/index.md",
        items: menusGoogle,
      },
    ],
  },
  {
    text: "MediaX Studio",
    items: [{ text: "概述", link: "/docs/mediax-studio/index.md" }],
  },
];
