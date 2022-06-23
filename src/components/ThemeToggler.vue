<template>
  <div>
    <label
      class="p-2 text-2xl rounded-full bg-slate-200 dark:bg-slate-700"
      for="dark-mode-toggler"
    >
      {{ darkMode ? "🌑" : "🌕" }}
    </label>
    <input
      id="dark-mode-toggler"
      class="hidden"
      type="checkbox"
      @click="toggleDark"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const prefersDarkMode = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;
const darkMode = ref(prefersDarkMode);

onMounted(() => {
  if (prefersDarkMode) {
    document.querySelector("html")?.classList.add("dark");
  } else {
    document.querySelector("html")?.classList.remove("dark");
  }
});

const toggleDark = () => {
  darkMode.value = !darkMode.value;
  document.querySelector("html")?.classList.toggle("dark");
};
</script>
