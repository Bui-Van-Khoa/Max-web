import { getRoutes } from "./routes";

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "max-web",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    // script: [
    //   // ...
    //   {
    //     hid: "tawk.to",
    //     src: "https://embed.tawk.to/5edf699a9e5f694422903412/default",
    //     defer: true,
    //   },
    // ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "element-ui/lib/theme-chalk/index.css",
    "element-ui/lib/theme-chalk/display.css",
    "@/assets/css/main.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/owlcarouse", mode: "client", ssr: false },
    { src: "~/plugins/vueflickity.js", ssr: false },
    "~/plugins/fontawesome.js",
    {
      src: "~/plugins/awk-messenger.js",
      mode: "client",
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxtjs/composition-api/module",
    "nuxt-element-ui",
    "@nuxt/postcss8",
    "@nuxt/typescript-build",
    "@pinia/nuxt",
  ],

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: "https://peaceful-fowl-85.hasura.app/v1/graphql",
        httpLinkOptions: {
          headers: {
            "x-hasura-admin-secret":
              "MdHt5uV7M0inliT5zoUtynbWD5dKobgxxO7CsCO24vB25zv7XxNNYbTQw3N31592",
          },
        },
      },
    },
  },

  // router: {
  //   prefetchLinks: false,
  //   extendRoutes(routes) {
  //     getRoutes().forEach((route) => routes.unshift(route));
  //   },
  // },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "nuxt-element-ui",
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "@nuxtjs/dotenv",
    "@nuxtjs/apollo",
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
};
