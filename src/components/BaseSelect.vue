<template>
  <select
    class="p-2 font-medium text-black rounded-lg bg-slate-50 dark:bg-slate-500 dark:text-white"
    :value="props.modelValue"
    @change="updateValue(($event.target as HTMLSelectElement).value)"
  >
    <option v-for="option in options" :key="option" :value="option">
      {{ option }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

interface IProp {
  options: Array<string>;
  modelValue: string;
}
interface IEmits {
  (e: "update:modelValue", value: string): void;
}

const props = defineProps<IProp>();
const emits = defineEmits<IEmits>();

const updateValue = (value: string) => {
  emits("update:modelValue", value);
};
</script>
