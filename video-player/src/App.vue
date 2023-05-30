<script setup>
import VideoList from './components/videoList.vue'
import VideoDetails from './components/VideoDetails.vue'
import SearchBar from './components/searchBar.vue'

import { onMounted, ref } from 'vue'
import { youtubeAPI, defaultParams } from './environments/youtube-api'

const videos = ref(null)
const selectedVideo = ref(null)

const searchVideos = async (query) => {
  const response = await youtubeAPI.get('/search', {
    params: {
      ...defaultParams,
      q: query,
    },
  })
  videos.value = response.data.items
  selectedVideo.value = videos.value[0]
}

const selectVideo = (video) => {
  selectedVideo.value = video
}

onMounted(async () => {
  searchVideos('vue')
})
</script>

<template>
  <header>
    <div class="container">
      <div class="col-lg-8">
        <SearchBar @form-submit="searchVideos" />
      </div>
      
    </div>
  </header>
  <main>
    <div class="container">
      <div v-if="videos" class="row">
        <div class="col-lg-8">
          <VideoDetails :video="selectedVideo" />
        </div>
        <VideoList :videos="videos" @select-video="selectVideo" />
      </div>
    </div>
  </main>
</template>

<style scoped></style>
