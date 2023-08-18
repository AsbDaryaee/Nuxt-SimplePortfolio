<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
body {
  background-color: #252b48;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
  scale: 100%;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.1rem);
  scale: 90%;
}
</style>
