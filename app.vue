<script setup lang="ts">
import { ref } from 'vue'

import Image from 'primevue/image'
import Dropdown from 'primevue/dropdown'
import Button from 'primevue/button'

const selectedNumberOfParagraphs = ref()
const numbersOfParagraphs = [
  { name: '1', code: '1' },
  { name: '2', code: '2' },
  { name: '3', code: '3' },
  { name: '4', code: '4' },
  { name: '5', code: '5' },
]

const selectedNumberOfQuotes = ref()
const numbersOfQuotes = [
  { name: '1', code: '1' },
  { name: '2', code: '2' },
  { name: '3', code: '3' },
  { name: '4', code: '4' },
  { name: '5', code: '5' },
]
</script>

<template>
  <div class="bg-custom-gradient pt-4 pb-8 text-zinc-600">
    <header class="text-right max-w-[600px] m-auto pb-4">
      Made by
      <a
        target="_blank"
        href="https://pablorocha.me/?utm_source=cagesum_website&utm_medium=header_link&utm_campaign=cagesum"
        class="border-dotted border-b border-black"
      >
        Pablo Rocha
      </a>
    </header>

    <h1 class="text-center text-9xl font-bold mb-10 text-zinc-800">Cagesum</h1>

    <h2 class="text-center text-4xl max-w-[600px] m-auto font-semibold mb-10">
      The world's first Nicolas Cage text placeholder generator
    </h2>

    <div class="card flex justify-center">
      <Image src="/img/free.jpg" alt="nic cage in con air" class="max-w-md" />
    </div>
  </div>

  <div class="flex flex-col py-8 max-w-[600px] m-auto">
    <div class="mb-4">
      Throw
      <Dropdown
        v-model="selectedNumberOfParagraphs"
        :options="numbersOfParagraphs"
        optionLabel="name"
      />
      paragraphs with
      <Dropdown
        v-model="selectedNumberOfQuotes"
        :options="numbersOfQuotes"
        optionLabel="name"
      />
      quotes each my way!
    </div>

    <Button label="Open the Cage" size="large" />
  </div>
</template>
