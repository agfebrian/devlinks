<template>
  <div class="relative flex items-center gap-3">
    <div class="absolute left-4 z-10">
      <slot name="icon">
        <icon-mail />
      </slot>
    </div>
    <field-v-validate
      :name="name"
      :type="type"
      v-model="value"
      :rules="required"
      :placeholder="placeholder"
      :class="[
        borderError,
        'flex-1 rounded-lg border py-[11px] pl-11 pr-4 text-base text-grey-dark outline-none',
      ]"
    />
    <div
      v-if="error"
      class="absolute right-0 z-10 flex items-center bg-white/50 py-2 pl-1 pr-4"
    >
      <p class="text-sm font-normal text-danger-default">{{ error }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Field as FieldVValidate } from "vee-validate";

interface Props {
  modelValue: string;
  name?: string;
  type?: string;
  required?: string;
  placeholder?: string;
  error?: string;
}

const props = withDefaults(defineProps<Props>(), {
  name: "",
  type: "text",
  required: "",
  placeholder: "Type input here",
  error: "",
});
const emits = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const value = computed({
  get: () => props.modelValue,
  set: (newVal) => emits("update:modelValue", newVal),
});

const borderError = computed(() => {
  if (props.error)
    return "border-danger-default focus:border-danger-default focus:shadow-none";
  else
    return "border-grey-hover focus:border-primary-default focus:shadow-input";
});
</script>
