<script setup lang="ts">
const items = ref([
    {
        label: "Home",
        // icon: "i-lucide-house",
        to: "/",
    },
    {
        label: "About",
        // icon: "i-lucide-user",
        to: "/about",
    },
    {
        label: "Projects",
        // icon: "i-lucide-code-xml",
        children: [
            {
                label: "Personal",
                icon: "i-lucide-briefcase-business",
                description: "Passion- and side projects.",
                to: "/projects/personal",
            },
            {
                label: "Studies",
                icon: "i-lucide-graduation-cap",
                description: "Coursework and academic assignments.",
                to: "/projects/studies",
            },
        ],
    },
    {
        label: "Stack",
        // icon: "i-lucide-layers", // Might change to i-lucide-lab-toolbox
        to: "/stack",
    },
    {
        label: "Contact",
        // icon: "i-lucide-send",
        to: "/contact",
    },
])

import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRoute } from '#app'
import NordicbaseLogoMountain from './NordicbaseLogoMountain.vue'
import NordicbaseLogo from './NordicbaseLogo.vue'


const isScrolled = ref(false)

const route = useRoute()

// detect if we're on the index page (root path)
const isIndexPage = computed(() => route.path === '/' || route.path === '')

// navActive is true when scrolled OR when on index page
const navActive = computed(() => isScrolled.value || !isIndexPage.value)

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
    isScrolled.value = typeof window !== 'undefined' && window.scrollY > THRESHOLD
    window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
})
</script>

<template>
    <div class="fixed w-full top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-8 flex justify-center">
        <UHeader :toggle="{ class:navActive ? '' : 'dark' }" :class="[
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
                <UNavigationMenu color="primary" variant="link" :items="items" :class="navActive ? '' : 'dark'" />
            </template>
            <template #body>
                <UNavigationMenu color="primary" variant="link" orientation="vertical" :items="items"
                     />
            </template>

            <template #right>
                <div :class="['flex-row gap-2 hidden lg:flex', navActive ? '' : 'dark']">

                    <div class="!text-current">
                        <UColorModeButton />
                    </div>

                    <UButton to="https://github.com/nuxt-ui-templates/starter" target="_blank"
                        icon="i-simple-icons-github" aria-label="GitHub" color="neutral" variant="ghost" />
                </div>
            </template>
        </UHeader>
    </div>
</template>