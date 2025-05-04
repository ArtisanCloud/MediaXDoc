export const pathByte = '/docs/mediax/byteDance'
export const pathByteDanceDouYin = pathByte + '/douYin'
export const pathByteDanceCore = pathByteDanceDouYin + '/core'
export const pathByteDanceDouYinAccessTokenClient = pathByteDanceDouYin + '/accessTokenClient'
export const pathByteDanceDouYinClientTokenClient = pathByteDanceDouYin + '/clientTokenClient'

export const menusByteDance = [
    {
        text: "抖音", link: pathByteDanceDouYin + '/index.md',
        collapsed: true,
        items: [
            {
                text: 'AccessToken模式', link: pathByteDanceDouYinAccessTokenClient + '/index.md',
                collapsed: true,
                items: [
                    {
                        text: '内容',
                        items: [
                            { text: '视频', link: pathByteDanceDouYinAccessTokenClient + '/content/video/client.md' },
                            { text: '任务', link: pathByteDanceDouYinAccessTokenClient + '/content/task/client.md' },
                        ]
                    },
                    {
                        text: '关系能力',
                        items: [
                            { text: '用户数据', link: pathByteDanceDouYinAccessTokenClient + '/connection/data/client.md' },
                            { text: '粉丝判断', link: pathByteDanceDouYinAccessTokenClient + '/connection/fan/client.md' },
                            { text: '粉丝画像数据', link: pathByteDanceDouYinAccessTokenClient + '/connection/fanProfile/client.md' },
                        ]
                    },
                    {
                        text: '私信群聊',
                        items: [
                            { text: '私信管理', link: pathByteDanceDouYinAccessTokenClient + '/im/message/client.md' },
                            { text: '群聊管理', link: pathByteDanceDouYinAccessTokenClient + '/im/group/client.md' },
                            { text: '经营工具', link: pathByteDanceDouYinAccessTokenClient + '/im/tool/client.md', },
                            { text: '--- 留资卡片', link: pathByteDanceDouYinAccessTokenClient + '/im/tool/retainCard/client.md' },
                            { text: '--- 小程序引导卡片', link: pathByteDanceDouYinAccessTokenClient + '/im/tool/appletTemplate/client.md' },
                        ]
                    },
                    {
                        text: '工具能力',
                        items: [
                            { text: '素材管理', link: pathByteDanceDouYinAccessTokenClient + '/tools/media/client.md' },
                        ]
                    }

                ]
            },
            {
                text: 'ClientToken模式', link: pathByteDanceDouYinClientTokenClient + '/index.md',
                collapsed: true,
                items: [
                    {
                        text: '内容',
                        items: [
                            { text: '视频', link: pathByteDanceDouYinClientTokenClient + '/content/video/client.md' },
                            { text: '任务', link: pathByteDanceDouYinClientTokenClient + '/content/task/client.md' },
                            { text: '场景跳转', link: pathByteDanceDouYinClientTokenClient + '/content/schemas/client.md' },
                            { text: '经营任务', link: pathByteDanceDouYinClientTokenClient + '/content/activity/client.md' },
                        ]
                    },
                    { text: '搜索能力', link: pathByteDanceDouYinClientTokenClient + '/search/client.md' },
                    {
                        text: '工具能力',
                        items: [
                            { text: '小程序接口能力', link: pathByteDanceDouYinClientTokenClient + '/tools/micApp/client.md' },
                            { text: '沙盒管理', link: pathByteDanceDouYinClientTokenClient + '/tools/sandbox/client.md' },
                        ]
                    }

                ]
            },
            {
                text: '事件消息定义', link: pathByteDanceCore + '/event/schema.md',
            }
        ]
    }
]
