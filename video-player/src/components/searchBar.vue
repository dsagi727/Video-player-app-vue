<script setup>
import { ref } from 'vue'
const query = ref('')

defineEmits(['form-submit'])
</script>

<template>
  <div class="search-bar my-3">
    <form action="" class="form" @submit.prevent="$emit('form-submit', query)">
      <div class="form-group">
        <input
          id="search"
          v-model="query"
          type="text"
          class="form-control form-control-lg"
          placeholder="Search video"
        />
      </div>
    </form>
  </div>
</template>

<style scoped></style>
