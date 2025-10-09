<script setup lang="ts">
interface Technology {
    id: string;
    icon_url: string;
    title: string;
    icon_hex: string;
}

const props = defineProps({
    technologies: { type: Array as () => Technology[], required: true },
});
</script>

<template>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
        <TechnologyGridCard v-for="tech in technologies" :key="tech.id" :icon_url="tech.icon_url" :title="tech.title"
            :icon_hex="tech.icon_hex" />
    </div>
</template>