export const pathRedBook = "/docs/mediax/redbook";
export const pathRedBookJuGuang = pathRedBook + "/juGuang";
export const pathRedBookCore = pathRedBookJuGuang + "/core";
export const pathRedBookJuGuangAccessTokenClient =
  pathRedBookJuGuang + "/accessTokenClient";
export const pathRedBookJuGuangClientTokenClient =
  pathRedBookJuGuang + "/clientTokenClient";

export const menusRedBook = [
  {
    text: "聚光",
    link: pathRedBookJuGuang + "/index.md",
    collapsed: true,
    items: [
      {
        text: "AccessToken模式",
        link: pathRedBookJuGuangAccessTokenClient + "/client.md",
        collapsed: true,
        items: [
          {
            text: "账户服务",
            link: pathRedBookJuGuangAccessTokenClient + "/account/client.md",
          },
          {
            text: "广告投放",
            link: pathRedBookJuGuangAccessTokenClient + "/campaign/client.md",
          },
          {
            text: "数据报表",
            items: [
              {
                text: "离线报表",
                link:
                  pathRedBookJuGuangAccessTokenClient +
                  "/dataReport/offline/client.md",
              },
              {
                text: "实时报表",
                link:
                  pathRedBookJuGuangAccessTokenClient +
                  "/dataReport/online/client.md",
              },
            ],
          },
          {
            text: "素材管理",
            link: pathRedBookJuGuangAccessTokenClient + "/note/client.md",
          },
        ],
      },
    ],
  },
];
