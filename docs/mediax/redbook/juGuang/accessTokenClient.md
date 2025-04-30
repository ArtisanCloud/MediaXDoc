# juGuang
--
    import "."


## Usage

#### type RedBookJuGuangACClient

```go
type RedBookJuGuangACClient struct {
	RedBookClient      *core.RedBookClient
	JuGuangConfig      *config.RedBookJuGuangConfig
	AccessTokenHandler *core.RedBookAccessTokenHandler
}
```

https://ad-market.xiaohongshu.com/docs-center?articleId=3180&bizType=943

#### func  NewRedBookJuGuangACClient

```go
func NewRedBookJuGuangACClient(cfg *config.RedBookJuGuangConfig, logger *logger.Logger, cache cache.ICache) (*RedBookJuGuangACClient, error)
```

#### func (*RedBookJuGuangACClient) GetAccountClient

```go
func (client *RedBookJuGuangACClient) GetAccountClient() *account.JuGuangAccountClient
```

#### func (*RedBookJuGuangACClient) GetCampaignClient

```go
func (client *RedBookJuGuangACClient) GetCampaignClient() *campaign.JuGuangPromoteCampaignClient
```

#### func (*RedBookJuGuangACClient) GetCreativityClient

```go
func (client *RedBookJuGuangACClient) GetCreativityClient() *creativity.JuGuangPromoteCreativityClient
```

#### func (*RedBookJuGuangACClient) GetNoteClient

```go
func (client *RedBookJuGuangACClient) GetNoteClient() *note.JuGuangNoteClient
```

#### func (*RedBookJuGuangACClient) GetOfflineReportClient

```go
func (client *RedBookJuGuangACClient) GetOfflineReportClient() *offline.JuGuangDataReportOfflineClient
```

#### func (*RedBookJuGuangACClient) GetRealtimeReportClient

```go
func (client *RedBookJuGuangACClient) GetRealtimeReportClient() *realtime.JuGuangDataReportRealtimeClient
```

#### func (*RedBookJuGuangACClient) GetToolsClient

```go
func (client *RedBookJuGuangACClient) GetToolsClient() *tools.JuGuangToolClient
```

#### func (*RedBookJuGuangACClient) GetUnitClient

```go
func (client *RedBookJuGuangACClient) GetUnitClient() *unit.JuGuangPromoteUnitClient
```
