<script setup>
const supabase = useSupabaseClient()

const projects = ref([]);
const isLoading = ref(true);

async function getTechnologies() {
    const { data } = await supabase.from("projects").select().eq('is_featured', true);

    projects.value = data;
    isLoading.value = false;
}

onMounted(() => {
    getTechnologies();
});
</script>

<template>
        <UPageCTA id="featured-projects" title="Featured Projects" variant="subtle"
            description="A few recent projects that highlight my work and the technologies I enjoy using.">
            <template #title>
                <label class="font-mono">Featured Projects</label>
            </template>
            <ProjectGrid :projects="projects" :naked="true"/>
        </UPageCTA>
</template>