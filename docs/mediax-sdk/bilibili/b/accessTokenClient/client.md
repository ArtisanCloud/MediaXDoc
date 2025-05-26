# accessTokenClient
--
    import "."


## Usage

#### type BiliBiliACClient

```go
type BiliBiliACClient struct {
	// BiliBiliClient B站基础客户端，提供核心API调用功能
	BiliBiliClient *core.BiliBiliClient

	// BiliBiliConfig BiliBili相关配置，用于跨平台功能集成
	BiliBiliConfig *config.BiliBiliConfig

	// AccessTokenHandler 访问令牌处理器，负责令牌的获取和刷新
	AccessTokenHandler *core.BiliBiliAccessTokenHandler
}
```

BiliBiliACClient 是B站访问令牌客户端 用于管理与B站API交互所需的访问令牌和相关配置 示例用法：

    cfg := &config.BiliBiliConfig{...}
    client, err := NewBiliBiliACClient(cfg, logger, cache)

#### func  NewBiliBiliACClient

```go
func NewBiliBiliACClient(cfg *config.BiliBiliConfig, logger *logger.Logger, cache cache.ICache) (*BiliBiliACClient, error)
```
