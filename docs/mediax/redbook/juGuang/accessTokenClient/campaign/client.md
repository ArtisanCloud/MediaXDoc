# campaign
--
    import "."


## Usage

#### type JuGuangCampaignClient

```go
type JuGuangCampaignClient struct {
	*kernel.BaseClient
}
```

JuGuangCampaignClient 广告计划管理

#### func  NewClient

```go
func NewClient(c *kernel.BaseClient) *JuGuangCampaignClient
```
NewClient 创建一个聚光广告计划管理客户端实例

#### func (*JuGuangCampaignClient) UpdateCampaignStatus

```go
func (c *JuGuangCampaignClient) UpdateCampaignStatus(ctx context.Context, data *schema.JuGuangCampaignUpdateCampaignStatusReq) (*schema.JuGuangCampaignUpdateCampaignStatusRes, error)
```
## UpdateCampaignStatus 广告计划 - 修改广告计划状态

接口文档参考：
https://ad.xiaohongshu.com/openApiDoc?uba_pre=18.target_package..1712048419713&uba_ppre=18.aurora_asset_manage..1712048416043&uba_index=11&articleId=3149

参数：

    ctx  - 请求上下文
    data - 请求参数，包含以下字段：
      • AdvertiserId: 广告主ID
      • CampaignIds: 计划ID列表	至少传一个限制单次变更计划数量，最多传20
      • ActionType: 1：开启2：暂停3：删除

返回值：

      *schema.JuGuangCampaignUpdateCampaignStatusRes 包含以下字段：
    	  • JuGuangRes 基础响应
       • Data: 业务数据主体，包含具体的业务响应信息
    		• CampaignIds 成功更新的广告计划ID列表

#### func (*JuGuangCampaignClient) UpdateCreativeStatus

```go
func (c *JuGuangCampaignClient) UpdateCreativeStatus(ctx context.Context, data *schema.JuGuangCampaignUpdateCreativeStatusReq) (*schema.JuGuangCampaignUpdateCreativeStatusRes, error)
```
## UpdateCreativeStatus 广告创意 - 修改广告创意状态

接口文档参考：
https://ad.xiaohongshu.com/openApiDoc?uba_pre=18.target_package..1712048419713&uba_ppre=18.aurora_asset_manage..1712048416043&uba_index=11&articleId=3157

参数：

    ctx  - 请求上下文
    data - 请求参数，包含以下字段：
      • AdvertiserId: 广告主ID
      • CreativityIds: 创意ID列表 (至少传一个，限制单次变更创意数量，最多传20)
      • ActionType: 操作类型 (1: 启用, 2: 暂停, 3: 删除)

返回值：

    *schema.JuGuangCampaignUpdateCreativeStatusRes 包含以下字段：
      • JuGuangRes 基础响应
      • Data: 业务数据主体，包含具体的业务响应信息
        • CreativityIds: 成功更新的创意ID列表

#### func (*JuGuangCampaignClient) UpdateUnitStatus

```go
func (c *JuGuangCampaignClient) UpdateUnitStatus(ctx context.Context, data *schema.JuGuangCampaignUpdateUnitStatusReq) (*schema.JuGuangCampaignUpdateUnitStatusRes, error)
```
## UpdateUnitStatus 广告单元 - 修改广告单元状态

接口文档参考：
https://ad.xiaohongshu.com/openApiDoc?uba_pre=18.target_package..1712048419713&uba_ppre=18.aurora_asset_manage..1712048416043&uba_index=11&articleId=3152

参数：

    ctx  - 请求上下文
    data - 请求参数，包含以下字段：
      • AdvertiserId: 广告主ID
      • CampaignIds: 广告计划ID列表 (至少传一个，限制单次变更计划数量，最多传20)
      • ActionType: 操作类型 (1: 启用, 2: 暂停, 3: 删除)

返回值：

      *schema.JuGuangCampaignUpdateUnitStatusRes 包含以下字段：
    	  • JuGuangRes 基础响应
       • Data: 业务数据主体，包含具体的业务响应信息
          • CampaignIds: 成功更新的广告计划ID列表
