<template>
  <div
    class="w-full md:h-[calc(100vh-10rem)] flex md:flex-row flex-col py-4 pb-12 mx-auto items-center justify-center"
  >
    <section class="md:w-1/3 flex items-center justify-center">
      <img
        id="tilt"
        :src="profileImg"
        alt="Amirhosein's Portrait"
        class="rounded-full shadow-sm hover:shadow-xl transition-all md:w-3/4 md:mt-0 w-1/2 mt-8 duration-300 ease-in-out"
        draggable="false"
        width="500"
        height="500"
      />
    </section>
    <section class="md:w-1/2 px-8">
      <article class="flex flex-col justify-center items-center">
        <h1 class="text-4xl md:self-start my-4 tracking-wide pb-2">About Me</h1>
        <p class="indent-4 text-justify">
          I started my programming journey in college, when I was studying
          genetics. I quickly realized that I wasn't passionate about genetics,
          but I was fascinated by the idea of using code to create something
          new. I started teaching myself Python, and then I met JavaScript.
          JavaScript opened up a whole new world of possibilities for me, and I
          quickly fell in love with both backend and frontend development. Since
          then, I've built a number of web applications and I'm excited to see
          what the future holds for me in the field of software engineering.
        </p>
      </article>
    </section>
  </div>
</template>

<script setup lang="ts">
import profileImg from "~/assets/images/profile.jpg";
</script>

<style lang="scss" scoped>
img {
  border: solid 8px $green;
}

h1 {
  border-bottom: solid 2px $green;
  color: $gray;
}

p {
  color: $gray;
}
</style>
