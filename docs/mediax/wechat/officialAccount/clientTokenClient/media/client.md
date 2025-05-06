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

OfficialAccountMediaClient 是一个用于操作微信公众号素材的客户端。

#### func  NewClient

```go
func NewClient(c *kernel.BaseClient) *OfficialAccountMediaClient
```
NewClient 创建一个新的 OfficialAccountMediaClient 实例。

#### func (*OfficialAccountMediaClient) Get

```go
func (client *OfficialAccountMediaClient) Get(ctx context.Context, mediaID string) (*http.Response, error)
```
## Get 获取临时素材

接口文档参考：
https://developers.weixin.qq.com/doc/offiaccount/Asset_Management/Get_temporary_materials.html

参数：

    ctx    - 请求上下文
    mediaID - 媒体ID

返回值：

    *http.Response 包含素材的HTTP响应
    error 调用过程中遇到的错误（如有）

#### func (*OfficialAccountMediaClient) GetJSSDK

```go
func (client *OfficialAccountMediaClient) GetJSSDK(ctx context.Context, mediaID string) (*http.Response, error)
```
## Get 获取临时素材

接口文档参考：
https://developers.weixin.qq.com/doc/offiaccount/Asset_Management/Get_temporary_materials.html

参数：

    ctx    - 请求上下文
    mediaID - 媒体ID

返回值：

    *http.Response 包含素材的HTTP响应
    error 调用过程中遇到的错误（如有）

#### func (*OfficialAccountMediaClient) Upload

```go
func (client *OfficialAccountMediaClient) Upload(ctx context.Context, mediaType string, path string) (*schema.UploadMediaRes, error)
```
## Upload 上传临时素材

接口文档参考：
https://developers.weixin.qq.com/doc/offiaccount/Asset_Management/New_temporary_materials.html

参数：

    ctx      - 请求上下文
    mediaType - 素材类型（image/voice/video/thumb）
    path     - 文件路径

返回值：

    *schema.UploadMediaRes 包含以下字段：
      • MediaID: 媒体ID
      • CreatedAt: 素材上传时间戳

    error 调用过程中遇到的错误（如有）

#### func (*OfficialAccountMediaClient) UploadImage

```go
func (client *OfficialAccountMediaClient) UploadImage(ctx context.Context, path string) (*schema.UploadMediaRes, error)
```
## UploadImage 上传临时图片素材

接口文档参考：
https://developers.weixin.qq.com/doc/offiaccount/Asset_Management/New_temporary_materials.html

参数：

    ctx  - 请求上下文
    path - 图片文件路径

返回值：

    *schema.UploadMediaRes 包含以下字段：
      • MediaID: 媒体ID
      • CreatedAt: 素材上传时间戳

    error 调用过程中遇到的错误（如有）

#### func (*OfficialAccountMediaClient) UploadThumb

```go
func (client *OfficialAccountMediaClient) UploadThumb(ctx context.Context, path string) (*schema.UploadMediaRes, error)
```
## UploadThumb 上传临时缩略图素材

接口文档参考：
https://developers.weixin.qq.com/doc/offiaccount/Asset_Management/New_temporary_materials.html

参数：

    ctx  - 请求上下文
    path - 缩略图文件路径

返回值：

    *schema.UploadMediaRes 包含以下字段：
      • MediaID: 媒体ID
      • CreatedAt: 素材上传时间戳

    error 调用过程中遇到的错误（如有）

#### func (*OfficialAccountMediaClient) UploadVideo

```go
func (client *OfficialAccountMediaClient) UploadVideo(ctx context.Context, path string) (*schema.UploadMediaRes, error)
```
## UploadVideo 上传临时视频素材

接口文档参考：
https://developers.weixin.qq.com/doc/offiaccount/Asset_Management/New_temporary_materials.html

参数：

    ctx  - 请求上下文
    path - 视频文件路径

返回值：

    *schema.UploadMediaRes 包含以下字段：
      • MediaID: 媒体ID
      • CreatedAt: 素材上传时间戳

    error 调用过程中遇到的错误（如有）

#### func (*OfficialAccountMediaClient) UploadVoice

```go
func (client *OfficialAccountMediaClient) UploadVoice(ctx context.Context, path string) (*schema.UploadMediaRes, error)
```
## UploadVoice 上传临时语音素材

接口文档参考：
https://developers.weixin.qq.com/doc/offiaccount/Asset_Management/New_temporary_materials.html

参数：

    ctx  - 请求上下文
    path - 语音文件路径

返回值：

    *schema.UploadMediaRes 包含以下字段：
      • MediaID: 媒体ID
      • CreatedAt: 素材上传时间戳

    error 调用过程中遇到的错误（如有）
