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


#### type JuGuangRes

```go
type JuGuangRes struct {
	BaseRes

	ErrCode int    `json:"errcode,omitempty"`
	ErrMsg  string `json:"errmsg,omitempty"`

	ResultCode string `json:"resultcode,omitempty"`
	ResultMsg  string `json:"resultmsg,omitempty"`
}
```


#### type RedBookAccessTokenRes

```go
type RedBookAccessTokenRes struct {
	response.AccessTokenRes
	ErrCode int    `json:"errcode,omitempty"`
	ErrMsg  string `json:"errmsg,omitempty"`
}
```
