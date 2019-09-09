package hackernews

import (
	"context"
	"fmt"
	"io/ioutil"
	"net/http"

	"github.com/adwd/til/hackernews-graphql/server/models"
)

// GetTopStories get top stories
func GetTopStories(ctx context.Context) ([]*models.Story, error) {
	res, err := http.Get("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
	if err != nil {
		return []*models.Story{}, err
	}

	body, err := ioutil.ReadAll(res.Body)
	if err != nil {
		return []*models.Story{}, err
	}
	defer res.Body.Close()

	stories, err := models.UnmarshalTopStories(body)
	if err != nil {
		return []*models.Story{}, err
	}

	result := []*models.Story{}
	for _, s := range stories {
		result = append(result, &models.Story{
			ID: s,
		})
	}

	return result, nil
}

// GetStory get story
func GetStory(ctx context.Context, id int) (*models.Story, error) {
	res, err := http.Get(fmt.Sprintf("https://hacker-news.firebaseio.com/v0/item/%d.json?print=pretty", id))
	if err != nil {
		return nil, err
	}

	body, err := ioutil.ReadAll(res.Body)
	if err != nil {
		return nil, err
	}
	defer res.Body.Close()

	story, err := models.UnmarshalStory(body)
	if err != nil {
		return nil, err
	}

	return &story, nil
}
