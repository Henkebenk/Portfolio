<script setup>
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
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6"
        :class="[
            columns ? 'grid-cols-' + columns : '',
            columns_small ? 'sm:grid-cols-' + columns_small : '',
            columns_medium ? 'md:grid-cols-' + columns_medium : '',
            columns_large ? 'lg:grid-cols-' + columns_large : '',
        ]"
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
