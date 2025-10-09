<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const supabase = useSupabaseClient()

interface Project {
    id: string | number
    started_at?: string | null
    finished_at?: string | null
    title: string
    short_description?: string | null
    long_description?: string | null
    banner_url?: string | null
    thumbnail_url?: string | null
    is_featured?: boolean
    is_academic?: boolean
    technologies?: string[]
    created_at?: string
    updated_at?: string
    [key: string]: any
}

const project = ref<Project | null>(null)
const isLoading = ref(true)

async function getProject() {
    const id = route.params.id
    if (!id) return

    isLoading.value = true

    const { data, error } = await supabase
        .from("projects")
        .select()
        .eq('id', id)
        .single()

    if (error) console.error(error)
    else project.value = data

    isLoading.value = false
}

onMounted(() => getProject())

watch(() => route.params.id, () => {
    getProject()
})
</script>

<template>

    <UPageSection v-if="!isLoading && project" :title="project.title" class="pt-8 sm:pt-16" :ui="{ title: 'font-mono' }"
        :description="project.short_description || undefined">
        <div class="flex flex-col gap-6">
            <img v-if="project.banner_url || project.thumbnail_url"
                :src="(project.banner_url || project.thumbnail_url) || undefined" alt="Project Image"
                class="w-full rounded-lg" />
            <MDC :value="project.long_description ?? ''" />
        </div>
    </UPageSection>

    <!-- <div v-else class="flex justify-center items-center h-64">
        <span>Loading...</span>
    </div> -->
</template>
