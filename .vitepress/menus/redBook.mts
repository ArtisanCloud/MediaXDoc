export const pathRedBook = '/docs/mediax/redBook'
export const pathRedBookJuGuang = pathRedBook + '/juGuang'
export const pathRedBookCore = pathRedBookJuGuang + '/core'
export const pathRedBookJuGuangAccessTokenClient = pathRedBookJuGuang + '/accessTokenClient'
export const pathRedBookJuGuangClientTokenClient = pathRedBookJuGuang + '/clientTokenClient'

export const menusRedBook = [
    {
        text: "聚光", link: pathRedBookJuGuang + '/index.md',
        collapsed: true,
        items: [
            {
                text: 'AccessToken模式', link: pathRedBookJuGuangAccessTokenClient + '/client.md',
                collapsed: true,
                items: [
                    {text: '账户服务', link: pathRedBookJuGuangAccessTokenClient + '/account/client.md',},
                    {text: '广告投放', link: pathRedBookJuGuangAccessTokenClient + '/campaign/client.md',},
                ]
            }
        ]
    }
]