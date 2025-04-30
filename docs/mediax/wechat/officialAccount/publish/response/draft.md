# response
--
    import "."


## Usage

#### type ArticleDetail

```go
type ArticleDetail struct {
	Count int            `json:"count"`
	Item  []*ArticleItem `json:"item"`
}
```


#### type ArticleItem

```go
type ArticleItem struct {
	Idx        int    `json:"idx"`
	ArticleUrl string `json:"article_url"`
}
```


#### type BatchGetRes

```go
type BatchGetRes struct {
	response.OfficialAccountRes

	TotalCount int     `json:"total_count"`
	ItemCount  int     `json:"item_count"`
	Item       []*Item `json:"item"`
}
```


#### type CheckSwitchRes

```go
type CheckSwitchRes struct {
	response.OfficialAccountRes

	TotalCount int `json:"total_count"`
	ItemCount  int `json:"item_count"`
	IsOpen     int `json:"is_open"`
}
```


#### type Content

```go
type Content struct {
	NewsItem   []*NewsItem `json:"news_item"`
	CreateTime int64       `json:"create_time"`
	UpdateTime int64       `json:"update_time"`
}
```


#### type DraftAddRes

```go
type DraftAddRes struct {
	response.OfficialAccountRes

	MediaID string `json:"media_id"`
}
```


#### type DraftCountRes

```go
type DraftCountRes struct {
	TotalCount int `json:"total_count"`
}
```


#### type DraftGetRes

```go
type DraftGetRes struct {
	response.OfficialAccountRes

	NewsItem   []*NewsItem `json:"news_item"`
	CreateTime int64       `json:"create_time"`
	UpdateTime int64       `json:"update_time"`
}
```


#### type Item

```go
type Item struct {
	MediaId    string   `json:"media_id"`
	ArticleId  string   `json:"article_id"`
	Content    *Content `json:"content"`
	UpdateTime int64    `json:"update_time"`
}
```


#### type NewsItem

```go
type NewsItem struct {
	Title              string `json:"title"`
	Author             string `json:"author"`
	Digest             string `json:"digest"`
	Content            string `json:"content"`
	ContentSourceUrl   string `json:"content_source_url"`
	ThumbMediaId       string `json:"thumb_media_id"`
	ThumbUrl           string `json:"thumb_url"`
	ShowCoverPic       int    `json:"show_cover_pic"`
	NeedOpenComment    int    `json:"need_open_comment"`
	OnlyFansCanComment int    `json:"only_fans_can_comment"`
	Url                string `json:"url"`
	IsDeleted          bool   `json:"is_deleted"`
}
```


#### type PublishGetArticleRes

```go
type PublishGetArticleRes struct {
	response.OfficialAccountRes

	NewsItem []*NewsItem `json:"news_item"`
}
```


#### type PublishGetRes

```go
type PublishGetRes struct {
	response.OfficialAccountRes

	PublishId     uint64         `json:"publish_id"`
	PublishStatus int            `json:"publish_status"`
	ArticleId     string         `json:"article_id"`
	ArticleDetail *ArticleDetail `json:"article_detail"`
	FailIdx       []int          `json:"fail_idx"`
}
```


#### type PublishSubmitRes

```go
type PublishSubmitRes struct {
	response.OfficialAccountRes

	PublishId uint64 `json:"publish_id"`
}
```
