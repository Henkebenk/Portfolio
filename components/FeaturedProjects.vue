<script setup>
const { locale} = useI18n();

const { $supabase } = useNuxtApp()

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
    <h2 class="text-3xl sm:text-5xl text-pretty tracking-tight font-bold text-center" hydrate-on-visible>Featured projects</h2>
    <ul>
        <li v-for="project in projects" :key="project.id">
            {{ project.title }} - {{ project['short_description_' + locale] }}
        </li>
    </ul>
</template>
