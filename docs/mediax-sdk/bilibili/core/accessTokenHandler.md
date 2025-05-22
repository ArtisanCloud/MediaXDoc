# core
--
    import "."


## Usage

#### type BiliBiliAccessTokenHandler

```go
type BiliBiliAccessTokenHandler struct {
	Config             *config.ClientConfig
	AccessTokenHandler *kernel.TokenHandler
}
```


#### func  NewBiliBiliAccessTokenHandler

```go
func NewBiliBiliAccessTokenHandler(cfg *config.ClientConfig, logger *logger.Logger, cache cache.ICache) (*BiliBiliAccessTokenHandler, error)
```

#### func (*BiliBiliAccessTokenHandler) OverrideGetCredentials

```go
func (acHandler *BiliBiliAccessTokenHandler) OverrideGetCredentials()
```

#### type BiliBiliClient

```go
type BiliBiliClient struct {
	*kernel.BaseClient
	ClientConfig *config.ClientConfig
}
```


#### func  NewBiliBiliClient

```go
func NewBiliBiliClient(cfg *config.ClientConfig, logger *logger.Logger, cache cache.ICache) (*BiliBiliClient, error)
```
