package server

import (
	"context"
	"io/ioutil"
	"net/http"

	"github.com/adwd/til/hackernews-graphql/server/types"
) // THIS CODE IS A STARTING POINT ONLY. IT WILL NOT BE UPDATED WITH SCHEMA CHANGES.

type Resolver struct{}

func (r *Resolver) Query() QueryResolver {
	return &queryResolver{r}
}

type queryResolver struct{ *Resolver }

func (r *queryResolver) Stories(ctx context.Context) ([]*Story, error) {
	res, err := http.Get("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
	if err != nil {
		return []*Story{}, nil
	}

	body, err := ioutil.ReadAll(res.Body)
	if err != nil {
		return []*Story{}, nil
	}
	defer res.Body.Close()

	stories, err := types.UnmarshalTopStories(body)
	if err != nil {
		return []*Story{}, nil
	}

	result := []*Story{}
	for _, s := range stories {
		result = append(result, &Story{
			ID: int(s),
		})
	}

	return result, nil
}
