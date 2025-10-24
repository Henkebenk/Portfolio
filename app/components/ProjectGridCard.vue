<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
    id: { type: [String, Number], required: true },
    title: { type: String, required: true },
    thumbnail_url: { type: String, required: false },
    banner_url: { type: String, required: false },
    short_description: { type: String, required: false },
    long_description: { type: String, required: false },
    technologies: { type: Array as () => string[], required: false, default: () => [] },
    is_academic: { type: Boolean, required: false, default: false },
    three_d_models: { type: Array as () => string[], required: false, default: () => [] },
    naked: { type: Boolean, required: false, default: false },
});

</script>

<template>
    <UPageCard :variant="props.naked ? 'naked' : 'soft'" :title="props.title" :description="props.short_description"
        :to="`/projects/${props.id}`">
        <template #title>
            <div class="flex items-center gap-4">
                <h3 class="text-lg font-semibold">{{ props.title }}</h3>
                <UTooltip v-if="props.three_d_models.length" text="This project includes 3D models">
                    <UBadge  color="info" variant="soft" icon="i-lucide-box">3D</UBadge>
                </UTooltip>
            </div>
        </template>
        <img v-if="props.thumbnail_url || props.banner_url" :src="props.thumbnail_url || props.banner_url" class="w-full" />
        <div class="flex gap-1.5 flex-wrap">
            <UBadge color="neutral" variant="soft" class="text-muted" v-for="technology in props.technologies" :key="technology">{{ technology }}</UBadge>
        </div>
    </UPageCard>
</template>
