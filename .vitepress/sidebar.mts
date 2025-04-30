import { menusByteDance, pathByte } from "./menus/byteDance.mts"

export const sidebar = [
  {
    text: 'MediaX',
    items: [
      { text: '概述', link: '/docs/mediax/index.md' },
      {
        text: '字节', link: pathByte + '/index.md',
        items: menusByteDance

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