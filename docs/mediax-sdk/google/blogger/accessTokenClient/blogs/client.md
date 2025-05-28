# blogs
--
    import "."


## Usage

#### type BloggerBlogsClient

```go
type BloggerBlogsClient struct {
	*kernel.BaseClient
}
```

BloggerBlogsClient 博客客户端

#### func  NewClient

```go
func NewClient(c *kernel.BaseClient) *BloggerBlogsClient
```
NewClient 初始化博客客户端

#### func (*BloggerBlogsClient) Get

```go
func (c *BloggerBlogsClient) Get(ctx context.Context, data *schema.BloggerBlogsGetReq) (*schema.BloggerBlogsGetRes, error)
```
## Get - 获取博客信息

接口文档参考：
https://developers.google.com/blogger/docs/3.0/reference/blogs/get?hl=zh-cn

参数：

    ctx  - 请求上下文
    data - 请求参数，包含以下字段：
      • blogId: 要获取的博客的ID（必填）
      • maxPosts: 随博客一起检索的博文数量上限（可选）

返回值：

    *schema.BloggerBlogsGetRes 包含以下字段：
      • Kind: 资源类型，固定为"blogger#blog"
      • ID: 博客ID
      • Name: 博客名称（可包含HTML）
      • Description: 博客描述（可包含HTML）
      • Published: 博客发布时间（RFC 3339格式）
      • Updated: 博客更新时间（RFC 3339格式）
      • URL: 博客URL
      • Posts: 博文列表（仅当指定maxPosts时返回）
      • Pages: 页面列表
      • Locale: 博客语言设置
    error 调用过程中遇到的错误（如有）

#### func (*BloggerBlogsClient) GetByUrl

```go
func (c *BloggerBlogsClient) GetByUrl(ctx context.Context, data *schema.BloggerBlogsGetByUrlReq) (*schema.BloggerBlogsGetRes, error)
```
## GetByUrl - 根据网址获取博客信息

接口文档参考：
https://developers.google.com/blogger/docs/3.0/reference/blogs/getByUrl?hl=zh-cn

参数：

    ctx  - 请求上下文
    data - 请求参数，包含以下字段：
      • url: 要检索的博客的网址（必填）

返回值：

    *schema.BloggerBlogsGetRes 包含以下字段：
      • Kind: 资源类型，固定为"blogger#blog"
      • ID: 博客ID
      • Name: 博客名称（可包含HTML）
      • Description: 博客描述（可包含HTML）
      • Published: 博客发布时间（RFC 3339格式）
      • Updated: 博客更新时间（RFC 3339格式）
      • URL: 博客URL
      • Posts: 博文列表（仅当指定maxPosts时返回）
      • Pages: 页面列表
      • Locale: 博客语言设置
    error 调用过程中遇到的错误（如有）

说明：

    如果博客为私人博客，则需要进行授权。
    如果博客是公开的，则无需授权即可调用此方法。

#### func (*BloggerBlogsClient) ListByUser

```go
func (c *BloggerBlogsClient) ListByUser(ctx context.Context, data *schema.BloggerBlogsListByUserReq) (*schema.BloggerBlogsListByUserRes, error)
```
## ListByUser - 检索博客列表

接口文档参考：
https://developers.google.com/blogger/docs/3.0/reference/blogs/listByUser?hl=zh-cn

参数：

    ctx  - 请求上下文
    data - 请求参数，包含以下字段：
      • userId: 要提取其博客的用户的ID（必填，可以是'self'或用户的个人资料ID）
      • fetchUserInfo: 是否在响应中包含每位用户信息（可选）
      • view: 详细信息级别（可选，"ADMIN"=管理员级别、"AUTHOR"=作者级别、"READER"=读者级别）

返回值：

    *schema.BloggerBlogsListByUserRes 包含以下字段：
      • Kind: 资源类型，固定为"blogger#blogList"
      • Items: 博客列表
      • BlogUserInfos: 博客用户信息列表（仅当fetchUserInfo=true时返回）
    error 调用过程中遇到的错误（如有）

授权范围：

    需要以下任一授权范围：
    - https://www.googleapis.com/auth/blogger
    - https://www.googleapis.com/auth/blogger.readonly
