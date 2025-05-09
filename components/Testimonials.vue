<script setup>

const { t } = useI18n();

const { $supabase } = useNuxtApp();

const testimonials = ref([]);

const isLoading = ref(true);

async function getTestimonials() {
    const { data } = await $supabase.from("testimonials").select();
    console.log("Got testimonials!", data);


    testimonials.value = data;
    isLoading.value = false;
}

onMounted(() => {
    getTestimonials();
});
</script>

<template>
    <div class="flex flex-col gap-6 items-center">
        <h2
            class="text-3xl sm:text-5xl text-pretty tracking-tight font-bold text-center"
            hydrate-on-visible
        >
            {{ t("testimonials") }}
        </h2>
        <TestimonialGrid v-if="!isLoading" :testimonials="testimonials"/>
        <!-- <ProjectGridSkeleton v-if="isLoading" :n_items='2' :columns='1' :columns_small='2' />
        <ProjectGrid v-else :projects="projects" :columns='1' :columns_small='2' /> -->
    </div>
</template>