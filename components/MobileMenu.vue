<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
const localePath = useLocalePath();
const { t } = useI18n();

// Track active menu item
const active = ref<string | undefined>(undefined);

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
                    to: localePath("/projects/school"),
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
        direction="top"
        inset
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
