# officialAccount
--
    import "."


## Usage

#### type WeChatOfficialAccountCTClient

```go
type WeChatOfficialAccountCTClient struct {
	Logger                *logger.Logger                      // 日志记录器
	Cache                 cache.ICache                        // 缓存接口
	WeChatClient          *core.WeChatClient                  // 微信基础客户端
	OfficialAccountConfig *config.WeChatOfficialAccountConfig // 微信公众号配置
	AccessTokenHandler    *core.WeChatAccessTokenHandler      // 访问Token处理器
}
```

WeChatOfficialAccountCTClient 微信公众号客户端Token客户端 提供微信公众号平台的各种功能接口

#### func  NewWeChatOfficialAccountCTClient

```go
func NewWeChatOfficialAccountCTClient(cfg *config.WeChatOfficialAccountConfig, logger *logger.Logger, cache cache.ICache) (*WeChatOfficialAccountCTClient, error)
```
NewWeChatOfficialAccountCTClient 创建新的微信公众号客户端Token客户端实例 cfg: 微信公众号配置 logger:
日志记录器 cache: 缓存接口

#### func (*WeChatOfficialAccountCTClient) GetBaseClient

```go
func (c *WeChatOfficialAccountCTClient) GetBaseClient() *base.OfficialAccountBaseClient
```
GetBaseClient 获取微信公众号基础功能客户端

#### func (*WeChatOfficialAccountCTClient) GetMaterialClient

```go
func (c *WeChatOfficialAccountCTClient) GetMaterialClient() *material.OfficialAccountMaterialClient
```
GetMaterialClient 获取微信公众号素材管理客户端

#### func (*WeChatOfficialAccountCTClient) GetMediaClient

```go
func (c *WeChatOfficialAccountCTClient) GetMediaClient() *media.OfficialAccountMediaClient
```
GetMediaClient 获取微信公众号媒体管理客户端

#### func (*WeChatOfficialAccountCTClient) GetPublishClient

```go
func (c *WeChatOfficialAccountCTClient) GetPublishClient() *publish.OfficialAccountPublishClient
```
GetPublishClient 获取微信公众号发布管理客户端
