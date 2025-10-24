<script setup lang="ts">
import { ref } from 'vue'
import { useColorMode, useAppConfig, useLocale } from '#imports'
import { useRoute } from '#app'
import NordicbaseLogoMountain from './NordicbaseLogoMountain.vue'
import NordicbaseLogo from './NordicbaseLogo.vue'

const items = ref([
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Projects",
    children: [
      { label: "Personal", icon: "i-lucide-briefcase-business", description: "Passion- and side projects.", to: "/projects/personal" },
      { label: "Studies", icon: "i-lucide-graduation-cap", description: "Coursework and academic assignments.", to: "/projects/studies" },
    ],
  },
  { label: "Stack", to: "/stack" },
  { label: "Contact", to: "/contact" },
])

const isScrolled = ref(false)
const THRESHOLD = 8
let ticking = false

function updateScrolled() {
  const scrolled = window.scrollY > THRESHOLD
  if (isScrolled.value !== scrolled) isScrolled.value = scrolled
  ticking = false
}
function onScroll() {
  if (!ticking) {
    ticking = true
    requestAnimationFrame(updateScrolled)
  }
}

onMounted(() => {
  isScrolled.value = window.scrollY > THRESHOLD
  window.addEventListener('scroll', onScroll, { passive: true })
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})

const route = useRoute()
const isIndexPage = computed(() => route.path === '/' || route.path === '')
const navActive = computed(() => isScrolled.value || !isIndexPage.value)

const isMenuOpen = ref(false)
</script>


<template>
  <div class="fixed w-full top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 sm:pt-8 flex justify-center"
    :class="navActive ? '' : 'pt-6'">
    <UHeader v-model:open="isMenuOpen" :toggle="{ class: navActive || isMenuOpen ? '' : 'dark' }" :class="[
      'mx-auto max-w-[90vw] lg:max-w-(--nav-width) rounded-full z-50 w-full transition-all duration-500',
      navActive
        ? 'border shadow-xl'
        : 'bg-transparent shadow-none border-transparent backdrop-blur-none text-neutral-100 mt-4'
    ]">
      <template #left>
        <NuxtLink to="/">
          <NordicbaseLogoHenrik class="hidden sm:block w-auto h-8 shrink-0" />
          <NordicbaseLogo class="block sm:hidden w-auto h-8 shrink-0" />
        </NuxtLink>
      </template>

      <template #default>
        <UNavigationMenu variant="link" :items="items" :class="navActive ? '' : 'dark'" />
      </template>

      <template #body>
        <UNavigationMenu variant="link" orientation="vertical" :items="items" />
      </template>

      <template #right>
        <div :class="['flex-row gap-2 flex', navActive || isMenuOpen ? '' : 'dark']">
          <div class="!text-current">
            <UColorModeButton />
          </div>
        </div>
      </template>
    </UHeader>
  </div>
</template>
