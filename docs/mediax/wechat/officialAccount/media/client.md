# media
--
    import "."


## Usage

#### type OfficialAccountMediaClient

```go
type OfficialAccountMediaClient struct {
	*kernel.BaseClient

	AllowTypes []string
}
```


#### func  NewClient

```go
func NewClient(c *kernel.BaseClient) *OfficialAccountMediaClient
```

#### func (*OfficialAccountMediaClient) Get

```go
func (client *OfficialAccountMediaClient) Get(ctx context.Context, mediaID string) (*http.Response, error)
```
获取临时素材 https://work.weixin.qq.com/api/doc/90000/90135/90254

#### func (*OfficialAccountMediaClient) GetJSSDK

```go
func (client *OfficialAccountMediaClient) GetJSSDK(ctx context.Context, mediaID string) (*http.Response, error)
```
获取高清语音素材 https://work.weixin.qq.com/api/doc/90000/90135/90255

#### func (*OfficialAccountMediaClient) Upload

```go
func (client *OfficialAccountMediaClient) Upload(ctx context.Context, mediaType string, path string) (*response.UploadMediaRes, error)
```
上传临时素材
https://developers.weixin.qq.com/doc/offiaccount/Asset_Management/New_temporary_materials.html

#### func (*OfficialAccountMediaClient) UploadImage

```go
func (client *OfficialAccountMediaClient) UploadImage(ctx context.Context, path string) (*response.UploadMediaRes, error)
```
新增临时素材
https://developers.weixin.qq.com/doc/offiaccount/Asset_Management/New_temporary_materials.html

#### func (*OfficialAccountMediaClient) UploadThumb

```go
func (client *OfficialAccountMediaClient) UploadThumb(ctx context.Context, path string) (*response.UploadMediaRes, error)
```

#### func (*OfficialAccountMediaClient) UploadVideo

```go
func (client *OfficialAccountMediaClient) UploadVideo(ctx context.Context, path string) (*response.UploadMediaRes, error)
```

#### func (*OfficialAccountMediaClient) UploadVoice

```go
func (client *OfficialAccountMediaClient) UploadVoice(ctx context.Context, path string) (*response.UploadMediaRes, error)
```
