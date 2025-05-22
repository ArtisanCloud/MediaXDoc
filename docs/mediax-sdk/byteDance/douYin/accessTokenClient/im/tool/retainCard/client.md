# retainCard
--
    import "."


## Usage

#### type DouYinIMToolRetainCardClient

```go
type DouYinIMToolRetainCardClient struct {
	*kernel.BaseClient
}
```


#### func  NewClient

```go
func NewClient(c *kernel.BaseClient) *DouYinIMToolRetainCardClient
```

#### func (*DouYinIMToolRetainCardClient) DeleteRetainConsultCard

```go
func (c *DouYinIMToolRetainCardClient) DeleteRetainConsultCard(ctx context.Context, cardId string) (*schema2.DouYinIMToolDeleteRetainConsultCardRes, error)
```
## DeleteRetainConsultCard 删除留资卡片

接口文档参考：
https://developer.open-douyin.com/docs/resource/zh-CN/dop/develop/openapi/search-management/business-tool/retain-consult-card/delete-retain-consult-card

参数：

    ctx    - 请求上下文
    cardId - 留资卡片ID

返回值：

    *schema.DouYinIMToolDeleteRetainConsultCardRes 包含以下字段：
      • Success: 操作是否成功
      • Extra: 通用返回信息（log_id、now、error_code 等）
      • Data: 业务数据主体，包含具体的业务响应信息
    error 调用过程中遇到的错误（如有）

#### func (*DouYinIMToolRetainCardClient) GetRetainConsultCard

```go
func (c *DouYinIMToolRetainCardClient) GetRetainConsultCard(ctx context.Context) (*schema2.DouYinIMToolGetRetainConsultCardRes, error)
```
## GetRetainConsultCard 查询留资卡片

接口文档参考：
https://developer.open-douyin.com/docs/resource/zh-CN/dop/develop/openapi/search-management/business-tool/retain-consult-card/query-retain-consult-card

参数：

    ctx  - 请求上下文

返回值：

    *schema.DouYinIMToolGetRetainConsultCardRes 包含以下字段：
      • CardList: 留资卡片列表，包含卡片ID、标题、媒体ID、组件列表等信息
      • Extra: 通用返回信息（log_id、now、error_code 等）
      • Data: 业务数据主体，包含具体的业务响应信息
    error 调用过程中遇到的错误（如有）

#### func (*DouYinIMToolRetainCardClient) SaveRetainConsultCard

```go
func (c *DouYinIMToolRetainCardClient) SaveRetainConsultCard(ctx context.Context, data *schema2.DouYinIMToolRetainConsultCardReq) (*schema2.DouYinIMToolRetainConsultCardRes, error)
```
## SaveRetainConsultCard 创建/更新留资卡片

接口文档参考：
https://developer.open-douyin.com/docs/resource/zh-CN/dop/develop/openapi/search-management/business-tool/retain-consult-card/create-retain-consult-card

参数：

    ctx  - 请求上下文
    data - 创建/更新留资卡片请求参数
      • Title: 卡片标题
      • MediaId: 媒体ID
      • Components: 组件列表

返回值：

    *schema.DouYinIMToolRetainConsultCardRes 包含以下字段：
      • CardId: 留资卡片ID
      • Extra: 通用返回信息（log_id、now、error_code 等）
      • Data: 业务数据主体，包含具体的业务响应信息
    error 调用过程中遇到的错误（如有）
