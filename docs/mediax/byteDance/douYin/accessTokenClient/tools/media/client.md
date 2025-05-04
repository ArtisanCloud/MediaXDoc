# media
--
    import "."


## Usage

#### type DouYinToolMediaClient

```go
type DouYinToolMediaClient struct {
	*kernel.BaseClient
}
```

DouYinToolMediaClient 抖音工具媒体客户端

#### func  NewClient

```go
func NewClient(c *kernel.BaseClient) *DouYinToolMediaClient
```
NewClient 创建抖音工具媒体客户端实例

#### func (*DouYinToolMediaClient) Delete

```go
func (c *DouYinToolMediaClient) Delete(ctx context.Context, mediaId string) (*schema.DouYinToolMediaDeleteRes, error)
```
## Delete 删除素材

接口文档参考：
https://developer.open-douyin.com/docs/resource/zh-CN/dop/develop/openapi/tools-ability/material-management/delete-material-interface

参数：

    ctx     - 请求上下文
    mediaId - 要删除的素材ID

返回值：

    *schema.DouYinToolMediaDeleteRes 包含以下字段：
      • Extra: 通用返回信息（log_id、now、error_code 等）
      • Data: 业务数据主体，包含具体的业务响应信息
    error 调用过程中遇到的错误（如有）

#### func (*DouYinToolMediaClient) List

```go
func (c *DouYinToolMediaClient) List(ctx context.Context, cursor int64, count int64) (*schema.DouYinToolMediaGetListRes, error)
```
## List 获取素材列表

接口文档参考：
https://developer.open-douyin.com/docs/resource/zh-CN/dop/develop/openapi/tools-ability/material-management/material-list-interface

参数：

    ctx    - 请求上下文
    cursor - 分页游标，第一次请求传0
    count  - 每页数量，最大100

返回值：

      *schema.DouYinToolMediaGetListRes 包含以下字段：
        • Extra: 通用返回信息（log_id、now、error_code 等）
        • Data: 业务数据主体，包含具体的业务响应信息
    			• Medias 视频列表，包含视频ID、URL列表等信息。
        			• MediaId: 素材ID
        			• []MediaUrl: 素材URL列表
      error 调用过程中遇到的错误（如有）

#### func (*DouYinToolMediaClient) Upload

```go
func (c *DouYinToolMediaClient) Upload(ctx context.Context, path string, form *object.HashMap) (*schema.DouYinToolMediaUploadRes, error)
```
## Upload 素材上传

接口文档参考：
https://developer.open-douyin.com/docs/resource/zh-CN/dop/develop/openapi/tools-ability/material-management/upload-material-interface

参数：

    ctx  - 请求上下文
    path - 素材路径 （本地文件路径, 和form二选一）
    form - 表单数据 （包含素材类型、素材描述等信息 , 和path二选一）

返回值：

      *schema.DouYinToolMediaUploadRes 包含以下字段：
        • Extra: 通用返回信息（log_id、now、error_code 等）
        • Data: 业务数据主体，包含具体的业务响应信息
    			• Media 视频，包含视频ID、URL列表等信息。
        			• MediaId: 素材ID
        			• []MediaUrl: 素材URL列表
      error 调用过程中遇到的错误（如有）

#### func (*DouYinToolMediaClient) UploadTempMedia

```go
func (c *DouYinToolMediaClient) UploadTempMedia(ctx context.Context, path string, form *object.HashMap) (*schema.DouYinToolMediaUploadRes, error)
```
## UploadTempMedia 上传临时素材

接口文档参考：
https://developer.open-douyin.com/docs/resource/zh-CN/dop/develop/openapi/tools-ability/material-management/upload-temp-material-interface

参数：

    ctx  - 请求上下文
    path - 素材路径 （本地文件路径, 和form二选一）
    form - 表单数据 （包含素材类型、素材描述等信息 , 和path二选一）

返回值：

      *schema.DouYinToolMediaUploadRes 包含以下字段：
        • Extra: 通用返回信息（log_id、now、error_code 等）
        • Data: 业务数据主体，包含具体的业务响应信息
    			• Media 视频，包含视频ID、URL列表等信息。
        			• MediaId: 素材ID
        			• []MediaUrl: 素材URL列表
      error 调用过程中遇到的错误（如有）
