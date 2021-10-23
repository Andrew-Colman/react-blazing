# Deployment Guide

Make sure your web server rewrites all requests to **'/'** `index.html`

since react is a SPA (single page application) and we're using client-side routing to make multi pages available

## Vercel:

> vercel deployment is supported <!-- [vercel.json](./vercel.json) -->

```js
// package.json scripts:
  yarn vercel dev //vercel development serverless in local
  yarn vercel //preview deploy
  yarn vercel --prod //production deploy
```

## Express:

<!-- @todo review  -->

```js
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
```

## Apache:

```js
// .htaccess
    Options -MultiViews
    RewriteEngine On
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^ index.html [QSA,L]
```

## http-server (npm package)

<!-- @todo review  -->

```sh
http-server -o --proxy http://localhost:8080?
```

## gh-pages

<!-- @todo review  -->

```js
// package.json
  "homepage": "https://website.com",
```

## Netlify

create this file at src: **\_redirects** `/* /index.html 200`

<!--  more examples with hosting providers support under dev -->
<!-- aws, etc... -->

## Cloudflare pages

... @todo

## Aws

... @todo

<!-- @todo link docs to examples  -->
