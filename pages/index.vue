<template>
  <layouts-container>
    <div class="flex w-full gap-6">
      <div
        class="hidden h-[786px] w-[512px] items-center justify-center rounded-xl bg-white p-6 md:flex"
      >
        <app-frame-phone></app-frame-phone>
      </div>
      <div class="flex h-fit flex-1 flex-col gap-6 rounded-xl bg-white">
        <form-v-validate v-slot="{ errors }" @submit="handleSubmit">
          <div class="p-10">
            <div class="flex flex-col gap-10">
              <div class="flex flex-col gap-2">
                <h2 class="text-[32px] font-bold leading-[48px] text-grey-dark">
                  {{ form.title }}
                </h2>
                <p class="text-base font-normal text-grey-default">
                  {{ form.description }}
                </p>
              </div>
              <app-button
                variant="outlined"
                @click="addLink"
                :disabled="myLinksLength == 5"
                v-if="navStore.activeNav == '/links'"
              >
                + Add new link
              </app-button>
            </div>
            <template v-if="navStore.activeNav == '/links'">
              <div
                v-if="myLinksStore.profileLinks.length"
                class="flex flex-col gap-6"
              >
                <draggable v-model="myLinksStore.profileLinks" item-key="id">
                  <template #item="{ element: item, index: i }">
                    <div class="flex flex-col gap-3 p-5">
                      <div class="flex justify-between">
                        <div class="flex cursor-grab items-center gap-2">
                          <icon-dragable />
                          <p class="text-base font-bold text-grey-default">
                            Link #{{ i + 1 }}
                          </p>
                        </div>
                        <p
                          @click="removeLink(i)"
                          class="cursor-pointer text-base font-normal text-grey-default"
                        >
                          Remove
                        </p>
                      </div>
                      <div class="flex flex-col gap-1">
                        <app-label
                          :to="`platform${i}`"
                          text="Platform"
                          :error="errors[`platform${i}`]"
                        />
                        <field-v-validate
                          :name="`platform${i}`"
                          v-model="item.platform.text"
                          rules=""
                          type="hidden"
                        />
                        <app-dropdown
                          v-model="item.platform"
                          :items="links"
                          :error="errors[`platform${i}`]"
                        />
                      </div>
                      <div class="flex flex-col gap-1">
                        <app-label
                          :to="`link${i}`"
                          text="Link"
                          :error="errors[`link${i}`]"
                        />
                        <app-input
                          :id="`link${i}`"
                          :name="`link${i}`"
                          v-model="item.link"
                          :required="`required|matchUrl:https://www.${item.platform.value}.com/`"
                          :error="errors[`link${i}`]"
                          :placeholder="`e.g. https://www.${item.platform.value}.com/`"
                        >
                          <template #icon>
                            <icon-link />
                          </template>
                        </app-input>
                      </div>
                    </div>
                  </template>
                </draggable>
              </div>
              <div
                v-else
                class="mt-6 flex h-[429px] flex-col items-center justify-center gap-10"
              >
                <icon-touched-phone />
                <div
                  class="flex w-full flex-col items-center justify-center gap-6 md:w-[488px]"
                >
                  <h2 class="text-center text-3xl font-bold text-grey-dark">
                    Let's get you started
                  </h2>
                  <p
                    class="text-center text-base font-normal text-grey-default"
                  >
                    Use the “Add new link” button to get started. Once you have
                    more than one link, you can reorder and edit them. We’re
                    here to help you share your profiles with everyone!
                  </p>
                </div>
              </div>
            </template>
            <template v-else>
              <div class="mt-10 flex flex-col gap-6">
                <div
                  class="flex flex-col items-start gap-4 p-5 md:flex-row md:items-center"
                >
                  <p
                    class="w-full text-base font-normal text-grey-default md:w-[240px]"
                  >
                    Profile picture
                  </p>
                  <div
                    class="flex flex-col items-start gap-6 md:flex-row md:items-center"
                  >
                    <app-upload-image
                      v-model="myProfileStore.myProfile.avatar"
                    />
                    <p class="text-sm font-normal text-grey-default">
                      Image must be below 1024x1024px. <br />
                      Use PNG or JPG format.
                    </p>
                  </div>
                </div>
                <div class="flex flex-col gap-4 p-5">
                  <div
                    class="flex flex-col items-start gap-4 md:flex-row md:items-center"
                  >
                    <p
                      class="w-[240px] text-base font-normal text-grey-default"
                    >
                      First Name
                    </p>
                    <app-input
                      name="firstName"
                      v-model="myProfileStore.myProfile.firstName"
                      placeholder="e.g. John"
                      required="required"
                      :error="errors.firstName"
                      :icon="false"
                      class="w-full flex-1 md:w-fit"
                    />
                  </div>
                  <div
                    class="flex flex-col items-start gap-4 md:flex-row md:items-center"
                  >
                    <p
                      class="w-[240px] text-base font-normal text-grey-default"
                    >
                      Last Name
                    </p>
                    <app-input
                      name="lastName"
                      v-model="myProfileStore.myProfile.lastName"
                      placeholder="e.g. Appleseed"
                      required="required"
                      :error="errors.lastName"
                      :icon="false"
                      class="w-full flex-1 md:w-fit"
                    />
                  </div>
                  <div
                    class="flex flex-col items-start gap-4 md:flex-row md:items-center"
                  >
                    <p
                      class="w-[240px] text-base font-normal text-grey-default"
                    >
                      Email
                    </p>
                    <app-input
                      name="email"
                      v-model="myProfileStore.myProfile.email"
                      placeholder="e.g. email@example.com"
                      required="required|email"
                      :error="errors.email"
                      :icon="false"
                      class="w-full flex-1 md:w-fit"
                    />
                  </div>
                </div>
              </div>
            </template>
          </div>
          <div class="flex justify-end border-t border-t-grey-hover px-10 py-6">
            <app-button
              class="w-full md:w-fit"
              type="submit"
              :disabled="myLinksLength == 0"
            >
              Save
            </app-button>
          </div>
        </form-v-validate>
      </div>
    </div>
  </layouts-container>
