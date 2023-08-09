<template>
  <div class="flex h-full w-full flex-col items-center justify-center">
    <div class="flex w-[476px] flex-col gap-[51px]">
      <div class="flex w-full justify-center">
        <icon-devlinks />
      </div>
      <!-- form -->
      <div class="flex w-full flex-col gap-10 p-10">
        <!-- head -->
        <div class="flex flex-col gap-2">
          <h1 class="text-[32px] font-bold text-grey-dark">Login</h1>
          <p class="text-base font-normal text-grey-default">
            Add your details below to get back into the app
          </p>
        </div>
        <!-- content -->
        <form-v-validate @submit="handleSubmit" v-slot="{ errors }">
          <field-custom name="email" rules="required" v-model="email" />
          <div class="flex flex-col gap-6">
            <div class="flex flex-col gap-1">
              <app-label
                to="email"
                class="text-sm"
                text="Email Address"
                :error="errors.email"
              />
              <app-input
                v-model="email"
                name="email"
                placeholder="e.g. alex@email.com"
                required="required|email"
                :error="errors.email"
              />
            </div>
            <div class="flex flex-col gap-1">
              <app-label
                to="password"
                class="text-sm"
                text="Password"
                :error="errors.password"
              />
              <app-input
                name="password"
                v-model="password"
                type="password"
                required="required"
                placeholder="Enter your password"
                :error="errors.password"
              >
                <template #icon>
                  <icon-lock />
                </template>
              </app-input>
            </div>
            <app-button> Login </app-button>
            <p class="text-center text-base font-normal text-grey-default">
              Don't have an account?
              <nuxt-link to="/register" class="text-primary-default">
                Create account
              </nuxt-link>
            </p>
          </div>
        </form-v-validate>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Form as FormVValidate } from "vee-validate";

const email = ref<string>("");
const password = ref<string>("");

const handleSubmit = () => {
  console.log("Test");
};
</script>
