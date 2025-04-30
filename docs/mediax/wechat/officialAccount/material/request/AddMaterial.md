# request
--
    import "."


## Usage

#### type AddArticlesReq

```go
type AddArticlesReq struct {
	Articles []*Article `json:"articles"`
}
```


#### type Article

```go
type Article struct {
	Title              string `json:"title"`
	ThumbMediaID       string `json:"thumb_media_id"`
	Author             string `json:"author"`
	Digest             string `json:"digest"`
	ShowCoverPic       string `json:"show_cover_pic"`
	Content            string `json:"content"`
	ContentSourceUrl   string `json:"content_source_url"`
	NeedOpenComment    string `json:"need_open_comment"`
	OnlyFansCanComment string `json:"only_fans_can_comment"`
}
```


#### type MaterialAddMaterialReq

```go
type MaterialAddMaterialReq struct {
	Type         string          `json:"type"`
	Media        *object.HashMap `json:"media"`
	Title        string          `json:"title"`
	Introduction string          `json:"introduction"`
}
```


#### type MaterialAddNewsReq

```go
type MaterialAddNewsReq struct {
	Articles []*object.HashMap `json:"articles"`
}
```


#### type MaterialBatchGetMaterialReq

```go
type MaterialBatchGetMaterialReq struct {
	Type   string `json:"type"`
	Offset int64  `json:"offset"`
	Count  int64  `json:"count"`
}
```


#### type MaterialUpdateNewsReq

```go
type MaterialUpdateNewsReq struct {
	MediaID  int64             `json:"media_id"`
	Index    int64             `json:"index"`
	Articles []*object.HashMap `json:"articles"`
}
```
