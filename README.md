# react-blazing 🔥

[wip] we're moving for a monorepo ( to include easy template / feature generation)

React Blazing Toolchain

- developer friendly
- blazing fast
- robust
  <!-- todo // - generate features on demand (reaxi) -->
  <!--  todo //  - automatic router (just create a /pages) -->
- zero config to get you app running (shining on the web ✨)

<!-- ``` [wip]
npx blazing-cli app <appName>

typescript:
npx blazing-cli app <appName> --ts

templates:

npx blazing-cli <appName> --templateName
--vercel (serverless api)
...

``` -->

## Table of Contents:

0. [Requirements](#Requirements)
1. [Running on localhost](#Running-on-localhost)
2. [Building](#Building)
3. [Features](#Features)
4. [Routes](#Routes)
5. [Parcel _(bundler)_](###Bundler)
6. [Styling](#Styling)
7. [Deployment](#Deployment)
8. [Testing](#Testing)
9. [FAQ](#FAQ)
10. [Roadmap](#Roadmap)

## Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/) (recommended)

- > basic knowledge of react

## Running on localhost

First install dependencies:

```sh
yarn install
```

> This project uses yarn package manager but you can use npm instead

To run dev server in hot module reloading mode:

```sh
yarn dev
```

> Opens by default: `localhost:1234/` in your browser

## Building

To create a production build:

```sh
yarn build
```

> It creates production-ready bundles that contain very little to no unused development code, ensuring your end-user gets fast load times.
> Output: `/dist` folder

> [Deployment](#Deployment)

  <!-- 
  To visualize the size of your final bundle:

  ```sh
  yarn bundle_analyze
  ```

  > It creates two new folders ./build-report & ./parcel-bundle-reports and opens a page in your browser -->

## Features

- ### Aliases

> [.babelrc](./babelrc) alias

```json
      "alias": {
        "@app": "./src",
        "@components": "./src/components",
        "@pages": "./src/pages",
        "@hooks": "./src/hooks"
      }
```

#### Add new alias:

```json
        //new alias example:
        //"key: "path"
        "@helpers": "./src/lib/utils/helpers"
```

for IDE intellisense you should add it at `jsconfig.json` or `tsconfig.json`

```json

//"key/*": ["./path/*"],
"@helpers/*": ["./lib/utils/helpers/*"],
//           please omit /src/ as it is specified in baseUrl:
```

<!-- todo cli that generates new alias / list  -->

#### Usage:

```js
//instead of importing:
import MyComponent from '../../../../../../../components/MyComponent';
// just use:
import MyComponent from '@components/MyComponent';
```

- ### Code splitting

<hr>

> [React Lazy](#react-features) `preferred`

> [Parcel dynamic imports](https://parceljs.org/features/code-splitting/)

## Routes

[Wouter](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom) - client side routing for react

@components/Routes

add new pages at @pages folder `pages/`

Read more at [Routes guide](./docs/routes.md)

<!-- todo add automatic router -->

## Bundler

[Parcel:](https://github.com/parcel-bundler/parcel) Zero configuration web application bundler

> most features like parsing js/ts files, importing scss/svg/... are presented by parcel
> learn more at their [docs](https://parceljs.org/languages/javascript/)

## Styling

`Sass` / `Css Modules` / `Less` files are supported out of the box.

Read more at [Styling guide](./docs/styling.md)

## Deployment

Make sure your web server rewrites all requests to **'/'** since react is a SPA and we're using react-router to make multi pages available (client-side routing)

Read more at [Deployment guide](./docs/deployment.md)

> guides for apache, express, vercel, netlify, ...

## Testing

> you can implement any test runners / strategies at this point

recommendations:

- for component level: [jest](https://www.npmjs.com/package/jest) + [testing-react](https://testing-library.com/docs/react-testing-library/intro/)
- for end-to-end: [playwright](https://playwright.dev/) or [cypress](https://www.cypress.io/)

<!-- todo /examples tests -->

## FAQ

#### What React Blazing is ?

- a complete **react** development [toolchain](https://reactjs.org/docs/create-a-new-react-app.html#creating-a-toolchain-from-scratch) focused on **speed**

- implements the latest tools in the industry (modern react)

- set of packages to improve your dev life even further like: `blazing-cli` / `reaxi`

- not a react framework like next, gatsby
- not a react component library
- not boilerplate
- not like create-react-app

#### comparison to create-react-app

- No need of deleting a lot of files like app.css, index.css, and other boilerplate...

- No need to eject or adding a config override 😗

- No tons of packages like react-scripts that sometimes doesn't even required =

- (But) If you are complete new to react, it's highly recommended choosing cra as it can prevent making beginner mistakes

---

<details><summary>Roadmap</summary>

- [ ] Implement React 18 (when released)

- [ ] Templates/examples

- [ ] documentation website

planned feature generation:

- parcel config
- add linters (eslint )
- add bundle analyzer

</details>

> Formerly _Ultimate React_, now called **React Blazing** 🔥

- #### React 17 ready, including the [New JSX transform](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html)
