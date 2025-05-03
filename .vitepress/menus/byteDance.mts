export const pathByte = '/docs/mediax/byteDance'
export const pathByteDanceDouYin = pathByte + '/douYin'
export const pathByteDanceDouYinAccessTokenClient = pathByteDanceDouYin + '/accessTokenClient'
export const pathByteDanceDouYinClientTokenClient = pathByteDanceDouYin + '/clientTokenClient'

export const menusByteDance = [
    {
        text: "抖音", link: pathByteDanceDouYin + '/index.md',
        // collapsed: true,
        items: [
            {
                text: 'AccessToken模式', link: pathByteDanceDouYinAccessTokenClient + '/index.md',
                collapsed: true,
                items: [
                    { text: '视频', link: pathByteDanceDouYinAccessTokenClient + '/content/video/client.md' },
                    { text: '任务', link: pathByteDanceDouYinAccessTokenClient + '/content/task/client.md' },
                    { text: '用户数据', link: pathByteDanceDouYinAccessTokenClient + '/connection/data/client.md' },
                    { text: '粉丝判断', link: pathByteDanceDouYinAccessTokenClient + '/connection/fan/client.md' },
                ]
            },
            {
                text: 'ClientToken模式', link: pathByteDanceDouYinClientTokenClient + '/index.md',
                collapsed: true,
                items: [
                    { text: '视频', link: pathByteDanceDouYinClientTokenClient + '/content/video/client.md' },
                    { text: '任务', link: pathByteDanceDouYinClientTokenClient + '/content/task/client.md' },
                    { text: '场景跳转', link: pathByteDanceDouYinClientTokenClient + '/content/schemas/client.md' },
                    { text: '经营任务', link: pathByteDanceDouYinClientTokenClient + '/content/activity/client.md' },
                    { text: '搜索能力', link: pathByteDanceDouYinClientTokenClient + '/search/client.md' },
                
                ]
            },
        ]
    }
]
