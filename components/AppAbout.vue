<template>
  <div
    class="w-full flex justify-center items-center h-[calc(100vh-10rem)] px-14"
  >
    <section class="w-1/3 h-auto">
      <img
        id="tilt"
        width="80%"
        src="/images/profile.jpg"
        alt="Amirhosein's Portrait"
        class="rounded-full border-8 border-[#42b883] shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out"
        draggable="false"
      />
    </section>
    <section class="w-1/2 h-auto">
      <article class="flex flex-col justify-center items-center">
        <h1
          class="text-4xl self-start border-b-2 border-b-[#42b883] text-slate-200 my-4 tracking-wide"
        >
          About Me
        </h1>
        <p class="text-slate-50 indent-4 text-justify">
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

<script setup lang="ts"></script>
