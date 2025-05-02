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

#### func (*DouYinContentTaskClient) BindVideo

```go
func (c *DouYinContentTaskClient) BindVideo(ctx context.Context, data *schema.DouYinContentBindVideoReq) (*schema.DouYinContentBindVideoRes, error)
```
## BindVideo 绑定视频到任务

接口文档参考：
https://developer.open-douyin.com/docs/resource/zh-CN/dop/develop/openapi/video-management/posting-task/bind-video

参数：

    ctx  - 请求上下文
    data - 请求参数，包含：
           • TaskId: 任务ID，创建任务之后获取的任务ID，必填
           • VideoId: 视频ID，必填

返回值：

    *schema.DouYinContentBindVideoRes - 包含以下字段：
      • Extra: 通用返回信息（log_id、now、error_code 等）
      • Data: 业务数据主体，包含具体的业务响应信息
    error - 调用过程中遇到的错误（如有）

#### func (*DouYinContentTaskClient) VideoBasicInfo

```go
func (c *DouYinContentTaskClient) VideoBasicInfo(ctx context.Context, data *schema.DouYinContentVideoBasicInfoReq) (*schema.DouYinContentVideoBasicInfoRes, error)
```
## VideoBasicInfo 查询视频基础信息

接口文档参考：
https://developer.open-douyin.com/docs/resource/zh-CN/dop/develop/openapi/video-management/posting-task/video-basic-info

参数：

    ctx  - 请求上下文
    data - 请求参数，包含：
           • ItemIds: item_id数组，仅能查询access_token对应用户上传的视频
           • VideoIds: 明文item_id数组，如果和item_ids同时传入，优先处理video_ids

返回值：

    *schema.DouYinContentVideoBasicInfoRes 包含以下字段：
      • Extra: 通用返回信息（log_id、now、error_code 等）
      • Data:
          - List: 视频信息列表，包含多个视频的详细信息
          - ErrorCode: 错误码，0 表示成功，其他为失败
          - Description: 错误描述或状态说明

    error 调用过程中遇到的错误（如有）
