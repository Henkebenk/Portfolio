<script setup lang="ts">
const props = defineProps({
    name: { type: String, required: true },
    description: { type: String, required: true },
    quote: { type: String, required: true },
    avatar_url: { type: String, required: false },
});
</script>

<template>
    <div class="p-1">
        <UPageCard :description="'“' + props.quote + '”'">
            <template #footer>
                <UUser :name="props.name" :description="props.description"
                    :avatar="{ src: props.avatar_url, alt: props.name }" />
            </template>
        </UPageCard>
    </div>
</template>
