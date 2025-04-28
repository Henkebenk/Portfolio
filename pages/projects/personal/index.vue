<script setup>
const { t } = useI18n();

const { $supabase } = useNuxtApp();

const projects = ref([]);

const isLoading = ref(true);

async function getProjects() {
    const { data } = await $supabase.from("projects").select().eq('is_academic', false);
    projects.value = data;
    isLoading.value = false;
}

onMounted(() => {
    getProjects();
});

</script>

<template>
    <div class="flex flex-col gap-6 items-center mt-32">
        <h2
            class="text-3xl sm:text-5xl text-pretty tracking-tight font-bold text-center"
            hydrate-on-visible
        >
            {{ t("personal_projects") }}
        </h2>
        <h2
            class="z-1 text-lg sm:text-xl/8 font-medium text-(--ui-text-dimmed) text-balance"
        >
            {{ t("projects_personal_description") }}
        </h2>
        <ProjectGridSkeleton v-if="isLoading" :n_items='3' :columns_small='2' :columns_medium='3' />
        <ProjectGrid v-else :projects="projects" :columns_small='2' :columns_medium='3' />
    </div>
</template>