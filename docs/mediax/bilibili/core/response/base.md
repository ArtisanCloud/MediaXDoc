# response
--
    import "."


## Usage

#### type BaseRes

```go
type BaseRes struct {
	Code    string `json:"code,omitempty"`
	Message string `json:"message,omitempty"`
}
```


#### type BiliBiliRes

```go
type BiliBiliRes struct {
	BaseRes

	RequestId string `json:"request_id"` // 请求ID
	TTL       int    `json:"ttl"`        // 有效期
}
```


#### type WeChatAccessTokenRes

```go
type WeChatAccessTokenRes struct {
	response.AccessTokenRes
	ErrCode int    `json:"errcode,omitempty"`
	ErrMsg  string `json:"errmsg,omitempty"`
}
```
