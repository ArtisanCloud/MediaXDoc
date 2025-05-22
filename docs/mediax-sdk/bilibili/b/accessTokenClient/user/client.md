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

#### func (*BiliBiliUserClient) GetUserInfo

```go
func (c *BiliBiliUserClient) GetUserInfo(ctx context.Context) (*schema.BiliBiliUserGetUserInfoRes, error)
```
## GetUserInfo 获取已授权用户基础公开信息

接口文档参考：
https://open.bilibili.com/doc/4/feb66f99-7d87-c206-00e7-d84164cd701c#h1-u83B7u53D6u5DF2u6388u6743u7528u6237u57FAu7840u516Cu5F00u4FE1u606F

参数：

    ctx - 请求上下文

返回值：

    *schema.BiliBiliUserGetUserInfoRes 包含以下字段：
      • face: 用户头像URL
      • name: 用户昵称
      • openid: 用户唯一标识
    error 调用过程中遇到的错误（如有）

#### func (*BiliBiliUserClient) GetUserUnionId

```go
func (c *BiliBiliUserClient) GetUserUnionId(ctx context.Context) (*schema.BiliBiliUserGetUserUnionIdRes, error)
```
## GetUserUnionId 获取已授权用户的union_id信息

接口文档参考：
https://open.bilibili.com/doc/4/22e9cc93-1559-f262-0375-bdcefe9257ee#h1--union_id-

参数：

    ctx - 请求上下文

返回值：

    *schema.BiliBiliUserGetUserUnionIdRes 包含以下字段：
      • union_id: 用户在同一个开发者下的唯一标识
    error 调用过程中遇到的错误（如有）
