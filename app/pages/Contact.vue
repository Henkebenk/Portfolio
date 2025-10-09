<template>
    <UError :error="{
        statusMessage: 'Page under construction',
        message: 'This page is currently being worked on. Please check back later.',
    }"
    :clear="{
      color: 'neutral',
      size: 'xl',
      icon: 'i-lucide-arrow-left',
      class: 'rounded-full'
    }">
        <template #statusMessage>
            <div class="flex flex-col gap-4 items-center">

                <UIcon name="i-lucide-construction" class="size-16 text-primary" />

                <label class="font-mono">
                    Page under construction
                </label>
            </div>
        </template>
    </UError>
</template>
