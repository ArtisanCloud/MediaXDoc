# core
--
    import "."


## Usage

#### type ByteDanceClient

```go
type ByteDanceClient struct {
	*kernel.BaseClient
	ClientConfig *config.ClientConfig
}
```


#### func  NewByteDanceClient

```go
func NewByteDanceClient(cfg *config.ClientConfig, logger *logger.Logger, cache cache.ICache) (*ByteDanceClient, error)
```

#### func (*ByteDanceClient) OverrideCheckTokenNeedRefresh

```go
func (client *ByteDanceClient) OverrideCheckTokenNeedRefresh()
```

#### type ByteDanceTokenHandler

```go
type ByteDanceTokenHandler struct {
	Config       *config.ClientConfig
	TokenHandler *kernel.TokenHandler
}
```


#### func  NewByteDanceTokenHandler

```go
func NewByteDanceTokenHandler(cfg *config.ClientConfig, logger *logger.Logger, cache cache.ICache) (*ByteDanceTokenHandler, error)
```

#### func (*ByteDanceTokenHandler) OverrideGetCredentials

```go
func (acHandler *ByteDanceTokenHandler) OverrideGetCredentials()
```
