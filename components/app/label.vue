<template>
  <label :for="to" :class="[error, 'font-normal']">
    {{ text }}
  </label>
</template>

<script setup lang="ts">
interface Props {
  to?: string;
  text: string;
  error?: string;
}

const props = withDefaults(defineProps<Props>(), {
  to: "",
  error: "",
});

const error = computed(() => {
  if (props.error) return "text-danger-default";
  else return "text-grey-dark";
});
</script>
