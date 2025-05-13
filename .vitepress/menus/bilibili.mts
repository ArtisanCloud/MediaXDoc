export const pathBiliBili = "/docs/mediax/bilibili";
export const pathBiliBiliB = pathBiliBili + "/b";
export const pathBiliBiliCore = pathBiliBiliB + "/core";
export const pathBiliBiliBAccessTokenClient =
  pathBiliBiliB + "/accessTokenClient";
export const pathBiliBiliBClientTokenClient =
  pathBiliBiliB + "/clientTokenClient";

export const menusBiliBili = [
  {
    text: "B站",
    // link: pathBiliBiliB + "/index.md",
    collapsed: true,
    items: [
      {
        text: "AccessToken模式",
        link: pathBiliBiliBAccessTokenClient + "/client.md",
        collapsed: true,
        items: [
          {
            text: "用户管理",
            link: pathBiliBiliBAccessTokenClient + "/user/client.md",
          },
          {
            text: "视频稿件",
            link: pathBiliBiliBAccessTokenClient + "/video/client.md",
          },
        ],
      },
    ],
  },
];
