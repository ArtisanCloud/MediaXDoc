# watermarks
--
    import "."


## Usage

#### type YoutubeWatermarksClient

```go
type YoutubeWatermarksClient struct {
	*kernel.BaseClient
}
```

YoutubeWatermarksClient 是 YouTube 视频相关 API 的客户端

#### func  NewClient

```go
func NewClient(c *kernel.BaseClient) *YoutubeWatermarksClient
```
NewClient 创建一个新的 YoutubeWatermarksClient 实例

#### func (*YoutubeWatermarksClient) Set

```go
func (c *YoutubeWatermarksClient) Set(ctx context.Context, data *schema.YouTubeWatermarksSetReq) (*schema.YouTubeWatermarksSetRes, error)
```
## Set 设置水印

接口文档参考： https://developers.google.cn/youtube/v3/docs/watermarks/set?hl=zh-cn

参数：

    ctx  - 请求上下文
    data - 请求参数，包含以下字段：
      • channelId: 频道ID（必填）
      • onBehalfOfContentOwner: 内容所有者（可选，仅供 YouTube 内容合作伙伴使用）
      • watermark: 水印数据（必填）

返回值：

    *schema.YouTubeWatermarksSetRes HTTP 204 返回码
    error 调用过程中遇到的错误（如有）

#### func (*YoutubeWatermarksClient) Unset

```go
func (c *YoutubeWatermarksClient) Unset(ctx context.Context, data *schema.YouTubeWatermarksUnsetReq) (*schema.YouTubeWatermarksUnsetRes, error)
```
## Unset 删除水印

接口文档参考： https://developers.google.cn/youtube/v3/docs/watermarks/unset?hl=zh-cn

参数：

    ctx  - 请求上下文
    data - 请求参数，包含以下字段：
      • channelId: 频道ID（必填）
      • onBehalfOfContentOwner: 内容所有者（可选，仅供 YouTube 内容合作伙伴使用）

返回值：

    *schema.YouTubeWatermarksUnsetRes HTTP 204 返回码
    error 调用过程中遇到的错误（如有）
