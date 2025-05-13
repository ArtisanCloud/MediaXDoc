# 聚光平台 (Marketing API)

## OAuth 2.0 授权机制

小红书商业广告系统采用标准的 OAuth 2.0 授权码模式，适用于广告管理相关 API 的调用。

### 授权流程

1. **开发者注册**：

   - 完成[开发者入驻](https://ad-market.xiaohongshu.com/docs-center?bizType=943&articleId=3180)
   - 获取`client_id`和`client_secret`

2. **[用户授权](https://ad-market.xiaohongshu.com/docs-center?bizType=943&articleId=2603)**：
   申请开放者时小红书提供的授权链接
   https://ad-market.xiaohongshu.com/auth?appId=应用ID&scope=权限范围&redirectUri=回调地址xxx&state=abcd

小红书商业广告投放系统，日均处理亿级广告请求，提供以下核心能力：

## 授权模式

- 授权码模式
