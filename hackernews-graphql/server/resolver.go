package server

//go:generate go run github.com/99designs/gqlgen

import (
	"context"

	"github.com/adwd/til/hackernews-graphql/server/hackernews"
	"github.com/adwd/til/hackernews-graphql/server/models"
)

// THIS CODE IS A STARTING POINT ONLY. IT WILL NOT BE UPDATED WITH SCHEMA CHANGES.

type Resolver struct{}

func (r *Resolver) Query() QueryResolver {
	return &queryResolver{r}
}
func (r *Resolver) Story() StoryResolver {
	return &storyResolver{r}
}

type queryResolver struct{ *Resolver }

func (r *queryResolver) Stories(ctx context.Context, limit *int) ([]*models.Story, error) {
	return hackernews.GetTopStories(ctx, limit)
}

func (r *queryResolver) Story(ctx context.Context, id int) (*models.Story, error) {
	return hackernews.GetStory(ctx, id)
}

type storyResolver struct{ *Resolver }

func (r *storyResolver) OgpImage(ctx context.Context, obj *models.Story) (*string, error) {
	if obj != nil && obj.URL != "" {
		return hackernews.GetOGPImage(obj.URL)
	}
	return nil, nil
}
