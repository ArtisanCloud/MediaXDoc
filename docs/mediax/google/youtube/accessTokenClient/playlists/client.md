# playlists
--
    import "."


## Usage

#### type YoutubePlaylistsClient

```go
type YoutubePlaylistsClient struct {
	*kernel.BaseClient
}
```

YoutubePlaylistsClient 是 YouTube 视频列表相关 API 的客户端

#### func  NewClient

```go
func NewClient(c *kernel.BaseClient) *YoutubePlaylistsClient
```
NewClient 创建一个新的 YoutubePlaylistsClient 实例

#### func (*YoutubePlaylistsClient) Delete

```go
func (c *YoutubePlaylistsClient) Delete(ctx context.Context, data *schema.YouTubePlaylistsDeleteReq) (*schema.YouTubePlaylistsDeleteRes, error)
```
## Delete 删除播放列表

接口文档参考： https://developers.google.cn/youtube/v3/docs/playlists/delete?hl=zh-cn

参数：

    ctx  - 请求上下文
    data - 请求参数，包含以下字段：
      • id: 播放列表ID（必填）
      • onBehalfOfContentOwner: 内容所有者（可选，仅供 YouTube 内容合作伙伴使用）

返回值：

    *schema.YouTubePlaylistsDeleteRes HTTP 204 返回码
    error 调用过程中遇到的错误（如有）

#### func (*YoutubePlaylistsClient) Insert

```go
func (c *YoutubePlaylistsClient) Insert(ctx context.Context, data *schema.YouTubePlaylistsInsertReq) (*schema.YouTubePlaylistsInsertRes, error)
```
## Insert 插入播放列表

接口文档参考： https://developers.google.cn/youtube/v3/docs/playlists/insert?hl=zh-cn

参数：

    ctx  - 请求上下文
    data - 请求参数，包含以下字段：
      • part: 指定返回的资源部分（必填，如 snippet,status 等）
      • onBehalfOfContentOwner: 内容所有者（可选，仅供 YouTube 内容合作伙伴使用）
      • onBehalfOfContentOwnerChannel: 内容所有者频道（可选，仅供 YouTube 内容合作伙伴使用）
      • snippet.title: 播放列表标题（必填）
      • snippet.description: 播放列表描述（可选）
      • snippet.defaultLanguage: 默认语言（可选）
      • status.privacyStatus: 隐私状态（可选）
      • localizations: 本地化信息（可选）

返回值：

    *schema.YouTubePlaylistsInsertRes 包含以下字段：
      • Playlist: 插入的播放列表
    error 调用过程中遇到的错误（如有）

#### func (*YoutubePlaylistsClient) List

```go
func (c *YoutubePlaylistsClient) List(ctx context.Context, data *schema.YouTubePlaylistsListReq) (*schema.YouTubePlaylistsListRes, error)
```
## List 获取播放列表

接口文档参考： https://developers.google.cn/youtube/v3/docs/playlists/list?hl=zh-cn

参数：

    ctx  - 请求上下文
    data - 请求参数，包含以下字段：
      • part: 指定返回的资源部分（必填，如 snippet,contentDetails 等）
      • channelId: 频道ID（可选，与 id、mine 互斥）
      • id: 播放列表ID列表（可选，以逗号分隔）
      • mine: 是否获取经过身份验证的用户拥有的播放列表（可选）
      • hl: 语言代码（可选）
      • maxResults: 返回的最大结果数（可选，默认5，最大50）
      • onBehalfOfContentOwner: 内容所有者（可选，仅供 YouTube 内容合作伙伴使用）
      • onBehalfOfContentOwnerChannel: 内容所有者频道（可选，仅供 YouTube 内容合作伙伴使用）
      • pageToken: 分页令牌（可选）

返回值：

    *schema.YouTubePlaylistsListRes 包含以下字段：
      • Kind: 资源类型
      • ETag: 资源的 ETag
      • NextPageToken: 下一页令牌
      • PrevPageToken: 上一页令牌
      • PageInfo: 分页信息
      • Items: 播放列表列表
    error 调用过程中遇到的错误（如有）

#### func (*YoutubePlaylistsClient) Update

```go
func (c *YoutubePlaylistsClient) Update(ctx context.Context, data *schema.YouTubePlaylistsUpdateReq) (*schema.YouTubePlaylistsUpdateRes, error)
```
## Update 更新播放列表

接口文档参考： https://developers.google.cn/youtube/v3/docs/playlists/update?hl=zh-cn

参数：

    ctx  - 请求上下文
    data - 请求参数，包含以下字段：
      • part: 指定返回的资源部分（必填，如 snippet,status 等）
      • onBehalfOfContentOwner: 内容所有者（可选，仅供 YouTube 内容合作伙伴使用）
      • snippet.title: 播放列表标题（可选）
      • snippet.description: 播放列表描述（可选）
      • snippet.defaultLanguage: 默认语言（可选）
      • status.privacyStatus: 隐私状态（可选）
      • localizations: 本地化信息（可选）

返回值：

    *schema.YouTubePlaylistsUpdateRes 包含以下字段：
      • Playlist: 更新后的播放列表:
    error 调用过程中遇到的错误（如有）
