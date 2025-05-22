# thumbnails
--
    import "."


## Usage

#### type YoutubeThumbnailsClient

```go
type YoutubeThumbnailsClient struct {
	*kernel.BaseClient
}
```


#### func  NewClient

```go
func NewClient(c *kernel.BaseClient) *YoutubeThumbnailsClient
```

#### func (*YoutubeThumbnailsClient) Set

```go
func (c *YoutubeThumbnailsClient) Set(ctx context.Context, data *schema.YouTubeThumbnailsSetReq) (*schema.YouTubeThumbnailsSetRes, error)
```
## Set 设置视频缩略图

接口文档参考：
https://developers.google.cn/youtube/v3/docs/thumbnails/set?hl=zh-cn#parameters

参数：

    ctx  - 请求上下文
    data - 请求参数，包含以下字段：
      • VideoId: 视频ID（必填）
      • OnBehalfOfContentOwner: 内容所有者（可选，仅供 YouTube 内容合作伙伴使用）
      • Files: 缩略图文件（和Form二选一）
      • Form: 表单数据（和Files二选一）

返回值：

    *schema.YouTubeThumbnailsSetRes 包含以下字段：
      • Default: 默认缩略图
      • Medium: 中等缩略图
      • High: 高缩略图
      • Standard: 标准缩略图
      • MaxRes: 最大分辨率缩略图
    error 调用过程中遇到的错误（如有）
