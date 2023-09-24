<template>
  <div class="flex justify-center items-center md:w-1/2 my-2">
    <div
      class="flex justify-around items-center rounded-full p-2 w-full stack-bar"
    >
      <div
        v-for="d in data"
        :key="d.id"
        class="flex justify-center items-center mx-1"
      >
        <img
          :src="d.svg"
          :alt="d.name"
          @mouseover="changeColorOn(d.id)"
          @mouseleave="hoverFlag = false"
          :class="{ 'hovering scale-110': hoverFlag && hoverID === d.id }"
          draggable="false"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const hoverID = ref(-10);
const hoverFlag = ref(false);

function changeColorOn(id: number) {
  hoverFlag.value = true;
  hoverID.value = id;
}

import data from "~/data/svg.json";
</script>

<style lang="scss" scoped>
.stack-bar {
  background-color: $white;

  img {
    width: 25px;
    height: 25px;
    transition: all ease 0.5s;
    filter: invert(16%) sepia(6%) saturate(4550%) hue-rotate(193deg)
      brightness(92%) contrast(95%);
  }
  .hovering {
    filter: invert(69%) sepia(7%) saturate(3283%) hue-rotate(101deg)
      brightness(91%) contrast(80%);
    transition: all ease 0.3s;
  }
}
</style>
