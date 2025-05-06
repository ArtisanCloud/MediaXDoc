# taskBox
--
    import "."


## Usage

#### type DouYinTaskBoxClient

```go
type DouYinTaskBoxClient struct {
	*kernel.BaseClient
}
```

DouYinTaskBoxClient 抖音任务盒子客户端

#### func  NewClient

```go
func NewClient(c *kernel.BaseClient) *DouYinTaskBoxClient
```
NewClient 创建抖音任务盒子客户端

#### func (*DouYinTaskBoxClient) AgencyQueryBillLink

```go
func (c *DouYinTaskBoxClient) AgencyQueryBillLink(ctx context.Context, billDate string) (*schema.DouYinTaskBoxAgencyQueryBillLinkRes, error)
```
## AgencyQueryBillLink 查询推广计划视频数据下载链接

接口文档参考：
https://developer.open-douyin.com/docs/resource/zh-CN/dop/develop/openapi/taskbox/agency-query-bill-link

参数：

    ctx context.Context 请求上下文
    billDate string 账单日期，格式为YYYYMMDD

返回值：

    *schema.DouYinTaskBoxAgencyQueryBillLinkRes 包含以下字段：
      • LogId: 日志ID，oncall时请携带此参数值
      • Data: 业务数据主体，包含具体的业务响应信息
        - BillLink: 推广计划视频数据下载链接
      • ErrMsg: 错误信息
      • ErrNo: 错误码
    error 调用过程中遇到的错误（如有）

#### func (*DouYinTaskBoxClient) AgencyQueryVideoSum

```go
func (c *DouYinTaskBoxClient) AgencyQueryVideoSum(ctx context.Context, videoIds []int64) (*schema.DouYinTaskBoxAgencyQueryVideoSumRes, error)
```
## AgencyQueryVideoSum 查询视频任务相关实时汇总数据

接口文档参考：
https://developer.open-douyin.com/docs/resource/zh-CN/dop/develop/openapi/taskbox/agency-query-video-sum

参数：

    ctx context.Context 请求上下文
    videoIds []int64 视频ID列表

返回值：

    *schema.DouYinTaskBoxAgencyQueryVideoSumRes 包含以下字段：
      • LogId: 日志ID，oncall时请携带此参数值
      • Data: 业务数据主体，包含具体的业务响应信息
        - Data: 视频汇总数据列表，包含以下字段：
          • BillingGmvTd: 当日GMV（Gross Merchandise Volume，商品交易总额）
          • BillingRefundGmvTd: 当日退款GMV
          • VideoId: 视频ID
          • TaskId: 任务ID
          • AgentId: 代理商ID
          • PublishTime: 发布时间（时间戳）
      • ErrMsg: 错误信息
      • ErrNo: 错误码
    error 调用过程中遇到的错误（如有）

#### func (*DouYinTaskBoxClient) ChangeUserBindAgent

```go
func (c *DouYinTaskBoxClient) ChangeUserBindAgent(ctx context.Context, data *schema.DouYinTaskBoxChangeUserBindAgentReq) (*schema.DouYinTaskBoxChangeUserBindAgentRes, error)
```
## ChangeUserBindAgent 换绑团长

接口文档参考：
https://developer.open-douyin.com/docs/resource/zh-CN/dop/develop/openapi/taskbox/change-user-bind-agent

参数：

    ctx context.Context 请求上下文
    data *schema.DouYinTaskBoxChangeUserBindAgentReq 换绑请求参数，包含以下字段：
      • DouyinID: 达人的抖音号
      • NewAgentID: 达人换绑的团长ID
      • OldAgentID: 达人当前绑定的团长ID

返回值：

    *schema.DouYinTaskBoxChangeUserBindAgentRes 包含以下字段：
      • LogId: 日志ID，oncall时请携带此参数值
      • ErrMsg: 错误信息
      • ErrNo: 错误码
    error 调用过程中遇到的错误（如有）

#### func (*DouYinTaskBoxClient) GenAgentLink

```go
func (c *DouYinTaskBoxClient) GenAgentLink(ctx context.Context, data *schema.DouYinTaskBoxGenAgentLinkReq) (*schema.DouYinTaskBoxGenAgentLinkRes, error)
```
## GenAgentLink 获取合作链接

接口文档参考：
https://developer.open-douyin.com/docs/resource/zh-CN/dop/develop/openapi/taskbox/gen-agent-link

