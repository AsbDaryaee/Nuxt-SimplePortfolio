<template>
  <section
    class="relative flex flex-col justify-center items-center w-full h-[calc(100vh-7rem)]"
  >
    <div
      class="flex flex-col justify-center items-center md:w-1/2 w-full tracking-widest"
    >
      <h1 class="md:text-6xl text-center text-4xl text-bold pb-4">
        Amir H. Moayeri
      </h1>
      <h2 class="md:text-3xl text-center my-3">Front-End Web Developer</h2>
      <HeroStack />
      <p class="my-3 text-center">I Build Websites Your Users Will Love</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  background-color: $navy-blue;

  h1 {
    color: $white;
    border-bottom: solid 2px $green;
  }

  h2 {
    color: $gray;
  }

  p {
    color: $green;
  }
}
</style>
