import { configure, defineRule } from "vee-validate";

export default defineNuxtPlugin((_nuxtApp) => {
  configure({
    validateOnBlur: true,
    validateOnInput: true,
    validateOnChange: true,
  });

  defineRule("required", (value: string) => {
    if (!value || !value.length) {
      return "Can't be empty";
    }
    return true;
  });

  defineRule("email", (value: string) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) == false) {
      return "Please check again";
    }
    return true;
  });

  defineRule("confirmed", (value: string, target: string[]) => {
    const [context] = target;
    if (value === context) {
      return true;
    }

    return "Please check again";
  });
});

defineRule("matchUrl", (value: string, target: string[]) => {
  const [context] = target;
  if (value.match(context)) {
    return true;
  }

  return "Please check the URL";
});
