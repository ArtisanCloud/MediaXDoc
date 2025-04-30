# video
--
    import "."


## Usage

#### type DouYinContentVideoClient

```go
type DouYinContentVideoClient struct {
	*kernel.BaseClient
}
```

DouYinContentVideoClient 是抖音内容视频接口的客户端。

#### func  NewClient

```go
func NewClient(c *kernel.BaseClient) *DouYinContentVideoClient
```
NewClient 初始化并返回一个 DouYinContentVideoClient 实例。

#### func (*DouYinContentVideoClient) Data

```go
func (comp *DouYinContentVideoClient) Data(ctx context.Context, data *schema.DouYinContentVideoDataReq) (*schema.DouYinContentVideoDataRes, error)
```
Data

## 查询特定视频的视频数据 Data。

接口文档参考：
https://developer.open-douyin.com/docs/resource/zh-CN/dop/develop/openapi/video-management/douyin/search-video/video-data

参数： * ctx: 请求上下文 * data: 请求参数，目前为空结构体，可根据实际需求添加字段

返回值： * *schema.DouYinContentVideoDataRes: 查询结果指针，包含以下字段：

    - Extra: 包含通用的响应扩展字段，如 log_id、now、error_code 等
    - Data: 业务数据主体，包含以下字段：
    - List: 视频列表

* error: 调用过程中遇到的错误，若请求正常则为 nil

#### func (*DouYinContentVideoClient) List

```go
func (comp *DouYinContentVideoClient) List(ctx context.Context, data *schema.DouYinContentVideoListReq) (*schema.DouYinContentVideoListRes, error)
```
List

## 查询授权账号视频列表 List。

接口文档参考：
https://developer.open-douyin.com/docs/resource/zh-CN/dop/develop/openapi/video-management/douyin/search-video/account-video-list

参数： * ctx: 请求上下文 * data: 请求参数，包含：

    - Count: 每页数量，必填字段，每次查询小于等于20
    - OpenID: 用户唯一标志，通过 /oauth/access_token/ 获取，必填字段
    - Cursor: 分页游标，第一页请求 cursor 是 0，可选字段

返回值： * *schema.DouYinContentVideoListRes: 查询结果指针，包含以下字段：

    - Extra: 包含通用的响应扩展字段，如 log_id、now、error_code 等
    - Data: 业务数据主体，包含以下字段：
    - HasMore: 表示是否有更多数据
    - List: 视频列表
    - Cursor: 分页游标

* error: 调用过程中遇到的错误，若请求正常则为 nil
