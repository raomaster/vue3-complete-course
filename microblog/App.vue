<template>
  <card
    v-for="post in filteredPosts"
    :key="post.id"
  >
    <template v-slot:title>
      {{ post.title }}
    </template>

    <template v-slot:content>
      {{ post.content }}
    </template>      
    <template v-slot:description>
      <controls 
        :post="post"
        @setHashtag="setHashtag"
      >
      </controls>
    </template>
  </card>
</template>

<script>
import { ref, computed } from 'vue'
import { store } from './store.js'
import Card from '../pokemon/Card.vue'
import Controls from './Controls.vue'

export default {
  components: {
    Card,
    Controls
  },

  setup() {
    const currentTag = ref()
    const setHashtag = (hashtag) => {
      currentTag.value = hashtag
    }

    const filteredPosts = computed(() => {
      if(!currentTag.value) {
        return store.state.posts
      }
      return store.state.posts.filter(post =>
        post.hashtags.includes(currentTag.value)
      )
    })

    return {
      setHashtag,
      filteredPosts
    }
  }

}
</script>

<style scoped>

</style>