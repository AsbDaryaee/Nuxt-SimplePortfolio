<template>
  <h1 class="md:text-4xl text-3xl text-center pb-2 mb-8 mx-4 contanct-heading">
    Send Me A Message
  </h1>
  <form>
    <!-- Name -->
    <div class="flex justify-center items-center flex-wrap -mx-3 md:mb-6">
      <div class="md:w-1/2 px-3 mb-6 md:mb-0 w-3/4">
        <label
          class="block uppercase tracking-wide text-xs font-bold mb-2"
          for="first-name"
        >
          First Name
        </label>
        <input
          v-model="contactForm.firstName"
          class="appearance-none block w-full rounded py-3 px-4 leading-tight"
          :class="{
            'input-error': v$.firstName.$error,
          }"
          id="first-name"
          type="text"
          placeholder="Name"
        />
      </div>
      <div class="md:w-1/2 px-3 mb-6 md:mb-0 w-3/4">
        <label
          class="block uppercase tracking-wide text-xs font-bold mb-2"
          for="last-name"
        >
          Last Name
        </label>
        <input
          v-model="contactForm.lastName"
          class="appearance-none block w-full rounded py-3 px-4 leading-tight"
          id="last-name"
          type="text"
          placeholder="(Optional)"
          :class="{
            'input-error': v$.lastName.$error,
          }"
        />
      </div>
    </div>
    <!-- Name -->
    <!-- Email & Phone -->
    <div class="flex flex-wrap justify-center items-center -mx-3 md:mb-6">
      <div class="md:w-1/2 px-3 mb-6 md:mb-0 w-3/4">
        <label
          class="block uppercase tracking-wide text-xs font-bold mb-2"
          for="email"
        >
          Email
        </label>
        <input
          v-model="contactForm.email"
          class="appearance-none block w-full rounded py-3 px-4 leading-tight"
          id="email"
          type="text"
          placeholder="youremail@example.com"
          :class="{
            'input-error': v$.email.$error,
          }"
        />
      </div>
      <div class="md:w-1/2 px-3 mb-6 md:mb-0 w-3/4">
        <label
          class="block uppercase tracking-wide text-xs font-bold mb-2"
          for="phone"
        >
          Phone
        </label>
        <input
          v-model="contactForm.phone"
          class="appearance-none block w-full rounded py-3 px-4 leading-tight"
          id="phone"
          type="text"
          placeholder="(Optional)"
          :class="{
            'input-error': v$.phone.$error,
          }"
        />
      </div>
    </div>
    <!-- Email & Phone -->
    <!-- Text Area -->
    <div class="flex flex-wrap justify-center items-center -mx-3 md:mb-6">
      <div class="md:w-full mb-6 md:mb-0 w-3/4">
        <label
          for="message"
          class="block uppercase px-3 tracking-wide text-xs font-bold mb-2"
          >Your message</label
        >
        <div class="px-3 py-2 rounded-lg w-full items-center justify-center">
          <textarea
            v-model="contactForm.message"
            id="message"
            rows="1"
            class="appearance-none resize-none block w-full h-24 rounded py-3 px-4 leading-tight"
            placeholder="Your message..."
            :class="{
              'input-error': v$.message.$error,
            }"
          ></textarea>
        </div>
      </div>
    </div>
    <!-- Text Area -->
    <!-- Button -->
    <div class="w-full flex items-center justify-center md:block">
      <button
        @click.prevent="submitForm"
        :disabled="pending"
        class="px-6 py-3 rounded font-bold transition-all duration-300 ease-in-out"
      >
        Submit
      </button>
    </div>

    <!-- Button -->
  </form>
  <section
    v-if="isNotifShowing && notifMessage[0] === 'success'"
    class="pop-up md:absolute md:w-1/5 p-4 md:right-12 md:top-20 md:bottom-auto fixed bottom-0 w-full text-center rounded-2xl"
  >
    <h1>✔️ {{ notifMessage[1] }}</h1>
  </section>
  <section
    v-else-if="isNotifShowing && notifMessage[0] === 'error'"
    class="pop-up md:absolute md:w-1/5 p-4 md:right-12 md:top-20 md:bottom-auto fixed bottom-0 w-full text-center rounded-2xl"
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

<style scoped lang="scss">
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
}

.contanct-heading {
  border-bottom: solid 2px $green;
  color: $gray;
}

form {
  label {
    color: $white;
  }

  input,
  textarea {
    color: $dark-gray;
    background-color: $gray;
    border: solid 4px transparent;
  }

  input:focus,
  textarea:focus {
    background-color: $white;
    outline: none;
  }

  .input-error {
    border: solid 4px $red;
  }
  .input-error:focus {
    border: solid 4px $red;
    outline: none;
  }

  button {
    background-color: $green;
    color: $navy-blue;
  }

  button:hover {
    background-color: $light-green;
  }
}

.pop-up {
  background-color: $dark-slate;
  color: $gray;
}
</style>
