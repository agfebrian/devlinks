<template>
  <button
    :disabled="disabled"
    :class="[
      disabledButton,
      showVariantButton,
      'rounded-lg px-[27px] py-[11px] text-base font-semibold transition',
    ]"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
  variant?: "default" | "outlined" | "ghosted";
  disabled?: boolean;
  active?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "default",
  disabled: false,
  active: false,
});

const showVariantButton = computed(() => {
  let result: string;
  switch (props.variant) {
    case "outlined":
      result = !props.disabled
        ? "border border-primary-default bg-transparent hover:bg-primary-light active:bg-primary-light text-primary-default"
        : "border border-primary-default bg-transparent text-primary-default";
      break;
    case "ghosted":
      result = props.active
        ? "text-primary-default bg-primary-light"
        : "bg-transparent hover:text-primary-default active:bg-primary-light text-grey-default";
      break;
    default:
      result = !props.disabled
        ? "bg-primary-default hover:bg-primary-hover active:bg-primary-hover active:shadow-input text-white"
        : "bg-primary-default text-white";
      break;
  }
  return result;
});

const disabledButton = computed(() => (props.disabled ? "opacity-25" : ""));
</script>
