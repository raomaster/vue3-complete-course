<template>
  <h2>Posts</h2>
  <router-link to="/posts/new">New post</router-link>
  <ul>
    <li v-for="post in usePosts" :key="post.id">
      <router-link :to="`/posts/${post.id}`">
        {{ post.title }}
      </router-link>
    </li>
  </ul>
  <router-view />
</template>

<script>
import { usePosts } from "./usePosts.js";

export default {
  setup() {
      const usePostsStore = usePosts().posts.value
    return {
      usePosts: usePostsStore
    };
  },
};
</script>

<style scoped>
</style>