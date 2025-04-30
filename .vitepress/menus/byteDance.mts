export const pathByte = '/docs/mediax/byteDance'
export const pathByteDanceDouYin = pathByte + '/douYin'
export const pathByteDanceDouYinAccessTokenClient = pathByteDanceDouYin + '/accessTokenClient'
export const pathByteDanceDouYinClientTokenClient = pathByteDanceDouYin + '/clientTokenClient'

export const menusByteDance = [
    {
        text: "抖音", link: pathByteDanceDouYin + '/index.md',
        items: [
            {
                text: 'AccessToken模式', link: pathByteDanceDouYinAccessTokenClient + '/index.md',
                items: [
                    { text: '视频', link: pathByteDanceDouYinAccessTokenClient + '/content/video/client.md' }
                ]
            },
            {
                text: 'ClientToken模式', link: pathByteDanceDouYinClientTokenClient + '/index.md',
                items: [
                    { text: '视频', link: pathByteDanceDouYinClientTokenClient + '/content/video/client.md' }
                ]
            },
        ]
    }
]