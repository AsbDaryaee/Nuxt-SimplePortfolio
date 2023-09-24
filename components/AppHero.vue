<template>
  <section
    class="relative flex flex-col justify-center items-center w-full h-[calc(100vh-10rem)]"
  >
    <div
      class="flex flex-col justify-center items-center w-1/2 tracking-widest"
    >
      <h1 class="text-5xl">Amir H. Moayeri</h1>
      <h2 class="text-3xl my-3">Front-End Web Developer</h2>
      <HeroStack />
      <p class="my-3">I Build Websites Your Users Will Love</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  background-color: $navy-blue;

  h1 {
    color: $white;
  }

  h2 {
    color: $gray;
  }

  p {
    color: $green;
  }
}
</style>
