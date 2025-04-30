# request
--
    import "."


## Usage

#### type Article

```go
type Article struct {
	Title              string `json:"title"`
	Author             string `json:"author"`
	Digest             string `json:"digest"`
	Content            string `json:"content"`
	ContentSourceUrl   string `json:"content_source_url"`
	ThumbMediaId       string `json:"thumb_media_id"`
	NeedOpenComment    int    `json:"need_open_comment"`
	OnlyFansCanComment int    `json:"only_fans_can_comment"`
}
```


#### type BatchGetReq

```go
type BatchGetReq struct {
	Offset    int `json:"offset"`
	Count     int `json:"count"`
	NoContent int `json:"no_content"`
}
```


#### type DraftAddReq

```go
type DraftAddReq struct {
	Articles []*Article `json:"articles"`
}
```


#### type DraftUpdateReq

```go
type DraftUpdateReq struct {
	MediaId  string   `json:"media_id"`
	Index    int      `json:"index"`
	Articles *Article `json:"articles"`
}
```
