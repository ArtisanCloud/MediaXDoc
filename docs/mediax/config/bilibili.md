# config
--
    import "."

Package config 提供了 MediaX 多平台客户端的配置管理

本包实现了对各个平台的配置结构定义，包括： - 基础配置：API地址、超时设置等 - OAuth配置：认证信息、Token管理等 -
平台配置：各平台特定的配置项

使用说明： 1. 首先需要创建对应平台的配置实例 2. 填写必要的认证信息和配置参数 3. 将配置实例传入对应的客户端创建方法

详细文档请参考各平台的开发者文档： - 微信：https://developers.weixin.qq.com/doc/ -
YouTube：https://developers.google.com/youtube/v3/docs -
抖音：https://developer.open-douyin.com/docs/resource/zh-CN/dop/develop/openapi/ -
小红书：https://open.xiaohongshu.com/document


Package config 提供抖音开放平台相关的配置定义

抖音开放平台提供了两种认证方式： 1. ClientToken：适用于服务端API调用 2. AccessToken：适用于用户授权的API调用

详细文档请参考：
https://developer.open-douyin.com/docs/resource/zh-CN/dop/develop/openapi/


Package config 提供 Google 平台相关的配置定义

Package config 提供小红书聚光平台相关的配置定义

小红书聚光平台是面向品牌主、MCN机构的内容营销平台 支持内容发布、数据分析、账号管理等功能

主要功能： 1. 笔记管理：发布、编辑、删除笔记 2. 数据分析：获取笔记数据、账号数据等 3. 账号管理：授权管理、基础信息等

详细文档请参考： https://open.xiaohongshu.com/document

## Usage

```go
const (
	// Wechat 微信公众号接口地址
	WechatAppAPIUrl    string = "https://api.weixin.qq.com"               // 微信公众号 API 基础地址
	WechatAuthTokenUrl string = "https://api.weixin.qq.com/cgi-bin/token" // 微信公众号获取 access_token 地址

	// Google API 接口地址
	GoogleAppAPIUrl     string = "https://www.googleapis.com"         // Google API 基础地址
	GoogleYoutubeAPIUrl string = "https://www.googleapis.com/youtube" // YouTube API 地址
	GoogleBloggerAPIUrl string = "https://www.googleapis.com/blogger" // Blogger API 地址

	// ByteDance 字节跳动接口地址
	ByteDanceDouYinAPIUrl       string = "https://open.douyin.com/"                    // 抖音开放平台 API 地址
	ByteDanceDouYinAuthTokenUrl string = "https://open.douyin.com/oauth/client_token/" // 抖音获取 client_token 地址

	// RedBook 小红书接口地址
	RedBookJuGuangAPIUrl string = "https://adapi.xiaohongshu.com/" // 小红书聚光平台 API 地址

	// BiliBili 哔哩哔哩接口地址
	BiliBiliAPIUrl string = "https://member.bilibili.com/" // 哔哩哔哩开放平台 API 地址
)
```
各平台的 API 接口地址常量定义

#### type BaseConfig

```go
type BaseConfig struct {
	ApiUrl      string  `yaml:"api_url" json:"api_url"`             // API 基础地址
	ProxyApiUrl string  `yaml:"proxy_api_url" json:"proxy_api_url"` // API 代理地址，用于特殊网络环境
	Timeout     float64 `yaml:"timeout" json:"timeout"`             // 请求超时时间（秒）
	HttpDebug   bool    `yaml:"http_debug" json:"http_debug"`       // 是否开启 HTTP 调试模式
}
```

