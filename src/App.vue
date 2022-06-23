<template>
  <div
    class="absolute inset-0 flex flex-col items-center justify-center p-4 dark:bg-slate-900"
  >
    <div
      class="relative grid w-full grid-cols-1 gap-8 p-8 sm:max-w-xl sm:grid-cols-2 bg-slate-200 place-items-center rounded-xl dark:bg-slate-700"
    >
      <h1
        class="w-full p-4 text-3xl font-bold text-center text-white bg-blue-700 rounded-lg sm:col-span-2 dark:bg-emerald-700"
      >
        Currency-2000
      </h1>
      <theme-toggler class="absolute -top-4" />
      <base-input
        class="w-full"
        v-model="valueStart"
        v-on:update:modelValue="convert"
      />
      <base-select
        class="w-full"
        v-model="currencyStart"
        v-on:update:modelValue="convert"
        :options="currencyOptions"
      />
      <button
        class="p-2 font-medium text-black rounded-lg sm:col-start-2 bg-slate-50 dark:bg-slate-500 dark:text-white"
        @click="swapCurrencies"
      >
        ▲ ▼
      </button>
      <base-input
        class="w-full"
        v-model="valueEnd"
        v-on:update:modelValue="reverseConvert"
      />
      <base-select
        class="w-full"
        v-model="currencyEnd"
        v-on:update:modelValue="convert"
        :options="currencyOptions"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import BaseSelect from "./components/BaseSelect.vue";
import BaseInput from "./components/BaseInput.vue";
import ThemeToggler from "./components/ThemeToggler.vue";

import {
  DEFAULT_START_VALUE,
  DEFAULT_START_UNIT,
  DEFAULT_END_VALUE,
  DEFAULT_END_UNIT,
} from "@/common/constants";
import { exchangeRates } from "@/common/config";
import { getExchangeResult } from "@/common/functions";

const valueStart = ref(DEFAULT_START_VALUE);
const valueEnd = ref(DEFAULT_END_VALUE);
const currencyStart = ref(DEFAULT_START_UNIT);
const currencyEnd = ref(DEFAULT_END_UNIT);

const currencyOptions = exchangeRates.map(({ name }) => name);

const convert = () => {
  valueEnd.value = getExchangeResult(
    valueStart.value,
    currencyStart.value,
    currencyEnd.value
  );
};

const reverseConvert = () => {
  valueStart.value = getExchangeResult(
    valueEnd.value,
    currencyEnd.value,
    currencyStart.value
  );
};

const swapCurrencies = () => {
  const temp = currencyStart.value;
  currencyStart.value = currencyEnd.value;
  currencyEnd.value = temp;
  convert();
};
</script>

<style scoped>
.app {
  @apply absolute inset-0 flex flex-col items-center justify-center p-4 dark:bg-slate-900;
}

.converter {
  @apply w-full grid grid-cols-2 bg-slate-200 place-items-center gap-8 p-8 rounded-xl dark:bg-slate-700;
}

.title {
  @apply text-white text-3xl font-bold col-span-2 w-full text-center p-4 bg-blue-700 dark:bg-emerald-700 rounded-lg;
}

.select {
  @apply w-full p-2 rounded-lg text-black dark:bg-slate-500 dark:text-white;
}

.input {
  @apply w-full p-2 rounded-lg text-black dark:bg-slate-500 dark:text-white;
}
</style>
