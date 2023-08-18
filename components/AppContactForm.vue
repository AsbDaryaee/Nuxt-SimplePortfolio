<template>
  <h1 class="text-4xl border-b-[#42b883] text-slate-200 mb-8">
    Send Me Message
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
          v-model="Form.firstName"
          class="appearance-none block w-full text-gray-700 bg-gray-200 borde rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          :class="{
            'border-red-500 border-4 focus:border-red-500 ':
              v$.firstName.$error,
          }"
          @keyup="v$.firstName.$touch"
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
          v-model="Form.lastName"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="last-name"
          type="text"
          placeholder="(Optional)"
          :class="{
            'border-red-500 border-4 focus:border-red-500 ': v$.lastName.$error,
          }"
          @keyup="v$.lastName.$touch"
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
          v-model="Form.email"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="email"
          type="text"
          placeholder="youremail@example.com"
          :class="{
            'border-red-500 border-4 focus:border-red-500 ': v$.email.$error,
          }"
          @keyup="v$.email.$touch"
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
          v-model="Form.phone"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="phone"
          type="text"
          placeholder="(Optional)"
          :class="{
            'border-red-500 border-4 focus:border-red-500 ': v$.phone.$error,
          }"
          @keyup="v$.phone.$touch"
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
            v-model="Form.message"
            id="message"
            rows="1"
            class="appearance-none resize-none block w-full h-24 bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            placeholder="Your message..."
            :class="{
              'border-red-500 border-4 focus:border-red-500 ':
                v$.message.$error,
            }"
            @keyup="v$.message.$touch"
          ></textarea>
        </div>
      </div>
    </div>
    <!-- Text Area -->

    <!-- Button -->
    <button
      @click.prevent="submitForm(Form)"
      :disabled="pending"
      class="px-6 py-3 bg-[#42b883] rounded text-[#252B48] font-semibold hover:bg-green-200 transition-all duration-300 ease-in-out"
    >
      Submit
    </button>
    <!-- Button -->
  </form>
</template>

<script setup lang="ts">
import Message from "../types/message.type";
import {
  required,
  email,
  minLength,
  maxLength,
  alpha,
  numeric,
} from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

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
});

const Form = reactive({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
});
const pending = ref(false);

const v$ = useVuelidate(rules, Form);

async function submitForm() {
  pending.value = true;

  const result = await v$.value.$validate();

  if (result) {
    try {
      const { data: response } = await useFetch("/api/message", {
        method: "post",
        body: {
          data: Form,
        },
      });
      if (response) {
        pending.value = false;
      }
    } catch (error) {
      console.log(error);
      pending.value = false;
    }
  } else {
    pending.value = false;
    console.log("Form Is not Complete");
  }
}
</script>

<style scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
