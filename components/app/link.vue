<template>
  <!-- <a :href="link"> -->
  <div :class="[color, 'flex w-full items-center rounded-lg px-4 py-[11px]']">
    <component :is="icon" color="white" />
    <p class="ml-2 text-sm font-normal text-white">{{ text }}</p>
    <icon-chevron-right class="ml-auto" />
  </div>
  <!-- </a> -->
</template>

<script setup lang="ts">
interface Props {
  color: string;
  text: string;
  link: string;
  icon: any;
}

defineProps<Props>();
</script>
