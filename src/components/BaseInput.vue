<template>
  <input
    class="p-2 font-medium text-black rounded-lg bg-slate-50 dark:bg-slate-500 dark:text-white"
    type="number"
    lang="en"
    :value="props.modelValue"
    @input="updateValue(($event.target as HTMLInputElement).value)"
  />
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

interface IProp {
  modelValue: number;
}
interface IEmits {
  (e: "update:modelValue", value: number): void;
}

const props = defineProps<IProp>();
const emits = defineEmits<IEmits>();

const updateValue = (value: string) => {
  emits("update:modelValue", +value);
};
</script>
