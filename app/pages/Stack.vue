<script setup>


const supabase = useSupabaseClient()

const technologies = ref([])
const technologies_by_category = ref({})
const isLoading = ref(true)

async function getTechnologies() {
    const { data, error } = await supabase.from('technologies').select().order('title', { ascending: true })
    if (error) {
        console.error('Supabase error fetching technologies:', error)
        isLoading.value = false
        return
    }



    technologies.value = data || [];
    for (const tech of technologies.value) {
        if (!technologies_by_category.value[tech.category]) {
            technologies_by_category.value[tech.category] = []
        }
        technologies_by_category.value[tech.category].push(tech)
    }
    // Sort categories alphabetically
    technologies_by_category.value = Object.fromEntries(
        Object.entries(technologies_by_category.value).sort(([a], [b]) => a.localeCompare(b))
    );

    isLoading.value = false;

}

const category_titles = {
    "frontend": "Frontend",
    "backend": "Backend",
    "database": "Databases",
    "tool": "Tools & DevOps",
    "design": "Design & UI",
    "language": "Languages",
}

onMounted(() => {
    getTechnologies();
});
</script>

<template>
    <UPageSection title="My Tech Stack" class="pt-8 sm:pt-16" :ui="{ title: 'font-mono' }"
        description="A collection of technologies I have used in my projects.">
        <UPageList>

            <UPageCTA v-for="(techs, category) in technologies_by_category" :key="category" variant="naked">
                <template #title>
                    <label class="font-mono ">{{ category_titles[category] ?? 'Other' }}</label>
                </template>
                <TechnologyGrid :technologies="techs" />

            </UPageCTA>
        </UPageList>
    </UPageSection>
</template>
