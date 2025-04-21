<script setup>
const colorMode = useColorMode();
const { t } = useI18n();

const isDark = computed({
    get() {
        return colorMode.value === "dark";
    },
    set(_isDark) {
        colorMode.preference = _isDark ? "dark" : "light";
    },
});
</script>

<template>
    <ClientOnly v-if="!colorMode?.forced">
        <UTooltip :text="t('toggle_theme')">
            <UButton
                :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
                color="neutral"
                variant="ghost"
                @click="isDark = !isDark"
                class="cursor-pointer"
                size="xl"
            />
        </UTooltip>

        <template #fallback>
            <div class="size-8" />
        </template>
    </ClientOnly>
</template>
