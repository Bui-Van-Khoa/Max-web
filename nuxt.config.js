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
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "element-ui/lib/theme-chalk/index.css",
    "element-ui/lib/theme-chalk/display.css",
    "@/assets/css/main.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxtjs/composition-api/module",
    "nuxt-element-ui",
    "@nuxtjs/fontawesome",
    "@nuxt/postcss8",
    "@nuxtjs/apollo",
  ],
  fontawesome: {
    component: "fa",
    suffix: false,
    icons: {
      solid: true,
      brands: true,
    },
  },

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'https://peaceful-fowl-85.hasura.app/v1/graphql',
        httpLinkOptions: {
          headers: {
             'x-hasura-admin-secret': 'MdHt5uV7M0inliT5zoUtynbWD5dKobgxxO7CsCO24vB25zv7XxNNYbTQw3N31592',
           
          }
        }
      }
    }
  },

  
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "nuxt-element-ui",
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "@nuxtjs/dotenv",
    // "@nuxtjs/apollo",
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
