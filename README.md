# vallode-com

My personal little space on the internet. Currently hosted using
[Netlify](https://netlify.com/) but aiming to figure out self-hosting
at some point. This documentation is mostly aimed at myself, but it might help others who want to
create a website similar to this one :)

## Development

You need [Zola](https://www.getzola.org/), for deployments I use [Netlify](https://netlify.com/).

Run locally with:

```bash
zola serve # Also available as `make`
```

Deploy with:

```bash
zola build
netlify build --prod
```
