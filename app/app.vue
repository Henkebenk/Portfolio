<script setup>
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

const title = 'Nordicbase | Henrik'
const description = 'A portfolio showcasing projects, technologies, and testimonials from Henrik Hårshagen.'

useSeoMeta({
  title: title,
  ogTitle: title,
  description: description,
  ogDescription: description,
  ogImage: 'https://i.imgur.com/r7I3Psf.jpeg',
  twitterImage: 'https://i.imgur.com/r7I3Psf.jpeg',
  twitterCard: 'summary_large_image'
})

const config = useRuntimeConfig()
</script>

<template>
  <UApp class="flex flex-col justify-center scroll-smooth">
    <Navbar />

    <UMain>
      <NuxtPage />
    </UMain>

    <USeparator />

    <UFooter>
      <template #left>
        <NordicbaseLogo class="h-6 w-auto"></NordicbaseLogo>
      </template>

      <template #default>
        <p class="text-sm text-muted">
          Copyright © {{ new Date().getFullYear() }} Henrik Hårshagen
        </p>
      </template>

      <template #right>
        <UButton to="https://github.com/nuxt-ui-templates/starter" target="_blank" icon="i-simple-icons-github"
          aria-label="GitHub" color="neutral" variant="ghost" />
      </template>
    </UFooter>
  </UApp>
</template>
