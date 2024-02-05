<template>
  <layouts-navbar v-if="!isPreview" />
  <layouts-navbar v-else :background="background" is-preview />
  <div>
    <slot />
  </div>
  <app-alert />
</template>

<script setup lang="ts">
const route = useRoute();
const isPreview = computed(() => route.fullPath == "/preview");

const screenWidth = ref<number>(0);
const background = computed(() =>
  screenWidth.value > 500 ? "primary" : "default",
);

onMounted(() => {
  screenWidth.value = window.innerWidth;
  window.addEventListener("resize", () => {
    screenWidth.value = window.innerWidth;
  });
});
</script>
