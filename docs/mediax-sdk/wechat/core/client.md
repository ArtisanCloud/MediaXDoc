# core
--
    import "."


## Usage

#### type WeChatAccessTokenHandler

```go
type WeChatAccessTokenHandler struct {
	Config             *config.ClientConfig
	ClientTokenHandler *kernel.TokenHandler
}
```


#### func  NewWeChatAccessTokenHandler

```go
func NewWeChatAccessTokenHandler(cfg *config.ClientConfig, logger *logger.Logger, cache cache.ICache) (*WeChatAccessTokenHandler, error)
```

#### func (*WeChatAccessTokenHandler) OverrideGetCredentials

```go
func (acHandler *WeChatAccessTokenHandler) OverrideGetCredentials()
```

#### type WeChatClient

```go
type WeChatClient struct {
	*kernel.BaseClient
}
```


#### func  NewWeChatClient

```go
func NewWeChatClient(cfg *config.ClientConfig, logger *logger.Logger, cache cache.ICache) (*WeChatClient, error)
```

#### func (*WeChatClient) OverrideCheckTokenNeedRefresh

```go
func (client *WeChatClient) OverrideCheckTokenNeedRefresh()
```
