# Just-Search
This is a very simple new TAB extension for Chrome.  The purpose is to replace Chrome's default tabs.

> Since I'm a Bing user, when I set chrome's search engine to Bing, the new TAB automatically opens the Bing home page, but it's too ugly.

The project is under development.

## Download

You can download Just-Search from [Chrome Web Store](https://chromewebstore.google.com/detail/just-search/nhinboemgecmnkacmppmdfaieblacdja), or [Github Releases](https://github.com/See-Night/Just-Search/releases/latest) Page.

## Build from source

If you don't have environment to download from network, or you want to change some function, you can clone this repository and build by yourself. By the way, you should install node.js and npm in your computer.

```shell
# clone this repository
git clone https://github.com/See-Night/Just-Search.git && cd Just-Search

# install dependency package
npm install

# Build
npm run build
```

Then you will get a folder named "dist", open your chrome(maybe chromium) and add this extension.
