<script setup lang="ts">
const config = useRuntimeConfig();
const open = defineModel<boolean>("open", { type: Boolean });

const passKey = ref<string>("");
const showPassError = ref<boolean>(false);

onMounted(() => {
  checkSession();
});

const checkSession = () => {
  const passwordPassed = sessionStorage.getItem("isPassTrue");

  if (passwordPassed) {
    open.value = false;
  }
};

const checkPassKey = () => {
  const key = config.public.secretKey;
  if (passKey.value === key) {
    sessionStorage.setItem("isPassTrue", "true");
    sessionStorage.setItem("token", JSON.stringify(Math.random() * 800));
    open.value = false;
  } else {
    showPassError.value = true;
  }
};
</script>

<template>
  <transition
    enter-active-class="transition ease-out duration-300"
    enter-from-class="opacity-0 scale-90"
    enter-to-class="opacity-100 scale-100"
    leave-active-class="transition ease-in duration-200"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-90"
  >
    <div
      v-if="open"
      class="fixed z-50 top-0 left-0 backdrop-blur w-full h-full flex items-center justify-center"
    >
      <div
        class="bg-slate-50 dark:bg-dark w-[400px] h-[400px] rounded-md shadow-md flex items-center justify-center p-4"
      >
        <form
          @submit.prevent="checkPassKey"
          class="flex flex-col gap-2 items-center w-full"
        >
          <div
            class="border-b-2 dark:border-white border-black w-full flex items-center gap-3 mx-4"
          >
            <i class="fa-solid fa-magnifying-glass text-gray-600"></i>
            <input
              v-model="passKey"
              autocomplete="off"
              class="bg-transparent focus:outline-none focus:ring-0 border-none p-1 w-full dark:text-white"
              name="search"
              placeholder="masukkan kata sandi"
              type="text"
            />
          </div>
          <p v-if="showPassError" class="text-red-600">Kata sandi salah</p>
          <button>Confirm</button>
        </form>
      </div>
    </div>
  </transition>
</template>

<style scoped></style>
