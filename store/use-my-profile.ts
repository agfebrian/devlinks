import { defineStore } from "pinia";

interface MyProfile {
  firstName: string;
  lastName: string;
  email: string;
  avatar: File;
  previewAvatar: string;
}

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
