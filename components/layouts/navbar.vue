<template>
  <header
    :class="[
      background == 'default' ? 'bg-white' : 'bg-primary-default',
      'sticky top-0 z-30 p-0 md:p-6',
    ]"
  >
    <div
      v-if="!isPreview"
      class="flex items-center justify-between rounded-xl bg-white px-6 py-4"
    >
      <app-logo />
      <div class="flex gap-0 md:gap-4">
        <app-button
          v-for="(item, index) in navigation"
          :key="index"
          class="flex items-center gap-2"
          variant="ghosted"
          :active="activeNav === item.link"
          @mouseover="item.color = 'primary'"
          @mouseleave="
            activeNav === item.link ? null : (item.color = 'default')
          "
          @click="navStore.changeNav(item.link)"
        >
          <icon-link v-if="item.link == '/links'" :color="item.color" />
          <icon-profile v-else :color="item.color" />
          <span class="hidden md:block">{{ item.text }}</span>
        </app-button>
      </div>
      <app-button variant="outlined" @click="router.push('/preview')">
        <icon-eye class="block md:hidden" />
        <span class="hidden md:block">Preview</span>
      </app-button>
    </div>
    <div
      v-else
      class="flex items-center justify-between rounded-xl bg-white px-6 py-4"
    >
      <app-button variant="outlined" @click="router.push('/')">
        Back to Editor
      </app-button>
      <app-button>Share Link</app-button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useNavigation } from "@/store/use-navigation";

interface Props {
  background?: "default" | "primary";
  isPreview?: boolean;
}

withDefaults(defineProps<Props>(), { background: "default", isPreview: false });

const navStore = useNavigation();
const { navigation, activeNav } = storeToRefs(navStore);

const router = useRouter();
</script>
