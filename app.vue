<template>
    <UApp>
        <div class="min-h-dvh flex flex-col justify-between h-full">
            <header>
                <Navbar />
            </header>
            <main class="grow">
                <NuxtPage class="w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8 flex flex-col" />
            </main>
            <footer>
              <Footer/>
            </footer>
        </div>
    </UApp>
</template>
<script setup lang="ts">
const config = useRuntimeConfig()
</script>
