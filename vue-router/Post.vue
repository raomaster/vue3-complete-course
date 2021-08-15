<template>
  <h4>{{ post.title }}</h4>
  <p>
    {{ post.content }}
  </p>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { usePosts } from "./usePosts.js";


export default {
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  computed: {
    post() {
      return this.posts.find(x => x.id === parseInt(this.$route.params.id, 10))
      
    }
  }
}
</script>

<style scoped>

</style>