</template>

<script setup lang="ts">
import Dropdown from "types/dropdown.interface";
import { useMyProfileStore } from "@/store/use-my-profile";
import { useMyLinksStore } from "@/store/use-my-links";
import { useNavigation } from "@/store/use-navigation";
import { Form as FormVValidate, Field as FieldVValidate } from "vee-validate";

definePageMeta({
  layout: "custom",
});

const navStore = useNavigation();
const myProfileStore = useMyProfileStore();
const myLinksStore = useMyLinksStore();

const myLinksLength = computed(() => myLinksStore.profileLinksLength);
const form = computed(() => {
  if (navStore.activeNav == "/profile") {
    return {
      title: "Profile Details",
      description:
        "Add your details to create a personal touch to your profile.",
    };
  }
  return {
    title: "Customize your links",
    description:
      "Add/edit/remove links below and then share all your profiles with the world!",
  };
});

const addLink = () => {
  myLinksStore.profileLinks.push({
    platform: {
      value: "github",
      text: "GitHub",
      icon: shallowRef(resolveComponent("icon-github")),
      color: "bg-[#1A1A1A]",
    },
    link: "",
  });
};

const removeLink = (index: number) => {
  myLinksStore.profileLinks.splice(index, 1);
};

const links = ref<Dropdown[]>([
  {
    value: "github",
    text: "GitHub",
    icon: shallowRef(resolveComponent("icon-github")),
    color: "bg-[#1A1A1A]",
  },
  {
    value: "twitter",
    text: "Twitter",
    icon: shallowRef(resolveComponent("icon-twitter")),
    color: "bg-[#43B7E9]",
  },
  {
    value: "linkedin",
    text: "LinkedIn",
    icon: shallowRef(resolveComponent("icon-linkedin")),
    color: "bg-[#2D68FF]",
  },
  {
    value: "youtube",
    text: "Youtube",
    icon: shallowRef(resolveComponent("icon-youtube")),
    color: "bg-[#EE3939]",
  },
  {
    value: "facebook",
    text: "Facebook",
    icon: shallowRef(resolveComponent("icon-facebook")),
    color: "bg-[#2442AC]",
  },
]);

const validatePlatform = () => {
  const valueArr: string[] = myLinksStore.profileLinks.map((item) =>
    item.platform.value.toString(),
  );
  let index: number = 0;

  const validate = valueArr.some((item, idx) => {
    index = idx;
    return valueArr.indexOf(item) != idx;
  });
  return [validate, index];
};

const handleSubmit = (_values: any, actions: any) => {
  const [validate, index] = validatePlatform();
  if (validate) {
    actions.setFieldError(`platform${index}`, "Duplicate value");
  }

  // redirect to next step if input filled is valid
  if (navStore.activeNav == "/links") {
    navStore.changeNav("/profile");
  }

  //redirect back if the user is not filled part of form link
  let isLinksValid: boolean = true;
  const myLinks = myLinksStore.profileLinks.map((item) => item.link);
  for (let index = 0; index < myLinks.length; index++) {
    if (!myLinks[index].length) {
      navStore.changeNav("/links");
      actions.setFieldError(`link${index}`, "Please check again");
      isLinksValid = false;
      break;
    }
  }
  if (!isLinksValid) return;

  // commit
  console.log("submitted");
};
</script>
