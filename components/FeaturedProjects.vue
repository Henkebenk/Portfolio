<script setup>
const { locale, t } = useI18n();

const { $supabase } = useNuxtApp();

const projects = ref([]);

async function getProjects() {
    const { data } = await $supabase.from("projects").select();
    console.log("Got projects!", data);

    projects.value = data;
}

onMounted(() => {
    getProjects();
});
</script>

<template>
    <div class="flex flex-col gap-6 items-center">
        <h2
            class="text-3xl sm:text-5xl text-pretty tracking-tight font-bold text-center"
            hydrate-on-visible
        >
            {{ t("featured_projects") }}
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ProjectCardLarge
                v-for="project in projects"
                :key="project.id"
                :image_url="project.thumbnail_url"
                :short_description="project['short_description_' + locale]"
                :title="project.title"
                :technologies="project.technologies"
            />
        </div>
        <UButton
            trailing-icon="i-lucide-arrow-right"
            variant="subtle"
            class="cursor-pointer"
        >
            {{ t("discover_more") }}
        </UButton>
    </div>
</template>
