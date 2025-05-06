# officialAccount
--
    import "."


## Usage

#### type WeChatOfficialAccountCTClient

```go
type WeChatOfficialAccountCTClient struct {
	Logger                *logger.Logger
	Cache                 cache.ICache
	WeChatClient          *core.WeChatClient
	OfficialAccountConfig *config.WeChatOfficialAccountConfig
	AccessTokenHandler    *core.WeChatAccessTokenHandler
}
```


#### func  NewWeChatOfficialAccountCTClient

```go
func NewWeChatOfficialAccountCTClient(cfg *config.WeChatOfficialAccountConfig, logger *logger.Logger, cache cache.ICache) (*WeChatOfficialAccountCTClient, error)
```

#### func (*WeChatOfficialAccountCTClient) GetCallbackIp

```go
func (c *WeChatOfficialAccountCTClient) GetCallbackIp(ctx context.Context) (*response.GetCallBackIPRes, error)
```
https://developers.weixin.qq.com/doc/offiaccount/Basic_Information/Get_the_WeChat_server_IP_address.html#2.%20%E8%8E%B7%E5%8F%96%E5%BE%AE%E4%BF%A1callback%20IP%E5%9C%B0%E5%9D%80

#### func (*WeChatOfficialAccountCTClient) GetMaterialClient

```go
func (c *WeChatOfficialAccountCTClient) GetMaterialClient() *material.OfficialAccountMaterialClient
```

#### func (*WeChatOfficialAccountCTClient) GetMediaClient

```go
func (c *WeChatOfficialAccountCTClient) GetMediaClient() *media.OfficialAccountMediaClient
```

#### func (*WeChatOfficialAccountCTClient) GetPublishClient

```go
func (c *WeChatOfficialAccountCTClient) GetPublishClient() *publish.OfficialAccountPublishClient
```