参数：

    ctx context.Context 请求上下文
    data *schema.DouYinTaskBoxGenAgentLinkReq 生成链接请求参数，包含以下字段：
      • AgentID: 团长ID
      • AgencyTalentUID: 开发者透传的达人uid
      • AppID: 小程序appid
      • TaskCategory: 任务类别枚举（1=短视频任务，2=直播任务）
      • TaskID: 任务ID

返回值：

    *schema.DouYinTaskBoxGenAgentLinkRes 包含以下字段：
      • LogId: 日志ID，oncall时请携带此参数值
      • Data: 业务数据主体，包含具体的业务响应信息
        - WebLink: 网页链接
        - AppLink: 小程序链接
      • ErrMsg: 错误信息
      • ErrNo: 错误码
    error 调用过程中遇到的错误（如有）

#### func (*DouYinTaskBoxClient) GetAgencyUserBindRecord

```go
func (c *DouYinTaskBoxClient) GetAgencyUserBindRecord(ctx context.Context, data *schema.DouYinTaskBoxGetAgencyUserBindRecordReq) (*schema.DouYinTaskBoxGetAgencyUserBindRecordRes, error)
```
## GetAgencyUserBindRecord 查询绑定关系

接口文档参考：
https://developer.open-douyin.com/docs/resource/zh-CN/dop/develop/openapi/taskbox/get-agency-user-bind-record

参数：

    ctx context.Context 请求上下文
    data *schema.DouYinTaskBoxGetAgencyUserBindRecordReq 查询请求参数，包含以下字段：
      • PageNo: 页号
      • PageSize: 页大小
      • AgencyTalentUID: 机构侧达人uid
      • AgentID: 团长ID
      • DouyinID: 达人抖音号

返回值：

    *schema.DouYinTaskBoxGetAgencyUserBindRecordRes 包含以下字段：
      • Data: 业务数据主体，包含具体的业务响应信息
        - Data: 绑定关系列表，包含以下字段：
          • AgentID: 团长ID
          • DouyinID: 达人抖音号
          • BindTime: 绑定时间
          • UnbindTime: 解绑时间
      • LogId: 日志ID，oncall时请携带此参数值
      • ErrMsg: 错误信息
      • ErrNo: 错误码
    error 调用过程中遇到的错误（如有）

#### func (*DouYinTaskBoxClient) QueryViolateTalentList

```go
func (c *DouYinTaskBoxClient) QueryViolateTalentList(ctx context.Context) (*schema.DouYinTaskBoxQueryViolateTalentListRes, error)
```
## QueryViolateTalentList 中介查询违规达人列表

接口文档参考：
https://developer.open-douyin.com/docs/resource/zh-CN/dop/develop/openapi/taskbox/query-violate-talent-list

参数：

    ctx context.Context 请求上下文

返回值：

    *schema.DouYinTaskBoxQueryViolateTalentListRes 包含以下字段：
      • LogId: 日志ID，oncall时请携带此参数值
      • Data: 业务数据主体，包含具体的业务响应信息
        - ViolateTalentsURL: 违规达人excel下载链接
      • ErrMsg: 错误信息
      • ErrNo: 错误码
    error 调用过程中遇到的错误（如有）

#### func (*DouYinTaskBoxClient) SaveAgent

```go
func (c *DouYinTaskBoxClient) SaveAgent(ctx context.Context, data *schema.DouYinTaskBoxSaveAgentReq) (*schema.DouYinTaskBoxSaveAgentRes, error)
```
## SaveAgent 创建团长

接口文档参考：
https://developer.open-douyin.com/docs/resource/zh-CN/dop/develop/openapi/taskbox/save-agent

参数：

    ctx context.Context 请求上下文
    data *schema.DouYinTaskBoxSaveAgentReq 创建团长请求参数，包含以下字段：
      • AgentID: 团长ID（创建团长时，agent_id不传或传0）
      • AgentNickname: 团长的昵称，全局唯一

返回值：

    *schema.DouYinTaskBoxSaveAgentRes 包含以下字段：
      • Data: 业务数据主体，包含具体的业务响应信息
        - AgentID: 团长ID
      • LogId: 日志ID，oncall时请携带此参数值
      • ErrMsg: 错误信息
      • ErrNo: 错误码
    error 调用过程中遇到的错误（如有）
