<template>
  <div class="hashtag" @click="setHashtag">
      #{{ hashTag }}
  </div>
</template>

<script>


export default {
  props: {
      hashTag: {
          type: String
      }
  },
  setup(props, ctx) {

    const setHashtag = () => {
      ctx.emit('setHashtag', props.hashTag)
        
      }

    return { setHashtag }
  }
}
</script>

<style scoped>
.hashtag {
  text-decoration: underline;
}
.hashtag:hover {
  color: cornflowerblue;
}
</style>