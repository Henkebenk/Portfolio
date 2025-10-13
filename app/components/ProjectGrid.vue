<script setup lang="ts">
interface Project {
    id: string | number;
    started_at?: string | null;
    finished_at?: string | null;
    title: string;
    short_description?: string | null;
    long_description?: string | null;
    thumbnail_url?: string | null;
    banner_url?: string | null;
    is_featured?: boolean;
    is_academic?: boolean;
    technologies?: string[];
    created_at?: string;
    updated_at?: string;
    three_d_models?: string[];
    [key: string]: any;
}

const props = defineProps({
    projects: { type: Array as () => Project[], required: true },
    naked: { type: Boolean, required: false, default: false },
});
</script>

<template>
    <div class="grid gap-12 sm:gap-6 w-full grid-cols-1 sm:grid-cols-3">
        <ProjectGridCard v-for="project in projects" :key="project.id" :id="project.id" :title="project.title"
            :thumbnail_url="project.thumbnail_url || undefined" :banner_url="project.banner_url || undefined" :short_description="project.short_description || undefined"
            :long_description="project.long_description || undefined" :technologies="project.technologies || []" :is_academic="!!project.is_academic" :three_d_models="project.three_d_models || []"
            :naked="naked"/>
    </div>
</template>
