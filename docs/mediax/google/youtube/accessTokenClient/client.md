# accessTokenClient
--
    import "."


## Usage

#### type GoogleYouTubeACClient

```go
type GoogleYouTubeACClient struct {
	GoogleClient       *core.GoogleClient             // Google基础客户端
	YouTubeConfig      *config.GoogleYouTubeConfig    // YouTube配置
	AccessTokenHandler *core.GoogleAccessTokenHandler // 访问Token处理器
}
```

GoogleYouTubeACClient YouTube访问Token客户端 提供YouTube API的各种功能接口，使用访问Token进行认证
文档：https://developers.google.com/youtube/v3/docs?hl=zh-cn

#### func  NewGoogleYouTubeACClient

```go
func NewGoogleYouTubeACClient(cfg *config.GoogleYouTubeConfig, logger *logger.Logger, cache cache.ICache) (*GoogleYouTubeACClient, error)
```
NewGoogleYouTubeACClient 创建新的YouTube访问Token客户端实例 cfg: YouTube配置 logger: 日志记录器
cache: 缓存接口

#### func (*GoogleYouTubeACClient) GetActivitiesClient

```go
func (client *GoogleYouTubeACClient) GetActivitiesClient() *activities.YoutubeActivitiesClient
```
GetActivitiesClient 获取活动管理客户端

#### func (*GoogleYouTubeACClient) GetCaptionsClient

```go
func (client *GoogleYouTubeACClient) GetCaptionsClient() *captions.YoutubeCaptionsClient
```
GetCaptionsClient 获取字幕管理客户端

#### func (*GoogleYouTubeACClient) GetChannelBannersClient

```go
func (client *GoogleYouTubeACClient) GetChannelBannersClient() *channelBanners.YoutubeChannelBannersClient
```
GetChannelBannersClient 获取频道横幅管理客户端

#### func (*GoogleYouTubeACClient) GetChannelSectionsClient

```go
func (client *GoogleYouTubeACClient) GetChannelSectionsClient() *channelSections.YoutubeChannelSectionsClient
```
GetChannelSectionsClient 获取频道分区管理客户端

#### func (*GoogleYouTubeACClient) GetChannelsClient

```go
func (client *GoogleYouTubeACClient) GetChannelsClient() *channels.YoutubeChannelsClient
```
GetChannelsClient 获取频道管理客户端

#### func (*GoogleYouTubeACClient) GetCommentThreadsClient

```go
func (client *GoogleYouTubeACClient) GetCommentThreadsClient() *commentThreads.YoutubeCommentThreadsClient
```
GetCommentThreadsClient 获取评论线程管理客户端

#### func (*GoogleYouTubeACClient) GetCommentsClient

```go
func (client *GoogleYouTubeACClient) GetCommentsClient() *comments.YoutubeCommentsClient
```
GetCommentsClient 获取评论管理客户端

#### func (*GoogleYouTubeACClient) GetI18nLanguagesClient

```go
func (client *GoogleYouTubeACClient) GetI18nLanguagesClient() *i18nLanguages.YoutubeI18nLanguagesClient
```
GetI18nLanguagesClient 获取国际化语言管理客户端

#### func (*GoogleYouTubeACClient) GetI18nRegionsClient

```go
func (client *GoogleYouTubeACClient) GetI18nRegionsClient() *i18nRegions.YoutubeI18nRegionsClient
```
GetI18nRegionsClient 获取国际化地区管理客户端

#### func (*GoogleYouTubeACClient) GetMembersClient

```go
func (client *GoogleYouTubeACClient) GetMembersClient() *members.YoutubeMembersClient
```
GetMembersClient 获取会员管理客户端

#### func (*GoogleYouTubeACClient) GetMembershipsLevelsClient

```go
func (client *GoogleYouTubeACClient) GetMembershipsLevelsClient() *membershipsLevels.YoutubeMembershipsLevelsClient
```
GetMembershipsLevelsClient 获取会员等级管理客户端

#### func (*GoogleYouTubeACClient) GetPlaylistImagesClient

```go
func (client *GoogleYouTubeACClient) GetPlaylistImagesClient() *playlistImages.YoutubePlaylistImagesClient
```

#### func (*GoogleYouTubeACClient) GetPlaylistItemsClient

```go
func (client *GoogleYouTubeACClient) GetPlaylistItemsClient() *playlistItems.YoutubePlaylistItemsClient
```
GetPlaylistItemsClient 获取播放列表项管理客户端

#### func (*GoogleYouTubeACClient) GetPlaylistsClient

```go
func (client *GoogleYouTubeACClient) GetPlaylistsClient() *playlists.YoutubePlaylistsClient
```
GetPlaylistsClient 获取播放列表管理客户端

#### func (*GoogleYouTubeACClient) GetSearchClient

```go
func (client *GoogleYouTubeACClient) GetSearchClient() *search.YoutubeSearchClient
```
GetSearchClient 获取搜索管理客户端

#### func (*GoogleYouTubeACClient) GetSubscriptionsClient

```go
func (client *GoogleYouTubeACClient) GetSubscriptionsClient() *subscriptions.YoutubeSubscriptionsClient
```
GetSubscriptionsClient 获取订阅管理客户端

#### func (*GoogleYouTubeACClient) GetThumbnailsClient

```go
func (client *GoogleYouTubeACClient) GetThumbnailsClient() *thumbnails.YoutubeThumbnailsClient
```
GetThumbnailsClient 获取缩略图管理客户端

#### func (*GoogleYouTubeACClient) GetVideoCategoriesClient

```go
func (client *GoogleYouTubeACClient) GetVideoCategoriesClient() *videoCategory.YoutubeVideoCategoryClient
```
GetVideoCategoriesClient 获取视频分类管理客户端

#### func (*GoogleYouTubeACClient) GetVideoClient

```go
func (client *GoogleYouTubeACClient) GetVideoClient() *video.YoutubeVideoClient
```
GetVideoClient 获取视频管理客户端

#### func (*GoogleYouTubeACClient) GetWatermarksClient

```go
func (client *GoogleYouTubeACClient) GetWatermarksClient() *watermarks.YoutubeWatermarksClient
```
GetWatermarksClient 获取水印管理客户端
