# offline
--
    import "."


## Usage

#### type JuGuangDataReportOfflineClient

```go
type JuGuangDataReportOfflineClient struct {
	*kernel.BaseClient
}
```

JuGuangDataReportOfflineClient 表示巨量引擎离线数据报表 API 客户端

#### func  NewClient

```go
func NewClient(c *kernel.BaseClient) *JuGuangDataReportOfflineClient
```
NewClient 创建一个新的 JuGuangDataReportOfflineClient 实例

#### func (*JuGuangDataReportOfflineClient) AccountLevel

```go
func (c *JuGuangDataReportOfflineClient) AccountLevel(ctx context.Context, data *schema.JuGuangDataReportOfflineAccountLevelReq) (*schema.JuGuangDataReportOfflineAccountLevelRes, error)
```
## AccountLevel 获取账户层级离线报表数据

接口文档参考： https://ad-market.xiaohongshu.com/docs-center?bizType=943&articleId=2738

参数：

    ctx  - 请求上下文
    data - 请求参数，包含以下字段：
      • advertiser_id: 广告主ID（必填）
      • start_date: 开始时间 YYYY-MM-DD（必填）
      • end_date: 结束时间 YYYY-MM-DD（必填）
      • time_unit: 时间维度（可选，DAY：分天，HOUR：分时，SUMMARY：汇总，默认分天）
      • marketing_target: 营销目标过滤条件（可选）
      • bidding_strategy: 出价方式过滤条件（可选）
      • optimize_target: 推广目标过滤条件（可选）
      • placement: 广告类型过滤条件（可选）
      • promotion_target: 推广标的类型过滤条件（可选）
      • build_type: 搭建方式过滤条件（可选）
      • delivery_mode: 投放模式过滤条件（可选）
      • split_columns: 细分条件（可选）
      • sort_column: 排序字段（可选）
      • sort: 排序方式（可选，asc：升序，desc：降序）
      • page_num: 页码（可选，默认1）
      • page_size: 每页数量（可选，默认20，最大500）
      • data_caliber: 数据指标归因时间类型（可选，0-计费时间，1-转化时间）

返回值：

    *schema.JuGuangDataReportOfflineAccountLevelRes 包含以下字段：
      • data_list: 详细数据列表
      • aggregation_data: 汇总数据
    error 调用过程中遇到的错误（如有）

#### func (*JuGuangDataReportOfflineClient) CampaignLevel

```go
func (c *JuGuangDataReportOfflineClient) CampaignLevel(ctx context.Context, data *schema.JuGuangDataReportOfflineCampaignLevelReq) (*schema.JuGuangDataReportOfflineCampaignLevelRes, error)
```
## CampaignLevel 获取计划层级离线报表数据

接口文档参考： https://ad-market.xiaohongshu.com/docs-center?bizType=943&articleId=2735

参数：

    ctx  - 请求上下文
    data - 请求参数，包含以下字段：
      • advertiser_id: 广告主ID（必填）
      • start_date: 开始时间，格式 YYYY-MM-DD（必填）
      • end_date: 结束时间，格式 YYYY-MM-DD（必填）
      • time_unit: 时间维度（可选，DAY：分天，HOUR：分时，SUMMARY：汇总，默认分天）
      • marketing_target: 营销目标过滤条件（可选）
      • bidding_strategy: 出价方式过滤条件（可选）
      • optimize_target: 推广目标过滤条件（可选）
      • placement: 广告类型过滤条件（可选）
      • promotion_target: 推广标的类型过滤条件（可选）
      • build_type: 搭建方式过滤条件（可选）
      • delivery_mode: 投放模式过滤条件（可选）
      • split_columns: 细分条件（可选）
      • sort_column: 排序字段（可选）
      • sort: 排序方式（可选，asc：升序，desc：降序）
      • page_num: 页码（可选，默认1）
      • page_size: 每页数量（可选，默认20，最大500）
      • data_caliber: 数据指标归因时间类型（可选，0-点击时间，1-转化时间）

返回值：

    *schema.JuGuangDataReportOfflineCampaignLevelRes 包含以下字段：
      • data_list: 详细数据列表
      • aggregation_data: 汇总数据
    error 调用过程中遇到的错误（如有）

