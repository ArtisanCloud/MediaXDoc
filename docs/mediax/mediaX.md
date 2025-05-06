# client
--
    import "."


## Usage

#### type MediaX

```go
type MediaX struct {
	Logger *logger.Logger // 全局 Logger
	Cache  cache.ICache   // 全局 Cache
}
```


#### func  NewMediaX

```go
func NewMediaX(config *config.MediaXConfig, cache cache.ICache) *MediaX
```
NewMediaX 初始化 MediaX，Logger 和 Cache 是全局共享的

#### func (*MediaX) CreateByteDanceDouYinACClient

```go
func (m *MediaX) CreateByteDanceDouYinACClient(cfg *config.ByteDanceDouYinConfig) (*accessTokenClient.ByteDanceDouYinACClient, error)
```
CreateByteDanceDouYin 创建 DouYinClient，支持传入 DouYin 配置

#### func (*MediaX) CreateByteDanceDouYinCTClient

```go
func (m *MediaX) CreateByteDanceDouYinCTClient(cfg *config.ByteDanceDouYinConfig) (*clientTokenClient.ByteDanceDouYinCTClient, error)
```
CreateByteDanceDouYin 创建 DouYinClient，支持传入 DouYin 配置

#### func (*MediaX) CreateGoogleYouTubeACClient

```go
func (m *MediaX) CreateGoogleYouTubeACClient(cfg *config.GoogleYouTubeConfig) (*youtube.GoogleYouTubeACClient, error)
```
CreateGoogleYouTube 创建 CreateGoogleYouTube，支持传入 Google 配置

#### func (*MediaX) CreateRedBookJuGuangACClient

```go
func (m *MediaX) CreateRedBookJuGuangACClient(cfg *config.RedBookJuGuangConfig) (*juGuang.RedBookJuGuangACClient, error)
```
CreateRedBookJuGuang 创建 RedBookClient，支持传入 RedBook 配置

#### func (*MediaX) CreateWechatOfficialAccount

```go
func (m *MediaX) CreateWechatOfficialAccount(cfg *config.WeChatOfficialAccountConfig) (*officialAccount.WeChatOfficialAccountCTClient, error)
```
CreateWechatOfficialAccount 创建 WechatOfficialAccountClient，支持传入 WeChat 配置
