<script setup lang="ts">
const props = defineProps({
    title: { type: String, required: true },
    image_url: { type: String, required: true },
    short_description: { type: String, required: true },
    technologies: { type: Array, required: true },
});
</script>

<template>
    <UCard>
        <div class="flex flex-col gap-4 h-full">
            <div class="flex flex-col gap-6 justify-between h-full">
                <div>
                    <h3
                        class="text-lg text-pretty tracking-tight font-semibold"
                    >
                        {{ props.title }}
                    </h3>
                    <p class="text-dimmed line-clamp-2">
                        {{ props.short_description }}
                    </p>
                </div>
                <div class="bg-muted rounded-lg w-full aspect-[3/2]">
                    <img
                        :src="props.image_url"
                        class="object-cover w-full h-full"
                    />
                </div>
            </div>
            <div class="flex-grow-1"/>
            <div class="flex gap-1.5">
                <UBadge
                    color="neutral"
                    variant="soft"
                    class="text-muted"
                    v-for="technology in technologies"
                    >{{ technology }}</UBadge
                >
            </div>
        </div>
    </UCard>
</template>
