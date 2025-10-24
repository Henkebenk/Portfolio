<script setup>

const supabase = useSupabaseClient()

const projects = ref([])

const isLoading = ref(true)

async function getProjects() {
    const { data } = await supabase.from("projects").select().eq('is_academic', true).order('finished_at', { ascending: false })
    projects.value = data
    isLoading.value = false
}

onMounted(() => {
    getProjects()
});

</script>

<template>
    <UPageSection title="Study-related projects" class="pt-8 sm:pt-16" :ui="{ title: 'font-mono' }"
        description="A collection of projects tied to academic work.">

        <ProjectGrid :projects="projects" :naked="false" />
    </UPageSection>
</template>