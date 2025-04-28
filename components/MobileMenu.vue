<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
const localePath = useLocalePath();
const { t } = useI18n();

// Track active menu item
const active = ref<NavigationMenuItem | null>(null);

const open = ref(false);

function closeDrawer() {
    open.value = false;
}

// Define navigation items
const items = computed<NavigationMenuItem[]>(() => [
    [
        {
            label: t("home"),
            icon: "i-lucide-house",
            to: localePath("/"),
            onSelect: closeDrawer,
        },
        {
            label: t("about"),
            icon: "i-lucide-user",
            to: localePath("/about"),
            onSelect: closeDrawer,
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
                    onSelect: closeDrawer,
                },
                {
                    label: t("projects_school"),
                    icon: "i-lucide-graduation-cap",
                    description: t("projects_school_description"),
                    to: localePath("/projects/studies"),
                    onSelect: closeDrawer,
                },
            ],
        },
        {
            label: t("stack"),
            icon: "i-lucide-layers",
            to: localePath("/stack"),
            onSelect: closeDrawer,
        },
        {
            label: t("contact"),
            icon: "i-lucide-send",
            to: localePath("/contact"),
            onSelect: closeDrawer,
        },
    ],
]);
</script>

<template>
    <UDrawer
        :handle="false"
        direction="top"
        v-model:open="open"
        title="Drawer with title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    >
        <UButton
            icon="i-lucide-menu"
            color="neutral"
            variant="ghost"
            size="xl"
        />

        <template #content>
            <UContainer class="p-4 flex justify-end">
                <LanguageButton />
                <UButton icon="i-lucide-github" color="neutral" size="xl" variant="ghost" class="cursor-pointer" to="https://github.com/Henkebenk/Portfolio"/>
            </UContainer>
            <USeparator />
            <UNavigationMenu
                color="primary"
                :items="items"
                v-model="active"
                class="data-[orientation=vertical]:w-full text-sm font-medium p-4"
                highlight-color="primary"
                orientation="vertical"
            />
        </template>
    </UDrawer>
    <!-- <UDropdownMenu
        :items="items"
        :content="{
            align: 'start',
            side: 'bottom',
            sideOffset: 8,
        }"
        :ui="{
            content: 'w-80',
        }"
    >
        <UButton
            icon="i-lucide-menu"
            color="neutral"
            variant="ghost"
            size="xl"
        />
    </UDropdownMenu> -->
</template>
