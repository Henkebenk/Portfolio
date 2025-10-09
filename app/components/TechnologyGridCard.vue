<script setup lang="ts">
const props = defineProps({
    title: { type: String, required: true },
    icon_url: { type: String, required: true },
    icon_hex: { type: String, required: true },
});
</script>

<template>
    <UPageCard variant="outline" class="transition-all duration-250 hover:bg-muted">
        <div class="flex items-center gap-4">
            <div :style="{ backgroundColor: icon_hex + '30' }" class="p-2 rounded-[calc(var(--ui-radius)*2)]">
                <img :src="props.icon_url" class="w-8 h-8" />
            </div>
            <span class="select-none">{{ title }}</span>
        </div>
    </UPageCard>
</template>