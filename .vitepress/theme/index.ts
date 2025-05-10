// // .vitepress/theme/index.ts
// import DefaultTheme from 'vitepress/theme'
// import type { Theme } from 'vitepress'
// import { theme, useOpenapi } from 'vitepress-openapi/client'
// import 'vitepress-openapi/dist/style.css'
// import spec from '../../src/openapi.json' with { type: 'json' }

// export default {
//     extends: DefaultTheme,
//     async enhanceApp({ app }) {
//         useOpenapi({
//             spec,
//             config: {
//                 // Custom theme configuration...
//             },
//         })
//         theme.enhanceApp({ app })
//     }
// } satisfies Theme

import DefaultTheme from "vitepress/theme";

export default DefaultTheme;
