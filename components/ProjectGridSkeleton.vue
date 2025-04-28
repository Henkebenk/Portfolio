<script setup>
const props = defineProps({
    columns_small: { type: Number, required: false },
    columns_medium: { type: Number, required: false },
    columns_large: { type: Number, required: false },
    n_items: { type: Number, required: true },
});
</script>

<template>
    <div
        class="grid gap-6 w-full"
        :class="[
            'grid-cols-' + columns_small,
            'sm:grid-cols-' + columns_medium,
            'lg:grid-cols-' + columns_large,
        ]"
    >
        <UCard v-for="n in n_items" :key="n">
            <div class="flex flex-col gap-4 h-full">
                <div class="flex flex-col gap-6 justify-between h-full">
                    <div class="flex flex-col gap-2">
                        <USkeleton class="h-6 w-32"/>
                        <USkeleton class="h-5 w-64"/>
                    </div>
                    <USkeleton class="rounded-lg w-full aspect-[3/2]"/>
                </div>
                <div class="flex gap-1.5">
                    <USkeleton class="h-6 w-16" v-for=" in 2"/>
                </div>
            </div>
        </UCard>
    </div>
</template>
