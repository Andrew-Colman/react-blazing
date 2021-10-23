# Styling Guide

`Sass` / `Css Modules` / `Less` files are supported out of the box.

> just import it

```js
import './custom.scss';
```

> can be imported at any scope:
>
> - global (**\_app.js**) <- will be applied at everything, great for resetting css, defining color variables, importing sass/css libraries (bootstrap, tailwind, ...)
> - page example: (home/index) <- styles will be applied at /home but not at other pages
> - component (MyComponent) <-

## if you'd like an _css in js_ approach:

[Styled components](https://github.com/styled-components/styled-components)

```jsx
import styled from 'styled-components';

const StyledContainer = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;
```

> don't forget to install: `yarn add styled-components`

...

<!-- @todo add more jsx-css libs -->

<!-- @todo add ui libraries guide -->
