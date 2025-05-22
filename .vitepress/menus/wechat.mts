export const pathWechat = "/docs/mediax-sdk/wechat";
export const pathWechatCore = pathWechat + "/core";
export const pathWechatOfficialAccount = pathWechat + "/officialAccount";
export const pathWechatClientTokenClient =
  pathWechatOfficialAccount + "/clientTokenClient";

export const menusWechat = [
  {
    text: "公众号",
    link: pathWechatOfficialAccount + "/index.md",
    collapsed: true,
    items: [
      {
        text: "ClientToken模式",
        link: pathWechatClientTokenClient + "/client.md",
        collapsed: true,
        items: [
          {
            text: "素材",
            link: pathWechatClientTokenClient + "/material/client.md",
          },
          {
            text: "媒体",
            link: pathWechatClientTokenClient + "/media/client.md",
          },
          {
            text: "发布",
            link: pathWechatClientTokenClient + "/publish/client.md",
          },
        ],
      },
    ],
  },
];
