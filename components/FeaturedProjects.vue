<script setup>
const { locale, t } = useI18n();

const { $supabase } = useNuxtApp();

const projects = ref([]);

const isLoading = ref(true);

async function getProjects() {
    const { data } = await $supabase.from("projects").select().eq('is_featured', true);
    console.log("Got projects!", data);

    projects.value = data;
    isLoading.value = false;
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
        <ProjectGridSkeleton v-if="isLoading" :n_items='2' :columns='1' :columns_small='3' />
        <ProjectGrid v-else :projects="projects" :columns='1' :columns_small='2' />
        <UButton
            trailing-icon="i-lucide-arrow-right"
            variant="subtle"
            class="cursor-pointer"
        >
            {{ t("discover_more") }}
        </UButton>
    </div>
</template>
