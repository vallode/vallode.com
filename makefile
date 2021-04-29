dev:
	zola serve

build:
	zola build

deploy: build
	netlify deploy --prod

