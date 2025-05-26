export const pathBiliBili = "/docs/mediax-sdk/bilibili";
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
          {
            text: "文稿管理",
            items: [
              {
                text: "专栏文稿",
                link: pathBiliBiliBAccessTokenClient + "/article/client.md",
              },
              {
                text: "专栏集合",
                link:
                  pathBiliBiliBAccessTokenClient +
                  "/article/collection/client.md",
              },
            ],
          },
          {
            text: "开放数据",
            link: pathBiliBiliBAccessTokenClient + "/data/client.md",
          },
          {
            text: "直播能力",
            items: [
              {
                text: "直播长连接",
                link: pathBiliBiliBAccessTokenClient + "/live/ws/client.md",
              },
              {
                text: "开播嵌入能力",
                link:
                  pathBiliBiliBAccessTokenClient + "/live/thirdParty/client.md",
              },
            ],
          },
        ],
      },
    ],
  },
];
