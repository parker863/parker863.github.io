import { CodeTabs } from "/Users/wp/Desktop/workspace/blogs/new_blogs/vuepress-starter/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "/Users/wp/Desktop/workspace/blogs/new_blogs/vuepress-starter/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/Users/wp/Desktop/workspace/blogs/new_blogs/vuepress-starter/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
