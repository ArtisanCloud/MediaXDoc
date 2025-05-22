# realtime
--
    import "."


## Usage

#### type JuGuangDataReportRealtimeClient

```go
type JuGuangDataReportRealtimeClient struct {
	*kernel.BaseClient
}
```


#### func  NewClient

```go
func NewClient(c *kernel.BaseClient) *JuGuangDataReportRealtimeClient
```

#### func (*JuGuangDataReportRealtimeClient) AccountLevel

```go
func (c *JuGuangDataReportRealtimeClient) AccountLevel(ctx context.Context, data *schema.JuGuangDataReportRealtimeAccountLevelReq) (*schema.JuGuangDataReportRealtimeAccountLevelRes, error)
```
## AccountLevel 获取账户层级实时数据

接口文档参考：
`https://ad-market.xiaohongshu.com/docs-center?bizType=943&articleId=2731`

参数：

    ctx  - 请求上下文
    data - 请求参数，包含以下字段：
      • advertiser_id: 广告主ID (必填)
      • start_date: 开始时间，格式 yyyy-MM-dd (必填)
      • end_date: 结束时间，格式 yyyy-MM-dd (必填)
      • need_hourly_data: 是否拉取小时数据，默认为false (可选)

返回值：

    *schema.JuGuangDataReportRealtimeAccountLevelRes 包含以下字段：
      • code: 返回码
      • msg: 返回信息
      • success: 接口是否成功
      • data: 时间范围内，广告主维度汇总的一条数据
      • hourly_data: 小时数据
    error 调用过程中遇到的错误（如有）

#### func (*JuGuangDataReportRealtimeClient) CampaignLevel

```go
func (c *JuGuangDataReportRealtimeClient) CampaignLevel(ctx context.Context, data *schema.JuGuangDataReportRealtimeCampaignLevelReq) (*schema.JuGuangDataReportRealtimeCampaignLevelRes, error)
```
## CampaignLevel 获取计划层级实时数据

接口文档参考：
`https://ad-market.xiaohongshu.com/docs-center?bizType=943&articleId=2732`

参数：

    ctx  - 请求上下文
    data - 请求参数，包含以下字段：
      • advertiser_id: 广告主ID (必填)
      • start_date: 开始时间，格式 yyyy-MM-dd (必填)
      • end_date: 结束时间，格式 yyyy-MM-dd (必填)
      • page_num: 页数，默认1 (可选)
      • page_size: 页大小，默认20，最大100 (可选)
      • sort_column: 排序字段 (可选)
      • sort: 升降序 (可选)
      • name: 搜索计划名称 (可选)
      • id: 搜索计划ID (可选)
      • data_caliber: 数据指标归因时间类型 (可选)
      • need_hourly_data: 是否拉取小时数据，默认为false (可选)

返回值：

    *schema.JuGuangDataReportRealtimeCampaignLevelRes 包含以下字段：
      • code: 返回码
      • msg: 返回信息
      • success: 接口是否成功
      • page: 分页信息
      • campaign_dtos: 计划数据列表
      • total_data: 汇总数据
    error 调用过程中遇到的错误（如有）

#### func (*JuGuangDataReportRealtimeClient) CreativeLevel

```go
func (c *JuGuangDataReportRealtimeClient) CreativeLevel(ctx context.Context, data *schema.JuGuangDataReportRealtimeCreativeLevelReq) (*schema.JuGuangDataReportRealtimeCreativeLevelRes, error)
```
## CreativeLevel 获取创意层级实时数据

接口文档参考：
`https://ad-market.xiaohongshu.com/docs-center?bizType=943&articleId=2734`

参数：

    ctx  - 请求上下文
    data - 请求参数，包含以下字段：
      • advertiser_id: 广告主ID (必填)
      • page_num: 页数，默认1 (可选)
      • page_size: 页大小，默认20，最大100 (可选)
      • start_date: 开始时间，格式 yyyy-MM-dd (必填)
      • end_date: 结束时间，格式 yyyy-MM-dd (必填)
      • sort_column: 排序字段 (可选)
      • sort: 升降序 (可选)
      • placement_list: 广告类型筛选 (可选)
      • creativity_filter_state: 创意状态过滤 (可选)
      • creativity_create_begin_time: 创意创建时间范围开始 (可选)
      • creativity_create_end_time: 创意创建时间范围结束 (可选)
      • conversion_type: 创意类型筛选 (可选)
      • programmatic_list: 创意组合方式筛选 (可选)
      • creativity_audit_state: 创意审核状态筛选 (可选)
      • name: 搜索创意名称 (可选)
      • id: 搜索创意ID (可选)
      • data_caliber: 数据指标归因时间类型 (可选)
      • need_hourly_data: 是否拉取小时数据，默认为false (可选)

