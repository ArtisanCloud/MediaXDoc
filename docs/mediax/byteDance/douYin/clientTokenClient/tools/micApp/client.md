# micApp
--
    import "."


## Usage

#### type DouYinToolMicAppClient

```go
type DouYinToolMicAppClient struct {
	*kernel.BaseClient
}
```


#### func  NewClient

```go
func NewClient(c *kernel.BaseClient) *DouYinToolMicAppClient
```

#### func (*DouYinToolMicAppClient) IsLegal

```go
func (c *DouYinToolMicAppClient) IsLegal(ctx context.Context, micappId string) (*schema.DouYinToolMicAppIsLegalRes, error)
```
## IsLegal 检查小程序合法性

接口文档参考：
https://developer.open-douyin.com/docs/resource/zh-CN/dop/develop/openapi/tools-ability/mini-app-interface

参数：

    ctx      - 请求上下文
    micappId - 小程序ID

返回值：

    *schema.DouYinToolMicAppIsLegalRes 包含以下字段：
      • Extra: 通用返回信息（log_id、now、error_code 等）
      • Data: 业务数据主体，包含具体的业务响应信息
        • IsLegal: 小程序是否合法
    error 调用过程中遇到的错误（如有）
