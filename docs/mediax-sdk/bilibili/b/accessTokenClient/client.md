# accessTokenClient
--
    import "."


## Usage

#### type BiliBiliACClient

```go
type BiliBiliACClient struct {
	// BiliBiliClient B站基础客户端，提供核心API调用功能
	BiliBiliClient *core.BiliBiliClient

	// BiliBiliConfig BiliBili相关配置，用于跨平台功能集成
	BiliBiliConfig *config.BiliBiliConfig

	// AccessTokenHandler 访问令牌处理器，负责令牌的获取和刷新
	AccessTokenHandler *core.BiliBiliAccessTokenHandler
}
```

BiliBiliACClient 是B站访问令牌客户端 用于管理与B站API交互所需的访问令牌和相关配置 示例用法：

    cfg := &config.BiliBiliConfig{...}
    client, err := NewBiliBiliACClient(cfg, logger, cache)

#### func  NewBiliBiliACClient

```go
func NewBiliBiliACClient(cfg *config.BiliBiliConfig, logger *logger.Logger, cache cache.ICache) (*BiliBiliACClient, error)
```

#### func (*BiliBiliACClient) GetArticleClient

```go
func (client *BiliBiliACClient) GetArticleClient() *article.BiliBiliArticleClient
```
GetArticleClient 获取文章客户端

#### func (*BiliBiliACClient) GetDataClient

```go
func (client *BiliBiliACClient) GetDataClient() *data.BiliBiliDataClient
```
GetDataClient 获取数据文章客户端

#### func (*BiliBiliACClient) GetLiveClient

```go
func (client *BiliBiliACClient) GetLiveClient() *live.BiliBiliLiveClient
```
GetLiveClient 获取直播客户端

#### func (*BiliBiliACClient) GetLiveThirdPartyClient

```go
func (client *BiliBiliACClient) GetLiveThirdPartyClient() *thirdParty.BiliBiliLiveThirdPartyClient
```
GetLiveThirdPartyClient 获取直播第三方客户端

#### func (*BiliBiliACClient) GetLiveWSClient

```go
func (client *BiliBiliACClient) GetLiveWSClient() *ws.BiliBiliLiveWSClient
```
GetLiveWSClient 获取直播WS客户端

#### func (*BiliBiliACClient) GetUserClient

```go
func (client *BiliBiliACClient) GetUserClient() *user.BiliBiliUserClient
```
GetUserClient 获取用户客户端

#### func (*BiliBiliACClient) GetVideoClient

```go
func (client *BiliBiliACClient) GetVideoClient() *video.BiliBiliVideoClient
```
GetVideoClient 获取视频客户端
