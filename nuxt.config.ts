export default defineNuxtConfig({
  modules: ["nuxt-mongoose"],
  css: ["~/assets/css/main.scss"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },

  runtimeConfig: {
    mongoose: { uri: process.env.NUXT_MONGOOSE_URI },
  },

  mongoose: {
    options: {},
    modelsDir: "models",
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/css/colors.scss" as *;',
        },
      },
    },
  },

  compatibilityDate: "2025-03-30",
});