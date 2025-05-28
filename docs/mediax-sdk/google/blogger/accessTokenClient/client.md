# blogger
--
    import "."


## Usage

#### type GoogleBloggerClient

```go
type GoogleBloggerClient struct {
	// Logger             *logger.Logger
	// Cache              cache.ICache
	GoogleClient       *core.GoogleClient
	BloggerConfig      *config.GoogleBloggerConfig
	AccessTokenHandler *core.GoogleAccessTokenHandler
}
```


#### func  NewGoogleBloggerClient

```go
func NewGoogleBloggerClient(cfg *config.GoogleBloggerConfig, logger *logger.Logger, cache cache.ICache) (*GoogleBloggerClient, error)
```

#### func (*GoogleBloggerClient) GetBlogUserInfosClient

```go
func (client *GoogleBloggerClient) GetBlogUserInfosClient() *blogUserInfos.BloggerBlogUserInfosClient
```
GetBlogUserInfosClient 获取博客用户信息客户端

#### func (*GoogleBloggerClient) GetBlogsClient

```go
func (client *GoogleBloggerClient) GetBlogsClient() *blogs.BloggerBlogsClient
```
GetBlogsClient 获取博客客户端

#### func (*GoogleBloggerClient) GetCommentsClient

```go
func (client *GoogleBloggerClient) GetCommentsClient() *comments.BloggerCommentsClient
```
GetCommentsClient 获取评论客户端

#### func (*GoogleBloggerClient) GetPageViewsClient

```go
func (client *GoogleBloggerClient) GetPageViewsClient() *pageViews.BloggerPageViewsClient
```
GetPageViewsClient 获取页面视图客户端

#### func (*GoogleBloggerClient) GetPagesClient

```go
func (client *GoogleBloggerClient) GetPagesClient() *pages.BloggerPagesClient
```
GetPagesClient 获取页面客户端

#### func (*GoogleBloggerClient) GetPostUserInfosClient

```go
func (client *GoogleBloggerClient) GetPostUserInfosClient() *postUserInfos.BloggerPostUserInfosClient
```
GetPostUserInfosClient 获取文章用户信息客户端

#### func (*GoogleBloggerClient) GetPostsClient

```go
func (client *GoogleBloggerClient) GetPostsClient() *posts.BloggerPostsClient
```
GetPostsClient 获取文章客户端

#### func (*GoogleBloggerClient) GetUsersClient

```go
func (client *GoogleBloggerClient) GetUsersClient() *users.BloggerUsersClient
```
GetUsersClient 获取用户客户端
