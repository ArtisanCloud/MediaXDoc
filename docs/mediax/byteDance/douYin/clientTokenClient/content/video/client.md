# video
--
    import "."

Package video 提供抖音内容视频相关接口的客户端功能封装。

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

#### func (*DouYinContentVideoClient) GetIFrameByItem

```go
func (c *DouYinContentVideoClient) GetIFrameByItem(ctx context.Context, itemId string) (*schema.DouYinContentVideoGetIFrameByItemRes, error)
```
## GetIFrameByItem 根据商品ID获取iframe嵌入代码

接口文档参考：
https://developer.open-douyin.com/docs/resource/zh-CN/dop/develop/openapi/video-management/douyin/iframe-player/get-iframe-by-item

参数：

    ctx    - 请求上下文，用于控制请求的生命周期和传递请求范围的数据
    itemId - 商品ID，用于指定要获取iframe代码的商品，必填

返回值：

    *schema.DouYinContentVideoGetIFrameByItemRes 包含以下字段：
      • Extra: 通用返回信息（log_id、now、error_code 等）
      • Data:
          - IframeCode: iframe嵌入代码
          - VideoWidth: 视频宽度
          - VideoHeight: 视频高度
          - VideoTitle: 视频标题

    error 调用过程中遇到的错误（如有）

#### func (*DouYinContentVideoClient) GetIFrameByVideo

```go
func (c *DouYinContentVideoClient) GetIFrameByVideo(ctx context.Context, videoId string) (*schema.DouYinContentVideoGetIFrameByVideoRes, error)
```
## GetIFrameByVideo 根据视频ID获取iframe嵌入代码

接口文档参考：
https://developer.open-douyin.com/docs/resource/zh-CN/dop/develop/openapi/video-management/douyin/iframe-player/get-iframe-by-video

参数：

    ctx     - 请求上下文，用于控制请求的生命周期和传递请求范围的数据
    videoId - 视频ID，用于指定要获取iframe代码的视频，必填

返回值：

    *schema.DouYinContentVideoGetIFrameByVideoRes 包含以下字段：
      • Extra: 通用返回信息（log_id、now、error_code 等）
      • Data:
          - IframeCode: iframe嵌入代码
          - VideoWidth: 视频宽度
          - VideoHeight: 视频高度
          - VideoTitle: 视频标题

    error 调用过程中遇到的错误（如有）

#### func (*DouYinContentVideoClient) PoiSearch

```go
func (c *DouYinContentVideoClient) PoiSearch(ctx context.Context, data *schema.DouYinContentVideoPoiSearchReq) (*schema.DouYinContentVideoPoiSearchRes, error)
```
## PoiSearch 查询视频携带的地点（POI）信息

接口文档参考：
https://developer.open-douyin.com/docs/resource/zh-CN/dop/develop/openapi/video-management/douyin/search-video/video-poi

参数：

    ctx  - 请求上下文
    data - 请求参数，包含：
           • Keyword: 搜索关键词，必填
           • PageSize: 每页返回数量，必填
           • Page: 当前页码，必填
           • AccessToken: 授权访问令牌，必填

返回值：

    *schema.DouYinContentVideoPoiSearchRes 包含以下字段：
      • Extra: 通用返回信息（log_id、now、error_code 等）
      • Data:
          - ShareId: 视频分享 ID
          - ErrorCode: 错误码，0 表示成功，其他为失败
          - Description: 错误描述或状态说明

    error 调用过程中遇到的错误（如有）

#### func (*DouYinContentVideoClient) ShareResult

```go
func (c *DouYinContentVideoClient) ShareResult(ctx context.Context, data *schema.DouYinContentVideoShareResultReq) (*schema.DouYinContentVideoShareResultRes, error)
```
## ShareResult 获取抖音视频分享结果

接口文档参考：
https://developer.open-douyin.com/docs/resource/zh-CN/dop/develop/openapi/video-management/douyin/search-video/video-share-result

参数：

    ctx  - 请求上下文
    data - 请求参数，包含：
           • Count: 每页返回数量，必填字段，控制每次查询返回的视频分享结果数量
           • Keyword: 查询关键字，例如美食，必填字段，用于筛选视频分享结果
           • City: 查询城市，例如上海、北京，可选字段，用于按城市筛选视频分享结果
           • Cursor: 分页游标，第一页请求 cursor 是 0，response 中会返回下一页请求用到的 cursor，
             同时 response 还会返回 has_more 来表明是否有更多的数据

返回值：

    *schema.DouYinContentVideoShareResultRes 包含以下字段：
      • Extra: 通用返回信息（log_id、now、error_code 等）
      • Data:
          - Pois: 与视频分享结果相关的地点信息列表
          - ErrorCode: 错误码，0 表示成功，其他为失败
          - Description: 错误描述或状态说明

    error 调用过程中遇到的错误（如有）
