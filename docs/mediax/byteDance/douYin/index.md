# 抖音

## 抖音开放平台授权机制概览

抖音开放平台提供了两种主要的授权模式，分别适用于不同的应用场景：

1. **Access Token 模式**：需要用户授权，适用于访问用户数据的场景。
2. **Client Token 模式**：无需用户授权，适用于调用不涉及用户数据的公共接口。

## Access Token 模式（需要用户授权）

在 Access Token 模式下，用户通过授权流程，同意第三方应用访问其抖音账户信息。授权成功后，应用将获得一个 `access_token`，用于调用需要用户授权的接口。

### 获取流程

1. 用户在应用中发起授权请求，跳转至抖音授权页面。
2. 用户同意授权后，平台返回授权码（`authorization_code`）至应用的回调地址。
3. 应用使用授权码向抖音开放平台请求 `access_token`。
4. 成功获取 `access_token` 后，可用于调用用户授权的接口。

### 特点

* **需要用户授权**：必须经过用户同意，才能获取访问权限。
* **包含用户标识**：返回的数据中包含 `open_id`，用于唯一标识用户。
* **适用场景**：获取用户信息、发布内容、管理用户数据等需要用户授权的操作。

### 官方文档

* [抖音帐号OAuth 2.0授权](https://open.douyin.com/platform/resource/docs/develop/permission/web/oauth2)
* [获取access\_token](https://open.douyin.com/platform/resource/docs/openapi/account-permission/get-access-token)


## Client Token 模式（无需用户授权）

Client Token 模式适用于无需用户授权的场景，主要用于调用公共接口。

### 获取流程

1. 应用在后台配置好 `client_key`（AppID）和 `client_secret`。
2. 使用上述凭证向抖音开放平台请求 `client_token`。
3. 成功获取 `client_token` 后，可用于调用无需用户授权的接口。([抖音开放平台][1], [CSDN博客][2])

### 特点

* **无需用户授权**：直接通过应用凭证获取访问权限。
* **不包含用户标识**：返回的数据中不包含 `open_id`。
* **适用场景**：获取公共数据、调用无需用户授权的接口等。

### 官方文档

* [生成client\_token](https://open.douyin.com/platform/resource/docs/openapi/account-permission/client-token)


## MediaX SDK 集成说明

MediaX SDK 对上述两种授权模式提供了便捷的集成方式，简化了开发者的接入流程。

### Access Token 模式集成
* MediaX SDK针对AccessToken模式下，需要开发者自行处理授权流程，包括跳转授权页面、获取授权码、请求 `access_token` 等。 
* 成功获取 `access_token` 后，开发者需要手动在后续的 API 请求中携带该令牌及对应的 `open_id`。
* 用户也可以通过MediaX Pro，支持自动处理授权流程，包括跳转授权页面、获取授权码、请求 `access_token` 等。


### Client Token 模式集成

* 开发者在后台配置好 `client_key` 和 `client_secret`。
* SDK 会自动使用上述凭证请求 `client_token`，并在后续的 API 请求中自动携带该令牌。


## 授权模式对比

| 授权模式         | 是否需要用户授权 | 是否包含 `open_id` | 适用场景           |   |
| ------------ | -------- | -------------- | -------------- | - |
| Access Token | 是        | 是              | 访问用户数据、发布内容等   |   |
| Client Token | 否        | 否              | 获取公共数据、调用公共接口等 |   |



通过支持这两种授权模式，抖音开放平台为开发者提供了灵活的接入方式，满足不同业务场景的需求。

MediaX SDK 的集成进一步简化了开发流程，提升了开发效率。


