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

YoutubeVideoClient 是 YouTube 视频相关 API 的客户端

#### func  NewClient

```go
func NewClient(c *kernel.BaseClient) *YoutubeVideoClient
```
NewClient 创建一个新的 YoutubeVideoClient 实例

#### func (*YoutubeVideoClient) Delete

```go
func (c *YoutubeVideoClient) Delete(ctx context.Context, data *schema.YouTubeVideoDeleteReq) (*schema.YouTubeVideoDeleteRes, error)
```
## Update 更新视频元数据

接口文档参考： https://developers.google.com/youtube/v3/docs/videos/update

参数：

    ctx  - 请求上下文
    data - 请求参数，包含以下字段：
      • ID: 视频ID（必填）
      • onBehalfOfContentOwner: 内容所有者（可选）

返回值：

    *schema.YouTubeVideoUpdateRes HTTP 204 返回码
    error 调用过程中遇到的错误（如有）

#### func (*YoutubeVideoClient) GetRating

```go
func (c *YoutubeVideoClient) GetRating(ctx context.Context, data *schema.YouTubeVideoGetRatingReq) (*schema.YouTubeVideoGetRatingRes, error)
```
## GetRating 获取视频评分

接口文档参考： https://developers.google.com/youtube/v3/docs/videos/getRating?hl=zh-cn

参数：

    ctx  - 请求上下文
    data - 请求参数，包含以下字段：
      • id: 视频ID列表（必填，最多50个）
      • OnBehalfOfContentOwner: 内容所有者（可选）

返回值：

    *schema.YouTubeVideoGetRatingRes 包含以下字段：
      • Items: 视频评分列表，每个视频包含以下字段：
        • Kind: 资源类型
        • ETag: 资源的 ETag
        • Items: 评分信息列表
    error 调用过程中遇到的错误（如有）

#### func (*YoutubeVideoClient) Insert

```go
func (c *YoutubeVideoClient) Insert(ctx context.Context, data *schema.YouTubeVideoInsertReq) (*schema.YouTubeVideoInsertRes, error)
```
## Insert 上传视频到 YouTube

接口文档参考： https://developers.google.com/youtube/v3/docs/videos/insert

参数：

    ctx  - 请求上下文
    data - 请求参数，包含以下字段：
      • part: 指定返回的资源部分（必填，如 snippet,contentDetails 等）
      • onBehalfOfContentOwner: 内容所有者（可选）
      • onBehalfOfContentOwnerChannel: 内容所有者频道（可选）
      • notifySubscribers: 是否通知订阅者（可选）
      • autoLevels: 是否自动调整视频质量（可选）
      • stabilize: 是否稳定视频（可选）

返回值：

    *schema.YouTubeVideoInsertRes 包含以下字段：
      • Video: 视频信息
    error 调用过程中遇到的错误（如有）

#### func (*YoutubeVideoClient) List

```go
func (c *YoutubeVideoClient) List(ctx context.Context, data *schema.YouTubeVideoListReq) (*schema.YouTubeVideoListRes, error)
```
## List 获取视频列表

接口文档参考： https://developers.google.cn/youtube/v3/docs/videos/list?hl=zh-cn

参数：

    ctx  - 请求上下文
    data - 请求参数，包含以下字段：
      • part: 指定返回的资源部分（必填，如 snippet,contentDetails 等）
      • id: 视频ID列表（可选，最多50个）
      • chart: 指定要检索的图表类型（可选，如 mostPopular）
      • maxResults: 返回的最大结果数（可选，默认5，最大50）
      • pageToken: 分页令牌（可选）
      • regionCode: 区域代码（可选）
      • videoCategoryId: 视频分类ID（可选）

返回值：

    *schema.YouTubeVideoListRes 包含以下字段：
      • Kind: 资源类型
      • ETag: 资源的 ETag
      • Items: 视频列表
      • PageInfo: 分页信息
      • NextPageToken: 下一页令牌
      • PrevPageToken: 上一页令牌
    error 调用过程中遇到的错误（如有）

#### func (*YoutubeVideoClient) Rate

```go
func (c *YoutubeVideoClient) Rate(ctx context.Context, data *schema.YouTubeVideoRateReq) (*schema.YouTubeVideoRateRes, error)
```
## Rate 为视频评分

接口文档参考： https://developers.google.com/youtube/v3/docs/videos/rate?hl=zh-cn

参数：

    ctx  - 请求上下文
    data - 请求参数，包含以下字段：
      • id: 视频ID（必填）
      • rating: 评分类型（必填，如 like,dislike,none）

返回值：

    *schema.YouTubeVideoRateRes HTTP 204 返回码
    error 调用过程中遇到的错误（如有）

#### func (*YoutubeVideoClient) ReportAbuse

```go
func (c *YoutubeVideoClient) ReportAbuse(ctx context.Context, data *schema.YouTubeVideoReportAbuseReq) (*schema.YouTubeVideoReportAbuseRes, error)
```
## ReportAbuse 举报视频

接口文档参考：
https://developers.google.com/youtube/v3/docs/videos/reportAbuse?hl=zh-cn

参数：

    ctx  - 请求上下文
    data - 请求参数，包含以下字段：
      • id: 视频ID（必填）
      • reasonId: 举报原因ID（必填）
      • secondaryReasonId: 次要举报原因ID（可选）
      • comments: 举报说明（可选）
      • language: 语言代码（可选）

返回值：

    *schema.YouTubeVideoReportAbuseRes HTTP 204 返回码
    error 调用过程中遇到的错误（如有）

#### func (*YoutubeVideoClient) Update

```go
func (c *YoutubeVideoClient) Update(ctx context.Context, data *schema.YouTubeVideoUpdateReq) (*schema.YouTubeVideoUpdateRes, error)
```
## Update 更新视频元数据

接口文档参考： https://developers.google.com/youtube/v3/docs/videos/update

参数：

    ctx  - 请求上下文
    data - 请求参数，包含以下字段：
      • part: 指定返回的资源部分（必填，如 snippet,contentDetails 等）
      • onBehalfOfContentOwner: 内容所有者（可选）
      • video: 视频元数据（必填）

返回值：

    *schema.YouTubeVideoUpdateRes 包含以下字段：
      • Video: 视频信息
    error 调用过程中遇到的错误（如有）
