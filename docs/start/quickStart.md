# 快速开始

## 安装环境
请在安装好golang环境后，进入到你到项目目录下
```shell
> cd {your_project_location}/{project-name}/
```

## 安装MediaX
```shell
go get -u github.com/ArtisanCloud/MediaX
```

## 初始化MediaXClient实例
首先需要初始化一个MediaXClient实例，该实例包含了各个平台的实例，每个平台的实例都有自己的配置信息。

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

## 获取到各个平台的实例
以下是通过MediaXClient实例, 以一个微信公众号实例为例，可以获取到微信公众号的实例。
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
   
      
```

## 使用微信公众号实例
发布模块里有一个添加图文草稿的接口，该接口需要传入一个 DraftAddReq 结构体，该结构体包含了图文草稿的信息。

```go
    // 调用 wechatOAClient 的方法
    ctx := context.Background()
    var reqData = &schema.DraftAddReq{}
    resData, err := oaClient.GetPublishClient().DraftAdd(ctx, reqData)
    if err != nil {
        return nil, err
    }

```