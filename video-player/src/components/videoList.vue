<script setup>
import VideoItem from './videoItem.vue'

defineProps({
  videos: {
    type: Array,
    required: true,
  },
})

defineEmits(['select-video'])
</script>

<template>
  <div class="col-lg-4">
    <VideoItem
      v-for="(video, index) of videos"
      :key="index"
      :video="video"
      @click="$emit('select-video', video)"
    />
  </div>
</template>

<style scoped></style>
