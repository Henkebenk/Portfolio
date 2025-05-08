<script setup lang="ts">
const props = defineProps({
    columns: { type: Number, required: false },
    columns_small: { type: Number, required: false },
    columns_medium: { type: Number, required: false },
    columns_large: { type: Number, required: false },
    n_items: { type: Number, required: true },
});
</script>

<template>
    <div
        class="grid gap-4 sm:gap-6"
        :class="{
            [`grid-cols-${columns}`]: columns,
            [`sm:grid-cols-${columns_small}`]: columns_small,
            [`md:grid-cols-${columns_medium}`]: columns_medium,
            [`lg:grid-cols-${columns_large}`]: columns_large,
        }"
    >
        <UCard
            v-for="n in n_items"
            :key="n"
            variant="outline"
            class="hover:bg-muted"
        >
            <div class="flex items-center gap-4">
                <USkeleton
                    class="w-12 h-12 rounded-[calc(var(--ui-radius)*2)]"
                />
                <USkeleton class="h-6 w-24" />
            </div>
        </UCard>
    </div>
</template>
