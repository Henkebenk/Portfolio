<template>
    <div class="px-4 sm:px-6 lg:px-8 pt-8">
        
        <UPageHero
            class="bg-gray-400 bg-[url(/hero.png)] bg-blend-multiply max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8 rounded-4xl aspect-[3/2] bg-cover bg-center flex flex-col justify-center dark"
            description="I focus on clean code, great user experiences, and building products that make a difference."
            :links="[{
                label: 'Discover projects',
                to: { path: '/', hash: '#featured-projects' },
                icon: 'i-lucide-code-xml',
                size: 'lg',
                color: 'neutral',
            }, {
                label: 'Download resume',
                to: '/resume.pdf',
                target: '_blank',
                icon: 'i-lucide-download',
                size: 'lg',
                color: 'neutral',
                variant: 'subtle'
            }]">
            <template #title>
                <label class="font-mono opacity-95">Hi, I'm <span class="text-primary-200">Henrik</span><br>A
                    developer from Sweden</label>
            </template>
            <template #description>
                <label class="text-neutral-300 font-w-200 opacity-95">Focused on clean code, good UX, and thoughtful
                    design.</label>
            </template>
        </UPageHero>
    </div>
</template>