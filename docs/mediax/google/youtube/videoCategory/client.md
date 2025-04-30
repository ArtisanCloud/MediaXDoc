# videoCategory
--
    import "."


## Usage

#### type YoutubeVideoCategoryClient

```go
type YoutubeVideoCategoryClient struct {
	*kernel.BaseClient
}
```


#### func  NewClient

```go
func NewClient(c *kernel.BaseClient) *YoutubeVideoCategoryClient
```

#### func (*YoutubeVideoCategoryClient) List

```go
func (comp *YoutubeVideoCategoryClient) List(ctx context.Context, data *schema.YouTubeVideoCategoriesReq) (*schema.YouTubeVideoCategoriesRes, error)
```
VideoCategories:list 返回可与 YouTube 视频相关联的类别列表。
https://developers.google.com/youtube/v3/docs/videoCategories/list?hl=zh-cn
