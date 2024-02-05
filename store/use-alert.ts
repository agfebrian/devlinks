import { defineStore } from "pinia";
import { ref } from "vue";

import type { Alert } from "types/alert.interface";

export const useAlert = defineStore("alert", () => {
  const alert = ref<Alert>({
    show: false,
    message: "Your changes have been successfully saved!",
    icon: "save",
  });

  const setAlert = (value: Alert) => {
    if (!value.icon) {
      value.icon = "save";
    }
    alert.value = value;
  };

  return { alert, setAlert };
});
