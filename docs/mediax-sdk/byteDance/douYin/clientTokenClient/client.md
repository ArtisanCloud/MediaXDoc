# clientTokenClient
--
    import "."


## Usage

#### type ByteDanceDouYinCTClient

```go
type ByteDanceDouYinCTClient struct {
	ByteDanceClient    *core.ByteDanceClient         // 字节跳动基础客户端
	DouYinConfig       *config.ByteDanceDouYinConfig // 抖音配置
	ClientTokenHandler *core.ByteDanceTokenHandler   // 客户端Token处理器
}
```

ByteDanceDouYinCTClient 抖音客户端Token客户端 提供抖音开放平台的各种功能接口
文档：https://developer.open-douyin.com/docs/resource/zh-CN/dop/overview/usage-guide

#### func  NewByteDanceDouYinCTClient

```go
func NewByteDanceDouYinCTClient(cfg *config.ByteDanceDouYinConfig, logger *logger.Logger, cache cache.ICache) (*ByteDanceDouYinCTClient, error)
```
NewByteDanceDouYinCTClient 创建新的抖音客户端Token客户端实例 cfg: 抖音配置 logger: 日志记录器 cache:
缓存接口

#### func (*ByteDanceDouYinCTClient) GetContentActivityClient

```go
func (c *ByteDanceDouYinCTClient) GetContentActivityClient() *activity.DouYinContentActivityClient
```
GetContentActivityClient 获取抖音内容管理-活动管理客户端

#### func (*ByteDanceDouYinCTClient) GetContentSchemaClient

```go
func (c *ByteDanceDouYinCTClient) GetContentSchemaClient() *schemas.DouYinContentSchemasClient
```
GetContentSchemaClient 获取抖音内容管理-模板管理客户端（与GetContentSchemasClient功能相同）

#### func (*ByteDanceDouYinCTClient) GetContentSchemasClient

```go
func (c *ByteDanceDouYinCTClient) GetContentSchemasClient() *schemas.DouYinContentSchemasClient
```
GetContentSchemasClient 获取抖音内容管理-模板管理客户端

#### func (*ByteDanceDouYinCTClient) GetContentTaskClient

```go
func (c *ByteDanceDouYinCTClient) GetContentTaskClient() *task.DouYinContentTaskClient
```
GetContentTaskClient 获取抖音内容管理-任务管理客户端

#### func (*ByteDanceDouYinCTClient) GetContentVideoClient

```go
func (c *ByteDanceDouYinCTClient) GetContentVideoClient() *video.DouYinContentVideoClient
```
GetContentVideoClient 获取抖音内容管理-视频管理客户端

#### func (*ByteDanceDouYinCTClient) GetMicAppClient

```go
func (c *ByteDanceDouYinCTClient) GetMicAppClient() *micApp.DouYinToolMicAppClient
```
GetMicAppClient 获取抖音小程序工具客户端

#### func (*ByteDanceDouYinCTClient) GetSandboxClient

```go
func (c *ByteDanceDouYinCTClient) GetSandboxClient() *sandbox.DouYinToolSandboxClient
```
GetSandboxClient 获取抖音沙箱工具客户端

#### func (*ByteDanceDouYinCTClient) GetSearchClient

```go
func (c *ByteDanceDouYinCTClient) GetSearchClient() *search.DouYinSearchClient
```
GetSearchClient 获取抖音搜索管理客户端

#### func (*ByteDanceDouYinCTClient) GetTicketClient

```go
func (c *ByteDanceDouYinCTClient) GetTicketClient() *ticket.DouYinToolTicketClient
```
GetTicketClient 获取抖音票据工具客户端
