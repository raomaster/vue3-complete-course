<template>
  <button>Likes {{ post.likes }}</button>

  <hash-tag
    v-for="hashtag in post.hashtags"
    :key="hashtag"
    :hashTag="hashtag" 
    @setHashtag="setHashtag" 
  >

  </hash-tag>
</template>

<script>
import hashTag from './HashTag.vue'

export default {
  emits: ['setHashtag'],
  components: {
    hashTag
  },
  props: {
    post: {
      type: Object,
      required: true
    },
    hashTag: {
      type: String
    }
  },

  setup(props, ctx) {
    const setHashtag = (hashtag) => {
      ctx.emit('setHashtag', hashtag)
        
      }

    return { setHashtag }
  }
}
</script>

<style scoped>

</style>