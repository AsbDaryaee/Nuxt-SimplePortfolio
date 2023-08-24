<template>
  <h1 class="text-4xl border-b-[#42b883] text-slate-200 mb-8">
    Send Me A Message
  </h1>
  <form>
    <!-- Name -->
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-slate-100 text-xs font-bold mb-2"
          for="first-name"
        >
          First Name
        </label>
        <input
          v-model="contactForm.firstName"
          class="appearance-none block border-4 w-full text-gray-700 bg-gray-200 borde rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          :class="{
            'border-red-500 border-4 focus:border-red-500 ':
              v$.firstName.$error,
          }"
          id="first-name"
          type="text"
          placeholder="Name"
        />
      </div>
      <div class="w-full md:w-1/2 px-3">
        <label
          class="block uppercase tracking-wide text-slate-100 text-xs font-bold mb-2"
          for="last-name"
        >
          Last Name
        </label>
        <input
          v-model="contactForm.lastName"
          class="appearance-none block w-full border-4 bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
          id="last-name"
          type="text"
          placeholder="(Optional)"
          :class="{
            'border-red-500 border-4 focus:border-red-500 ': v$.lastName.$error,
          }"
        />
      </div>
    </div>
    <!-- Name -->
    <!-- Email & Phone -->
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-slate-100 text-xs font-bold mb-2"
          for="email"
        >
          Email
        </label>
        <input
          v-model="contactForm.email"
          class="appearance-none block w-full border-4 bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="email"
          type="text"
          placeholder="youremail@example.com"
          :class="{
            'border-red-500 border-4 focus:border-red-500 ': v$.email.$error,
          }"
        />
      </div>
      <div class="w-full md:w-1/2 px-3">
        <label
          class="block uppercase tracking-wide text-slate-100 text-xs font-bold mb-2"
          for="phone"
        >
          Phone
        </label>
        <input
          v-model="contactForm.phone"
          class="appearance-none block w-full border-4 bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="phone"
          type="text"
          placeholder="(Optional)"
          :class="{
            'border-red-500 border-4 focus:border-red-500 ': v$.phone.$error,
          }"
        />
      </div>
    </div>
    <!-- Email & Phone -->
    <!-- Text Area -->
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full mb-6 md:mb-0">
        <label
          for="message"
          class="block uppercase px-3 tracking-wide text-slate-100 text-xs font-bold mb-2"
          >Your message</label
        >
        <div class="px-3 py-2 rounded-lg w-full items-center justify-center">
          <textarea
            v-model="contactForm.message"
            id="message"
            rows="1"
            class="appearance-none resize-none block w-full h-24 border-4 bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            placeholder="Your message..."
            :class="{
              'border-red-500 border-4 focus:border-red-500 ':
                v$.message.$error,
            }"
          ></textarea>
        </div>
      </div>
    </div>
    <!-- Text Area -->
    <!-- Button -->
    <button
      @click.prevent="submitForm"
      :disabled="pending"
      class="px-6 py-3 bg-[#42b883] rounded text-[#252B48] font-semibold hover:bg-green-200 transition-all duration-300 ease-in-out"
    >
      Submit
    </button>
    <!-- Button -->
  </form>
  <section
    v-if="isNotifShowing && notifMessage[0] === 'success'"
    class="absolute bg-slate-900 text-slate-100 rounded-2xl p-6 right-12 -top-2"
  >
    <h1>✔️ {{ notifMessage[1] }}</h1>
  </section>
  <section
    v-else-if="isNotifShowing && notifMessage[0] === 'error'"
    class="absolute bg-slate-900 text-slate-100 rounded-2xl p-6 right-12 -top-2"
  >
    <h1>❌ {{ notifMessage[1] }}</h1>
  </section>
</template>

<script setup lang="ts">
import {
  required,
  email,
  minLength,
  maxLength,
  alpha,
  numeric,
} from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import Message from "~/types/message.type";

const rules = computed(() => {
  return {
    firstName: { required, minLength: minLength(2), alpha },
    lastName: { minLength: minLength(2), alpha },
    email: { required, email },
    phone: { numeric, minLength: minLength(6) },
    message: {
      required,
      minLength: minLength(5),
      maxLength: maxLength(320),
    },
  };
}, {});

const contactForm = reactive({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
});
const isNotifShowing = ref(false);
const notifMessage = ref(["", ""]);
const pending = ref(false);

watch(isNotifShowing, (oldVal, newVal, onCleanup) => {
  const timer = setTimeout(() => {
    isNotifShowing.value = false;
  }, 5000);

  onCleanup(() => {
    clearTimeout(timer);
  });
});

const v$ = useVuelidate(rules, contactForm);
async function submitForm() {
  pending.value = true;

  const result = await v$.value.$validate();

  if (result) {
    sendData({ ...contactForm });
  } else {
    notifMessage.value[0] = "error";
    notifMessage.value[1] = "Please Fill The Form Carefully...";
    isNotifShowing.value = true;
    pending.value = false;
  }
}
async function sendData(payload: Message) {
  try {
    const { data: response, status } = await useFetch("/api/message", {
      method: "post",
      body: {
        data: payload,
      },
    });
    if (status.value === "success") {
      notifMessage.value[0] = "success";
      notifMessage.value[1] = "Your Message Sent Successfully";
      isNotifShowing.value = true;
      pending.value = false;
    }
  } catch (error) {
    notifMessage.value[0] = "error";
    notifMessage.value[1] = "Sorry, Somthing Isn't Right, Try Later...";
    isNotifShowing.value = true;
    pending.value = false;
  }
}
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
