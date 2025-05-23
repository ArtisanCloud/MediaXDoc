export const pathGoogle = "/docs/mediax-sdk/google";
export const pathGoogleYoutube = pathGoogle + "/youtube";
export const pathGoogleCore = pathGoogleYoutube + "/core";
export const pathGoogleYoutubeAccessTokenClient =
  pathGoogleYoutube + "/accessTokenClient";
export const pathGoogleYoutubeClientTokenClient =
  pathGoogleYoutube + "/clientTokenClient";

export const menusGoogle = [
  {
    text: "YouTube",
    collapsed: true,
    items: [
      {
        text: "AccessToken模式",
        link: pathGoogleYoutubeAccessTokenClient + "/client.md",
        collapsed: true,
        items: [
          {
            text: "视频",
            link: pathGoogleYoutubeAccessTokenClient + "/video/client.md",
          },
          {
            text: "视频分类",
            link:
              pathGoogleYoutubeAccessTokenClient + "/videoCategory/client.md",
          },
          {
            text: "视频滥用原因",
            link:
              pathGoogleYoutubeAccessTokenClient +
              "/videoAbuseReportReasons/client.md",
          },
          {
            text: "水印",
            link: pathGoogleYoutubeAccessTokenClient + "/watermarks/client.md",
          },
          {
            text: "缩略图",
            link: pathGoogleYoutubeAccessTokenClient + "/thumbnails/client.md",
          },
          {
            text: "订阅",
            link:
              pathGoogleYoutubeAccessTokenClient + "/subscriptions/client.md",
          },
          {
            text: "搜索",
            link: pathGoogleYoutubeAccessTokenClient + "/search/client.md",
          },
          {
            text: "播放列表",
            link: pathGoogleYoutubeAccessTokenClient + "/playlists/client.md",
          },
          {
            text: "播放列表项",
            link:
              pathGoogleYoutubeAccessTokenClient + "/playlistItems/client.md",
          },
          {
            text: "播放列表图片",
            link:
              pathGoogleYoutubeAccessTokenClient + "/playlistImages/client.md",
          },
          {
            text: "会员级别",
            link:
              pathGoogleYoutubeAccessTokenClient +
              "/membershipsLevels/client.md",
          },
          {
            text: "I18n语言",
            link:
              pathGoogleYoutubeAccessTokenClient + "/i18nLanguages/client.md",
          },
          {
            text: "I18n区域",
            link: pathGoogleYoutubeAccessTokenClient + "/i18nRegions/client.md",
          },
          {
            text: "评论会话",
            link:
              pathGoogleYoutubeAccessTokenClient + "/commentThreads/client.md",
          },
          {
            text: "评论",
            link: pathGoogleYoutubeAccessTokenClient + "/comments/client.md",
          },
          {
            text: "频道板块",
            link:
              pathGoogleYoutubeAccessTokenClient + "/channelBanners/client.md",
          },
          {
            text: "频道",
            link: pathGoogleYoutubeAccessTokenClient + "/channels/client.md",
          },
          {
            text: "字幕",
            link: pathGoogleYoutubeAccessTokenClient + "/captions/client.md",
          },
        ],
      },
    ],
  },
];
