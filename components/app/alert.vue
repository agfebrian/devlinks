<template>
  <div
    :class="[
      alert.show ? 'opacity-100' : 'opacity-0',
      'fixed bottom-8 left-1/2 z-40 flex w-full max-w-md -translate-x-1/2 transform items-center gap-2 rounded-xl bg-grey-dark px-6 py-4 shadow-md transition-all',
    ]"
  >
    <template v-if="alert.icon == 'save'">
      <icon-save />
    </template>
    <template v-else> 🎉 </template>
    <p class="text-sm font-medium text-grey-light sm:text-base">
      {{ alert.message }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { watch } from "vue";
import { storeToRefs } from "pinia";
import { useAlert } from "@/store/use-alert";

const alertStore = useAlert();
const { alert } = storeToRefs(alertStore);

watch(
  () => alert.value.show,
  (newVal) => {
    if (newVal) {
      setTimeout(() => {
        alertStore.setAlert({
          show: false,
          message: "",
        });
      }, 3000);
    }
  },
);
</script>
