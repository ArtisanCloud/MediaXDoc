# publish
--
    import "."


## Usage

#### type OfficialAccountPublishClient

```go
type OfficialAccountPublishClient struct {
	*kernel.BaseClient
}
```

OfficialAccountPublishClient 是一个用于操作微信公众号发布功能的客户端。

#### func  NewClient

```go
func NewClient(c *kernel.BaseClient) *OfficialAccountPublishClient
```
NewClient 创建一个新的 OfficialAccountPublishClient 实例。

#### func (*OfficialAccountPublishClient) DraftAdd

```go
func (c *OfficialAccountPublishClient) DraftAdd(ctx context.Context, data *schema.DraftAddReq) (*schema.DraftAddRes, error)
```
## DraftAdd 新建草稿

接口文档参考：
https://developers.weixin.qq.com/doc/offiaccount/Draft_Box/Add_draft.html

参数：

    ctx  - 请求上下文
    data - 草稿内容，包含以下字段：
      • Articles: 图文素材列表

返回值：

    *schema.DraftAddRes 包含以下字段：
      • MediaID: 媒体ID

    error 调用过程中遇到的错误（如有）

#### func (*OfficialAccountPublishClient) DraftBatchGet

```go
func (c *OfficialAccountPublishClient) DraftBatchGet(ctx context.Context, data *schema.BatchGetReq) (*schema.BatchGetRes, error)
```
## DraftBatchGet 获取草稿列表

接口文档参考：
https://developers.weixin.qq.com/doc/offiaccount/Draft_Box/Count_drafts.html

参数：

    ctx  - 请求上下文
    data - 查询条件，包含以下字段：
      • Offset: 从全部草稿的该偏移位置开始返回
      • Count: 返回草稿的数量
      • NoContent: 是否不返回草稿内容

返回值：

    *schema.BatchGetRes 包含以下字段：
      • TotalCount: 草稿总数
      • ItemCount: 本次调用获取的草稿数量
      • Item: 草稿列表，每个元素包含以下字段：
        • MediaID: 媒体ID
        • Content: 草稿内容（如果 NoContent 为 false）
        • UpdateTime: 更新时间

    error 调用过程中遇到的错误（如有）

#### func (*OfficialAccountPublishClient) DraftCheckSwitch

```go
func (c *OfficialAccountPublishClient) DraftCheckSwitch(ctx context.Context) (*schema.CheckSwitchRes, error)
```
## DraftCheckSwitch M检查P端开关

接口文档参考：
https://developers.weixin.qq.com/doc/offiaccount/Draft_Box/Temporary_MP_Switch.html

参数：

    ctx - 请求上下文

返回值：

    *schema.CheckSwitchRes 包含以下字段：
      • IsOpen: 开关状态（true/false）

    error 调用过程中遇到的错误（如有）

#### func (*OfficialAccountPublishClient) DraftCount

```go
func (c *OfficialAccountPublishClient) DraftCount(ctx context.Context) (*schema.DraftCountRes, error)
```
## DraftCount 获取草稿总数

接口文档参考：
https://developers.weixin.qq.com/doc/offiaccount/Draft_Box/Count_drafts.html

参数：

    ctx - 请求上下文

返回值：

    *schema.DraftCountRes 包含以下字段：
      • TotalCount: 草稿总数

    error 调用过程中遇到的错误（如有）

#### func (*OfficialAccountPublishClient) DraftDelete

```go
func (c *OfficialAccountPublishClient) DraftDelete(ctx context.Context, mediaID string) (*response2.OfficialAccountRes, error)
```
## DraftDelete 删除草稿

接口文档参考：
https://developers.weixin.qq.com/doc/offiaccount/Draft_Box/Delete_draft.html

参数：

    ctx    - 请求上下文
    mediaID - 媒体ID

返回值：

    *response2.OfficialAccountRes 包含以下字段：
      • ErrCode: 错误码
      • ErrMsg: 错误信息

    error 调用过程中遇到的错误（如有）

#### func (*OfficialAccountPublishClient) DraftGet

```go
func (c *OfficialAccountPublishClient) DraftGet(ctx context.Context, mediaID string) (*schema.DraftGetRes, error)
```
## DraftGet 获取草稿

接口文档参考：
https://developers.weixin.qq.com/doc/offiaccount/Draft_Box/Get_draft.html

参数：

    ctx    - 请求上下文
    mediaID - 媒体ID

返回值：

    *schema.DraftGetRes 包含以下字段：
      • NewsItem: 图文素材列表，每个元素包含以下字段：
        • Title: 标题
        • ThumbMediaID: 封面图片媒体ID
        • ShowCoverPic: 是否显示封面图片
        • Author: 作者
        • Digest: 摘要
        • Content: 正文内容
        • URL: 原文链接
        • ContentSourceURL: 原文链接

    error 调用过程中遇到的错误（如有）

