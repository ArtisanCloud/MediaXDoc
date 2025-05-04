# accessTokenClient
--
    import "."


## Usage

#### type ByteDanceDouYinACClient

```go
type ByteDanceDouYinACClient struct {
	ByteDanceClient    *core2.ByteDanceClient
	DouYinConfig       *config.ByteDanceDouYinConfig
	AccessTokenHandler *core2.ByteDanceTokenHandler
}
```

https://developer.open-douyin.com/docs/resource/zh-CN/dop/overview/usage-guide

#### func  NewByteDanceDouYinACClient

```go
func NewByteDanceDouYinACClient(cfg *config.ByteDanceDouYinConfig, logger *logger.Logger, cache cache.ICache) (*ByteDanceDouYinACClient, error)
```

#### func (*ByteDanceDouYinACClient) GetConnectionDataClient

```go
func (c *ByteDanceDouYinACClient) GetConnectionDataClient() *data.DouYinConnectionDataClient
```

#### func (*ByteDanceDouYinACClient) GetConnectionFanClient

```go
func (c *ByteDanceDouYinACClient) GetConnectionFanClient() *fan.DouYinConnectionFanClient
```

#### func (*ByteDanceDouYinACClient) GetConnectionFanProfileClient

```go
func (c *ByteDanceDouYinACClient) GetConnectionFanProfileClient() *fanProfile.DouYinConnectionFanProfileClient
```

#### func (*ByteDanceDouYinACClient) GetContentActivityClient

```go
func (c *ByteDanceDouYinACClient) GetContentActivityClient() *activity.DouYinContentActivityClient
```

#### func (*ByteDanceDouYinACClient) GetContentTaskClient

```go
func (c *ByteDanceDouYinACClient) GetContentTaskClient() *task.DouYinContentTaskClient
```

#### func (*ByteDanceDouYinACClient) GetContentVideoClient

```go
func (c *ByteDanceDouYinACClient) GetContentVideoClient() *video.DouYinContentVideoClient
```

#### func (*ByteDanceDouYinACClient) GetIMGroupClient

```go
func (c *ByteDanceDouYinACClient) GetIMGroupClient() *group.DouYinIMGroupClient
```

#### func (*ByteDanceDouYinACClient) GetIMMessageClient

```go
func (c *ByteDanceDouYinACClient) GetIMMessageClient() *message.DouYinIMMessageClient
```

#### func (*ByteDanceDouYinACClient) GetIMToolAppletTemplateClient

```go
func (c *ByteDanceDouYinACClient) GetIMToolAppletTemplateClient() *appletTemplate.DouYinIMToolAppletTemplateClient
```

#### func (*ByteDanceDouYinACClient) GetIMToolRetainCardClient

```go
func (c *ByteDanceDouYinACClient) GetIMToolRetainCardClient() *retainCard.DouYinIMToolRetainCardClient
```

#### func (*ByteDanceDouYinACClient) GetMarketServiceClient

```go
func (c *ByteDanceDouYinACClient) GetMarketServiceClient() *service.DouYinMarketServiceClient
```

#### func (*ByteDanceDouYinACClient) GetOAuthClient

```go
func (c *ByteDanceDouYinACClient) GetOAuthClient() *oauth.DouYinOAuthClient
```

#### func (*ByteDanceDouYinACClient) GetSearchClient

```go
func (c *ByteDanceDouYinACClient) GetSearchClient() *search.DouYinSearchClient
```

#### func (*ByteDanceDouYinACClient) GetTicketClient

```go
func (c *ByteDanceDouYinACClient) GetTicketClient() *ticket.DouYinTicketClient
```

#### func (*ByteDanceDouYinACClient) OverrideGetQuery

```go
func (c *ByteDanceDouYinACClient) OverrideGetQuery()
```
