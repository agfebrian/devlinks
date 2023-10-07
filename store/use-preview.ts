import { defineStore } from "pinia";
import type { MyProfile, Link } from "types/profile.interface";

interface Preview extends MyProfile {
  links: Link[];
}

export const usePreview = defineStore("preview", () => {
  const profile = ref<Preview>({} as Preview);

  return { profile };
});
