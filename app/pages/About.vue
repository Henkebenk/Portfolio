<script setup lang="ts">

import type { TimelineItem } from '@nuxt/ui'

const items: TimelineItem[] = [
    {
        date: 'Aug 2017 - Jun 2020',
        title: 'High School',
        description: 'Studied Technology & IT at Polhemsskolan in Gävle.',
        icon: 'i-lucide-school'
    },
    {
        date: 'Jun 2020 - May 2021',
        title: 'Military Service',
        description: 'Served as a Ranger in the Swedish Armed Forces.',
        icon: 'i-lucide-shield'
    },
    {
        date: 'Aug 2022 - Jun 2023',
        title: 'Media technology',
        description: 'Started studying Media Technology at Linköping University.',
        icon: 'i-lucide-graduation-cap'
    },
    {
        date: 'Jun 2025 - Jul 2025',
        title: 'Coach at Code Summer Camp',
        description: 'Coached and mentored young aspiring developers at Code Summer Camp.',
        icon: 'i-lucide-heart-handshake',
        value: 'csc'
    },
    {
        date: 'Jul 2025 - Aug 2025',
        title: 'Frontend developer',
        description: 'Worked on building and refining modern frontend components at Zoezi.',
        icon: 'i-lucide-layout',
        value: 'zoezi'
    },
    {
        date: 'Aug 2023 - Present',
        title: 'Innovative Programming',
        description: 'Transitioned to the Innovative Programming program to focus on software development.',
        icon: 'i-lucide-laptop'
    },
]
</script>

<template>
    <UPageSection title="About me" class="pt-8 sm:pt-16"
        description="I’m Henrik Hårshagen, a creative and solution-oriented developer studying Innovative Programming at Linköping University. I’m passionate about building intuitive, well-designed applications where technology meets user experience."
        orientation="horizontal" :ui="{
            container: 'lg:flex sm:flex-row items-center',
            title: '!mx-0 text-left font-mono',
            description: '!mx-0 text-left',
            links: 'justify-start'
        }">
        <template #description>
            <label>Hi, I’m Henrik Hårshagen, a developer who enjoys building clear, functional, and user-friendly
                digital products.
                I like combining design, technology, and usability to create interfaces that feel natural to
                use.</label>
            <br><br>
            <label>I’m currently studying Innovative Programming at Linköping University, where I’ve built a solid
                foundation in
                modern frameworks, software design, and problem solving. I care about structure, clarity, and keeping
                things simple,
                both in code and in the way products are experienced.</label>
            <br><br>
            <label>When I’m not coding, I’m usually out on the trails mountain biking or working on side projects.
                I like learning new things and turning small ideas into something tangible.</label>
        </template>
        <div class="relative">
            <img src="/pfp-onlybg.jpg" class="rounded-4xl w-256 scale-80 hover:scale-79 transition-all hover:opacity-90">
            <img src="/pfp-nobg.png" class="rounded-4xl absolute top-0 left-0 pointer-events-none">
        </div>
        <!-- <img src="/pfp.jpg" class="rounded-4xl h-64" /> -->
    </UPageSection>


    <UPageCTA title="My experience" :ui="{
        title: 'font-mono',
    }" variant="naked" description="A timeline of my educational and professional journey so far."
        orientation="horizontal" reverse>
        <UTimeline :items="items.reverse()" reverse :default-value="4" />
    </UPageCTA>
</template>
