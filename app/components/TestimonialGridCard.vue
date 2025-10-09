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
        <UCard>
            <div class="flex flex-col gap-3">
                <p class="text-md text-pretty text-muted line-clamp-2">"{{ props.quote }}"</p>
                <div class="flex gap-3">
                    <UAvatar :src="props.avatar_url" icon="i-lucide-user" size="xl" />
                    <div class="flex flex-col gap-0.5">
                        <p class="font-medium text-highlighted text-sm">
                            {{ props.name }}
                        </p>
                        <p class="text-muted text-xs">{{ props.description }}</p>
                    </div>
                </div>
            </div>
        </UCard>
    </div>
</template>
