# ticket
--
    import "."


## Usage

#### type DouYinToolTicketClient

```go
type DouYinToolTicketClient struct {
	*kernel.BaseClient
}
```

DouYinToolTicketClient 抖音工具类-获取抖音票据

#### func  NewClient

```go
func NewClient(c *kernel.BaseClient) *DouYinToolTicketClient
```
NewClient 创建抖音工具类-获取抖音票据

#### func (*DouYinToolTicketClient) GetJSTicket

```go
func (c *DouYinToolTicketClient) GetJSTicket(ctx context.Context) (*schema.DouYinToolTicketGetJSTicketRes, error)
```
## GetJSTicket 获取JSB票据

接口文档参考：
https://developer.open-douyin.com/docs/resource/zh-CN/dop/develop/openapi/tools-ability/jsb-management/get-jsticket

参数：

    ctx context.Context 请求上下文

返回值：

    *schema.DouYinToolTicketGetJSTicketRes 包含以下字段：
      • Extra: 通用返回信息（log_id、now、error_code 等）
      • Data: 业务数据主体，包含具体的业务响应信息
        - ExpiresIn: 凭证有效时间，单位：秒
        - Ticket: 凭证
    error 调用过程中遇到的错误（如有）

#### func (*DouYinToolTicketClient) GetOpenTicket

```go
func (c *DouYinToolTicketClient) GetOpenTicket(ctx context.Context) (*schema.DouYinToolTicketGetOpenTicketRes, error)
```
## GetOpenTicket 获取Open票据

接口文档参考：
https://developer.open-douyin.com/docs/resource/zh-CN/dop/develop/openapi/tools-ability/jsb-management/open-ticket

参数：

    ctx context.Context 请求上下文

返回值：

    *schema.DouYinToolTicketGetOpenTicketRes 包含以下字段：
      • Extra: 通用返回信息（log_id、now、error_code 等）
      • Data: 业务数据主体，包含具体的业务响应信息
        - ExpiresIn: 凭证有效时间，单位：秒
        - Ticket: 凭证
    error 调用过程中遇到的错误（如有）
