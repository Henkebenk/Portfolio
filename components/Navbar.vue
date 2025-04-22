<script setup lang="ts">
import { useLocalePath, useI18n } from "#imports";
import { computed, ref, onMounted, onBeforeUnmount } from "vue";
import type { NavigationMenuItem } from "@nuxt/ui";

const localePath = useLocalePath();
const { t } = useI18n();
const scrolled = ref(false);

// Track active menu item
const active = ref<NavigationMenuItem | null>(null);

// Define navigation items
const items = computed<NavigationMenuItem[]>(() => [
    [
        {
            label: t("home"),
            icon: "i-lucide-house",
            to: localePath("/"),
        },
        {
            label: t("about"),
            icon: "i-lucide-user",
            to: localePath("/about"),
        },
        {
            label: t("projects"),
            icon: "i-lucide-code-xml",
            children: [
                {
                    label: t("projects_personal"),
                    icon: "i-lucide-briefcase-business",
                    description: t("projects_personal_description"),
                    to: localePath("/projects/personal"),
                },
                {
                    label: t("projects_school"),
                    icon: "i-lucide-graduation-cap",
                    description: t("projects_school_description"),
                    to: localePath("/projects/school"),
                },
            ],
        },
        {
            label: t("stack"),
            icon: "i-lucide-layers", // Might change to i-lucide-lab-toolbox
            to: localePath("/stack"),
        },
        {
            label: t("contact"),
            icon: "i-lucide-send",
            to: localePath("/contact"),
        },
    ],
]);

const handleScroll = () => {
    scrolled.value = window.scrollY > 50;
};

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
    <div
        class="h-16 fixed top-0 left-0 right-0 border-b transition-colors duration-300 z-10"
        :class="{
            'border-transparent bg-transparent': !scrolled,
            'border-[var(--ui-border)] bg-[var(--ui-bg)]': scrolled,
        }"
    >
        <div
            class="w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 h-full"
        >
            <div class="flex-1 text-xl font-bold">Henrik.</div>

            <UNavigationMenu
                color="primary"
                variant="link"
                :items="items"
                v-model="active"
                class="text-sm font-medium hidden md:flex"
                highlight
                highlight-color="primary"
            />

            <div class="flex-1 flex items-center justify-end gap-1.5">
                <ColorModeButton class="cursor-pointer" />
                <LanguageButton class="hidden md:flex"/>
                <MobileMenu class="flex md:hidden"/>
            </div>
        </div>
    </div>
</template>
