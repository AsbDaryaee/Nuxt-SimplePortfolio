<template>
  <div
    class="w-full md:h-[calc(100vh-10rem)] flex md:flex-row flex-col py-4 pb-12 mx-auto items-center justify-center"
  >
    <section class="md:w-1/3 flex items-center justify-center">
      <img
        :src="profileImg"
        alt="Amirhosein's Portrait"
        class="rounded-full shadow-sm hover:shadow-xl transition-all md:w-3/4 md:mt-0 w-1/2 mt-8 duration-300 ease-in-out"
        draggable="false"
        preload
        width="500"
        height="500"
      />
    </section>
    <section class="md:w-1/2 px-8">
      <article class="flex flex-col justify-center items-center">
        <h1 class="text-4xl md:self-start my-4 tracking-wide pb-2">About Me</h1>
        <p class="indent-4 text-justify">
          I'm a JavaScript developer with a passion for building engaging video
          experiences. Currently, I'm neck-deep in developing and maintaining a
          VOD and Live streaming project using the powerful Nuxt.js framework.
          Beyond this project, I've tackled various freelance challenges, honing
          my skills in React, Express.js, and even ffmpeg for video
          manipulation. My curious nature keeps me constantly learning and
          updating my knowledge base. In fact, I try to add a new piece to my
          developer puzzle every single day! If you're looking for a skilled and
          curious developer with a knack for building captivating video
          experiences, you might have just found your match. Let's connect and
          see what we can create together!
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
