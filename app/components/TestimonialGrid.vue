<script setup lang="ts">
interface Testimonial {
    id: number;
    name: string;
    description: string;
    quote: string;
    avatar_url: string;
}

const props = defineProps({
    columns: { type: Number, required: false },
    columns_small: { type: Number, required: false },
    columns_medium: { type: Number, required: false },
    columns_large: { type: Number, required: false },
    testimonials: { type: Array as () => Testimonial[], required: true },
});
</script>

<template>
    <UCarousel v-slot="{ item }" loop arrows dots :items="testimonials"
        :ui="{ item: 'basis-1/2 sm:basis-1/2 md:basis-1/3' }" class="overflow-visible w-full">
        <TestimonialGridCard class="overflow-visible" :key="item.id" :name="item.name" :description="item.description"
            :quote="item.quote" :avatar_url="item.avatar_url" />
    </UCarousel>
</template>
