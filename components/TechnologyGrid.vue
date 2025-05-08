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
        class="grid gap-4 sm:gap-6 w-full"
        :class="{
            [`grid-cols-${columns}`]: columns,
            [`sm:grid-cols-${columns_small}`]: columns_small,
            [`md:grid-cols-${columns_medium}`]: columns_medium,
            [`lg:grid-cols-${columns_large}`]: columns_large,
        }"
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