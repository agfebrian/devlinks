import { defineStore } from "pinia";
import type { MyProfile } from "types/profile.interface";

export const useMyProfileStore = defineStore("myProfile", () => {
  const myProfile = ref<MyProfile>({
    firstName: "",
    lastName: "",
    email: "",
    avatar: null as any,
    previewAvatar: "",
  });

  return { myProfile };
});
