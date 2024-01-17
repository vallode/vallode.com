# vallode-com

This documentation is aimed at myself. Hey, me!

## Development

You need [Zola](https://www.getzola.org/), for deployments/hosting I use
[Netlify](https://netlify.com/).

Run locally with:

```bash
$ zola serve
```

Deploy with:

```bash
$ zola build && netlify build --prod
```

### Useful information

Zola uses [Tera](//keats.github.io/tera/docs/) for it's templating needs, everything that is _not_ Markdown (.md) goes through it.


