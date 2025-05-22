# response
--
    import "."


## Usage

#### type BaseRes

```go
type BaseRes struct {
	Code string `json:"code,omitempty"`
	Msg  string `json:"msg,omitempty"`
}
```

BaseRes 基础响应

#### type JuGuangRes

```go
type JuGuangRes struct {
	BaseRes
	Success   bool   `json:"success,omitempty"`
	RequestId string `json:"request_id,omitempty"`
}
```

JuGuangRes 基础响应

#### type RedBookAccessTokenRes

```go
type RedBookAccessTokenRes struct {
	response.AccessTokenRes
	ErrCode int    `json:"errcode,omitempty"`
	ErrMsg  string `json:"errmsg,omitempty"`
}
```
