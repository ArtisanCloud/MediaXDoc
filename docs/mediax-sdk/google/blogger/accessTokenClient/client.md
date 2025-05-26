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

#### func (*GoogleBloggerClient) GetBlogsClient

```go
func (client *GoogleBloggerClient) GetBlogsClient() *blogs.BloggerBlogsClient
```

#### func (*GoogleBloggerClient) GetCommentsClient

```go
func (client *GoogleBloggerClient) GetCommentsClient() *comments.BloggerCommentsClient
```

#### func (*GoogleBloggerClient) GetPageViewsClient

```go
func (client *GoogleBloggerClient) GetPageViewsClient() *pageViews.BloggerPageViewsClient
```

#### func (*GoogleBloggerClient) GetPagesClient

```go
func (client *GoogleBloggerClient) GetPagesClient() *pages.BloggerPagesClient
```

#### func (*GoogleBloggerClient) GetPostUserInfosClient

```go
func (client *GoogleBloggerClient) GetPostUserInfosClient() *postUserInfos.BloggerPostUserInfosClient
```

#### func (*GoogleBloggerClient) GetPostsClient

```go
func (client *GoogleBloggerClient) GetPostsClient() *posts.BloggerPostsClient
```

#### func (*GoogleBloggerClient) GetUsersClient

```go
func (client *GoogleBloggerClient) GetUsersClient() *users.BloggerUsersClient
```
