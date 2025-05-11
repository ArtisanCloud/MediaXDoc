# user
--
    import "."


## Usage

#### type BiliBiliUserClient

```go
type BiliBiliUserClient struct {
	*kernel.BaseClient
}
```

BiliBiliUserClient 是BiliBili用户API的客户端

#### func  NewClient

```go
func NewClient(c *kernel.BaseClient) *BiliBiliUserClient
```
NewClient 创建一个新的BiliBiliUserClient实例

#### func (*BiliBiliUserClient) AccountScopes

```go
func (c *BiliBiliUserClient) AccountScopes(ctx context.Context) (*schema.BiliBiliUserRes, error)
```
## AccountScopes 查询用户已授权权限列表

接口文档参考：
https://open.bilibili.com/doc/4/08f935c5-29f1-e646-85a3-0b11c2830558#h1-u67E5u8BE2u7528u6237u5DF2u6388u6743u6743u9650u5217u8868

参数：

    ctx - 请求上下文

返回值：

    *schema.BiliBiliUserRes 包含以下字段：
      • openid: 用户唯一标识
      • scopes: 用户已授权的权限点列表
    error 调用过程中遇到的错误（如有）
