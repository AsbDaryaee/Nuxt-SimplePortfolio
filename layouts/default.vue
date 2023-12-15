<template>
  <div class="container mx-auto">
    <AppNavbar />
    <slot />
  </div>
</template>

<script setup lang="ts">
const url = useRequestURL();

useHead({
  meta: [
    {
      name: "keywords",
      content: `Amir H. Moayeri, JavaScript Developer, Web Developer Portfolio, Front-end Developer, Full Stack Developer, Vue Developer, Responsive Web Design, Web Application Development, JavaScript Frameworks, Code Optimization, Mobile-Friendly Development, HTML5, CSS3, Software Engineer, Node.js, Node.js Development, Portfolio Projects, Interactive Websites, Amir Moayeri, Moayeri Web Development, Creative Coding, API Integration, Nuxt Developer, Javascript, Ymir Developer, Ymir Github, Ymir Vue 3, Ymir Nuxt 3, امیرحسین معیری, یمیر, فرانت اند دولوپر, برنامه نویسی ویو, جاوااسکریپت یمیر`,
    },
    {
      name: "robots",
      content: "index, follow",
    },

    {
      name: "googlebot",
      content: "all",
    },
    {
      name: "theme-color",
      content: "#ffffff",
    },
  ],
  link: [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png",
    },
    {
      rel: "manifest",
      href: "/site.webmanifest",
    },
    {
      rel: "mask-icon",
      href: "/safari-pinned-tab.svg",
      color: "#5bbad5",
    },
    { rel: "msapplication-TileColor", href: "/favicon.ico" },
    {
      rel: "canonical",
      href: `${url.protocol}//${url.host}`,
    },
    {
      rel: "robots",
      href: `/robots.txt`,
    },
  ],
});

useSeoMeta({
  ogType: "website",
  ogTitle: "Amir H. Moayeri - JavaScript Developer Portfolio",
  ogDescription:
    "Explore the portfolio of Amir H. Moayeri, a passionate JavaScript developer specializing in front-end and full-stack development.",
  ogUrl: `${url.protocol}//${url.host}`,
  ogSiteName: "Amir H. Moayeri",
  ogLocale: "en_US",
  twitterCard: "summary",
  twitterTitle: "Amir H. Moayeri - JavaScript Developer Portfolio",
  twitterDescription:
    "Exploring the world of web development through the eyes of Amir H. Moayeri.",
});
</script>
