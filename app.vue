<script setup lang="ts">
import { ref } from 'vue'

import Image from 'primevue/image'
import Dropdown from 'primevue/dropdown'
import Button from 'primevue/button'

const title = 'Cagesum | Nicolas Cage text placeholder generator'
const description =
  "Put your boring ipsum back in the box... - the world's first Nicolas Cage Lorem Ipsum text generator. Open the Cage."
const keywords = 'nicolas cage, placeholder, text, generator, lorem ipsum'

useHead({
  title,
  meta: [
    { name: 'description', content: description },
    { name: 'keywords', content: keywords },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'http://schema.org',
        '@type': 'WebSite',
        url: 'https://cagesum.com',
        name: title,
        description: description,
      }),
    },
  ],
})

useSeoMeta({
  // General Meta Tags
  title,
  description: description,
  keywords: 'nicolas cage, placeholder, text, generator, lorem ipsum',

  // Facebook Meta Tags
  ogTitle: title,
  ogImage: 'https://cagesum.com/img/free.jpg',
  ogUrl: 'https://cagesum.com',
  ogType: 'website',
  ogDescription: description,

  // Twitter Meta Tags
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterImage: 'https://cagesum.com/img/free.jpg',
  twitterDescription: description,
})

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

const unlockTheCage = () => {
  const paragraphs = selectedNumberOfParagraphs.value.code
  const quotes = selectedNumberOfQuotes.value.code

  console.log(`paragraphs=${paragraphs}&quotes=${quotes}`)
}
</script>

<template>
  <Header>
    <Link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/favicon/apple-touch-icon.png"
    />
    <Link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/favicon/favicon-32x32.png"
    />
    <Link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/favicon/favicon-16x16.png"
    />
    <Link rel="manifest" href="/favicon/site.webmanifest" />
    <Meta name="msapplication-TileColor" content="#da532c" />
    <Meta name="theme-color" content="#ffffff" />
  </Header>

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

    <h1 class="text-center text-9xl font-bold mb-10 text-zinc-700">Cagesum</h1>

    <h2 class="text-center text-4xl max-w-[600px] m-auto font-semibold mb-10">
      The world's first Nicolas Cage text placeholder generator
    </h2>

    <div class="card flex justify-center">
      <Image src="/img/free.jpg" alt="nic cage in con air" class="max-w-md" />
    </div>
  </div>

  <div class="flex flex-col py-8 max-w-[600px] m-auto items-center">
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

    <Button
      :disabled="!selectedNumberOfParagraphs || !selectedNumberOfQuotes"
      label="Unlock the Cage"
      size="large"
      class="w-full"
      @click="unlockTheCage"
    />
  </div>
</template>
