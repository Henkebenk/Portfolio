<script setup>
const { locale, t } = useI18n();

const { $supabase } = useNuxtApp();

const technologies = ref([]);

const isLoading = ref(true);

async function getTechnologies() {
    const { data } = await $supabase.from("technologies").select();
    console.log("Got technologies!", data);

    technologies.value = data;
    isLoading.value = false;
}

onMounted(() => {
    getTechnologies();
});
</script>

<template>
    <div class="flex flex-col gap-6">
        <h2
            class="text-3xl sm:text-5xl text-pretty tracking-tight font-bold text-center"
            hydrate-on-visible
        >
            {{ t('featured_technologies') }}
        </h2>
        <TechnologyGridSkeleton v-if="isLoading" :columns="2" :columns_small="3" :columns_medium="4" :n_items="8"/>
        <TechnologyGrid v-else :columns="2" :columns_small="3" :columns_medium="4" :technologies="technologies" />
    </div>
</template>
