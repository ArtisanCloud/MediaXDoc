# accessTokenClient
--
    import "."


## Usage

#### type ByteDanceDouYinACClient

```go
type ByteDanceDouYinACClient struct {
	ByteDanceClient    *core2.ByteDanceClient        // 字节跳动基础客户端
	DouYinConfig       *config.ByteDanceDouYinConfig // 抖音配置
	AccessTokenHandler *core2.ByteDanceTokenHandler  // 访问Token处理器
}
```

ByteDanceDouYinACClient 抖音访问Token客户端 提供抖音开放平台的各种功能接口，使用访问Token进行认证
文档：https://developer.open-douyin.com/docs/resource/zh-CN/dop/overview/usage-guide

#### func  NewByteDanceDouYinACClient

```go
func NewByteDanceDouYinACClient(cfg *config.ByteDanceDouYinConfig, logger *logger.Logger, cache cache.ICache) (*ByteDanceDouYinACClient, error)
```
NewByteDanceDouYinACClient 创建新的抖音访问Token客户端实例 cfg: 抖音配置 logger: 日志记录器 cache:
缓存接口

#### func (*ByteDanceDouYinACClient) GetConnectionDataClient

```go
func (c *ByteDanceDouYinACClient) GetConnectionDataClient() *data.DouYinConnectionDataClient
```
GetConnectionDataClient 获取抖音数据连接管理客户端

#### func (*ByteDanceDouYinACClient) GetConnectionFanClient

```go
func (c *ByteDanceDouYinACClient) GetConnectionFanClient() *fan.DouYinConnectionFanClient
```
GetConnectionFanClient 获取抖音粉丝连接管理客户端

#### func (*ByteDanceDouYinACClient) GetConnectionFanProfileClient

```go
func (c *ByteDanceDouYinACClient) GetConnectionFanProfileClient() *fanProfile.DouYinConnectionFanProfileClient
```
GetConnectionFanProfileClient 获取抖音粉丝资料管理客户端

#### func (*ByteDanceDouYinACClient) GetContentActivityClient

```go
func (c *ByteDanceDouYinACClient) GetContentActivityClient() *activity.DouYinContentActivityClient
```
GetMarketServiceClient 获取抖音市场服务管理客户端

#### func (*ByteDanceDouYinACClient) GetContentTaskClient

```go
func (c *ByteDanceDouYinACClient) GetContentTaskClient() *task.DouYinContentTaskClient
```
GetContentTaskClient 获取抖音内容管理-任务管理客户端

#### func (*ByteDanceDouYinACClient) GetContentVideoClient

```go
func (c *ByteDanceDouYinACClient) GetContentVideoClient() *video.DouYinContentVideoClient
```
GetContentVideoClient 获取抖音内容管理-视频管理客户端

#### func (*ByteDanceDouYinACClient) GetIMGroupClient

```go
func (c *ByteDanceDouYinACClient) GetIMGroupClient() *group.DouYinIMGroupClient
```
GetIMGroupClient 获取抖音IM群组管理客户端

#### func (*ByteDanceDouYinACClient) GetIMMessageClient

```go
func (c *ByteDanceDouYinACClient) GetIMMessageClient() *message.DouYinIMMessageClient
```
GetIMMessageClient 获取抖音IM消息管理客户端

#### func (*ByteDanceDouYinACClient) GetIMToolAppletTemplateClient

```go
func (c *ByteDanceDouYinACClient) GetIMToolAppletTemplateClient() *appletTemplate.DouYinIMToolAppletTemplateClient
```
GetIMToolAppletTemplateClient 获取抖音IM小程序模板工具客户端

#### func (*ByteDanceDouYinACClient) GetIMToolRetainCardClient

```go
func (c *ByteDanceDouYinACClient) GetIMToolRetainCardClient() *retainCard.DouYinIMToolRetainCardClient
```
GetIMToolRetainCardClient 获取抖音IM留存卡片工具客户端

#### func (*ByteDanceDouYinACClient) GetMarketServiceClient

```go
func (c *ByteDanceDouYinACClient) GetMarketServiceClient() *service.DouYinMarketServiceClient
```
GetContentActivityClient 获取抖音内容管理-活动管理客户端

#### func (*ByteDanceDouYinACClient) GetOAuthClient

```go
func (c *ByteDanceDouYinACClient) GetOAuthClient() *oauth.DouYinOAuthClient
```
GetOAuthClient 获取抖音OAuth认证客户端

#### func (*ByteDanceDouYinACClient) GetSearchClient

```go
func (c *ByteDanceDouYinACClient) GetSearchClient() *search.DouYinSearchClient
```
GetSearchClient 获取抖音搜索管理客户端

#### func (*ByteDanceDouYinACClient) GetTicketClient

```go
func (c *ByteDanceDouYinACClient) GetTicketClient() *ticket.DouYinTicketClient
```
GetTicketClient 获取抖音票据管理客户端

#### func (*ByteDanceDouYinACClient) OverrideGetQuery

```go
func (c *ByteDanceDouYinACClient) OverrideGetQuery()
```
OverrideGetQuery 重写获取查询参数的方法 用于自定义获取访问Token时的查询参数和请求头
