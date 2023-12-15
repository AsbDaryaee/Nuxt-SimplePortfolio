<template>
  <div
    class="flex md:flex-row flex-col gap-8 md:gap-4 justify-evenly items-center w-full md:h-[calc(100vh-11rem)] my-12 md:my-8"
  >
    <section class="order-2 md:order-1">
      <AppContactInfo />
    </section>
    <section class="order-1 md:order-2">
      <AppContactForm />
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Ymir | Contact",
});
</script>
