import { defineStore } from "pinia";
import type { Link } from "types/profile.interface";

export const useMyLinksStore = defineStore("myLinks", () => {
  const profileLinks = ref<Link[]>([]);

  const profileLinksLength = computed(() => profileLinks.value.length);

  return { profileLinks, profileLinksLength };
});
