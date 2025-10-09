<script setup>
import { ref, onMounted } from 'vue'
import { useSupabaseClient } from '#imports'

const supabase = useSupabaseClient()

const testimonials = ref([])
const isLoading = ref(true)

async function getTestimonials() {
    const { data, error } = await supabase.from('testimonials').select()
    if (error) {
        console.error('Error fetching testimonials', error)
        isLoading.value = false
        return
    }
    testimonials.value = data || []
    isLoading.value = false
}

onMounted(getTestimonials)
</script>

<template>
    <UPageSection id="testimonials" title="Testimonials"
        description="Hear what others have to say about my work.">
        <template #title>
            <label class="font-mono">Testimonials</label>
        </template>

        <TestimonialGrid v-if="!isLoading && testimonials.length != 0" :testimonials="testimonials" />
    </UPageSection>
</template>