# fan
--
    import "."


## Usage

#### type DouYinConnectionFanClient

```go
type DouYinConnectionFanClient struct {
	*kernel.BaseClient
}
```

DouYinConnectionFanClient 抖音粉丝相关客户端 提供与抖音粉丝相关的接口封装

#### func  NewClient

```go
func NewClient(c *kernel.BaseClient) *DouYinConnectionFanClient
```
NewClient 初始化并返回一个新的 DouYinConnectionFanClient 实例

#### func (*DouYinConnectionFanClient) Check

```go
func (c *DouYinConnectionFanClient) Check(ctx context.Context, followOpenId string) (*schema.DouYinConnectionFanCheckRes, error)
```
## Check 粉丝判断

接口文档参考：
https://developer.open-douyin.com/docs/resource/zh-CN/dop/develop/openapi/account-management/fans-judge

参数：

    ctx  - 请求上下文
    followOpenId - 需要判断的粉丝open_id

返回值：

    *schema.DouYinConnectionFanCheckRes 包含以下字段：
      • Extra: 通用返回信息（log_id、now、error_code 等）
      • Data:
          - IsFollower: 是否为粉丝，true表示是粉丝，false表示不是粉丝
          - FollowTime: 关注时间，格式为 yyyy-MM-dd HH:mm:ss
          - ErrorCode: 错误码，0 表示成功，其他为失败
          - Description: 错误描述或状态说明
    error 调用过程中遇到的错误（如有）
