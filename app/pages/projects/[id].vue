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
    three_d_models?: string[]
    created_at?: string
    updated_at?: string
    [key: string]: any
}

const project = ref<Project | null>(null)
const isLoading = ref(true)
const selectedModel = ref<string>('')
const activeIndex = ref(0)

function onClickPrev() {
    activeIndex.value--
}

function onClickNext() {
    activeIndex.value++
}

function onSelect(index: number) {
    activeIndex.value = index
}

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

function formatDateRange(startDate: string, endDate: string | null = null) {
    const start = new Date(startDate);

    const options = { month: 'short', year: 'numeric' };
    const startMonthYear = start.toLocaleDateString('en-US', options);

    if (!endDate) {
        return `${startMonthYear} - present`;
    }

    const end = new Date(endDate);
    const endMonthYear = end.toLocaleDateString('en-US', options);

    if (start.getFullYear() === end.getFullYear()) {
        return `${startMonthYear.split(' ')[0]} - ${endMonthYear.split(' ')[0]} ${start.getFullYear()}`;
    } else {
        return `${startMonthYear} - ${endMonthYear}`;
    }
}



onMounted(() => getProject())

watch(() => route.params.id, () => {
    getProject()
})
</script>

<template>
    <div>
        <UPageSection v-if="!isLoading && project" :title="project.title" class="pt-8 sm:pt-16"
            :ui="{ title: 'font-mono' }" :description="project.short_description || undefined">
            <div class="flex flex-col gap-6">
                <img v-if="project.banner_url || project.thumbnail_url"
                    :src="(project.banner_url || project.thumbnail_url) || undefined" alt="Project Image"
                    class="w-full rounded-4xl" />
                <div class="flex justify-between items-center">
                    <div class="flex gap-2 flex-wrap">
                        <UBadge v-if="project.started_at" icon="i-lucide-calendar"
                            :label="formatDateRange(project.started_at, project.finished_at)" color="neutral"
                            variant="soft" />
                        <UBadge v-if="project.is_academic" icon="i-lucide-book" label="Academic" color="neutral"
                            variant="soft" />
                        <UBadge v-if="project.is_featured" icon="i-lucide-star" label="Featured" color="neutral"
                            variant="soft" />
                        <UBadge v-for="tech in project.technologies || []" :key="tech" :label="tech" color="neutral"
                            variant="soft" />
                    </div>

                </div>
                <MDC :value="project.long_description ?? ''" />
                <UPageSection v-if="project?.three_d_models?.length" title="3D Models" class="pt-8 sm:pt-16"
                    :ui="{ title: 'font-mono' }"
                    description="Interact with the 3D models created in this project below.">
                    <template #title>
                        <label class="font-mono">3D Models</label>
                    </template>
                    <div class="relative">
                        <UCarousel v-slot="{ item }" arrows dots :watch-drag="false" :items="project.three_d_models"
                            :prev="{ onClick: onClickPrev }" :next="{ onClick: onClickNext }" @select="onSelect">
                            <ModelViewer :url="item" class="w-full h-[500px]">
                            </ModelViewer>
                        </UCarousel>
                        <UModal :title="project.three_d_models[activeIndex]?.split('/').pop()" fullscreen
                            :ui="{ body: 'overflow-hidden' }">
                            <UButton class="cursor-pointer absolute top-0 right-0" icon="i-lucide-maximize"
                                aria-label="Maximize" color="neutral" variant="ghost" />
                            <template #body>
                                <ModelViewer :url="project.three_d_models[activeIndex]" class="w-full h-[90dvh]" />
                            </template>
                        </UModal>
                    </div>
                </UPageSection>
            </div>
        </UPageSection>
    </div>
</template>
