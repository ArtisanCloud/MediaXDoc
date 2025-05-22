# data
--
    import "."


## Usage

#### type DouYinConnectionDataClient

```go
type DouYinConnectionDataClient struct {
	*kernel.BaseClient
}
```

DouYinConnectionDataClient 抖音用户数据客户端

#### func  NewClient

```go
func NewClient(c *kernel.BaseClient) *DouYinConnectionDataClient
```
NewClient 创建新的抖音用户数据客户端实例

#### func (*DouYinConnectionDataClient) GetUserCommentCount

```go
func (c *DouYinConnectionDataClient) GetUserCommentCount(ctx context.Context, dateType int64) (*schema.DouYinConnectionDataUserCommentCountRes, error)
```
## GetUserCommentCount 获取用户评论数

接口文档参考：
https://developer.open-douyin.com/docs/resource/zh-CN/dop/develop/openapi/account-management/user-data/get-user-comment-count

参数：

    ctx  - 请求上下文
    dateType - 日期类型，1: 昨天，2: 最近7天，3: 最近30天

返回值：

    *schema.DouYinConnectionDataUserCommentCountRes 包含以下字段：
      • Extra: 通用返回信息（log_id、now、error_code 等）
      • Data:
          - ResultList: 用户评论情况列表，包含多个日期的评论数据
          - ErrorCode: 错误码，0 表示成功，其他为失败
          - Description: 错误描述或状态说明
    error 调用过程中遇到的错误（如有）

#### func (*DouYinConnectionDataClient) GetUserFansCount

```go
func (c *DouYinConnectionDataClient) GetUserFansCount(ctx context.Context, dateType int64) (*schema.DouYinConnectionDataUserFansCountRes, error)
```
## GetUserFansCount 获取用户粉丝数

接口文档参考：
https://developer.open-douyin.com/docs/resource/zh-CN/dop/develop/openapi/account-management/user-data/get-user-fans-count

参数：

    ctx  - 请求上下文
    dateType - 日期类型，1: 昨天，2: 最近7天，3: 最近30天

返回值：

    *schema.DouYinConnectionDataUserFansCountRes 包含以下字段：
      • Extra: 通用返回信息（log_id、now、error_code 等）
      • Data:
          - ResultList: 用户粉丝情况列表，包含多个日期的粉丝数据
          - ErrorCode: 错误码，0 表示成功，其他为失败
          - Description: 错误描述或状态说明
    error 调用过程中遇到的错误（如有）

#### func (*DouYinConnectionDataClient) GetUserLikeNumber

```go
func (c *DouYinConnectionDataClient) GetUserLikeNumber(ctx context.Context, dateType int64) (*schema.DouYinConnectionDataUserLikeNumberRes, error)
```
## GetUserLikeNumber 获取用户点赞数

接口文档参考：
https://developer.open-douyin.com/docs/resource/zh-CN/dop/develop/openapi/account-management/user-data/get-user-like-number

参数：

    ctx  - 请求上下文
    dateType - 日期类型，1: 昨天，2: 最近7天，3: 最近30天

返回值：

    *schema.DouYinConnectionDataUserLikeNumberRes 包含以下字段：
      • Extra: 通用返回信息（log_id、now、error_code 等）
      • Data:
          - ResultList: 用户点赞情况列表，包含多个日期的点赞数据
          - ErrorCode: 错误码，0 表示成功，其他为失败
          - Description: 错误描述或状态说明
    error 调用过程中遇到的错误（如有）

#### func (*DouYinConnectionDataClient) GetUserProfile

```go
func (c *DouYinConnectionDataClient) GetUserProfile(ctx context.Context, dateType int64) (*schema.DouYinConnectionDataUserProfile, error)
```
## GetUserProfile 获取用户主页访问数

接口文档参考：
https://developer.open-douyin.com/docs/resource/zh-CN/dop/develop/openapi/account-management/user-data/get-user-home-pv

参数：

    ctx  - 请求上下文
    dateType - 日期类型，1: 昨天，2: 最近7天，3: 最近30天

返回值：

    *schema.DouYinConnectionDataUserProfile 包含以下字段：
      • Extra: 通用返回信息（log_id、now、error_code 等）
      • Data:
          - ResultList: 用户主页访问情况列表，包含多个日期的主页访问数据
          - ErrorCode: 错误码，0 表示成功，其他为失败
          - Description: 错误描述或状态说明
    error 调用过程中遇到的错误（如有）

#### func (*DouYinConnectionDataClient) GetUserVideoStatus

```go
func (c *DouYinConnectionDataClient) GetUserVideoStatus(ctx context.Context, dateType int64) (*schema.DouYinConnectionDataUserVideoStatusRes, error)
```
## GetUserVideoStatus 获取用户视频情况

接口文档参考：
https://developer.open-douyin.com/docs/resource/zh-CN/dop/develop/openapi/account-management/user-data/get-user-video-status

参数：

    ctx  - 请求上下文
    dateType - 日期类型，1: 昨天，2: 最近7天，3: 最近30天

返回值：

    *schema.DouYinConnectionDataUserVideoStatusRes 包含以下字段：
      • Extra: 通用返回信息（log_id、now、error_code 等）
      • Data:
          - ResultList: 用户视频情况列表，包含多个视频的详细信息
          - ErrorCode: 错误码，0 表示成功，其他为失败
          - Description: 错误描述或状态说明
    error 调用过程中遇到的错误（如有）
