# appletTemplate
--
    import "."


## Usage

#### type DouYinIMToolAppletTemplateClient

```go
type DouYinIMToolAppletTemplateClient struct {
	*kernel.BaseClient
}
```


#### func  NewClient

```go
func NewClient(c *kernel.BaseClient) *DouYinIMToolAppletTemplateClient
```

#### func (*DouYinIMToolAppletTemplateClient) Delete

```go
func (c *DouYinIMToolAppletTemplateClient) Delete(ctx context.Context, cardTemplateId string) (*schema.DouYinIMToolAppletTemplateDeleteRes, error)
```
## Delete 删除小程序引导卡片模板

接口文档参考：
https://developer.open-douyin.com/docs/resource/zh-CN/dop/develop/openapi/search-management/business-tool/micro-app-card/delete-template

参数：

    ctx             - 请求上下文
    cardTemplateId  - 卡片模板ID

返回值：

    *schema.DouYinIMToolAppletTemplateDeleteRes 包含以下字段：
      • Extra: 通用返回信息（log_id、now、error_code 等）
      • Data: 业务数据主体，包含具体的业务响应信息
        - CardTemplateId: 卡片模板ID
    error 调用过程中遇到的错误（如有）

#### func (*DouYinIMToolAppletTemplateClient) Get

```go
func (c *DouYinIMToolAppletTemplateClient) Get(ctx context.Context, data *schema.DouYinIMToolAppletTemplateGetRes) (*schema.DouYinIMToolAppletTemplateGetRes, error)
```
## Get 查询小程序引导卡片模板

接口文档参考：
https://developer.open-douyin.com/docs/resource/zh-CN/dop/develop/openapi/search-management/business-tool/micro-app-card/query-template

参数：

    ctx  - 请求上下文
    data - 查询小程序引导卡片模板请求参数
      • CardTemplateId: 卡片素材ID
      • Count: 每页数量
      • Cursor: 分页游标
      • Status: 卡片状态

返回值：

    *schema.DouYinIMToolAppletTemplateGetRes 包含以下字段：
      • Extra: 通用返回信息（log_id、now、error_code 等）
      • Data: 业务数据主体，包含具体的业务响应信息
        - CardTemplateId: 卡片素材ID
        - Count: 每页数量
        - Cursor: 分页游标
        - Status: 卡片状态
    error 调用过程中遇到的错误（如有）

#### func (*DouYinIMToolAppletTemplateClient) Set

```go
func (c *DouYinIMToolAppletTemplateClient) Set(ctx context.Context, data *schema.DouYinIMToolAppletTemplateSetReq) (*schema.DouYinIMToolAppletTemplateSetRes, error)
```
## Set 创建/更新小程序引导卡片模板

接口文档参考：
https://developer.open-douyin.com/docs/resource/zh-CN/dop/develop/openapi/search-management/business-tool/micro-app-card/create-template

参数：

    ctx  - 请求上下文
    data - 创建/更新小程序引导卡片模板请求参数
      • AppId: 小程序账号名
      • Name: 小程序/小游戏名
      • IconMediaId: 小程序/小游戏头像媒体ID
      • CardTemplateId: 卡片模板ID
      • CardType: 卡片类型
      • Content: 卡片内容
      • MediaId: 媒体ID
      • Title: 卡片标题

返回值：

      *schema.DouYinIMToolAppletTemplateSetRes 包含以下字段：
        • Extra: 通用返回信息（log_id、now、error_code 等）
        • Data: 业务数据主体，包含具体的业务响应信息
    			- CardTemplateId: 卡片模板ID
      error 调用过程中遇到的错误（如有）
