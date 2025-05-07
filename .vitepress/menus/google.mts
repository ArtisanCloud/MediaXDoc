export const pathGoogle = '/docs/mediax/google'
export const pathGoogleYoutube = pathGoogle + '/youtube'
export const pathGoogleCore = pathGoogleYoutube + '/core'
export const pathGoogleYoutubeAccessTokenClient = pathGoogleYoutube + '/accessTokenClient'
export const pathGoogleYoutubeClientTokenClient = pathGoogleYoutube + '/clientTokenClient'

export const menusGoogle = [
    {
        text: "YouTube", link: pathGoogleYoutube + '/index.md',
        collapsed: true,
        items: [
            {
                text: 'AccessToken模式', link: pathGoogleYoutubeAccessTokenClient + '/client.md',
                collapsed: true,
                items: [
                    {text: '视频', link: pathGoogleYoutubeAccessTokenClient + '/video/client.md',},
                    {text: '视频分类', link: pathGoogleYoutubeAccessTokenClient + '/videoCategory/client.md',},
                    {text: '视频滥用原因', link: pathGoogleYoutubeAccessTokenClient + '/videoAbuseReportReasons/client.md',},
                    {text: '水印', link: pathGoogleYoutubeAccessTokenClient + '/watermarks/client.md',},
                    {text: '缩略图', link: pathGoogleYoutubeAccessTokenClient + '/thumbnails/client.md',},
                    {text: '订阅', link: pathGoogleYoutubeAccessTokenClient + '/subscriptions/client.md',},
                ]
            }
        ]
    }
]