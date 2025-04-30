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


#### func  NewClient

```go
func NewClient(c *kernel.BaseClient) *OfficialAccountPublishClient
```

#### func (*OfficialAccountPublishClient) DraftAdd

```go
func (comp *OfficialAccountPublishClient) DraftAdd(ctx context.Context, data *request.DraftAddReq) (*response.DraftAddRes, error)
```
DraftAdd 新建草稿
https://developers.weixin.qq.com/doc/offiaccount/Draft_Box/Add_draft.html

#### func (*OfficialAccountPublishClient) DraftBatchGet

```go
func (comp *OfficialAccountPublishClient) DraftBatchGet(ctx context.Context, data *request.BatchGetReq) (*response.BatchGetRes, error)
```
DraftBatchGet 获取草稿列表
https://developers.weixin.qq.com/doc/offiaccount/Draft_Box/Count_drafts.html

#### func (*OfficialAccountPublishClient) DraftCheckSwitch

```go
func (comp *OfficialAccountPublishClient) DraftCheckSwitch(ctx context.Context) (*response.CheckSwitchRes, error)
```
DraftCheckSwitch M检查P端开关
https://developers.weixin.qq.com/doc/offiaccount/Draft_Box/Temporary_MP_Switch.html

#### func (*OfficialAccountPublishClient) DraftCount

```go
func (comp *OfficialAccountPublishClient) DraftCount(ctx context.Context) (*response.DraftCountRes, error)
```
DraftCount 获取草稿总数
https://developers.weixin.qq.com/doc/offiaccount/Draft_Box/Count_drafts.html

#### func (*OfficialAccountPublishClient) DraftDelete

```go
func (comp *OfficialAccountPublishClient) DraftDelete(ctx context.Context, mediaID string) (*response2.OfficialAccountRes, error)
```
DraftDelete 删除草稿
https://developers.weixin.qq.com/doc/offiaccount/Draft_Box/Delete_draft.html

#### func (*OfficialAccountPublishClient) DraftGet

```go
func (comp *OfficialAccountPublishClient) DraftGet(ctx context.Context, mediaID string) (*response.DraftGetRes, error)
```
DraftGet 获取草稿
https://developers.weixin.qq.com/doc/offiaccount/Draft_Box/Get_draft.html

#### func (*OfficialAccountPublishClient) DraftSwitch

```go
func (comp *OfficialAccountPublishClient) DraftSwitch(ctx context.Context) (*response2.OfficialAccountRes, error)
```
DraftSwitch MP端开关
https://developers.weixin.qq.com/doc/offiaccount/Draft_Box/Temporary_MP_Switch.html

#### func (*OfficialAccountPublishClient) DraftUpdate

```go
func (comp *OfficialAccountPublishClient) DraftUpdate(ctx context.Context, data *request.DraftUpdateReq) (*response2.OfficialAccountRes, error)
```
DraftUpdate 修改草稿
https://developers.weixin.qq.com/doc/offiaccount/Draft_Box/Update_draft.html

#### func (*OfficialAccountPublishClient) PublishBatchGet

```go
func (comp *OfficialAccountPublishClient) PublishBatchGet(ctx context.Context, data *request.BatchGetReq) (*response.BatchGetRes, error)
```
PublishBatchGet 获取成功发布列表
https://developers.weixin.qq.com/doc/offiaccount/Publish/Get_publication_records.html

#### func (*OfficialAccountPublishClient) PublishDelete

```go
func (comp *OfficialAccountPublishClient) PublishDelete(ctx context.Context, articleID string, index int) (*response2.OfficialAccountRes, error)
```
PublishDelete 删除发布
https://developers.weixin.qq.com/doc/offiaccount/Publish/Delete_posts.html

#### func (*OfficialAccountPublishClient) PublishGet

```go
func (comp *OfficialAccountPublishClient) PublishGet(ctx context.Context, publishID uint64) (*response.PublishGetRes, error)
```
PublishGet 发布状态轮询接口
https://developers.weixin.qq.com/doc/offiaccount/Publish/Get_status.html

#### func (*OfficialAccountPublishClient) PublishGetArticle

```go
func (comp *OfficialAccountPublishClient) PublishGetArticle(ctx context.Context, articleID string) (*response.PublishGetArticleRes, error)
```
PublishGetArticle 通过 article_id 获取已发布文章
https://developers.weixin.qq.com/doc/offiaccount/Publish/Get_article_from_id.html

#### func (*OfficialAccountPublishClient) PublishSubmit

```go
func (comp *OfficialAccountPublishClient) PublishSubmit(ctx context.Context, mediaID string) (*response.PublishSubmitRes, error)
```
PublishSubmit 发布接口
https://developers.weixin.qq.com/doc/offiaccount/Publish/Publish.html
