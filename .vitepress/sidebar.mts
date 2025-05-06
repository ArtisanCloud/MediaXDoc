import { menusByteDance, pathByteDance } from "./menus/byteDance.mts"
import { menusWechat, pathWechat } from "./menus/wechat.mts"

export const sidebar = [
  {
    text: 'MediaX',
    // collapsed: true,
    items: [
      { text: '概述', link: '/docs/mediax/index.md' },
      { text: '快速开始', link: '/docs/mediax/quickStart.md' },
      { text: '授权类型', link: '/docs/mediax/token.md' },
      {
        text: '字节', link: pathByteDance + '/index.md',
        // collapsed: true,
        items: menusByteDance
      },
      { 
        text: '微信', link: pathWechat +'/index.md' ,
        items: menusWechat
      },

    ]
  },
  {
    text: 'MediaX-Pro',
    items: [
      { text: '概述', link: '/docs/mediax-pro/index.md' },
    ]
  }

]