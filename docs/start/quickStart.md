# 快速开始

## 安装环境

请在安装好 golang 环境后，进入到你到项目目录下

```shell
> cd {your_project_location}/{project-name}/
```

## 安装 MediaX

```shell
go get -u github.com/ArtisanCloud/MediaX
```

## 初始化 MediaXClient 实例

首先需要初始化一个 MediaXClient 实例，该实例包含了各个平台的实例，每个平台的实例都有自己的配置信息。

```go
// 示例代码
import (
         "github.com/ArtisanCloud/MediaX/pkg/client"
         config2 "github.com/ArtisanCloud/MediaX/pkg/client/config"
         "github.com/ArtisanCloud/MediaX/pkg/utils"
         "github.com/ArtisanCloud/MediaXCore/pkg/cache"
         "github.com/ArtisanCloud/MediaXCore/pkg/logger/config"
         "github.com/ArtisanCloud/MediaXCore/utils/fmt"
         "github.com/ArtisanCloud/MediaX/pkg/client/wechat/officialAccount/clientTokenClient/publish/schema"
         "github.com/redis/go-redis/v9"

      )

    // 如果一开始没有安装redis，可以默认使用内存缓存
    // cache := cache.NewMemoryCache()

    // 推荐使用redis缓存
	cacheClient := redis.NewClient(&redis.Options{
		Addr: "127.0.0.1:6379",
		DB:   0,
	})
	c := cache.NewRedisCache(cacheClient)

    // 配置Media Client实例的信息
    mediaXClient := client.NewMediaX(&config2.MediaXConfig{
        &config.LogConfig{
            Level:   "debug",
            Console: true,
            File: config.FileConfig{
                Enable: true,
            },
        },
    }, c)


```

## 获取平台实例

以下是通过 MediaXClient 实例, 获取到各个平台的实例。
有两个实例，一个是公众号的实例，一个是 youtube 的实例。

公众号实例是 Client Token 模式，不需要用户授权，而 youtube 实例是 OAuth 2.0 授权码模式，需要用户授权。

## 非用户授权 - 客户端凭证模式（Client Credentials Grant）

创建一个简单的示例，

\*\* 本项目作者正在自己系统中使用，陆续会迭代版本：

发布模块里有一个添加图文草稿的接口，该接口需要传入一个 DraftAddReq 结构体，该结构体包含了图文草稿的信息。

```go

      // 比如：从MediaXClient实例中获取到微信平台中公众号的实例，该实例是Client Token模式，不需要用户授权
      wechatOAClient, err := mediaXClient.MediaXClient.NewWeChatOfficialAccountCTClient(&config2.WeChatOfficialAccountConfig{
        ClientConfig: &ClientConfig{
            BaseConfig: &BaseConfig{
               Timeout: 30,
               HttpDebug: true,
            },
            OAuthConfig: &OAuthConfig{
               ClientID: "your client/app id"
               ClientSecret: "your client/app secret"
            },
        },
      })
      if err != nil {
        panic(err)
      }

    // 调用 wechatOAClient 的方法
    ctx := context.Background()
    var reqData = &schema.DraftAddReq{}
    resData, err := oaClient.GetPublishClient().DraftAdd(ctx, reqData)
    if err != nil {
        return nil, err
    }

```

## 用户授权 - OAuth 2.0 授权码模式（Authorization Code Grant）

\*\* 本项目作者正在自己系统中使用，陆续会迭代版本：

```go
import (
   "github.com/ArtisanCloud/MediaX/pkg/client"
   config2 "github.com/ArtisanCloud/MediaX/pkg/client/config"
   "github.com/ArtisanCloud/MediaX/pkg/utils"
   "github.com/ArtisanCloud/MediaXCore/pkg/cache"
   "github.com/ArtisanCloud/MediaXCore/pkg/logger/config"
   "github.com/redis/go-redis/v9"
   "github.com/ArtisanCloud/MediaX/pkg/client/config"
   "github.com/ArtisanCloud/MediaX/pkg/client/google/youtube/accessTokenClient/video/schema"
   "github.com/ArtisanCloud/MediaXCore/utils/fmt"
   "github.com/ArtisanCloud/MediaXCore/utils/object"
)

googleYouTubeClient, err := mediaXClient.CreateGoogleYouTubeACClient(localConfig.GoogleYouTubeConfig)
if err != nil {
	panic(err)
}

// 设置AccessToken
googleYouTubeClient.GoogleClient.TokenHandler.GetCustomToken = func(key string, refresh bool) object.HashMap {
	// fmt.Dump("GetCustomToken", key, refresh)
	return object.HashMap{
		// 这个acess token需要开发这来维护，或者可以通过MediaX Studio的UI界面来维护
		"access_token": "72_ggzUdSgH99StJ2EhmuaIbHHUP9_3rDvdnQVQ9eoX5gwmNfuLpJgBUb5uPgdoh4aoVv9jYz3EKglRT73ppWqgRwzirNQM-bHaToDQ83ux1sFdCr5GK7jxYQfAESoCOEaAHAKWM",
		"expires_in":   float64(7200),
	}
}


// 调用 Youtube的VideoClient 的方法
ctx := context.Background()
video := googleYouTubeClient.GetVideoClient()
res, err := video.List(ctx, &schema.YouTubeVideoListReq{})
if err != nil {
	panic(err)
}
fmt.Dump(res)

```
