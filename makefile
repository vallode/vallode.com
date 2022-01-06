define POST_TEMPLATE
+++
title = ""
draft = true
+++
endef

dev:
	zola serve --drafts

build:
	zola build

deploy: build
	netlify deploy --prod

post:
	$(file > content/posts/$(shell date "+%Y-%m-%d")-new-post.md,$(POST_TEMPLATE))

