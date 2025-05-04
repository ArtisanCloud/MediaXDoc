# sandbox
--
    import "."


## Usage

#### type DouYinToolSandboxClient

```go
type DouYinToolSandboxClient struct {
	*kernel.BaseClient
}
```


#### func  NewClient

```go
func NewClient(c *kernel.BaseClient) *DouYinToolSandboxClient
```

#### func (*DouYinToolSandboxClient) MockWebhookEvent

```go
func (c *DouYinToolSandboxClient) MockWebhookEvent(ctx context.Context, eventType string) (*schema.DouYinToolSandboxMockWebhookEventRes, error)
```
## MockWebhookEvent 模拟webhook事件

接口文档参考：
https://developer.open-douyin.com/docs/resource/zh-CN/dop/develop/openapi/tools-ability/sandbox-management/mock-webhook-event

参数：

    ctx       - 请求上下文
    eventType - 事件类型

返回值：

    *schema.DouYinToolSandboxMockWebhookEventRes 包含以下字段：
      • Extra: 通用返回信息（log_id、now、error_code 等）
      • Data: 业务数据主体，包含具体的业务响应信息
    error 调用过程中遇到的错误（如有）
