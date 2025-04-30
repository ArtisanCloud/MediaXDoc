# material
--
    import "."


## Usage

#### type OfficialAccountMaterialClient

```go
type OfficialAccountMaterialClient struct {
	*kernel.BaseClient

	AllowTypes []string
}
```


#### func  NewClient

```go
func NewClient(c *kernel.BaseClient) *OfficialAccountMaterialClient
```

#### func (*OfficialAccountMaterialClient) Delete

```go
func (client *OfficialAccountMaterialClient) Delete(ctx context.Context, mediaID string) (*response2.OfficialAccountRes, error)
```
删除永久素材
https://developers.weixin.qq.com/doc/offiaccount/Asset_Management/Deleting_Permanent_Assets.html

#### func (*OfficialAccountMaterialClient) GetMaterial

```go
func (client *OfficialAccountMaterialClient) GetMaterial(ctx context.Context, mediaID string) (*http.Response, error)
```
获取永久素材图片
https://developers.weixin.qq.com/doc/offiaccount/Asset_Management/Getting_Permanent_Assets.html

#### func (*OfficialAccountMaterialClient) GetNews

```go
func (client *OfficialAccountMaterialClient) GetNews(ctx context.Context, mediaID string) (*response.MaterialGetNewsRes, error)
```
获取永久图文素材
https://developers.weixin.qq.com/doc/offiaccount/Asset_Management/Getting_Permanent_Assets.html

#### func (*OfficialAccountMaterialClient) GetVideo

```go
func (client *OfficialAccountMaterialClient) GetVideo(ctx context.Context, mediaID string) (*response.MaterialGetVideoRes, error)
```
获取永久视频消息素材
https://developers.weixin.qq.com/doc/offiaccount/Asset_Management/Getting_Permanent_Assets.html

#### func (*OfficialAccountMaterialClient) List

```go
func (client *OfficialAccountMaterialClient) List(ctx context.Context, options *request.MaterialBatchGetMaterialReq) (*response.MaterialBatchGetMaterialRes, error)
```
获取素材列表
https://developers.weixin.qq.com/doc/offiaccount/Asset_Management/Get_materials_list.html

#### func (*OfficialAccountMaterialClient) Stats

```go
func (client *OfficialAccountMaterialClient) Stats(ctx context.Context) (*response.MaterialGetMaterialCountRes, error)
```
获取素材总数
https://developers.weixin.qq.com/doc/offiaccount/Asset_Management/Get_the_total_of_all_materials.html

#### func (*OfficialAccountMaterialClient) UpdateArticle

```go
func (client *OfficialAccountMaterialClient) UpdateArticle(ctx context.Context, mediaID string, articles request.AddArticlesReq, index int) (response.MaterialAddNewsRes, error)
```
上传永久素材
https://developers.weixin.qq.com/doc/offiaccount/Comments_management/Image_Comments_Management_Interface.html

#### func (*OfficialAccountMaterialClient) Upload

```go
func (client *OfficialAccountMaterialClient) Upload(ctx context.Context, Type string, path string, query *object.StringMap, result interface{}) (interface{}, error)
```

#### func (*OfficialAccountMaterialClient) UploadArticle

```go
func (client *OfficialAccountMaterialClient) UploadArticle(ctx context.Context, articles request.AddArticlesReq) (*response.MaterialAddNewsRes, error)
```
新增永久素材
https://developers.weixin.qq.com/doc/offiaccount/Comments_management/Image_Comments_Management_Interface.html

#### func (*OfficialAccountMaterialClient) UploadArticleImage

```go
func (client *OfficialAccountMaterialClient) UploadArticleImage(ctx context.Context, path string) (*response.MaterialAddMaterialRes, error)
```
上传图文消息内的图片获取URL
https://developers.weixin.qq.com/doc/offiaccount/Asset_Management/Adding_Permanent_Assets.html

#### func (*OfficialAccountMaterialClient) UploadByData

```go
func (client *OfficialAccountMaterialClient) UploadByData(ctx context.Context, Type string, name string, data []byte, query *object.StringMap, result interface{}) (interface{}, error)
```

#### func (*OfficialAccountMaterialClient) UploadImage

```go
func (client *OfficialAccountMaterialClient) UploadImage(ctx context.Context, path string) (*response.MaterialAddMaterialRes, error)
```
上传永久图片素材
https://developers.weixin.qq.com/doc/offiaccount/Asset_Management/Adding_Permanent_Assets.html

#### func (*OfficialAccountMaterialClient) UploadImageByData

```go
func (client *OfficialAccountMaterialClient) UploadImageByData(ctx context.Context, data []byte) (*response.MaterialAddMaterialRes, error)
```
上传永久图片素材
https://developers.weixin.qq.com/doc/offiaccount/Asset_Management/Adding_Permanent_Assets.html

#### func (*OfficialAccountMaterialClient) UploadThumb

```go
func (client *OfficialAccountMaterialClient) UploadThumb(ctx context.Context, path string) (*response.MaterialAddMaterialRes, error)
```
上传永久缩略图素材
https://developers.weixin.qq.com/doc/offiaccount/Asset_Management/Adding_Permanent_Assets.html

#### func (*OfficialAccountMaterialClient) UploadThumbByData

```go
func (client *OfficialAccountMaterialClient) UploadThumbByData(ctx context.Context, data []byte) (*response.MaterialAddMaterialRes, error)
```
上传永久缩略图素材
https://developers.weixin.qq.com/doc/offiaccount/Asset_Management/Adding_Permanent_Assets.html

#### func (*OfficialAccountMaterialClient) UploadVideo

```go
func (client *OfficialAccountMaterialClient) UploadVideo(ctx context.Context, path string, title string, description string) (*response.MaterialAddMaterialRes, error)
```
上传永久视频素材
https://developers.weixin.qq.com/doc/offiaccount/Asset_Management/Adding_Permanent_Assets.html

#### func (*OfficialAccountMaterialClient) UploadVideoByData

```go
func (client *OfficialAccountMaterialClient) UploadVideoByData(ctx context.Context, data []byte, title string, description string) (*response.MaterialAddMaterialRes, error)
```
上传永久视频素材
https://developers.weixin.qq.com/doc/offiaccount/Asset_Management/Adding_Permanent_Assets.html

#### func (*OfficialAccountMaterialClient) UploadVoice

```go
func (client *OfficialAccountMaterialClient) UploadVoice(ctx context.Context, path string) (*response.MaterialAddMaterialRes, error)
```
上传永久语音素材
https://developers.weixin.qq.com/doc/offiaccount/Asset_Management/Adding_Permanent_Assets.html

#### func (*OfficialAccountMaterialClient) UploadVoiceByData

```go
func (client *OfficialAccountMaterialClient) UploadVoiceByData(ctx context.Context, data []byte) (*response.MaterialAddMaterialRes, error)
```
上传永久语音素材
https://developers.weixin.qq.com/doc/offiaccount/Asset_Management/Adding_Permanent_Assets.html
