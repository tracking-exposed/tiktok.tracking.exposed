## Initial welcome note

This repository contains only templates, texts, and binaries concerning the website youtube.tracking.exposed, if you are interested in algorithm analysis and the yttrex technology, you should check [this repo](https://github.com/tracking-exposed/yttrex).

# TikTok Observatory 

This repository work with HUGO, the static web page generator made in go.

## Download/Clone/Install:

```
git clone git@github.com:tracking-exposed/tiktok.tracking.exposed.git 
cd tiktok.tracking.exposed
mkdir themes
cd themes
git clone git@github.com:tracking-exposed/hugo-theme-trex.git
mv hugo-theme-trex/ trex
```

## Test/Use it:

```
cd tiktok.tracking.exposed
hugo -D server
```

And now connect to http://localhost:1313. The website would work regarless the statis portion. Interaction with personal page pick data from API, and to bind properly the server to port 14000, you should run the [tktrex backend](https://github.com/tracking-exposed/tktrex).

