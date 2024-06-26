+++
title = "About"
+++

The index page of this website "weighs" ~3kB. That's around **1/5000th** of your average (3 minutes @ 96kbps)
Spotify song stream. I want to keep this site minimal, but still try to express myself in small unique ways.

The website's tech stack is as simple as the site itself, aiming for good developer experience, respect to the user, and leanness:

* **Zola** - For static site generation
  * Incredibly fast, single dependency binary for generating static sites. 
  You couldn't ask for better, very happy with Zola coming previously from Jekyll.
* **SCSS** - For styling (built-in to Zola)
  * My favourite pre-processor for CSS, being built-in to Zola is an added
  bonus.
* **GoatCounter** - For simple analytics
  * Simple and privacy friendly, gives a decent idea of traffic without sacrificing the user.
* **Netlify** - For deployment
  * Ease of use you cannot beat, I'll eventually get around to hosting this site
  on my own server but for now Netlify takes the cake.
* **Sourcehut** - For git hosting
  * No mess included git hosting.

## Caveats/Hacks

* The favicon of this website is a single pixel encoded as a base64 image, it
being inlined saves a network request (which amounts to around 100-200
bytes transferred).
* The stylesheet is loaded in a completely non-blocking way, uses a simple
inline JavaScript trick to load it once complete.

Oh you expected to find information about me? Huh.
