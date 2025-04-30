# youtube
--
    import "."


## Usage

#### type GoogleYouTubeACClient

```go
type GoogleYouTubeACClient struct {
	GoogleClient       *core.GoogleClient
	YouTubeConfig      *config.GoogleYouTubeConfig
	AccessTokenHandler *core.GoogleAccessTokenHandler
}
```

https://developers.google.com/youtube/v3/docs?hl=zh-cn

#### func  NewGoogleYouTubeACClient

```go
func NewGoogleYouTubeACClient(cfg *config.GoogleYouTubeConfig, logger *logger.Logger, cache cache.ICache) (*GoogleYouTubeACClient, error)
```

#### func (*GoogleYouTubeACClient) GetActivitiesClient

```go
func (client *GoogleYouTubeACClient) GetActivitiesClient() *activities.YoutubeActivitiesClient
```

#### func (*GoogleYouTubeACClient) GetCaptionsClient

```go
func (client *GoogleYouTubeACClient) GetCaptionsClient() *captions.YoutubeCaptionsClient
```

#### func (*GoogleYouTubeACClient) GetChannelBannersClient

```go
func (client *GoogleYouTubeACClient) GetChannelBannersClient() *channelBanners.YoutubeChannelBannersClient
```

#### func (*GoogleYouTubeACClient) GetChannelSectionsClient

```go
func (client *GoogleYouTubeACClient) GetChannelSectionsClient() *channelSections.YoutubeChannelSectionsClient
```

#### func (*GoogleYouTubeACClient) GetChannelsClient

```go
func (client *GoogleYouTubeACClient) GetChannelsClient() *channels.YoutubeChannelsClient
```

#### func (*GoogleYouTubeACClient) GetCommentThreadsClient

```go
func (client *GoogleYouTubeACClient) GetCommentThreadsClient() *commentThreads.YoutubeCommentThreadsClient
```

#### func (*GoogleYouTubeACClient) GetCommentsClient

```go
func (client *GoogleYouTubeACClient) GetCommentsClient() *comments.YoutubeCommentsClient
```

#### func (*GoogleYouTubeACClient) GetI18nLanguagesClient

```go
func (client *GoogleYouTubeACClient) GetI18nLanguagesClient() *i18nLanguages.YoutubeI18nLanguagesClient
```

#### func (*GoogleYouTubeACClient) GetI18nRegionsClient

```go
func (client *GoogleYouTubeACClient) GetI18nRegionsClient() *i18nRegions.YoutubeI18nRegionsClient
```

#### func (*GoogleYouTubeACClient) GetMembersClient

```go
func (client *GoogleYouTubeACClient) GetMembersClient() *members.YoutubeMembersClient
```

#### func (*GoogleYouTubeACClient) GetMembershipsLevelsClient

```go
func (client *GoogleYouTubeACClient) GetMembershipsLevelsClient() *membershipsLevels.YoutubeMembershipsLevelsClient
```

#### func (*GoogleYouTubeACClient) GetPlaylistItemsClient

```go
func (client *GoogleYouTubeACClient) GetPlaylistItemsClient() *playlistItems.YoutubePlaylistItemsClient
```

#### func (*GoogleYouTubeACClient) GetPlaylistsClient

```go
func (client *GoogleYouTubeACClient) GetPlaylistsClient() *playlists.YoutubePlaylistsClient
```

#### func (*GoogleYouTubeACClient) GetSearchClient

```go
func (client *GoogleYouTubeACClient) GetSearchClient() *search.YoutubeSearchClient
```

#### func (*GoogleYouTubeACClient) GetSubscriptionsClient

```go
func (client *GoogleYouTubeACClient) GetSubscriptionsClient() *subscriptions.YoutubeSubscriptionsClient
```

#### func (*GoogleYouTubeACClient) GetThumbnailsClient

```go
func (client *GoogleYouTubeACClient) GetThumbnailsClient() *thumbnails.YoutubeThumbnailsClient
```

#### func (*GoogleYouTubeACClient) GetVideoCategoriesClient

```go
func (client *GoogleYouTubeACClient) GetVideoCategoriesClient() *videoCategory.YoutubeVideoCategoryClient
```

#### func (*GoogleYouTubeACClient) GetVideoClient

```go
func (client *GoogleYouTubeACClient) GetVideoClient() *video.YoutubeVideoClient
```

#### func (*GoogleYouTubeACClient) GetWatermarksClient

```go
func (client *GoogleYouTubeACClient) GetWatermarksClient() *watermarks.YoutubeWatermarksClient
```
