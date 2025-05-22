import { menusBiliBili, pathBiliBili } from "./menus/bilibili.mts";
import { menusByteDance, pathByteDance } from "./menus/byteDance.mts";
import { menusGoogle, pathGoogle } from "./menus/google.mts";
import { menusRedBook, pathRedBook } from "./menus/redBook.mts";
import { menusWechat, pathWechat } from "./menus/wechat.mts";

export const sidebar = [
  {
    text: "开始",
    items: [
      { text: "概述", link: "/docs/start/index.md" },
      { text: "快速开始", link: "/docs/start/quickStart.md" },
      { text: "授权类型", link: "/docs/start/token.md" },
    ],
  },
  {
    text: "MediaX SDK",
    // collapsed: true,
    items: [
      {
        text: "字节",
        link: pathByteDance + "/index.md",
        collapsed: true,
        items: menusByteDance,
      },
      {
        text: "小红书",
        link: pathRedBook + "/index.md",
        collapsed: true,
        items: menusRedBook,
      },
      {
        text: "微信",
        link: pathWechat + "/index.md",
        collapsed: true,
        items: menusWechat,
      },
      {
        text: "哔哩哔哩",
        link: pathBiliBili + "/index.md",
        collapsed: true,
        items: menusBiliBili,
      },
      {
        text: "google",
        link: pathGoogle + "/index.md",
        collapsed: true,
        items: menusGoogle,
      },
    ],
  },
  {
    text: "MediaX Studio",
    items: [{ text: "概述", link: "/docs/mediax-studio/index.md" }],
  },
];