BaseConfig 基础配置结构体 包含所有平台通用的基础配置项

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
	*ClientConfig `yaml:",inline"` // 基础客户端配置，包含 API 地址、超时设置等

}
```

ByteDanceDouYinConfig 抖音开放平台客户端配置 继承自 ClientConfig，支持 ClientToken 和 AccessToken
两种认证方式

#### type ClientConfig

```go
type ClientConfig struct {
	*BaseConfig  `yaml:",inline"` // 基础配置
	*OAuthConfig `yaml:"oauth"`   // OAuth 配置
}
```

ClientConfig 客户端配置结构体 组合了基础配置和 OAuth 配置

#### type GoogleBloggerConfig

```go
type GoogleBloggerConfig struct {
	*ClientConfig `yaml:",inline"` // 基础客户端配置

	// GetOAuthToken 获取 OAuth Token 的回调函数
	// 参数：
	//   - key: OAuth 密钥
	//   - refresh: 是否刷新 token
	// 返回值：
	//   - token: 包含 access_token 等信息的 HashMap
	GetOAuthToken func(key string, refresh bool) (token object.HashMap) `yaml:"token;omitempty" json:"token;omitempty"`

	// OauthKey OAuth 密钥
	// 用于标识和获取特定的 OAuth 配置
	OauthKey string `yaml:"oauth_key;omitempty" json:"oauth_key;omitempty"`
}
```

GoogleBloggerConfig Blogger 客户端配置 继承自 ClientConfig，添加了 Blogger 特有的配置项

#### type GoogleYouTubeConfig

```go
type GoogleYouTubeConfig struct {
	*ClientConfig `yaml:",inline"` // 基础客户端配置

	// GetOAuthToken 获取 OAuth Token 的回调函数
	// 参数：
	//   - key: OAuth 密钥
	//   - refresh: 是否刷新 token
	// 返回值：
	//   - token: 包含 access_token 等信息的 HashMap
	GetOAuthToken func(key string, refresh bool) (token object.HashMap) `yaml:"token;omitempty" json:"token;omitempty"`

	// OauthKey OAuth 密钥
	// 用于标识和获取特定的 OAuth 配置
	OauthKey string `yaml:"oauth_key;omitempty" json:"oauth_key;omitempty"`
}
```

GoogleYouTubeConfig YouTube 客户端配置 继承自 ClientConfig，添加了 YouTube 特有的配置项

#### type LocalConfig

```go
type LocalConfig struct {
	*WeChatOfficialAccountConfig `yaml:"wechat_official_account_config" json:"wechat_official_account_config"` // 微信公众号配置
	*GoogleYouTubeConfig         `yaml:"google_youtube_config" json:"google_youtube_config"`                   // YouTube 配置
	*GoogleBloggerConfig         `yaml:"google_blogger_config" json:"google_blogger_config"`                   // Blogger 配置
	*ByteDanceDouYinConfig       `yaml:"byte_dance_douyin_config" json:"douyin_config"`                        // 抖音开放平台配置
	*RedBookJuGuangConfig        `yaml:"redbook_juguang_config" json:"redbook_juguang_config"`                 // 小红书聚光平台配置
	*BiliBiliConfig              `yaml:"bilbili_config" json:"bilbili_config"`                                 // B站开放平台配置
}
```

LocalConfig 本地配置结构体 包含所有支持平台的配置信息

#### type MediaXConfig

```go
type MediaXConfig struct {
	Logger *config.LogConfig // 日志配置，用于设置日志级别、输出方式等
}
```

MediaXConfig 全局配置结构体 包含日志配置等全局设置

#### type OAuthConfig

```go
type OAuthConfig struct {
	// OAuth 认证相关 URL
	AccessTokenUrl      string `yaml:"access_token_url,omitempty" json:"access_token_url,omitempty"`             // 获取 access token 的地址
	ProxyAccessTokenUrl string `yaml:"proxy_access_token_url,omitempty" json:"proxy_access_token_url,omitempty"` // 代理获取 access token 的地址
	OAuthUrl            string `yaml:"oauth_url,omitempty" json:"oauth_url,omitempty"`                           // OAuth 授权页面地址
	ProxyOAuthUrl       string `yaml:"proxy_oauth_url,omitempty" json:"proxy_oauth_url,omitempty"`               // OAuth 授权页面代理地址

	// OAuth 客户端认证信息
	ClientID     string `yaml:"client_id" json:"client_id"`                           // OAuth 客户端ID（必填）
	ClientSecret string `yaml:"client_secret" json:"client_secret"`                   // OAuth 客户端密钥（必填）
	RedirectUrl  string `yaml:"redirect_url,omitempty" json:"redirect_url,omitempty"` // 授权回调地址

	// OAuth 授权参数
	Name      string `yaml:"name,omitempty" json:"name,omitempty"`             // 应用名称
	Scope     string `yaml:"scope,omitempty" json:"scope,omitempty"`           // 授权范围
	State     string `yaml:"state,omitempty" json:"state,omitempty"`           // 状态参数，用于防止 CSRF 攻击
	GrantType string `yaml:"grant_type,omitempty" json:"grant_type,omitempty"` // 授权类型，如 authorization_code

	// Token 相关
	RefreshTokenUri string `yaml:"refresh_token_uri,omitempty" json:"refresh_token_uri,omitempty"` // 刷新 token 的地址
	AccessToken     string `yaml:"access_token,omitempty" json:"access_token,omitempty"`           // 访问令牌
	RefreshToken    string `yaml:"refresh_token,omitempty" json:"refresh_token,omitempty"`         // 刷新令牌
	TokenExpiry     int64  `yaml:"token_expiry,omitempty" json:"token_expiry,omitempty"`           // 访问令牌过期时间戳
}
```

OAuthConfig OAuth2.0 认证配置结构体 用于需要 OAuth2.0 认证的平台，如 YouTube、小红书等 可以参考 YouTube 的
OAuth 流程：https://developers.google.cn/youtube/v3/guides/authentication?hl=zh-cn

#### type RedBookJuGuangConfig

```go
type RedBookJuGuangConfig struct {
	*ClientConfig `yaml:",inline"` // 基础客户端配置，包含 API 地址、超时设置等

	// GetOAuthToken 获取 OAuth Token 的回调函数
	// 参数：
	//   - key: OAuth 密钥
	//   - refresh: 是否刷新 token
	// 返回值：
	//   - token: 包含 access_token 等信息的 HashMap
	GetOAuthToken func(key string, refresh bool) (token object.HashMap) `yaml:"token;omitempty" json:"token;omitempty"`
}
```

RedBookJuGuangConfig 小红书聚光平台客户端配置 继承自 ClientConfig，使用 OAuth2.0 认证方式

#### type WeChatOfficialAccountConfig

```go
type WeChatOfficialAccountConfig struct {
	*ClientConfig `yaml:",inline"`
}
```
