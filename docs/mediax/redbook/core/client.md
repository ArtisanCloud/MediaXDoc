# core
--
    import "."


## Usage

#### type RedBookAccessTokenHandler

```go
type RedBookAccessTokenHandler struct {
	Config             *config.ClientConfig
	AccessTokenHandler *kernel.TokenHandler
}
```


#### func  NewRedBookAccessTokenHandler

```go
func NewRedBookAccessTokenHandler(cfg *config.ClientConfig, logger *logger.Logger, cache cache.ICache) (*RedBookAccessTokenHandler, error)
```

#### func (*RedBookAccessTokenHandler) OverrideGetCredentials

```go
func (acHandler *RedBookAccessTokenHandler) OverrideGetCredentials()
```

#### type RedBookClient

```go
type RedBookClient struct {
	*kernel.BaseClient
	ClientConfig *config.ClientConfig
}
```

RedBookClient 小红书客户端结构体

#### func  NewRedBookClient

```go
func NewRedBookClient(cfg *config.ClientConfig, logger *logger.Logger, cache cache.ICache) (*RedBookClient, error)
```
NewRedBookClient 创建一个新的小红书客户端实例