#### func (*JuGuangDataReportOfflineClient) CreativeLevel

```go
func (c *JuGuangDataReportOfflineClient) CreativeLevel(ctx context.Context, data *schema.JuGuangDataReportOfflineCreativeLevelReq) (*schema.JuGuangDataReportOfflineCreativeLevelRes, error)
```
## CreativeLevel 获取创意层级离线报表数据

接口文档参考： https://ad-market.xiaohongshu.com/docs-center?bizType=943&articleId=2737

参数：

    ctx  - 请求上下文
    data - 请求参数，包含以下字段：
      • advertiser_id: 广告主ID（必填）
      • start_date: 开始时间 YYYY-MM-DD（必填）
      • end_date: 结束时间 YYYY-MM-DD（必填）
      • time_unit: 时间维度（可选，DAY：分天，HOUR：分时，SUMMARY：汇总，默认分天）
      • marketing_target: 营销目标过滤条件（可选）
      • bidding_strategy: 出价方式过滤条件（可选）
      • optimize_target: 推广目标过滤条件（可选）
      • placement: 广告类型过滤条件（可选）
      • promotion_target: 推广标的类型过滤条件（可选）
      • build_type: 搭建方式过滤条件（可选）
      • delivery_mode: 投放模式过滤条件（可选）
      • split_columns: 细分条件（可选）
      • sort_column: 排序字段（可选）
      • sort: 排序方式（可选，asc：升序，desc：降序）
      • page_num: 页码（可选，默认1）
      • page_size: 每页数量（可选，默认20，最大500）
      • data_caliber: 数据指标归因时间类型（可选，0-点击时间，1-转化时间）

返回值：

    *schema.JuGuangDataReportOfflineCreativeLevelRes 包含以下字段：
      • data_list: 详细数据列表
      • aggregation_data: 汇总数据
    error 调用过程中遇到的错误（如有）

#### func (*JuGuangDataReportOfflineClient) GroupReprot

```go
func (c *JuGuangDataReportOfflineClient) GroupReprot(ctx context.Context, data *schema.JuGuangDataReportOfflineGroupReprotReq) (*schema.JuGuangDataReportOfflineGroupReprotRes, error)
```
## GroupReprot 获取人群包报表

接口文档参考： https://ad-market.xiaohongshu.com/docs-center?bizType=943&articleId=4065

参数：

    ctx  - 请求上下文
    data - 请求参数，包含以下字段：
      • advertiser_id: 广告主ID（必填）
      • startDate: 开始时间 YYYY-MM-DD（必填）
      • endDate: 结束时间 YYYY-MM-DD（必填）
      • timeUnit: 时间维度（必填，DAY：分天，SUMMARY：汇总）
      • columns: 请求列（必填，必须包含groupName, groupId）
      • pageSize: 页面大小（可选，默认20）
      • pageNum: 页面index（可选，默认1）
      • filters: 过滤选项（可选）
      • sorts: 排序选项（可选）
      • needTotal: 是否需要综合数据（可选）
      • reportType: 查询维度（可选，默认为USER_GROUP）

返回值：

    *schema.JuGuangDataReportOfflineGroupReprotRes 包含以下字段：
      • page: 分页信息
      • aggregationData: 综合数据
      • dataList: 分时数据
    error 调用过程中遇到的错误（如有）

#### func (*JuGuangDataReportOfflineClient) KeywordLevel

```go
func (c *JuGuangDataReportOfflineClient) KeywordLevel(ctx context.Context, data *schema.JuGuangDataReportOfflineKeywordLevelReq) (*schema.JuGuangDataReportOfflineKeywordLevelRes, error)
```
## KeywordLevel 获取关键词层级离线报表数据

接口文档参考： https://ad-market.xiaohongshu.com/docs-center?bizType=943&articleId=3073

