import { defineStore } from "pinia";
import Dropdown from "types/dropdown.interface";

interface profileLink {
  platform: Dropdown;
  link: string;
}

export const useMyLinksStore = defineStore("myLinks", () => {
  const profileLinks = ref<profileLink[]>([]);

  const profileLinksLength = computed(() => profileLinks.value.length);

  return { profileLinks, profileLinksLength };
});
