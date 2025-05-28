# blogUserInfos
--
    import "."


## Usage

#### type BloggerBlogUserInfosClient

```go
type BloggerBlogUserInfosClient struct {
	*kernel.BaseClient
}
```

BloggerBlogUserInfosClient 博客用户信息客户端

#### func  NewClient

```go
func NewClient(c *kernel.BaseClient) *BloggerBlogUserInfosClient
```
NewClient 初始化博客用户信息客户端

#### func (*BloggerBlogUserInfosClient) Get

```go
func (c *BloggerBlogUserInfosClient) Get(ctx context.Context, blogId string, userId string) (*schema.BloggerBlogUserInfosGetRes, error)
```
## Get - 通过blogId和userId获取博客和用户信息对

接口文档参考：
https://developers.google.com/blogger/docs/3.0/reference/blogUserInfos/get?hl=zh-cn

参数：

    ctx    - 请求上下文
    blogId - 要获取的博客的ID（必填）
    userId - 要提取其博客的用户的ID（必填，可以是'self'或用户的个人资料ID）

返回值：

    *schema.BloggerBlogUserInfosGetRes 包含以下字段：
      • Kind: 资源类型，固定为"blogger#blogUserInfo"
      • Blog: 博客信息
      • BlogUserInfo: 博客用户详细信息
    error 调用过程中遇到的错误（如有）

授权范围：

    需要以下任一授权范围：
    - https://www.googleapis.com/auth/blogger
    - https://www.googleapis.com/auth/blogger.readonly
