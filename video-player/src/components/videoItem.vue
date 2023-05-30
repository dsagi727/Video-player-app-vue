<script setup>
defineProps({
  video: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div
    role="button"
    tabindex="0"
    class="container p-1 video"
    @keyup.enter="$event.target.click()"
  >
    <div class="row">
      <div class="col-6">
        <h3 class="h6">{{ video.snippet.title }}</h3>
      </div>
      <div class="col-6 p-0">
        <img
          class="img-fluid"
          :src="video.snippet.thumbnails.medium.url"
          :alt="video.snippet.title"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
