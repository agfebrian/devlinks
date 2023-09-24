<template>
  <div
    class="relative flex h-[631px] w-[307px] flex-col items-center px-[35px]"
  >
    <icon-frame-phone class="absolute z-10" />
    <div class="z-20 mt-[63px] flex flex-col items-center gap-[25px]">
      <img
        :src="myProfileStore.myProfile.previewAvatar"
        v-if="myProfileStore.myProfile.previewAvatar"
        class="h-[96px] w-[96px] rounded-full object-cover"
        width="96px"
        height="96px"
        alt="profile"
      />
      <div v-else class="h-[96px] w-[96px] rounded-full bg-skeleton"></div>
      <div class="flex flex-col items-center gap-[13px]">
        <h3
          v-if="myProfileStore.myProfile.firstName"
          class="text-lg font-semibold text-grey-dark"
        >
          {{
            `${myProfileStore.myProfile.firstName} ${
              myProfileStore.myProfile.lastName || ""
            }`
          }}
        </h3>
        <app-skeleton v-else />
        <p
          v-if="myProfileStore.myProfile.email"
          class="text-base font-normal text-grey-default"
        >
          {{ myProfileStore.myProfile.email }}
        </p>
        <app-skeleton v-else size="sm" class="w-[72px]" />
      </div>
    </div>
    <div class="z-20 mt-[56px] flex w-full flex-col gap-5">
      <app-link
        :key="i"
        v-for="(item, i) in myLinksStore.profileLinks"
        :color="item.platform.color!"
        :icon="item.platform.icon!"
        :text="item.platform.text"
        :link="item.link"
      />
      <div
        class="h-11 w-full rounded-lg bg-skeleton"
        v-for="item in skeletons"
        :key="item"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMyProfileStore } from "@/store/use-my-profile";
import { useMyLinksStore } from "@/store/use-my-links";

const myProfileStore = useMyProfileStore();
const myLinksStore = useMyLinksStore();
const lengthOfProfileLinks = computed(() => myLinksStore.profileLinksLength);
const skeletons = computed(() => 5 - lengthOfProfileLinks.value);
</script>
