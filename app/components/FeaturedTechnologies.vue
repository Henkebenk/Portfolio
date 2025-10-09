<script setup>

const supabase = useSupabaseClient()

const technologies = ref([]);
const isLoading = ref(true);

async function getTechnologies() {
    const { data, error } = await supabase.from('technologies').select();
    if (error) {
        console.error('Supabase error fetching technologies:', error)
        isLoading.value = false
        return
    }

    console.log('Got technologies!', data);
    technologies.value = data || [];
    isLoading.value = false;
}

onMounted(() => {
    getTechnologies();
});
</script>

<template>
    <UPageSection
        id="featured-technologies"
        title="Current tech stack"
        description="Technologies and tools I use on a daily basis."
    >
    <template #title>
        <label class="font-mono">Current tech stack</label>
    </template>
    <TechnologyGrid :technologies=technologies />
    </UPageSection>
</template>