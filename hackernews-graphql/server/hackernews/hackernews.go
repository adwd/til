package hackernews

import (
	"context"
	"fmt"
	"io/ioutil"
	"net/http"
	"sync"

	"github.com/PuerkitoBio/goquery"
	"github.com/adwd/til/hackernews-graphql/server/models"
	"golang.org/x/sync/errgroup"
)

// GetTopStories get top stories
func GetTopStories(ctx context.Context, limit *int) ([]*models.Story, error) {
	if limit == nil {
		*limit = 50
	}
	res, err := http.Get("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
	if err != nil {
		return []*models.Story{}, err
	}

	body, err := ioutil.ReadAll(res.Body)
	if err != nil {
		return []*models.Story{}, err
	}
	defer res.Body.Close()

	storyIds, err := models.UnmarshalTopStories(body)
	if err != nil {
		return []*models.Story{}, err
	}
	length := *limit
	if len(storyIds) < *limit {
		length = len(storyIds)
	}

	var m sync.Mutex
	stories := []*models.Story{}
	eg, ctx := errgroup.WithContext(ctx)
	for index, s := range storyIds {
		if index > length {
			break
		}
		id := s
		eg.Go(func() error {
			story, err := GetStory(ctx, int(id))
			if story != nil {
				m.Lock()
				stories = append(stories, story)
				m.Unlock()
			}
			return err
		})
	}

	if err = eg.Wait(); err != nil {
		return []*models.Story{}, err
	}

	return stories, nil
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

	ogp, err := getOGPImage(story.URL)
	if err != nil {
		return nil, err
	}

	if ogp != nil {
		story.OGPImage = *ogp
	}

	return &story, nil
}

func getOGPImage(url string) (*string, error) {
	res, err := http.Get(url)
	if err != nil {
		return nil, err
	}

	doc, err := goquery.NewDocumentFromReader(res.Body)
	if err != nil {
		return nil, err
	}
	defer res.Body.Close()

	urls := []string{}
	doc.Find(`meta[property="og:image"]`).Each(func(i int, s *goquery.Selection) {
		content, ok := s.Attr("content")
		if ok {
			urls = append(urls, content)
		}
	})

	if len(urls) < 1 {
		return nil, nil
	}

	return &urls[0], nil
}
