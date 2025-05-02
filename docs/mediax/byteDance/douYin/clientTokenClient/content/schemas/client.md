# schemas
--
    import "."


## Usage

#### type DouYinContentSchemasClient

```go
type DouYinContentSchemasClient struct {
	*kernel.BaseClient
}
```

DouYinContentSchemasClient 抖音内容Schema客户端 提供与抖音内容Schema相关的接口封装

#### func  NewClient

```go
func NewClient(c *kernel.BaseClient) *DouYinContentSchemasClient
```
NewClient 初始化并返回一个新的 DouYinContentSchemasClient 实例

#### func (*DouYinContentSchemasClient) GetChat

```go
func (c *DouYinContentSchemasClient) GetChat(ctx context.Context, data *schema.DouYinContentSchemasGetChatReq) (*schema.DouYinContentSchemasGetChatRes, error)
```
## GetChat 获取个人会话页跳转链接

接口文档参考：
https://developer.open-douyin.com/docs/resource/zh-CN/dop/develop/openapi/video-management/jump/chat

参数：

    ctx  - 请求上下文
    data - 请求参数，包含：
           • ExpireAt: 过期时间戳
           • OpenId: 用户OpenId

返回值：

    *schema.DouYinContentSchemasGetChatRes 包含以下字段：
      • Extra: 通用返回信息（log_id、now、error_code 等）
      • Data:
          - Schema: 个人会话页跳转链接
          - ErrorCode: 错误码，0 表示成功，其他为失败
          - Description: 错误描述或状态说明

    error 调用过程中遇到的错误（如有）

#### func (*DouYinContentSchemasClient) GetH5Share

```go
func (c *DouYinContentSchemasClient) GetH5Share(ctx context.Context, data *schema.DouYinContentSchemasGetH5ShareReq) (*schema.DouYinContentSchemasGetH5ShareRes, error)
```
## GetH5Share 获取H5分享跳转链接

接口文档参考：
https://developer.open-douyin.com/docs/resource/zh-CN/dop/develop/openapi/video-management/jump/h5-share

参数：

    ctx  - 请求上下文
    data - 请求参数，包含：
           • ClientTicket: 客户端票据
           • ExpireAt: 过期时间戳
           • HashtagList: 话题标签列表
           • MicroAppInfo: 微应用信息
           • PoiId: POI ID
           • ShareToPublish: 是否分享后发布
           • State: 状态信息
           • Title: 标题
           • VideoPath: 视频路径

返回值：

    *schema.DouYinContentSchemasGetH5ShareRes 包含以下字段：
      • Extra: 通用返回信息（log_id、now、error_code 等）
      • Data:
          - Schema: H5分享链接
          - ErrorCode: 错误码，0 表示成功，其他为失败
          - Description: 错误描述或状态说明

    error 调用过程中遇到的错误（如有）

#### func (*DouYinContentSchemasClient) GetItemInfo

```go
func (c *DouYinContentSchemasClient) GetItemInfo(ctx context.Context, data *schema.DouYinContentSchemasGetItemInfoReq) (*schema.DouYinContentSchemasGetItemInfoRes, error)
```
## GetItemInfo 获取视频详情页跳转链接

接口文档参考：
https://developer.open-douyin.com/docs/resource/zh-CN/dop/develop/openapi/video-management/jump/item-info

参数：

    ctx  - 请求上下文
    data - 请求参数，包含：
           • ExpireAt: 过期时间戳
           • ItemId: 视频id
           • VideoId: 视频id

返回值：

    *schema.DouYinContentSchemasGetItemInfoRes 包含以下字段：
      • Extra: 通用返回信息（log_id、now、error_code 等）
      • Data:
          - Schema: 视频详情页跳转链接
          - ErrorCode: 错误码，0 表示成功，其他为失败
          - Description: 错误描述或状态说明

    error 调用过程中遇到的错误（如有）

#### func (*DouYinContentSchemasClient) GetLive

```go
func (c *DouYinContentSchemasClient) GetLive(ctx context.Context, data *schema.DouYinContentSchemasGetLiveReq) (*schema.DouYinContentSchemasGetLiveRes, error)
```
## GetLive 获取直播间跳转链接

接口文档参考：
https://developer.open-douyin.com/docs/resource/zh-CN/dop/develop/openapi/video-management/jump/live

参数：

    ctx  - 请求上下文
    data - 请求参数，包含：
           • ExpireAt: 过期时间戳
           • RoomId: 直播间ID

返回值：

    *schema.DouYinContentSchemasGetLiveRes 包含以下字段：
      • Extra: 通用返回信息（log_id、now、error_code 等）
      • Data:
          - Schema: 直播间跳转链接
          - ErrorCode: 错误码，0 表示成功，其他为失败
          - Description: 错误描述或状态说明

    error 调用过程中遇到的错误（如有）

#### func (*DouYinContentSchemasClient) GetUserProfile

```go
func (c *DouYinContentSchemasClient) GetUserProfile(ctx context.Context, data *schema.DouYinContentSchemasGetUserProfileReq) (*schema.DouYinContentSchemasGetUserProfileRes, error)
```
## GetUserProfile 获取个人页跳转链接

接口文档参考：
https://developer.open-douyin.com/docs/resource/zh-CN/dop/develop/openapi/video-management/jump/get-user-profile

参数：

    ctx  - 请求上下文
    data - 请求参数，包含：
           • ExpireAt: 过期时间戳
           • OpenId: 用户OpenId

返回值：

    *schema.DouYinContentSchemasGetUserProfileRes 包含以下字段：
      • Extra: 通用返回信息（log_id、now、error_code 等）
      • Data:
          - Schema: 个人页跳转链接
          - ErrorCode: 错误码，0 表示成功，其他为失败
          - Description: 错误描述或状态说明

    error 调用过程中遇到的错误（如有）
