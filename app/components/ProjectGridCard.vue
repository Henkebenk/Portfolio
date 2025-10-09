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
    naked: { type: Boolean, required: false, default: false },
});

</script>

<template>
    <UPageCard :variant="props.naked ? 'naked' : 'soft'" :title="props.title" :description="props.short_description"
        :to="`/projects/${props.id}`">
        <img v-if="props.banner_url || props.thumbnail_url" :src="props.banner_url || props.thumbnail_url" class="w-full" />
        <div class="flex gap-1.5">
            <UBadge color="neutral" variant="soft" class="text-muted" v-for="technology in props.technologies" :key="technology">{{ technology }}</UBadge>
        </div>
    </UPageCard>
</template>
