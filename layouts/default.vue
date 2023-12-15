<template>
  <div class="container mx-auto">
    <AppNavbar />
    <slot />
  </div>
</template>

<script setup lang="ts">
useHead({
  meta: [
    {
      name: "robots",
      content: "index, follow",
    },
  ],
});
</script>
