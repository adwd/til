// This file was generated from JSON Schema using quicktype, do not modify it directly.
// To parse and unparse this JSON data, add this code to your project and do:
//
//    topStories, err := UnmarshalTopStories(bytes)
//    bytes, err = topStories.Marshal()

package types

import "encoding/json"

type TopStories []int64

func UnmarshalTopStories(data []byte) (TopStories, error) {
	var r TopStories
	err := json.Unmarshal(data, &r)
	return r, err
}

func (r *TopStories) Marshal() ([]byte, error) {
	return json.Marshal(r)
}
