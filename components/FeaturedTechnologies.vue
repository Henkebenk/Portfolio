<script setup>
import { createClient } from "@supabase/supabase-js";
const { locale } = useI18n();

const { $supabase } = useNuxtApp();

const technologies = ref([]);

async function getTechnologies() {
    const { data } = await $supabase.from("technologies").select();
    console.log("Got technologies!", data);

    technologies.value = data;
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
            Current tech stack
        </h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        
            <Tech
                v-for="tech in technologies"
                :key="tech.id"
                :icon_url="tech.icon_url"
                :title="tech.title"
                :icon_hex="tech.icon_hex"
            />
        </div>
    </div>
</template>
