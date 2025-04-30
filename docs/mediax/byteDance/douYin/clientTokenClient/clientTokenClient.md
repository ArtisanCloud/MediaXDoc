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

#### func (*ByteDanceDouYinCTClient) GetContentVideoClient

```go
func (c *ByteDanceDouYinCTClient) GetContentVideoClient() *video.DouYinContentVideoClient
```
