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


#### type OfficialAccountRes

```go
type OfficialAccountRes struct {
	BaseRes

	ErrCode int    `json:"errcode,omitempty"`
	ErrMsg  string `json:"errmsg,omitempty"`

	ResultCode string `json:"resultcode,omitempty"`
	ResultMsg  string `json:"resultmsg,omitempty"`
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
