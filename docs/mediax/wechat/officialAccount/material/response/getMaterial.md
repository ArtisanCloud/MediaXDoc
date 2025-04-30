# response
--
    import "command-line-arguments"


## Usage

#### type MaterialAddMaterialRes

```go
type MaterialAddMaterialRes struct {
	response.OfficialAccountRes

	MediaID string `json:"media_id"`
	URL     string `json:"url"`
}
```


#### type MaterialAddNewsRes

```go
type MaterialAddNewsRes struct {
	response.OfficialAccountRes

	MediaID string `json:"media_id"`
}
```


#### type MaterialBatchGetMaterialRes

```go
type MaterialBatchGetMaterialRes struct {
	response.OfficialAccountRes

	TotalCount int               `json:"total_count"`
	ItemCount  int               `json:"item_count"`
	Item       []*object.HashMap `json:"item"`
}
```


#### type MaterialGetMaterialCountRes

```go
type MaterialGetMaterialCountRes struct {
	response.OfficialAccountRes

	VoiceCount int    `json:"voice_count"`
	VideoCount int    `json:"video_count"`
	ImageCount int    `json:"image_count"`
	NewsCount  int    `json:"news_count"`
	MediaID    string `json:"media_id"`
}
```


#### type MaterialGetNewsRes

```go
type MaterialGetNewsRes struct {
	response.OfficialAccountRes

	NewsItem []NewsItems `json:"news_item"`
}
```


#### type MaterialGetVideoRes

```go
type MaterialGetVideoRes struct {
	Title       string `json:"title"`
	Description string `json:"description"`
	DownUrl     string `json:"down_url"`
}
```


#### type NewsItems

```go
type NewsItems struct {
	Title            string `json:"title"`
	ThumbMediaId     string `json:"thumb_media_id"`
	ShowCoverPic     int8   `json:"show_cover_pic"`
	Author           string `json:"author"`
	Digest           string `json:"digest"`
	Content          string `json:"content"`
	Url              string `json:"url"`
	ContentSourceUrl string `json:"content_source_url"`
}
```
