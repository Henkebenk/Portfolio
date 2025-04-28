<script setup lang="ts">
interface Technology {
    id: string;
    icon_url: string;
    title: string;
    icon_hex: string;
}

const props = defineProps({
    columns: { type: Number, required: false },
    columns_small: { type: Number, required: false },
    columns_medium: { type: Number, required: false },
    columns_large: { type: Number, required: false },
    technologies: { type: Array as () => Technology[], required: true },
});
</script>

<template>
    <div
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6"
        :class="[
            columns ? 'grid-cols-' + columns : '',
            columns_small ? 'sm:grid-cols-' + columns_small : '',
            columns_medium ? 'md:grid-cols-' + columns_medium : '',
            columns_large ? 'lg:grid-cols-' + columns_large : '',
        ]"
    >
        <TechnologyGridCard
            v-for="tech in technologies"
            :key="tech.id"
            :icon_url="tech.icon_url"
            :title="tech.title"
            :icon_hex="tech.icon_hex"
        />
    </div>
</template>