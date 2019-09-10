package server

import (
	"context"

	"github.com/adwd/til/hackernews-graphql/server/hackernews"
	"github.com/adwd/til/hackernews-graphql/server/models"
)

// THIS CODE IS A STARTING POINT ONLY. IT WILL NOT BE UPDATED WITH SCHEMA CHANGES.

type Resolver struct{}

func (r *Resolver) Comment() CommentResolver {
	return &commentResolver{r}
}
func (r *Resolver) Query() QueryResolver {
	return &queryResolver{r}
}
func (r *Resolver) Story() StoryResolver {
	return &storyResolver{r}
}

type commentResolver struct{ *Resolver }

func (r *commentResolver) Kids(ctx context.Context, obj *models.Comment) ([]*models.Comment, error) {
	if obj == nil || len(obj.Kids) == 0 {
		return []*models.Comment{}, nil
	}
	ids := []int{}
	for _, id := range obj.Kids {
		ids = append(ids, int(id))
	}
	return hackernews.GetComments(ctx, ids)
}

type queryResolver struct{ *Resolver }

func (r *queryResolver) Stories(ctx context.Context, limit *int) ([]*models.Story, error) {
	return hackernews.GetTopStories(ctx, limit)
}

func (r *queryResolver) Story(ctx context.Context, id int) (*models.Story, error) {
	return hackernews.GetStory(ctx, id)
}

func (r *queryResolver) Comment(ctx context.Context, id int) (*models.Comment, error) {
	return hackernews.GetComment(ctx, id)
}

type storyResolver struct{ *Resolver }

func (r *storyResolver) OgpImage(ctx context.Context, obj *models.Story) (*string, error) {
	if obj != nil && obj.URL != "" {
		return hackernews.GetOGPImage(obj.URL)
	}
	return nil, nil
}

func (r *storyResolver) Kids(ctx context.Context, obj *models.Story) ([]*models.Comment, error) {
	if obj == nil || len(obj.Kids) == 0 {
		return []*models.Comment{}, nil
	}
	ids := []int{}
	for _, id := range obj.Kids {
		ids = append(ids, int(id))
	}
	return hackernews.GetComments(ctx, ids)
}
