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
  setup() {
    const route = useRoute()
    const usePostsStore = usePosts().posts.value
    const post = computed(() => 
      usePostsStore.find(x => x.id === parseInt(route.params.id, 10))
    
    )
    console.log(route)

    return {
      post
    }
  }
}
</script>

<style scoped>

</style>