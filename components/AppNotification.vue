<template>
  <div class="w-1/3 h-auto absolute top-0 right-0 z-40">
    <div
      class="notif-box mt-10 px-5 py-3.5 rounded-lg shadow hover:shadow-md max-w-sm transition duration-500 ease-linear"
    >
      <div class="w-full flex items-center justify-between">
        <span class="font-medium text-sm">New Notification</span>
        <button
          @click.prevent="$emit('notificationOff')"
          class="-mr-1 h-5 md:w-5 w-12 rounded-full flex justify-center items-center"
        >
          <svg class="h-2 w-2 fill-current items-center" viewBox="0 0 20 20">
            <path
              d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
            />
          </svg>
        </button>
      </div>
      <div
        class="flex items-center mt-2 rounded-lg py-1 cursor-pointer"
        @click.prevent="handleNotificationClick"
      >
        <div class="relative flex flex-shrink-0 items-end">
          <img
            class="h-16 w-16 rounded-full"
            :src="avatarImg"
            draggable="false"
          />
          <span
            class="online-status absolute h-4 w-4 rounded-full bottom-0 right-0 border-2"
          ></span>
        </div>
        <div class="ml-3.5">
          <span class="font-semibold tracking-tight text-xs">Amirhosein</span>
          <p class="text-xs leading-4 pt-2 italic opacity-70">
            "Let's Start a New Project Together"
          </p>
          <span class="msg-time text-[10px] font-medium leading-4"
            >a few seconds ago</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import avatarImg from "~/assets/images/avatar.jpg";

const emit = defineEmits();
function handleNotificationClick() {
  navigateTo("/contact");
  emit("notificationOff");
}
</script>

<style lang="scss" scoped>
.notif-box {
  background-color: $dark-slate;
  color: $gray;

  button {
    background-color: $light-navy-blue;
    color: $mid-gray;
  }
  button:hover {
    color: $gray;
  }

  .online-status {
    background-color: $green;
    border-color: $dark-slate;
  }

  .msg-time {
    color: $blue;
  }
}
</style>
