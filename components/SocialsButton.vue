<template>
    <UTooltip :text="props.title">
            <UButton
                :icon="props.icon"
                color="neutral"
                variant="ghost"
                :to="props.url"
                class="cursor-pointer"
                size="xl"
            />
        </UTooltip>
</template>

<script setup lang="ts">
const props = defineProps({
    title: { type: String, required: true },
    url: { type: String, required: true },
    icon: { type: String, required: true },
});
</script>