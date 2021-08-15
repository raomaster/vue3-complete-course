<template>
  <h2>New Post</h2>
  <form @submit.prevent="submit">
    <input type="text" v-model="newPost.title" placeholder="Title" />
    <br />
    <textarea
      name="content"
      id=""
      cols="50"
      rows="10"
      v-model="newPost.content"
    >
    </textarea>
    <br>
    <button type="submit">
        button
    </button>
  </form>
</template>

<script>
import { reactive } from "vue";
import { usePosts } from "./usePosts.js";
import { useRouter } from 'vue-router'

export default {
    data() {
        return {
            newPost: {
                title: '',
                content: ''
            }
        }
    },
    methods: {
        submit() {
            this.$emit('createPost', {
                title: this.newPost.title,
                content: this.newPost.content
            })
        }
    }

//   setup() {
//     const postStore = usePosts()
//     const router = useRouter()
//     console.log(router)

//     const newPost = reactive({
//       title: "",
//       content: "",
//     })

//     const submit = () => {
//         const newId = postStore.posts.value.length + 1 
//         postStore.addPost({
//             id: newId,
//             title: newPost.title,
//             content: newPost.content
//         })

//         router.push(`/posts/${newId}`)
//     }
//     return {
//       newPost,
//       submit
//     };
//   },
};
</script>

<style scoped>
</style>