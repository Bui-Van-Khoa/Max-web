import path from "node:path";
import url from "node:url";

export function getRoutes(
  themeDir = path.dirname(url.fileURLToPath(import.meta.url))
) {
  return [
    {
      name: "HomePage",
      path: "/",
      component: path.resolve(themeDir, "pages/HomePage.vue"),
    },
  ];
}
