dev:
	zola serve --drafts

build:
	zola build

deploy: build
	netlify deploy --prod

