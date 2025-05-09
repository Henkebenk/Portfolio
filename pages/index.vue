<script setup lang="ts">
const toast = useToast();
const { t } = useI18n();

function showToast() {
    toast.add({
        title: "Success",
        description: "Your action was completed successfully.",
        color: "success",
    });
}
</script>

<template>
    <div class="flex flex-col gap-32 sm:gap-64">
        <div
            class="z-[-1] absolute inset-0 h-dvh w-full [background-image:radial-gradient(var(--ui-border)_1px,transparent_1px)] [background-color:var(--ui-bg)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"
        />
        <!-- <div
            class="z-[-1] absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"
        /> -->
        <div class="h-dvh flex flex-col gap-6 justify-center items-center">
            <h1
                class="text-5xl sm:text-6xl text-pretty tracking-tight font-bold text-(--ui-text-highlighted) text-left sm:text-center"
            >
                {{ t("hero_title_part_1")
                }}<span color="primary" class="text-(--ui-primary)">Henrik</span
                >.<br />{{ t("hero_title_part_2") }}
            </h1>
            <h2
                class="z-1 text-lg sm:text-xl/8 font-medium text-(--ui-text-dimmed) text-balance"
            >
                {{ t("hero_subtitle") }}
            </h2>
            <div class="flex gap-1.5">
                <UButton variant="solid" class="cursor-pointer">
                    {{ t("discover_projects") }}
                </UButton>
                <UButton variant="subtle" icon="i-lucide-file-down" class="cursor-pointer">
                    {{ t("download_cv") }}
                </UButton>
            </div>
        </div>

        <LazyUContainer>
            <FeaturedTechnologies/>
        </LazyUContainer>

        <LazyUContainer>
            <FeaturedProjects/>
        </LazyUContainer>

        <LazyUContainer>
            <Testimonials />
        </LazyUContainer>
    </div>
</template>
