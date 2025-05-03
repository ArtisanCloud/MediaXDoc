# config
--
    import "."


## Usage

```go
const (
	// Wechat
	WechatAppAPIUrl    string = "https://api.weixin.qq.com"
	WechatAuthTokenUrl string = "https://api.weixin.qq.com/cgi-bin/token"

	// Google
	GoogleAppAPIUrl     string = "https://www.googleapis.com"
	GoogleYoutubeAPIUrl string = "https://www.googleapis.com/youtube"
	GoogleBloggerAPIUrl string = "https://www.googleapis.com/blogger"

	// ByteDance
	ByteDanceDouYinAPIUrl       string = "https://open.douyin.com/"
	ByteDanceDouYinAuthTokenUrl string = "https://open.douyin.com/oauth/client_token/"
)
```

#### type BaseConfig

```go
type BaseConfig struct {
	ApiUrl      string  `yaml:"api_url" json:"api_url"`
	ProxyApiUrl string  `yaml:"proxy_api_url" json:"proxy_api_url"`
	Timeout     float64 `yaml:"timeout" json:"timeout"`
	HttpDebug   bool    `yaml:"http_debug" json:"http_debug"`
}
```


#### type BiliBiliConfig

```go
type BiliBiliConfig struct {
	*ClientConfig `yaml:",inline"`
	GetOAuthToken func(key string, refresh bool) (token object.HashMap) `yaml:"token;omitempty" json:"token;omitempty"`
}
```


#### type ByteDanceDouYinConfig

```go
type ByteDanceDouYinConfig struct {
	*ClientConfig `yaml:",inline"`
}
```


#### type ClientConfig

```go
type ClientConfig struct {
	*BaseConfig  `yaml:",inline"`
	*OAuthConfig `yaml:"oauth"`
}
```


#### type GoogleBloggerConfig

```go
type GoogleBloggerConfig struct {
	*ClientConfig `yaml:",inline"`
	GetOAuthToken func(key string, refresh bool) (token object.HashMap) `yaml:"token;omitempty" json:"token;omitempty"`
	OauthKey      string                                                `yaml:"oauth_key;omitempty" json:"oauth_key;omitempty"`
}
```


#### type GoogleYouTubeConfig

```go
type GoogleYouTubeConfig struct {
	*ClientConfig `yaml:",inline"`
	GetOAuthToken func(key string, refresh bool) (token object.HashMap) `yaml:"token;omitempty" json:"token;omitempty"`
	OauthKey      string                                                `yaml:"oauth_key;omitempty" json:"oauth_key;omitempty"`
}
```


#### type LocalConfig

```go
type LocalConfig struct {
	*WeChatOfficialAccountConfig `yaml:"wechat_official_account_config" json:"wechat_official_account_config"`
	*GoogleYouTubeConfig         `yaml:"google_youtube_config" json:"google_youtube_config"`
	*GoogleBloggerConfig         `yaml:"google_blogger_config" json:"google_blogger_config"`
	*ByteDanceDouYinConfig       `yaml:"byte_dance_douyin_config" json:"douyin_config"`
	*RedBookJuGuangConfig        `yaml:"redbook_juguang_config" json:"redbook_juguang_config"`
	*BiliBiliConfig              `yaml:"bilbili_config" json:"bilbili_config"`
}
```


#### type MediaXConfig

```go
type MediaXConfig struct {
	Logger *config.LogConfig
}
```


#### type OAuthConfig

```go
type OAuthConfig struct {
	// 可以参考youtube的oauth流程：https://developers.google.cn/youtube/v3/guides/authentication?hl=zh-cn
	// 可选项，使用 omitempty 来省略空值字段
	AccessTokenUrl      string `yaml:"access_token_url,omitempty" json:"access_token_url,omitempty"`             // 获取 access token 的 URI (可选)
	ProxyAccessTokenUrl string `yaml:"proxy_access_token_url,omitempty" json:"proxy_access_token_url,omitempty"` // 获取 access token 的 URI (可选)
	OAuthUrl            string `yaml:"oauth_url,omitempty" json:"oauth_url,omitempty"`
	ProxyOAuthUrl       string `yaml:"proxy_oauth_url,omitempty" json:"proxy_oauth_url,omitempty"`
	ClientID            string `yaml:"client_id" json:"client_id"`                                     // OAuth 客户端ID (必填)
	ClientSecret        string `yaml:"client_secret" json:"client_secret"`                             // OAuth 客户端密钥 (必填)
	RedirectUrl         string `yaml:"redirect_url,omitempty" json:"redirect_url,omitempty"`           // 重定向 URL (可选)
	Name                string `yaml:"name,omitempty" json:"name,omitempty"`                           // 授权范围 (可选，只有在存在时才包括)
	Scope               string `yaml:"scope,omitempty" json:"scope,omitempty"`                         // 授权范围 (可选，只有在存在时才包括)
	State               string `yaml:"state,omitempty" json:"state,omitempty"`                         // 状态参数 (可选，只有在存在时才包括)
	GrantType           string `yaml:"grant_type,omitempty" json:"grant_type,omitempty"`               // 授权类型 (可选，只有在存在时才包括)
	RefreshTokenUri     string `yaml:"refresh_token_uri,omitempty" json:"refresh_token_uri,omitempty"` // 刷新 token 的 URI (可选，只有在存在时才包括)

	// 存储用字段，只有在获取到 token 后才需要
	AccessToken  string `yaml:"access_token,omitempty" json:"access_token,omitempty"`   // 存储获取到的 access token (可选，只有在存在时才包括)
	RefreshToken string `yaml:"refresh_token,omitempty" json:"refresh_token,omitempty"` // 存储获取到的 refresh token (可选，只有在存在时才包括)
	TokenExpiry  int64  `yaml:"token_expiry,omitempty" json:"token_expiry,omitempty"`   // 访问令牌的过期时间 (可选，只有在存在时才包括)
}
```


#### type RedBookJuGuangConfig

```go
type RedBookJuGuangConfig struct {
	*ClientConfig `yaml:",inline"`
	GetOAuthToken func(key string, refresh bool) (token object.HashMap) `yaml:"token;omitempty" json:"token;omitempty"`
}
```


#### type WeChatOfficialAccountConfig

```go
type WeChatOfficialAccountConfig struct {
	*ClientConfig `yaml:",inline"`
}
```
