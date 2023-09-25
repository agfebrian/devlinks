<template>
  <menu-parent as="div" class="relative">
    <!-- input -->
    <menu-button v-slot="{ open }" class="w-full">
      <div
        :class="[
          activeInput(open),
          'flex items-center justify-between gap-3 rounded-lg border px-4 py-3 text-base font-normal text-grey-dark',
        ]"
      >
        <template v-if="modelValue.icon">
          <component :is="modelValue.icon" />
        </template>
        {{ modelValue.text || placeholder }}
        <icon-chevron-down class="ml-auto" />
      </div>
    </menu-button>
    <!-- items -->
    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <menu-items
        class="absolute right-0 z-20 mt-2 w-full rounded-lg border border-grey-hover bg-white px-4 shadow-[0px_0px_32px_0px_rgba(0,0,0,0.10)]"
      >
        <menu-item
          v-slot="{ active }"
          v-for="(item, i) in items"
          :key="i"
          class="last:border-b-0 even:border-y even:border-grey-hover"
        >
          <button
            type="button"
            @click="changeModelValue(item)"
            :class="[
              modelValue.value === item.value
                ? 'text-primary-default'
                : 'text-grey-dark',
              'group flex w-full cursor-pointer items-center gap-3 py-3 text-base font-normal hover:text-primary-default',
            ]"
          >
            <template v-if="item.icon">
              <component
                :is="item.icon"
                :color="showColorIconSelected(item.value, active)"
              />
            </template>
            {{ item.text }}
          </button>
        </menu-item>
      </menu-items>
    </transition>
  </menu-parent>
</template>

<script setup lang="ts">
import {
  Menu as MenuParent,
  MenuButton,
  MenuItems,
  MenuItem,
} from "@headlessui/vue";
import Dropdown from "@/types/dropdown.interface";

interface Props {
  modelValue: Dropdown;
  placeholder?: string;
  items: Dropdown[];
  error?: string;
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: "Select",
  error: "",
});
const emits = defineEmits<{
  (e: "update:modelValue", value: Dropdown): void;
  (e: "handleChange"): void;
}>();

const changeModelValue = (item: Dropdown) => {
  emits("update:modelValue", item);
  emits("handleChange");
};

const activeInput = (active: boolean) => {
  if (active) return "shadow-input border-primary-default";
  if (props.error) return "border-danger-default";
  return "border-grey-hover";
};

const showColorIconSelected = (
  currentValue: string | number,
  hovered: boolean,
) => {
  if (props.modelValue.value === currentValue) {
    return "#633CFF";
  }
  return hovered ? "#633CFF" : "#737373";
};
</script>