#### func (*OfficialAccountPublishClient) DraftSwitch

```go
func (c *OfficialAccountPublishClient) DraftSwitch(ctx context.Context) (*response2.OfficialAccountRes, error)
```
## DraftSwitch MP端开关

接口文档参考：
https://developers.weixin.qq.com/doc/offiaccount/Draft_Box/Temporary_MP_Switch.html

参数：

    ctx - 请求上下文

返回值：

    *response2.OfficialAccountRes 包含以下字段：
      • ErrCode: 错误码
      • ErrMsg: 错误信息

    error 调用过程中遇到的错误（如有）

#### func (*OfficialAccountPublishClient) DraftUpdate

```go
func (c *OfficialAccountPublishClient) DraftUpdate(ctx context.Context, data *schema.DraftUpdateReq) (*response2.OfficialAccountRes, error)
```
## DraftUpdate 修改草稿

接口文档参考：
https://developers.weixin.qq.com/doc/offiaccount/Draft_Box/Update_draft.html

参数：

    ctx  - 请求上下文
    data - 草稿内容，包含以下字段：
      • MediaID: 媒体ID
      • Articles: 图文素材列表

返回值：

    *response2.OfficialAccountRes 包含以下字段：
      • ErrCode: 错误码
      • ErrMsg: 错误信息

    error 调用过程中遇到的错误（如有）

#### func (*OfficialAccountPublishClient) PublishBatchGet

```go
func (c *OfficialAccountPublishClient) PublishBatchGet(ctx context.Context, data *schema.BatchGetReq) (*schema.BatchGetRes, error)
```
## PublishBatchGet 获取成功发布列表

接口文档参考：
https://developers.weixin.qq.com/doc/offiaccount/Publish/Get_publication_records.html

参数：

    ctx  - 请求上下文
    data - 查询条件，包含以下字段：
      • Offset: 从全部发布记录的该偏移位置开始返回
      • Count: 返回发布记录的数量

返回值：

    *schema.BatchGetRes 包含以下字段：
      • TotalCount: 发布记录总数
      • ItemCount: 本次调用获取的发布记录数量
      • Item: 发布记录列表，每个元素包含以下字段：
        • ArticleID: 文章ID
        • Title: 文章标题
        • URL: 文章链接
        • UpdateTime: 更新时间

    error 调用过程中遇到的错误（如有）

#### func (*OfficialAccountPublishClient) PublishDelete

```go
func (c *OfficialAccountPublishClient) PublishDelete(ctx context.Context, articleID string, index int) (*response2.OfficialAccountRes, error)
```
## PublishDelete 删除发布

接口文档参考：
https://developers.weixin.qq.com/doc/offiaccount/Publish/Delete_posts.html

参数：

    ctx      - 请求上下文
    articleID - 文章ID
    index    - 文章在图文素材中的位置

返回值：

    *response2.OfficialAccountRes 包含以下字段：
      • ErrCode: 错误码
      • ErrMsg: 错误信息

    error 调用过程中遇到的错误（如有）

#### func (*OfficialAccountPublishClient) PublishGet

```go
func (c *OfficialAccountPublishClient) PublishGet(ctx context.Context, publishID uint64) (*schema.PublishGetRes, error)
```
## PublishGet 发布状态轮询接口

接口文档参考： https://developers.weixin.qq.com/doc/offiaccount/Publish/Get_status.html

参数：

    ctx      - 请求上下文
    publishID - 发布任务ID

返回值：

    *schema.PublishGetRes 包含以下字段：
      • PublishID: 发布任务ID
      • Status: 发布状态
      • ArticleURL: 文章链接

    error 调用过程中遇到的错误（如有）

#### func (*OfficialAccountPublishClient) PublishGetArticle

```go
func (c *OfficialAccountPublishClient) PublishGetArticle(ctx context.Context, articleID string) (*schema.PublishGetArticleRes, error)
```
## PublishGetArticle 通过 article_id 获取已发布文章

接口文档参考：
https://developers.weixin.qq.com/doc/offiaccount/Publish/Get_article_from_id.html

参数：

    ctx      - 请求上下文
    articleID - 文章ID

返回值：

    *schema.PublishGetArticleRes 包含以下字段：
      • Article: 文章内容

    error 调用过程中遇到的错误（如有）

#### func (*OfficialAccountPublishClient) PublishSubmit

```go
func (c *OfficialAccountPublishClient) PublishSubmit(ctx context.Context, mediaID string) (*schema.PublishSubmitRes, error)
```
## PublishSubmit 发布接口

接口文档参考： https://developers.weixin.qq.com/doc/offiaccount/Publish/Publish.html

参数：

    ctx    - 请求上下文
    mediaID - 媒体ID

返回值：

    *schema.PublishSubmitRes 包含以下字段：
      • PublishID: 发布任务ID

    error 调用过程中遇到的错误（如有）
