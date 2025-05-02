# task
--
    import "."


## Usage

#### type DouYinContentTaskClient

```go
type DouYinContentTaskClient struct {
	*kernel.BaseClient
}
```

DouYinContentTaskClient 抖音内容任务客户端 提供与抖音内容任务相关的接口封装

#### func  NewClient

```go
func NewClient(c *kernel.BaseClient) *DouYinContentTaskClient
```
NewClient 初始化并返回一个新的 DouYinContentTaskClient 实例

#### func (*DouYinContentTaskClient) CreatePost

```go
func (c *DouYinContentTaskClient) CreatePost(ctx context.Context, data *schema.DouYinContentCreatePostReq) (*schema.DouYinContentCreatePostRes, error)
```
## CreatePost 创建任务

接口文档参考：
https://developer.open-douyin.com/docs/resource/zh-CN/dop/develop/openapi/video-management/posting-task/create-posting-task

参数：

    ctx  - 请求上下文
    data - 请求参数，包含：
           • EndTime: 任务结束时间，秒级时间戳，必填
           • StartTime: 任务开始时间，秒级时间戳，必填
           • TaskCondition: 任务条件，必填
           • TaskName: 任务名称，长度不超过50个字符，必填

返回值：

    *schema.DouYinContentCreatePostRes 包含以下字段：
      • Extra: 通用返回信息（log_id、now、error_code 等）
      • Data:
          - TaskId: 任务ID
          - TaskStatus: 任务状态
          - ErrorCode: 错误码，0 表示成功，其他为失败
          - Description: 错误描述或状态说明

    error 调用过程中遇到的错误（如有）

#### func (*DouYinContentTaskClient) UserVerifyPost

```go
func (c *DouYinContentTaskClient) UserVerifyPost(ctx context.Context, data *schema.DouYinContentVerifyPostReq) (*schema.DouYinContentVerifyPostRes, error)
```
## UserVerifyPost 核销投稿任务

接口文档参考：
https://developer.open-douyin.com/docs/resource/zh-CN/dop/develop/openapi/video-management/posting-task/verify-posting-task

参数：

    ctx  - 请求上下文
    data - 请求参数，包含核销任务所需的信息

返回值：

    *schema.DouYinContentVerifyPostRes 包含以下字段：
      • Extra: 通用返回信息（log_id、now、error_code 等）
      • Data:
          - TaskId: 任务ID
          - TaskStatus: 任务状态
          - ErrorCode: 错误码，0 表示成功，其他为失败
          - Description: 错误描述或状态说明

    error 调用过程中遇到的错误（如有）
