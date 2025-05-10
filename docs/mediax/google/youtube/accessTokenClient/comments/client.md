# comments
--
    import "."


## Usage

#### type YoutubeCommentsClient

```go
type YoutubeCommentsClient struct {
	*kernel.BaseClient
}
```


#### func  NewClient

```go
func NewClient(c *kernel.BaseClient) *YoutubeCommentsClient
```

#### func (*YoutubeCommentsClient) Insert

```go
func (c *YoutubeCommentsClient) Insert(ctx context.Context, data *schema.YoutubeCommentsInsertReq) (*schema.YoutubeCommentsInsertRes, error)
```
Comments: insert
https://developers.google.cn/youtube/v3/docs/comments/insert?hl=zh-cn

#### func (*YoutubeCommentsClient) List

```go
func (c *YoutubeCommentsClient) List(ctx context.Context, data *schema.YoutubeCommentsListReq) (*schema.YoutubeCommentsListRes, error)
```
Comments: list
https://developers.google.cn/youtube/v3/docs/comments/list?hl=zh-cn

#### func (*YoutubeCommentsClient) Update

```go
func (c *YoutubeCommentsClient) Update(ctx context.Context, data *schema.YoutubeCommentsUpdateReq) (*schema.YoutubeCommentsUpdateRes, error)
```
Comments: update - 更新评论
https://developers.google.cn/youtube/v3/docs/comments/update?hl=zh-cn
