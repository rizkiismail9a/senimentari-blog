<script setup lang="ts">
defineProps<{
  references: string[];
  more?: { title: string; link: string }[];
}>();
</script>

<template>
  <footer class="max-w-[900px] !w-full overflow-hidden">
    <div
      class="!w-full max-w-[900px] flex flex-col gap-8 items-start pt-10 pb-10 md:px-4 px-1 !overflow-hidden"
    >
      <section class="w-full">
        <div class="h-[2px] w-full bg-black dark:bg-white rounded-sm" />
        <h4 class="font-semibold text-lg">Referensi:</h4>
        <ol class="ml-5">
          <li v-for="(ref, index) in references" :key="index">
            <a
              class="hover:underline text-blue text-wrap break-words w-full"
              :href="ref"
              target="_blank"
            >
              {{ ref }}
            </a>
          </li>
        </ol>
      </section>
      <section class="w-full">
        <div class="h-[2px] w-full bg-black dark:bg-white rounded-sm" />
        <h4 class="font-semibold text-lg">Baca lagi</h4>
        <div class="flex flex-col gap-1">
          <NuxtLink
            v-for="content in more"
            :key="content.link"
            :to="content.link"
            class="hover:underline text-blue text-wrap break-words w-full"
          >
            {{ content.title }}
          </NuxtLink>
        </div>
      </section>
      <section class="w-full">
        <div class="h-[2px] w-full bg-black dark:bg-white rounded-sm" />
        <h4 class="font-semibold text-lg">
          Ada yang salah atau ada saran konten?
        </h4>
        <div class="flex gap-4 items-center">
          <p>Kabari saya melalui:</p>
          <a
            href="https://www.instagram.com/senimentari_/?igshid=MzNlNGNkZWQ4Mg%3D%3D"
            target="_blank"
          >
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="https://web.facebook.com/MentariElephant/" target="_blank">
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a href="mailto:muhamadrizkiismail9a@gmail.com" target="_blank">
            <i class="fa-solid fa-envelope"></i>
          </a>
        </div>
      </section>
      <section class="w-full">
        <div class="text-center">
          &copy; <span>Yuri S. Ostrovsky</span> 2024
        </div>
      </section>
    </div>
  </footer>
</template>
