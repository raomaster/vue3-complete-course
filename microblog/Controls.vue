<template>
  <button @click="click" >Likes {{ post.likes }}</button>

  <hash-tag
    v-for="hashtag in post.hashtags"
    :key="hashtag"
    :hashTag="hashtag" 
  >

  </hash-tag>
</template>

<script>
import hashTag from './HashTag.vue'
import { store } from './store.js'

export default {
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
  setup(props) {
    const click = () => {
      store.incrementLike(props.post)
    }


    return {
      click
    }
  }
}
</script>

<style scoped>

</style>