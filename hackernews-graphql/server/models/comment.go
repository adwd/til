// This file was generated from JSON Schema using quicktype, do not modify it directly.
// To parse and unparse this JSON data, add this code to your project and do:
//
//    comment, err := UnmarshalComment(bytes)
//    bytes, err = comment.Marshal()

package models

import "encoding/json"

func UnmarshalComment(data []byte) (Comment, error) {
	var r Comment
	err := json.Unmarshal(data, &r)
	return r, err
}

func (r *Comment) Marshal() ([]byte, error) {
	return json.Marshal(r)
}

type Comment struct {
	By     string  `json:"by"`
	ID     int64   `json:"id"`
	Kids   []int64 `json:"kids"`
	Parent int64   `json:"parent"`
	Text   string  `json:"text"`
	Time   int64   `json:"time"`
	Type   string  `json:"type"`
}
