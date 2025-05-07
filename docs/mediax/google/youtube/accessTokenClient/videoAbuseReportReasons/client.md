# videoAbuseReportReasons
--
    import "."


## Usage

#### type YoutubeVideoAbuseReportReasonsClient

```go
type YoutubeVideoAbuseReportReasonsClient struct {
	*kernel.BaseClient
}
```

YoutubeVideoAbuseReportReasonsClient 是 YouTube视频滥用报告原因相关 API 的客户端

#### func  NewClient

```go
func NewClient(c *kernel.BaseClient) *YoutubeVideoAbuseReportReasonsClient
```
NewClient 创建一个新的 YoutubeVideoAbuseReportReasonsClient 实例

#### func (*YoutubeVideoAbuseReportReasonsClient) List

```go
func (c *YoutubeVideoAbuseReportReasonsClient) List(ctx context.Context, data *schema.YouTubeVideoAbuseReportReasonsListReq) (*schema.YouTubeVideoAbuseReportReasonsListRes, error)
```
## List 获取视频滥用报告原因列表

接口文档参考：
https://developers.google.com/youtube/v3/docs/videoAbuseReportReasons/list?hl=zh-cn

参数：

    ctx  - 请求上下文
    data - 请求参数，包含以下字段：
      • part: 指定返回的资源部分（必填，如 id,snippet）
      • hl: 语言代码（可选，默认 en_US）

返回值：

    *schema.YouTubeVideoAbuseReportReasonsListRes 包含以下字段：
      • Kind: 资源类型
      • ETag: 资源的 ETag
      • Items: 视频滥用报告原因列表
    error 调用过程中遇到的错误（如有）
