<script setup lang="ts">
interface Technology {
    id: string;
    icon_url: string;
    title: string;
    icon_hex: string;
}

const props = defineProps({
    columns: { type: Number, required: false },
    columns_small: { type: Number, required: false },
    columns_medium: { type: Number, required: false },
    columns_large: { type: Number, required: false },
    technologies: { type: Array as () => Technology[], required: true },
});

const gridClasses = computed(() => {
  const classes = ['grid', 'gap-4', 'sm:gap-6', 'w-full']
  if (props.columns) classes.push(`grid-cols-${props.columns}`)
  if (props.columns_small) classes.push(`sm:grid-cols-${props.columns_small}`)
  if (props.columns_medium) classes.push(`md:grid-cols-${props.columns_medium}`)
  if (props.columns_large) classes.push(`lg:grid-cols-${props.columns_large}`)
  return classes
})
</script>

<template>
    <div
        :class="gridClasses"
    >
        <TechnologyGridCard
            v-for="tech in technologies"
            :key="tech.id"
            :icon_url="tech.icon_url"
            :title="tech.title"
            :icon_hex="tech.icon_hex"
        />
    </div>
</template>