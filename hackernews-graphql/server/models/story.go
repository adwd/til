// This file was generated from JSON Schema using quicktype, do not modify it directly.
// To parse and unparse this JSON data, add this code to your project and do:
//
//    story, err := UnmarshalStory(bytes)
//    bytes, err = story.Marshal()

package models

import "encoding/json"

func UnmarshalStory(data []byte) (Story, error) {
	var r Story
	err := json.Unmarshal(data, &r)
	return r, err
}

func (r *Story) Marshal() ([]byte, error) {
	return json.Marshal(r)
}

type Story struct {
	By          string  `json:"by"`
	Descendants int64   `json:"descendants"`
	ID          int64   `json:"id"`
	Kids        []int64 `json:"kids"`
	Score       int64   `json:"score"`
	Time        int64   `json:"time"`
	Title       string  `json:"title"`
	Type        string  `json:"type"`
	URL         string  `json:"url"`
	OGPImage    string  `json:"ogp_image"`
}
