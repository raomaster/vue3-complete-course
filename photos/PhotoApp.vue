<template>
  <layout>
    <template v-slot:header>
        Header
    </template>
    <template v-slot:sidebar>
        <album
          v-for="album in albums"
          :key="album.id"
          :album="album"
        >
        </album>
    </template>
    <template v-slot:content>
        <router-view>
          
        </router-view>

    </template>
  </layout>
</template>

<script>
import Layout from './Layout.vue'
import Album from './Album.vue'
import { ref, onMounted, computed } from 'vue'
import { useStore } from 'vuex'

export default {
  components: {
    Layout,
    Album
  },

  setup() {
    const store = useStore()

    onMounted(async () => {
      store.dispatch('albums/fetch')
    })

    const albums = computed(() => {
      return store.state.albums.all
    })


    

    return {
      albums
    }
  }
}
</script>

<style scoped>
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
  }
</style>