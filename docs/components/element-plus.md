# Element PLus

## element-plus

`element-plus`

```shell
npm i element-plus
```

## 

`.vitepress/theme/index.ts`

```ts
import Theme from 'vitepress/theme';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(ElementPlus);
  },
};
```

## Demo

```html
<demo vue="ele.vue" scope="element" />
```

<demo vue="ele.vue" scope="element" />
