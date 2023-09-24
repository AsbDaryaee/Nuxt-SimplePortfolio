<template>
  <header class="relative w-full py-8 flex justify-between items-center">
    <div class="font-sans font-semibold mx-10">
      <NuxtLink to="/" class="mx-4">Home</NuxtLink>
      <NuxtLink to="/about" class="mx-4">About</NuxtLink>
      <NuxtLink to="/contact" class="mx-4">Contact</NuxtLink>
    </div>
    <div
      class="relative mr-16 cursor-pointer p-2 rounded-full notif-circle"
      @click.prevent="notificationOn"
    >
      <div
        v-show="notificationAlert"
        class="absolute w-2 h-2 rounded-full top-1 right-1 notif-alert"
      ></div>
      <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="svg">
        <g>
          <path
            d="m 13 6.5 c 0 2.761719 -2.238281 5 -5 5 s -5 -2.238281 -5 -5 s 2.238281 -5 5 -5 s 5 2.238281 5 5 z m 0 0"
          />
          <path d="m 3 6.5 h 10 v 6 h -10 z m 0 0" />
          <path
            d="m 2.5 13 h 11 c 0.550781 0 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 h -11 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 z m 0 0"
          />
          <path
            d="m 10 14 c 0 0.714844 -0.382812 1.375 -1 1.730469 c -0.617188 0.359375 -1.382812 0.359375 -2 0 c -0.617188 -0.355469 -1 -1.015625 -1 -1.730469"
          />
          <path
            d="m 9.5 1.5 c 0 0.828125 -0.671875 1.5 -1.5 1.5 s -1.5 -0.671875 -1.5 -1.5 s 0.671875 -1.5 1.5 -1.5 s 1.5 0.671875 1.5 1.5 z m 0 0"
          />
        </g>
      </svg>
    </div>
  </header>

  <!-- Notification -->
  <div class="absolute w-[1000px] h-auto top-12 right-12">
    <clientOnly>
      <AppNotification
        @notificationOff="notificationOff"
        v-show="isNotificationShowing"
        :isNotificationShowing="isNotificationShowing"
      />
    </clientOnly>
  </div>
  <!-- Notification -->
</template>

<script setup lang="ts">
const notificationAlert = ref(true);
const isNotificationShowing = ref(false);

function notificationOn() {
  notificationAlert.value = false;
  isNotificationShowing.value = true;
}

function notificationOff() {
  isNotificationShowing.value = false;
}

onMounted(() => {
  setTimeout(() => {
    notificationOn();
  }, 9000);
});
</script>

<style scoped lang="scss">
header {
  background-color: $navy-blue;
  color: $mid-gray;
  .svg {
    fill: $green;
  }

  .notif-alert {
    animation: opacity 3s linear infinite;
    background-color: $red;
  }

  .notif-circle {
    background-color: $light-navy-blue;
  }
}

@keyframes opacity {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 100%;
  }
  100% {
    opacity: 0%;
  }
}
</style>
