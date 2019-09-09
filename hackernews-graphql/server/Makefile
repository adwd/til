.PHONY: build
build:
	go build ./server/server.go

.PHONY: run
run:
	go run ./server/server.go

.PHONY: test
test:
	go test ./...

.PHONY: gen
gen:
	go run github.com/99designs/gqlgen -v

.PHONY: quicktype
quicktype:
	quicktype https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty --lang go --package types -o types/top_stories.go
