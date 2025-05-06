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

#### func (*WeChatOfficialAccountCTClient) GetBaseClient

```go
func (c *WeChatOfficialAccountCTClient) GetBaseClient() *base.OfficialAccountBaseClient
```

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
