import { defineConfig } from "vitepress";
import { vitepressDemoPlugin } from "plugin";
import path, { dirname } from "path";
import { codeInspectorPlugin } from "code-inspector-plugin";

function fileURLToPath(fileURL: string) {
  let filePath = fileURL;
  if (process.platform === "win32") {
    filePath = filePath.replace(/^file:\/\/\//, "");
    filePath = decodeURIComponent(filePath);
    filePath = filePath.replace(/\//g, "\\");
  } else {
    filePath = filePath.replace(/^file:\/\//, "");
    filePath = decodeURIComponent(filePath);
  }
  return filePath;
}

const srcMain = `import { createApp } from "vue";
import Demo from "./Demo.vue";
import 'element-plus/dist/index.css'

const app = createApp(Demo);
app.mount("#app");`;

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: process.env.PAGES_BASE_PATH || "/",
  title: "Vitepress Demo Plugin",
  description: "The docs of vitepress-demo-plugin",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: "Recommended Tools",
        items: [
          { text: "code-inspector", link: "https://inspector.fe-dev.cn/" },
        ],
      },
    ],
    logo: "/logo.svg",

    sidebar: [
      {
        text: "Guide",
        items: [
          { text: "Quick Start", link: "/en/guide/start" },
          { text: "Advanced Configuration", link: "/en/guide/advance" },
          { text: "Third Party Platform", link: "/en/guide/preset" },
        ],
      },
      {
        text: "Component Library",
        items: [
          { text: "Ant Design", link: "/en/components/antd" },
          { text: "Element Plus", link: "/en/components/element-plus" },
        ],
      },
      {
        text: "More",
        items: [
          { text: "Changelog", link: "/en/more/changelog" },
          { text: "Feedback", link: "/en/more/feedback" },
        ],
      },
    ],

    outline: [2, 4],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/zh-lx/vitepress-demo-plugin",
      },
    ],
  },
  locales: {
    root: {
      label: "English",
      lang: "en-US",
    },
    en: {
      label: "English",
      lang: "en-US",
      link: "/en",
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
          {
            text: "Recommended Tools",
            items: [
              { text: "code-inspector", link: "https://inspector.fe-dev.cn/" },
            ],
          },
        ],
        logo: "/logo.svg",

        sidebar: [
          {
            text: "Guide",
            items: [
              { text: "Quick Start", link: "/en/guide/start" },
              { text: "Advanced Configuration", link: "/en/guide/advance" },
              { text: "Third Party Platform", link: "/en/guide/preset" },
            ],
          },
          {
            text: "Component Library",
            items: [
              { text: "Ant Design", link: "/en/components/antd" },
              { text: "Element Plus", link: "/en/components/element-plus" },
            ],
          },
          {
            text: "More",
            items: [
              { text: "Changelog", link: "/en/more/changelog" },
              { text: "Feedback", link: "/en/more/feedback" },
            ],
          },
        ],

        outline: [2, 4],

        socialLinks: [
          {
            icon: "github",
            link: "https://github.com/zh-lx/vitepress-demo-plugin",
          },
        ],
      },
    },
  },
  markdown: {
    config(md) {
      md.use(vitepressDemoPlugin, {
        demoDir: path.resolve(
          dirname(fileURLToPath(import.meta.url)),
          "../demos"
        ),
        stackblitz: {
          show: true,
          templates: [
            {
              scope: "element",
              files: {
                "src/main.ts": srcMain,
              },
            },
          ],
        },
        codesandbox: {
          show: false,
          templates: [
            {
              scope: "element",
              files: {
                "src/main.ts": srcMain,
              },
            },
          ],
        },
      });
    },
  },
  vite: {
    plugins: [
      codeInspectorPlugin({
        bundler: "vite",
      }),
    ],
  },
});