参数：

    ctx  - 请求上下文
    data - 请求参数，包含以下字段：
      • advertiser_id: 广告主ID（必填）
      • start_date: 开始时间，格式 yyyy-MM-dd（必填）
      • end_date: 结束时间，格式 yyyy-MM-dd（必填）
      • time_unit: 时间维度（可选，"DAY"：分天，"HOUR"：分时，"SUMMARY"：汇总，默认分天）
      • marketing_target: 营销目标过滤条件（可选）
      • bidding_strategy: 出价方式过滤条件（可选）
      • optimize_target: 推广目标过滤条件（可选）
      • promotion_target: 推广标的类型过滤条件（可选）
      • build_type: 搭建方式过滤条件（可选）
      • delivery_mode: 投放模式过滤条件（可选）
      • split_columns: 细分条件（可选）
      • sort_column: 排序字段（可选）
      • sort: 排序方式（可选，asc：升序，desc：降序）
      • page_num: 页码（可选，默认1）
      • page_size: 页大小（可选，默认20，最大500）
      • data_caliber: 数据指标归因时间类型（可选，0-点击时间，1-转化时间）

返回值：

    *schema.JuGuangDataReportOfflineKeywordLevelRes 包含以下字段：
      • data_list: 详细数据列表
      • aggregation_data: 汇总数据
    error 调用过程中遇到的错误（如有）

#### func (*JuGuangDataReportOfflineClient) NoteLevel

```go
func (c *JuGuangDataReportOfflineClient) NoteLevel(ctx context.Context, data *schema.JuGuangDataReportOfflineNoteLevelReq) (*schema.JuGuangDataReportOfflineNoteLevelRes, error)
```
## NoteLevel 获取笔记层级离线报表数据

接口文档参考： https://ad-market.xiaohongshu.com/docs-center?bizType=943&articleId=3803

参数：

    ctx  - 请求上下文
    data - 请求参数，包含以下字段：
      • advertiser_id: 广告主ID（必填）
      • start_date: 开始时间 YYYY-MM-DD（必填）
      • end_date: 结束时间 YYYY-MM-DD（必填）
      • time_unit: 时间维度（可选，DAY：分天，SUMMARY：汇总，默认DAY）
      • sort_column: 排序字段（可选，见文档附录column字段）
      • sort: 排序方式（可选，asc：升序，desc：降序）
      • page_num: 页码（可选，默认1）
      • page_size: 每页数量（可选，默认20，最大500）

返回值：

    *schema.JuGuangDataReportOfflineNoteLevelRes 包含以下字段：
      • total_count: 总条数
      • data_list: 详细数据列表
      • aggregation_data: 汇总数据
    error 调用过程中遇到的错误（如有）

#### func (*JuGuangDataReportOfflineClient) SearchKeyword

```go
func (c *JuGuangDataReportOfflineClient) SearchKeyword(ctx context.Context, data *schema.JuGuangDataReportOfflineSearchKeywordReq) (*schema.JuGuangDataReportOfflineSearchKeywordRes, error)
```
## SearchKeyword 获取搜索词层级离线报表数据

接口文档参考： https://ad-market.xiaohongshu.com/docs-center?bizType=943&articleId=

参数：

    ctx  - 请求上下文
    data - 请求参数，包含以下字段：
      • advertiser_id: 广告主ID（必填）
      • start_date: 开始时间 YYYY-MM-DD（必填）
      • end_date: 结束时间 YYYY-MM-DD（必填）
      • time_unit: 时间维度（可选，DAY：分天，SUMMARY：汇总，默认DAY）
      • sort_column: 排序字段（可选，见文档附录column字段）
      • sort: 排序方式（可选，asc：升序，desc：降序）
      • page_num: 页码（可选，默认1）
      • page_size: 每页数量（可选，默认20，最大500）

返回值：

    *schema.JuGuangDataReportOfflineSearchKeywordRes 包含以下字段：
      • total_count: 总条数
      • data_list: 详细数据列表
      • aggregation_data: 汇总数据
    error 调用过程中遇到的错误（如有）

#### func (*JuGuangDataReportOfflineClient) SeriesLevel

```go
func (c *JuGuangDataReportOfflineClient) SeriesLevel(ctx context.Context, data *schema.JuGuangDataReportOfflineSeriesLevelReq) (*schema.JuGuangDataReportOfflineSeriesLevelRes, error)
```
## SeriesLevel 获取系列层级离线数据报表

