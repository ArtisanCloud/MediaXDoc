# collection
--
    import "."


## Usage

#### type BiliBiliArticleCollectionClient

```go
type BiliBiliArticleCollectionClient struct {
	*kernel.BaseClient
}
```


#### func  NewClient

```go
func NewClient(c *kernel.BaseClient) *BiliBiliArticleCollectionClient
```

#### func (*BiliBiliArticleCollectionClient) Delete

```go
func (c *BiliBiliArticleCollectionClient) Delete(ctx context.Context, data *schema.BiliBiliArticleCollectionDeleteReq) (*schema.BiliBiliArticleCollectionDeleteRes, error)
```
## Delete 删除文集
接口文档参考：https://open.bilibili.com/doc/4/93289fec-1521-1f3f-c3ec-78108b4c7859#h1-u6587u96C6u4E0Bu6587u7AE0u5217u8868u4FEEu6539
参数：

    ctx  - 请求上下文
    data - 请求参数，包含文集ID

返回值：

    *schema.BiliBiliArticleCollectionDeleteRes - 包含响应码、响应信息、请求ID和TTL
    error - 调用过程中遇到的错误（如有）

#### func (*BiliBiliArticleCollectionClient) Detail

```go
func (c *BiliBiliArticleCollectionClient) Detail(ctx context.Context, data *schema.BiliBiliArticleCollectionDetailReq) (*schema.BiliBiliArticleCollectionDetailRes, error)
```
查询文集详情 ## Detail 查询文集详情

接口文档参考：
https://open.bilibili.com/doc/4/78228e26-1c25-5b65-e107-a08dabf45850#h1-u6587u96C6u4E0Bu6587u7AE0u5217u8868u4FEEu6539

参数：

    ctx - 请求上下文
    data - 请求参数，包含以下字段：
      • id: 文集ID

返回值：

    *schema.BiliBiliArticleCollectionDetailRes 包含以下字段：
      • Code: 响应状态码
      • Message: 响应消息
      • Data: 文集详情数据
    error 调用过程中遇到的错误（如有）

#### func (*BiliBiliArticleCollectionClient) Edit

```go
func (c *BiliBiliArticleCollectionClient) Edit(ctx context.Context, data *schema.BiliBiliArticleCollectionEditReq) (*schema.BiliBiliArticleCollectionEditRes, error)
```
## Edit 文集信息编辑

接口文档参考：
`https://open.bilibili.com/doc/4/0e2f82f8-8b16-2927-0546-ac1a24871501#h1-u6587u96C6u4FE1u606Fu7F16u8F91`

参数：

    ctx  - 请求上下文
    data - 请求参数，包含以下字段：
      • list_id: 文集ID（必填）
      • name: 文集名称（必填）
      • image_url: 文集封面图片URL（可选）
      • summary: 文集简介（可选）

返回值：

    *schema.BiliBiliArticleCollectionEditRes 包含以下字段：
      • code: 响应码
      • message: 响应信息
      • ttl: TTL值
      • data: 文集详细信息
    error 调用过程中遇到的错误（如有）

#### func (*BiliBiliArticleCollectionClient) EditList

```go
func (c *BiliBiliArticleCollectionClient) EditList(ctx context.Context, data *schema.BiliBiliArticleCollectionEditListReq) (*schema.BiliBiliArticleCollectionEditListRes, error)
```
## EditList 文集下文章列表修改

接口文档参考：
`https://open.bilibili.com/doc/4/b20487b7-471b-0717-b3b6-e65dd8a5263d#h1-u6587u96C6u4E0Bu6587u7AE0u5217u8868u4FEEu6539`

参数：

    ctx  - 请求上下文
    data - 请求参数，包含以下字段：
      • list_id: 文集ID（必填）
      • article_ids: 文章ID列表（必填，多个ID用逗号分隔）

返回值：

    *schema.BiliBiliArticleCollectionEditListRes 包含以下字段：
      • code: 响应码
      • message: 响应信息
      • request_id: 请求ID
      • ttl: TTL值
    error 调用过程中遇到的错误（如有）

#### func (*BiliBiliArticleCollectionClient) List

```go
func (c *BiliBiliArticleCollectionClient) List(ctx context.Context) (*schema.BiliBiliArticleCollectionListRes, error)
```
查询文集列表 ## List 查询文集列表

接口文档参考：
https://open.bilibili.com/doc/4/1caef1c1-0576-91e3-00ed-c287e9866d7e#h1-u67E5u8BE2u6587u96C6u5217u8868

参数：

    ctx - 请求上下文

返回值：

    *schema.BiliBiliArticleCollectionListRes 包含以下字段：
      • Code: 响应状态码
      • Message: 响应消息
      • Data: 文集列表数据
    error 调用过程中遇到的错误（如有）
