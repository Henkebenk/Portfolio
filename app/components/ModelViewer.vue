<script setup>
const props = defineProps({
  url: { type: String, required: true },
  class: { type: String, required: false, default: '' },
});

</script>

<template>
  <div>
    <client-only>
      <model-viewer :src="url" camera-controls tone-mapping="neutral" poster="poster.webp" shadow-intensity="1"
        auto-rotate camera-orbit="30deg 75deg" :class="class">
        <div class="progress-bar hide" slot="progress-bar">
          <div class="update-bar"></div>
        </div>
      </model-viewer>

    </client-only>
  </div>
</template>
