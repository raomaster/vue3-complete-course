<template>
  <h2>Posts</h2>
  <router-link to="/posts/new">New post</router-link>
  <ul>
    <li v-for="post in posts" :key="post.id">
      <router-link :to="`/posts/${post.id}`">
        {{ post.title }}
      </router-link>
    </li>
  </ul>
  <router-view 
    :posts="posts"
    @createPost="createPost"
  />
</template>

<script>
import { testPosts } from "../microblog/testPosts.js";

export default {
    data() {
        return {
            posts: testPosts
        }
    },
    methods: {
      createPost(newPost) {
        const newId = this.posts.length + 1
        this.posts.push({
          id: newId,
          title: newPost.title,
          content: newPost.content
        })

        this.$router.push(`/posts/${newId}`)
      }
    }
};
</script>

<style scoped>
</style>