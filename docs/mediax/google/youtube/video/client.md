# video
--
    import "."


## Usage

#### type YoutubeVideoClient

```go
type YoutubeVideoClient struct {
	*kernel.BaseClient
}
```


#### func  NewClient

```go
func NewClient(c *kernel.BaseClient) *YoutubeVideoClient
```

#### func (*YoutubeVideoClient) Delete

```go
func (comp *YoutubeVideoClient) Delete(ctx context.Context, data *schema.YouTubeVideoDeleteReq) (*schema.YouTubeVideoDeleteRes, error)
```
Videos: delete 删除 YouTube 视频
https://developers.google.com/youtube/v3/docs/videos/delete

#### func (*YoutubeVideoClient) GetRating

```go
func (comp *YoutubeVideoClient) GetRating(ctx context.Context, data *schema.YouTubeVideoGetRatingReq) (*schema.YouTubeVideoGetRatingRes, error)
```
Videos: getRating 检索授权用户对指定视频列表的评分。
https://developers.google.com/youtube/v3/docs/videos/getRating?hl=zh-cn

#### func (*YoutubeVideoClient) Insert

```go
func (comp *YoutubeVideoClient) Insert(ctx context.Context, data *schema.YouTubeVideoInsertReq) (*schema.YouTubeVideoInsertRes, error)
```
Videos: insert 将视频上传到 YouTube，并可选择设置视频的元数据
https://developers.google.com/youtube/v3/docs/videos/insert

#### func (*YoutubeVideoClient) List

```go
func (comp *YoutubeVideoClient) List(ctx context.Context, data *schema.YouTubeVideoListReq) (*schema.YouTubeVideoListRes, error)
```
Videos: list 返回与 API 请求参数匹配的视频列表
https://developers.google.cn/youtube/v3/docs/videos/list?hl=zh-cn

#### func (*YoutubeVideoClient) Rate

```go
func (comp *YoutubeVideoClient) Rate(ctx context.Context, data *schema.YouTubeVideoRateReq) error
```
Videos:Rate 为视频添加“顶”或“踩”评分，或者删除视频的评分。
https://developers.google.com/youtube/v3/docs/videos/rate?hl=zh-cn

#### func (*YoutubeVideoClient) ReportAbuse

```go
func (comp *YoutubeVideoClient) ReportAbuse(ctx context.Context, data *schema.YouTubeVideoReportAbuseReq) error
```
Videos:reportAbuse 举报包含侮辱性内容的视频。
https://developers.google.com/youtube/v3/docs/videos/reportAbuse?hl=zh-cn

#### func (*YoutubeVideoClient) Update

```go
func (comp *YoutubeVideoClient) Update(ctx context.Context, data *schema.YouTubeVideoUpdateReq) (*schema.YouTubeVideoUpdateRes, error)
```
Videos: update 更新视频的元数据
https://developers.google.com/youtube/v3/docs/videos/update
