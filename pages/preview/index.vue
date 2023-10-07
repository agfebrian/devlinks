<template>
  <div class="relative flex h-screen justify-center">
    <div
      class="absolute left-0 top-0 h-[357px] w-full rounded-b-[32px] bg-primary-default"
    ></div>
    <div
      class="z-10 mt-[82px] flex h-fit flex-col items-center gap-[56px] rounded-3xl bg-white px-[56px] py-12 shadow-2xl"
    >
      <div class="flex w-[237px] flex-col items-center gap-[25px]">
        <div
          class="h-[104px] w-[104px] overflow-hidden rounded-full border-4 border-primary-default bg-black"
        ></div>
        <div class="flex flex-col items-center gap-2">
          <h2
            v-if="profile.firstName && profile.lastName"
            class="text-[32px] font-bold leading-[48px] text-grey-dark"
          >
            {{ `${profile.firstName} ${profile.lastName}` }}
          </h2>
          <app-skeleton v-else />
          <p
            v-if="profile.email"
            class="text-base font-normal text-grey-default"
          >
            {{ profile.email }}
          </p>
          <app-skeleton v-else size="sm" class="w-[100px]" />
        </div>
      </div>
      <div class="flex w-[237px] flex-col gap-5">
        <template v-if="profile?.links?.length">
          <app-link
            v-for="(item, index) in profile.links"
            :key="index"
            :link="item.link"
            :icon="item.platform.icon"
            :text="item.platform.text"
            :color="item.platform.color!"
          />
        </template>
        <div
          v-else
          class="h-11 w-full rounded-lg bg-skeleton"
          v-for="item in 4"
          :key="item"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { usePreview } from "@/store/use-preview";

definePageMeta({
  layout: "custom",
});

const previewStore = usePreview();
const { profile } = storeToRefs(previewStore);
</script>
