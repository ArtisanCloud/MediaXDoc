---
---

# 微信公众号开发

## Client Credential 模式

Client Credential 模式是微信公众号开发中用于服务端调用的授权模式，主要特点如下：

- **适用场景**：

  - 无需用户授权的服务端 API 调用
  - 后台数据处理和定时任务
  - 数据统计和分析

- **授权流程**：

  1. 开发者注册并获取 AppID 和 AppSecret
  2. 使用 AppID 和 AppSecret 请求 Access Token
  3. 使用 Access Token 调用 API 接口

- **技术特性**：

  - Access Token 有效期 7200 秒
  - 支持 HTTPS 安全通信
  - 提供详细的错误码和错误信息

- **使用限制**：
  - 每日 Access Token 获取次数限制
  - 接口调用频率限制
  - 数据返回量限制