返回值：

    *schema.JuGuangDataReportRealtimeCreativeLevelRes 包含以下字段：
      • code: 返回码
      • msg: 返回信息
      • success: 接口是否成功
      • page: 分页信息
      • creativity_dtos: 创意数据列表
      • total_data: 汇总数据
    error 调用过程中遇到的错误（如有）

#### func (*JuGuangDataReportRealtimeClient) KeywordLevel

```go
func (c *JuGuangDataReportRealtimeClient) KeywordLevel(ctx context.Context, data *schema.JuGuangDataReportRealtimeKeywordLevelReq) (*schema.JuGuangDataReportRealtimeKeywordLevelRes, error)
```
## KeywordLevel 获取关键词层级实时数据

接口文档参考：
`https://ad-market.xiaohongshu.com/docs-center?bizType=943&articleId=3072`

参数：

    ctx  - 请求上下文
    data - 请求参数，包含以下字段：
      • advertiser_id: 广告主ID (必填)
      • page_num: 页数，默认1 (可选)
      • page_size: 页大小，默认20，最大100 (可选)
      • start_date: 开始时间，格式 yyyy-MM-dd (必填)
      • end_date: 结束时间，格式 yyyy-MM-dd (必填)
      • sort_column: 排序字段 (可选)
      • sort: 升降序 (可选)
      • keyword_name: 搜索关键词名词 (可选)
      • campaign_name: 搜索计划名称 (可选)
      • unit_name: 搜索单元名称 (可选)
      • data_caliber: 数据指标归因时间类型 (可选)
      • need_hourly_data: 是否拉取小时数据，默认为false (可选)

返回值：

    *schema.JuGuangDataReportRealtimeKeywordLevelRes 包含以下字段：
      • code: 返回码
      • msg: 返回信息
      • success: 接口是否成功
      • page: 分页信息
      • keyword_dtos: 关键词数据列表
      • total_data: 汇总数据
    error 调用过程中遇到的错误（如有）

#### func (*JuGuangDataReportRealtimeClient) TargetLevel

```go
func (c *JuGuangDataReportRealtimeClient) TargetLevel(ctx context.Context, data *schema.JuGuangDataReportRealtimeTargetLevelReq) (*schema.JuGuangDataReportRealtimeTargetLevelRes, error)
```
## TargetLevel 获取定向层级实时数据

接口文档参考：
`https://ad-market.xiaohongshu.com/docs-center?bizType=943&articleId=3672`

参数：

    ctx  - 请求上下文
    data - 请求参数，包含以下字段：
      • advertiser_id: 广告主ID (必填)
      • start_date: 开始时间，格式 yyyy-MM-dd (必填)
      • end_date: 结束时间，格式 yyyy-MM-dd (必填)
      • page_num: 页数，默认1 (可选)
      • page_size: 页大小，默认20，最大100 (可选)
      • sort_column: 排序字段 (可选)
      • sort: 升降序 (可选)
      • name: 搜索定向名称 (可选)
      • marketing_target_list: 营销诉求筛选 (可选)
      • need_hourly_data: 是否拉取小时数据，默认为false (可选)

返回值：

    *schema.JuGuangDataReportRealtimeTargetLevelRes 包含以下字段：
      • code: 返回码
      • msg: 返回信息
      • success: 接口是否成功
      • page: 分页信息
      • target_dtos: 定向数据
      • total_data: 汇总数据
    error 调用过程中遇到的错误（如有）

#### func (*JuGuangDataReportRealtimeClient) UnitLevel

```go
func (c *JuGuangDataReportRealtimeClient) UnitLevel(ctx context.Context, data *schema.JuGuangDataReportRealtimeUnitLevelReq) (*schema.JuGuangDataReportRealtimeUnitLevelRes, error)
```
## UnitLevel 获取单元层级实时数据

接口文档参考：
`https://ad-market.xiaohongshu.com/docs-center?bizType=943&articleId=2733`

参数：

    ctx  - 请求上下文
    data - 请求参数，包含以下字段：
      • advertiser_id: 广告主ID (必填)
      • start_date: 开始时间，格式 yyyy-MM-dd (必填)
      • end_date: 结束时间，格式 yyyy-MM-dd (必填)
      • page_num: 页数，默认1 (可选)
      • page_size: 页大小，默认20，最大100 (可选)
      • sort_column: 排序字段 (可选)
      • sort: 升降序 (可选)
      • name: 搜索单元名称 (可选)
      • id: 搜索单元ID (可选)
      • data_caliber: 数据指标归因时间类型 (可选)
      • need_hourly_data: 是否拉取小时数据，默认为false (可选)

返回值：

    *schema.JuGuangDataReportRealtimeUnitLevelRes 包含以下字段：
      • code: 返回码
      • msg: 返回信息
      • success: 接口是否成功
      • page: 分页信息
      • unit_dtos: 单元数据列表
      • total_data: 汇总数据
    error 调用过程中遇到的错误（如有）
