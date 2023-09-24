<template>
  <div :class="[sizes, 'w-[160px] rounded-[104px] bg-skeleton']"></div>
</template>

<script setup lang="ts">
interface Props {
  size?: "default" | "sm";
}

const props = withDefaults(defineProps<Props>(), {
  size: "default",
});

const sizes = computed(() => {
  switch (props.size) {
    case "sm":
      return "h-2";
    default:
      return "h-4";
  }
});
</script>
