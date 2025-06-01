# postUserInfos
--
    import "."


## Usage

#### type BloggerPostUserInfosClient

```go
type BloggerPostUserInfosClient struct {
	*kernel.BaseClient
}
```


#### func  NewClient

```go
func NewClient(c *kernel.BaseClient) *BloggerPostUserInfosClient
```

#### func (*BloggerPostUserInfosClient) Get

```go
func (c *BloggerPostUserInfosClient) Get(ctx context.Context, data *schema.BloggerPostUserInfosGetReq) (*schema.BloggerPostUserInfosGetRes, error)
```
## Get 获取帖子用户信息

参考文档：https://developers.google.com/blogger/docs/3.0/reference/postUserInfos/get

功能：

    根据用户ID、博客ID和帖子ID获取帖子用户信息

参数:

    ctx: 请求上下文
    data: 包含请求参数的 BloggerPostUserInfosGetReq 结构体
      - UserId: (必需) 用户ID（"self"或用户个人资料标识符）
      - BlogId: (必需) 博客的ID
      - PostId: (必需) 要获取的帖子的ID
      - MaxComments: (可选) 要为帖子检索的评论数量上限

返回值:

    *schema.BloggerPostUserInfosGetRes: 包含帖子用户信息的响应结构体
    error: 如果请求失败，则返回错误信息

授权范围:

    此请求需要获得以下至少一个范围的授权：
    - https://www.googleapis.com/auth/blogger
    - https://www.googleapis.com/auth/blogger.readonly

#### func (*BloggerPostUserInfosClient) List

```go
func (c *BloggerPostUserInfosClient) List(ctx context.Context, data *schema.BloggerPostUserInfosListReq) (*schema.BloggerPostUserInfosListRes, error)
```
PostUserInfos：list
https://developers.google.com/blogger/docs/3.0/reference/postUserInfos/list?hl=zh-cn
