<template>
  <div
    class="flex h-full min-h-screen w-full flex-col items-center justify-center gap-5"
  >
    <h1 class="text-5xl font-bold text-blue-500">Nuxt 3 👋</h1>
    <app-input />
    <app-button> Login </app-button>
  </div>
</template>

<script setup lang="ts">
const people = [
  { name: "Wade Cooper" },
  { name: "Arlene Mccoy" },
  { name: "Devon Webb" },
  { name: "Tom Cook" },
  { name: "Tanya Fox" },
  { name: "Hellen Schmidt" },
];
const selectedPerson = ref(people[0]);
</script>
