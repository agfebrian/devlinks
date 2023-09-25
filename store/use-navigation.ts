import { defineStore } from "pinia";
import IconLink from "@/components/icon/link.vue";
import IconProfile from "@/components/icon/profile.vue";

interface Navigation {
  link: Link;
  text: string;
  icon?: any;
  color: Color;
}

type Link = "/links" | "/profile";
type Color = "primary" | "default";

export const useNavigation = defineStore("navigation", () => {
  const navigation = ref<Navigation[]>([
    {
      text: "Links",
      link: "/links",
      icon: "icon-link",
      color: "primary",
    },
    {
      text: "Profile Details",
      link: "/profile",
      icon: "icon-profile",
      color: "default",
    },
  ]);
  const activeNav = ref<Link>("/links");

  const changeNav = (nav: Link) => {
    activeNav.value = nav;
    navigation.value.map((item) => (item.color = "default"));
    const index = navigation.value.findIndex((item) => item.link == nav);
    navigation.value[index].color = "primary";
    // if (nav.includes("profile")) {
    //   colorLink.value = "default";
    //   colorProfile.value = "primary";
    // } else {
    //   colorProfile.value = "default";
    //   colorLink.value = "primary";
    // }
  };

  return { navigation, activeNav, changeNav };
});