接口文档参考： https://ad-market.xiaohongshu.com/docs-center?bizType=943&articleId=3822

参数：

    ctx  - 请求上下文
    data - 请求参数，包含以下字段：
      • advertiser_id: 广告主ID（必填）
      • start_date: 开始时间 YYYY-MM-DD（必填）
      • end_date: 结束时间 YYYY-MM-DD（必填）
      • time_unit: 时间维度（可选，DAY：分天，SUMMARY：汇总，默认DAY）
      • sort_column: 排序字段（可选，见文档附录column字段）
      • sort: 排序方式（可选，asc：升序，desc：降序）
      • page_num: 页码（可选，默认1）
      • page_size: 每页数量（可选，默认20，最大500）

返回值：

    *schema.JuGuangDataReportOfflineSeriesLevelRes 包含以下字段：
      • total_count: 总条数
      • data_list: 详细数据列表
      • aggregation_data: 汇总数据
    error 调用过程中遇到的错误（如有）

#### func (*JuGuangDataReportOfflineClient) SpuLevel

```go
func (c *JuGuangDataReportOfflineClient) SpuLevel(ctx context.Context, data *schema.JuGuangDataReportOfflineSpuLevelReq) (*schema.JuGuangDataReportOfflineSpuLevelRes, error)
```
## SpuLevel 获取SPU层级离线报表数据

接口文档参考： https://ad-market.xiaohongshu.com/docs-center?bizType=943&articleId=3835

参数：

    ctx  - 请求上下文
    data - 请求参数，包含以下字段：
      • advertiser_id: 广告主ID（必填）
      • start_date: 开始时间 YYYY-MM-DD（必填）
      • end_date: 结束时间 YYYY-MM-DD（必填）
      • time_unit: 时间维度（可选，DAY：分天，SUMMARY：汇总，默认DAY）
      • sort_column: 排序字段（可选，见文档附录column字段）
      • sort: 排序方式（可选，asc：升序，desc：降序）
      • page_num: 页码（可选，默认1）
      • page_size: 每页数量（可选，默认20，最大500）

返回值：

    *schema.JuGuangDataReportOfflineSpuLevelRes 包含以下字段：
      • total_count: 总条数
      • data_list: 详细数据列表
      • aggregation_data: 汇总数据
    error 调用过程中遇到的错误（如有）

#### func (*JuGuangDataReportOfflineClient) UnitLevel

```go
func (c *JuGuangDataReportOfflineClient) UnitLevel(ctx context.Context, data *schema.JuGuangDataReportOfflineUnitLevelReq) (*schema.JuGuangDataReportOfflineUnitLevelRes, error)
```
## UnitLevel 获取单元层级离线报表数据

接口文档参考： https://ad-market.xiaohongshu.com/docs-center?bizType=943&articleId=2736

参数：

    ctx  - 请求上下文
    data - 请求参数，包含以下字段：
      • advertiser_id: 广告主ID（必填）
      • start_date: 开始时间，格式 YYYY-MM-DD（必填）
      • end_date: 结束时间，格式 YYYY-MM-DD（必填）
      • time_unit: 时间维度（可选，DAY：分天，HOUR：分时，SUMMARY：汇总，默认分天）
      • marketing_target: 营销目标过滤条件（可选）
      • bidding_strategy: 出价方式过滤条件（可选）
      • optimize_target: 推广目标过滤条件（可选）
      • placement: 广告类型过滤条件（可选）
      • promotion_target: 推广标的类型过滤条件（可选）
      • build_type: 搭建方式过滤条件（可选）
      • delivery_mode: 投放模式过滤条件（可选）
      • split_columns: 细分条件（可选）
      • sort_column: 排序字段（可选）
      • sort: 排序方式（可选，asc：升序，desc：降序）
      • page_num: 页码（可选，默认1）
      • page_size: 每页数量（可选，默认20，最大500）
      • data_caliber: 数据指标归因时间类型（可选，0-点击时间，1-转化时间）

返回值：

    *schema.JuGuangDataReportOfflineUnitLevelRes 包含以下字段：
      • data_list: 详细数据列表
      • aggregation_data: 汇总数据
    error 调用过程中遇到的错误（如有）
