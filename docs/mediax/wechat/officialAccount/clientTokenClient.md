# officialAccount
--
    import "command-line-arguments"


## Usage

#### type WeChatOfficialAccountClient

```go
type WeChatOfficialAccountClient struct {
	Logger                *logger.Logger
	Cache                 cache.ICache
	WeChatClient          *core.WeChatClient
	OfficialAccountConfig *config.WeChatOfficialAccountConfig
	AccessTokenHandler    *core.WeChatAccessTokenHandler
}
```


#### func  NewWeChatOfficialAccountClient

```go
func NewWeChatOfficialAccountClient(cfg *config.WeChatOfficialAccountConfig, logger *logger.Logger, cache cache.ICache) (*WeChatOfficialAccountClient, error)
```

#### func (*WeChatOfficialAccountClient) GetCallbackIp

```go
func (c *WeChatOfficialAccountClient) GetCallbackIp(ctx context.Context) (*response.GetCallBackIPRes, error)
```
https://developers.weixin.qq.com/doc/offiaccount/Basic_Information/Get_the_WeChat_server_IP_address.html#2.%20%E8%8E%B7%E5%8F%96%E5%BE%AE%E4%BF%A1callback%20IP%E5%9C%B0%E5%9D%80

#### func (*WeChatOfficialAccountClient) GetMaterialClient

```go
func (c *WeChatOfficialAccountClient) GetMaterialClient() *material.OfficialAccountMaterialClient
```

#### func (*WeChatOfficialAccountClient) GetMediaClient

```go
func (c *WeChatOfficialAccountClient) GetMediaClient() *media.OfficialAccountMediaClient
```

#### func (*WeChatOfficialAccountClient) GetPublishClient

```go
func (c *WeChatOfficialAccountClient) GetPublishClient() *publish.OfficialAccountPublishClient
```
