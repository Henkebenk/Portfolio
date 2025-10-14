<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core'

const showArrows = useMediaQuery('(min-width: 640px)')

interface Testimonial {
    id: number;
    name: string;
    description: string;
    quote: string;
    avatar_url: string;
}

const props = defineProps({
    testimonials: { type: Array as () => Testimonial[], required: true },
});
</script>

<template>
    <UCarousel v-slot="{ item }" loop :arrows="showArrows" dots :items="testimonials" auto-height
        :ui="{ item: 'basis-1/1 sm:basis-1/3', controls: 'absolute -bottom-8 inset-x-12'}" class="mb-8 sm:mb-0">
        <TestimonialGridCard class="overflow-visible" :key="item.id" :name="item.name" :description="item.description"
            :quote="item.quote" :avatar_url="item.avatar_url" />
    </UCarousel>
</template>
