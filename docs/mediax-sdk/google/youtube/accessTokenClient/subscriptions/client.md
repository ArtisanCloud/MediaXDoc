# subscriptions
--
    import "."


## Usage

#### type YoutubeSubscriptionsClient

```go
type YoutubeSubscriptionsClient struct {
	*kernel.BaseClient
}
```

YoutubeSubscriptionsClient 是 YouTube 订阅相关 API 的客户端

#### func  NewClient

```go
func NewClient(c *kernel.BaseClient) *YoutubeSubscriptionsClient
```
NewClient 创建一个新的 YoutubeSubscriptionsClient 实例

#### func (*YoutubeSubscriptionsClient) Delete

```go
func (c *YoutubeSubscriptionsClient) Delete(ctx context.Context, id string) (*schema.YouTubeSubscriptionsDeleteRes, error)
```
## Delete 删除订阅

接口文档参考：
https://developers.google.cn/youtube/v3/docs/subscriptions/delete?hl=zh-cn

参数：

    ctx  - 请求上下文
    id   - 订阅ID（必填）

返回值：

    *schema.YouTubeSubscriptionsDeleteRes HTTP 204 返回码
    error 调用过程中遇到的错误（如有）

#### func (*YoutubeSubscriptionsClient) Insert

```go
func (c *YoutubeSubscriptionsClient) Insert(ctx context.Context, data *schema.YouTubeSubscriptionsInsertReq) (*schema.YouTubeSubscriptionsInsertRes, error)
```
## Insert 插入订阅

接口文档参考：
https://developers.google.cn/youtube/v3/docs/subscriptions/insert?hl=zh-cn

参数：

    ctx  - 请求上下文
    data - 请求参数，包含以下字段：
      • part: 指定返回的资源部分（必填，如 snippet,contentDetails 等）
      • snippet.resourceId.channelId: 要订阅的频道ID（必填）

返回值：

    *schema.YouTubeSubscriptionsInsertRes 包含以下字段：
      • Kind: 资源类型
      • ETag: 资源的 ETag
      • Id: 订阅ID
      • Snippet: 订阅片段信息
      • ContentDetails: 订阅内容详情
      • SubscriberSnippet: 订阅者片段信息
    error 调用过程中遇到的错误（如有）

#### func (*YoutubeSubscriptionsClient) List

```go
func (c *YoutubeSubscriptionsClient) List(ctx context.Context, data *schema.YouTubeSubscriptionsListReq) (*schema.YouTubeSubscriptionsListRes, error)
```
## List 获取订阅列表

接口文档参考： https://developers.google.cn/youtube/v3/docs/subscriptions/list?hl=zh-cn

参数：

    ctx  - 请求上下文
    data - 请求参数，包含以下字段：
      • part: 指定返回的资源部分（必填，如 snippet,contentDetails 等）
      • channelId: 频道ID（可选，与 id、mine、myRecentSubscribers、mySubscribers 互斥）
      • id: 订阅ID列表（可选，以逗号分隔）
      • mine: 是否获取经过身份验证的用户的订阅（可选）
      • myRecentSubscribers: 是否按时间倒序获取订阅者的 Feed（可选）
      • mySubscribers: 是否获取订阅者的 Feed（可选）
      • forChannelId: 频道ID列表（可选，以逗号分隔）
      • maxResults: 返回的最大结果数（可选，默认5，最大50）
      • onBehalfOfContentOwner: 内容所有者（可选，仅供 YouTube 内容合作伙伴使用）
      • onBehalfOfContentOwnerChannel: 内容所有者频道（可选，仅供 YouTube 内容合作伙伴使用）
      • order: 排序方式（可选，如 alphabetical,relevance,unread）
      • pageToken: 分页令牌（可选）

返回值：

    *schema.YouTubeSubscriptionsListRes 包含以下字段：
      • Kind: 资源类型
      • ETag: 资源的 ETag
      • Items: 订阅列表
      • PageInfo: 分页信息
      • NextPageToken: 下一页令牌
      • PrevPageToken: 上一页令牌
    error 调用过程中遇到的错误（如有）
