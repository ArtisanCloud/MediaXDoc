# comments
--
    import "."


## Usage

#### type BloggerCommentsClient

```go
type BloggerCommentsClient struct {
	*kernel.BaseClient
}
```


#### func  NewClient

```go
func NewClient(c *kernel.BaseClient) *BloggerCommentsClient
```

#### func (*BloggerCommentsClient) Approve

```go
func (c *BloggerCommentsClient) Approve(ctx context.Context, data *schema.BloggerCommentsApproveReq) (*schema.BloggerCommentsApproveRes, error)
```
## Approve 批准评论

功能：将指定评论标记为非垃圾评论

接口文档参考：
https://developers.google.com/blogger/docs/3.0/reference/comments/approve?hl=zh-cn

参数：

    ctx  - 请求上下文
    data - 请求参数，包含以下字段：
      • BlogId: 博客ID (必填)
      • PostId: 帖子ID (必填)
      • CommentId: 评论ID (必填)

返回值：

    *schema.BloggerCommentsApproveRes - 包含以下字段：
      • Kind: 资源类型
      • Id: 评论ID
      • Status: 评论状态
      • Author: 评论作者信息
      • Content: 评论内容
      • Published: 发布时间
      • Updated: 更新时间
    error - 调用过程中遇到的错误

授权范围要求：https://www.googleapis.com/auth/blogger

#### func (*BloggerCommentsClient) Delete

```go
func (c *BloggerCommentsClient) Delete(ctx context.Context, data *schema.BloggerCommentsDeleteReq) (*schema.BloggerCommentsDeleteReq, error)
```
## Delete 删除评论

功能：根据博客ID、帖子ID和评论ID删除指定评论

接口文档参考：
https://developers.google.com/blogger/docs/3.0/reference/comments/delete?hl=zh-cn

参数：

    ctx  - 请求上下文
    data - 请求参数，包含以下字段：
      • BlogId: 博客ID (必填)
      • PostId: 帖子ID (必填)
      • CommentId: 评论ID (必填)

返回值：

    error - 调用过程中遇到的错误

授权范围要求：https://www.googleapis.com/auth/blogger

#### func (*BloggerCommentsClient) Get

```go
func (c *BloggerCommentsClient) Get(ctx context.Context, data *schema.BloggerCommentsGetReq) (*schema.BloggerCommentsGetRes, error)
```
## Get 获取单条评论 接口文档参考：
https://developers.google.com/blogger/docs/3.0/reference/comments/get?hl=zh-cn

参数：

    ctx  - 请求上下文
    data - 请求参数，包含以下字段：
      • BlogId: 博客ID（必填）
      • PostId: 帖子ID（必填）
      • CommentId: 评论ID（必填）
      • View: 视图级别（可选："ADMIN","AUTHOR","READER"）

返回值：

    *schema.BloggerCommentsGetRes 包含以下字段：
      • Kind: 资源类型（blogger#comment）
      • Id: 评论唯一标识
      • Post: 所属帖子信息
      • Blog: 所属博客信息
      • Published: 发布时间（RFC3339格式）
      • Updated: 最后更新时间（RFC3339格式）
      • Content: 评论正文内容
      • Author: 评论作者信息
      • Status: 评论状态（live/pending/spam）
    error 调用过程中遇到的错误（如有）

#### func (*BloggerCommentsClient) List

```go
func (c *BloggerCommentsClient) List(ctx context.Context, data *schema.BloggerCommentsListReq) (*schema.BloggerCommentsListRes, error)
```
## List 获取评论列表 接口文档参考：
https://developers.google.com/blogger/docs/3.0/reference/comments/list?hl=zh-cn

参数：

    ctx  - 请求上下文
    data - 请求参数，包含以下字段：
      • BlogId: 博客ID（必填）
      • PostId: 帖子ID（必填）
      • EndDate: 截止日期（可选，RFC3339格式）
      • FetchBodies: 是否获取评论正文（可选）
      • MaxResults: 最大返回数量（可选）
      • PageToken: 分页令牌（可选）
      • StartDate: 开始日期（可选，RFC3339格式）
      • Status: 评论状态（可选："emptied","live","pending","spam"）
      • View: 视图级别（可选："ADMIN","AUTHOR","READER"）

返回值：

    *schema.BloggerCommentsListRes 包含以下字段：
      • Kind: 资源类型（blogger#commentList）
      • Items: 评论列表
      • NextPageToken: 下一页令牌
      • PrevPageToken: 上一页令牌
    error 调用过程中遇到的错误（如有）

#### func (*BloggerCommentsClient) ListByBlog

```go
func (c *BloggerCommentsClient) ListByBlog(ctx context.Context, data *schema.BloggerCommentsListByBlogReq) (*schema.BloggerCommentsListByBlogRes, error)
```
## ListByBlog 获取博客评论列表

接口文档参考：
https://developers.google.com/blogger/docs/3.0/reference/comments/listByBlog?hl=zh-cn

参数：

    ctx  - 请求上下文
    data - 请求参数，包含以下字段：
      • BlogId: 要从中提取评论的博客ID（必填）
      • EndDate: 要提取评论的最新日期（可选，RFC 3339格式）
      • FetchBodies: 是否包含评论正文内容（可选）
      • MaxResults: 返回的最大结果数（可选）
      • PageToken: 分页令牌（可选）
      • StartDate: 要提取评论的最早日期（可选，RFC 3339格式）

返回值：

    *schema.BloggerCommentsListByBlogRes 包含以下字段：
      • Kind: 资源类型，始终为"blogger#commentList"
      • NextPageToken: 用于获取下一页的分页令牌
      • PrevPageToken: 用于获取上一页的分页令牌
      • Items: 评论列表
    error 调用过程中遇到的错误（如有）

授权范围：https://www.googleapis.com/auth/blogger

#### func (*BloggerCommentsClient) MarkAsSpam

```go
func (c *BloggerCommentsClient) MarkAsSpam(ctx context.Context, data *schema.BloggerCommentsMarkAsSpamReq) (*schema.BloggerCommentsMarkAsSpamRes, error)
```

    error 调用过程中遇到的错误（如有）
授权范围：https://www.googleapis.com/auth/blogger

#### func (*BloggerCommentsClient) RemoveContent

```go
func (c *BloggerCommentsClient) RemoveContent(ctx context.Context, data *schema.BloggerCommentsRemoveContentReq) (*schema.BloggerCommentsRemoveContentRes, error)
```
## RemoveContent 移除评论内容

接口文档参考：
https://developers.google.com/blogger/docs/3.0/reference/comments/removeContent?hl=zh-cn

参数：

    ctx  - 请求上下文
    data - 请求参数，包含以下字段：
      • BlogId: 博客的ID（必填）
      • CommentId: 要从中删除内容的评论ID（必填）
      • PostId: 帖子的ID（必填）

返回值：

    *schema.BloggerCommentsRemoveContentRes 包含以下字段：
      • CommentResource: 评论资源信息
    error 调用过程中遇到的错误（如有）

授权范围：https://www.googleapis.com/auth/blogger
