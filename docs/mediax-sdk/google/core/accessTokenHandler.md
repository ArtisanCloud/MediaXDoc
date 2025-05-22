# core
--
    import "."


## Usage

#### type GoogleAccessTokenHandler

```go
type GoogleAccessTokenHandler struct {
	Config             *config.ClientConfig
	AccessTokenHandler *kernel.TokenHandler
}
```


#### func  NewGoogleAccessTokenHandler

```go
func NewGoogleAccessTokenHandler(cfg *config.ClientConfig, logger *logger.Logger, cache cache.ICache) (*GoogleAccessTokenHandler, error)
```

#### func (*GoogleAccessTokenHandler) OverrideGetCredentials

```go
func (acHandler *GoogleAccessTokenHandler) OverrideGetCredentials()
```

#### type GoogleClient

```go
type GoogleClient struct {
	*kernel.BaseClient
	ClientConfig *config.ClientConfig
}
```


#### func  NewGoogleClient

```go
func NewGoogleClient(cfg *config.ClientConfig, logger *logger.Logger, cache cache.ICache) (*GoogleClient, error)
```
