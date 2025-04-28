<script setup lang="ts">
interface Project {
    id: string;
    thumbnail_url: string;
    technologies: Array<string>;
    title: string;
    [key: string]: string | Array<string>;
}
const { locale } = useI18n();

const props = defineProps({
    columns_small: { type: Number, required: false },
    columns_medium: { type: Number, required: false },
    columns_large: { type: Number, required: false },
    projects: { type: Array as () => Project[], required: true },
});
</script>

<template>
    <div
        class="grid gap-6 w-full"
        :class="[
            'grid-cols-' + columns_small,
            'sm:grid-cols-' + columns_medium,
            'lg:grid-cols-' + columns_large,
        ]"
    >
        <ProjectGridCard
            v-for="project in projects"
            :key="project.id"
            :image_url="project.thumbnail_url"
            :short_description="project['short_description_' + locale] as string"
            :title="project.title"
            :technologies="project.technologies"
        />
    </div>
</template>
