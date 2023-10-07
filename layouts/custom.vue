<template>
  <layouts-navbar v-if="!isPreview" />
  <layouts-navbar v-else background="primary" is-preview />
  <div>
    <slot />
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const isPreview = computed(() => route.fullPath == "/preview");
</script>
