# response
--
    import "."


## Usage

#### type UploadImageRes

```go
type UploadImageRes struct {
	response.OfficialAccountRes

	URL string `json:"url"`
}
```


#### type UploadMediaRes

```go
type UploadMediaRes struct {
	response.OfficialAccountRes

	Item         []*object.HashMap `json:"item"`
	Type         string            `json:"type"`
	MediaID      string            `json:"media_id"`
	ThumbMediaID string            `json:"thumb_media_id,omitempty"`
	CreatedAt    int               `json:"created_at"`
}
```
