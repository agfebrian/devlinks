<template>
  <div
    class="relative flex h-[193px] w-[193px] flex-col items-center justify-center overflow-hidden rounded-xl bg-primary-light"
  >
    <input
      type="file"
      @change="changeImage"
      class="absolute z-30 h-full w-full cursor-pointer opacity-0"
    />
    <img
      :src="previewImage"
      v-if="previewImage"
      class="absolute h-full w-full bg-gradient-to-r from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.50)] object-cover"
      width="100%"
      height="100%"
      alt="profile"
    />
    <div
      v-if="previewImage"
      class="absolute z-10 h-full w-full bg-gradient-to-r from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.50)] opacity-95"
    ></div>
    <div class="z-20 flex flex-col items-center gap-2">
      <icon-image :color="previewImage ? 'default' : 'primary'" />
      <p
        :class="[
          previewImage ? 'text-white' : 'text-primary-default',
          'break-keep text-center text-base font-semibold',
        ]"
      >
        {{ previewImage ? "Change Image" : "+ Upload Image" }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMyProfileStore } from "@/store/use-my-profile";

interface Props {
  modelValue: File;
}

defineProps<Props>();
const emits = defineEmits<{
  (e: "update:modelValue", value: File): void;
}>();

const myProfileStore = useMyProfileStore().myProfile;
const previewImage = ref<string>("");

const changeImage = (event: Event) => {
  const _target = event.target as HTMLInputElement;
  if (_target.files?.length) {
    previewImage.value = URL.createObjectURL(_target.files[0]);
    myProfileStore.previewAvatar = URL.createObjectURL(_target.files[0]);
    emits("update:modelValue", _target.files[0]);
  }
};
</script>

<style>
.linear-gradient {
  background:
    linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%),
    url(<path-to-image>),
    lightgray 50% / cover no-repeat,
    #efebff;
}
</style>
