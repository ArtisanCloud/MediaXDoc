# playlistItems
--
    import "."


## Usage

#### type YoutubePlaylistItemsClient

```go
type YoutubePlaylistItemsClient struct {
	*kernel.BaseClient
}
```

YoutubePlaylistItemsClient 播放列表项客户端

#### func  NewClient

```go
func NewClient(c *kernel.BaseClient) *YoutubePlaylistItemsClient
```
NewClient 创建一个新的 YoutubePlaylistItemsClient 实例

#### func (*YoutubePlaylistItemsClient) Delete

```go
func (c *YoutubePlaylistItemsClient) Delete(ctx context.Context, data *schema.YouTubePlaylistItemsDeleteReq) (*schema.YouTubePlaylistItemsDeleteRes, error)
```
## Delete 删除播放列表项

接口文档参考：
https://developers.google.cn/youtube/v3/docs/playlistItems/delete?hl=zh-cn

参数：

    ctx  - 请求上下文
    data - 请求参数，包含以下字段：
      • id: 播放列表项ID（必填）
      • onBehalfOfContentOwner: 内容所有者（可选，仅供 YouTube 内容合作伙伴使用）

返回值：

    *schema.YouTubePlaylistItemsDeleteRes HTTP 204 返回码
    error 调用过程中遇到的错误（如有）

#### func (*YoutubePlaylistItemsClient) Insert

```go
func (c *YoutubePlaylistItemsClient) Insert(ctx context.Context, data *schema.YouTubePlaylistItemsInsertReq) (*schema.YouTubePlaylistItemsInsertRes, error)
```
## Insert 插入播放列表项

接口文档参考：
https://developers.google.cn/youtube/v3/docs/playlistItems/insert?hl=zh-cn

参数：

    ctx  - 请求上下文
    data - 请求参数，包含以下字段：
      • part: 指定返回的资源部分（必填，如 snippet,contentDetails 等）
      • onBehalfOfContentOwner: 内容所有者（可选，仅供 YouTube 内容合作伙伴使用）
      • snippet.playlistId: 播放列表ID（必填）
      • snippet.resourceId: 资源ID（必填）
      • snippet.position: 播放列表项位置（可选）
      • contentDetails.note: 备注（可选）
      • contentDetails.startAt: 开始时间（可选）
      • contentDetails.endAt: 结束时间（可选）

返回值：

    *schema.YouTubePlaylistItemsInsertRes 包含以下字段：
      • PlaylistItem: 播放列表项信息:
    error 调用过程中遇到的错误（如有）

#### func (*YoutubePlaylistItemsClient) List

```go
func (c *YoutubePlaylistItemsClient) List(ctx context.Context, data *schema.YouTubePlaylistItemsListReq) (*schema.YouTubePlaylistItemsListRes, error)
```
## List 获取播放列表项

接口文档参考： https://developers.google.cn/youtube/v3/docs/playlistItems/list?hl=zh-cn

参数：

    ctx  - 请求上下文
    data - 请求参数，包含以下字段：
      • part: 指定返回的资源部分（必填，如 snippet,contentDetails 等）
      • id: 播放列表项ID列表（可选，以逗号分隔）
      • playlistId: 播放列表ID（可选，与 id 互斥）
      • maxResults: 返回的最大结果数（可选，默认5，最大50）
      • onBehalfOfContentOwner: 内容所有者（可选，仅供 YouTube 内容合作伙伴使用）
      • pageToken: 分页令牌（可选）
      • videoId: 视频ID（可选）

返回值：

    *schema.YouTubePlaylistItemsListRes 包含以下字段：
      • Kind: 资源类型
      • ETag: 资源的 ETag
      • NextPageToken: 下一页令牌
      • PrevPageToken: 上一页令牌
      • PageInfo: 分页信息
      • Items: 播放列表项列表
    error 调用过程中遇到的错误（如有）

#### func (*YoutubePlaylistItemsClient) Update

```go
func (c *YoutubePlaylistItemsClient) Update(ctx context.Context, data *schema.YouTubePlaylistItemsUpdateReq) (*schema.YouTubePlaylistItemsUpdateRes, error)
```
## Update 更新播放列表项

接口文档参考：
https://developers.google.cn/youtube/v3/docs/playlistItems/update?hl=zh-cn

参数：

    ctx  - 请求上下文
    data - 请求参数，包含以下字段：
      • part: 指定返回的资源部分（必填，如 snippet,contentDetails 等）
      • onBehalfOfContentOwner: 内容所有者（可选，仅供 YouTube 内容合作伙伴使用）
      • snippet.playlistId: 播放列表ID（可选）
      • snippet.resourceId: 资源ID（可选）
      • snippet.position: 播放列表项位置（可选）
      • contentDetails.note: 备注（可选）
      • contentDetails.startAt: 开始时间（可选）
      • contentDetails.endAt: 结束时间（可选）

返回值：

    *schema.YouTubePlaylistsUpdateRes 包含以下字段：
      • PlaylistItem: 播放列表项信息
    error 调用过程中遇到的错误（如有）
