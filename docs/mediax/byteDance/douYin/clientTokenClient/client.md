# clientTokenClient
--
    import "."


## Usage

#### type ByteDanceDouYinCTClient

```go
type ByteDanceDouYinCTClient struct {
	ByteDanceClient    *core.ByteDanceClient
	DouYinConfig       *config.ByteDanceDouYinConfig
	ClientTokenHandler *core.ByteDanceTokenHandler
}
```

https://developer.open-douyin.com/docs/resource/zh-CN/dop/overview/usage-guide

#### func  NewByteDanceDouYinCTClient

```go
func NewByteDanceDouYinCTClient(cfg *config.ByteDanceDouYinConfig, logger *logger.Logger, cache cache.ICache) (*ByteDanceDouYinCTClient, error)
```

#### func (*ByteDanceDouYinCTClient) GetContentActivityClient

```go
func (c *ByteDanceDouYinCTClient) GetContentActivityClient() *activity.DouYinContentActivityClient
```

#### func (*ByteDanceDouYinCTClient) GetContentSchemasClient

```go
func (c *ByteDanceDouYinCTClient) GetContentSchemasClient() *schemas.DouYinContentSchemasClient
```

#### func (*ByteDanceDouYinCTClient) GetContentTaskClient

```go
func (c *ByteDanceDouYinCTClient) GetContentTaskClient() *task.DouYinContentTaskClient
```

#### func (*ByteDanceDouYinCTClient) GetContentVideoClient

```go
func (c *ByteDanceDouYinCTClient) GetContentVideoClient() *video.DouYinContentVideoClient
```

#### func (*ByteDanceDouYinCTClient) GetSearchClient

```go
func (c *ByteDanceDouYinCTClient) GetSearchClient() *search.DouYinSearchClient
```
