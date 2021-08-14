<template>
  <button @click="increment" class="">
    {{ count }}
  </button>
    <button @click="increase('a')" class="">
    {{ numbers.a }}
  </button>
    <button @click="increase('b')" class="">
    {{ numbers.b }}
  </button>
  <p>{{ total }}</p>
</template>

<script>
import { ref, reactive, computed, watch, watchEffect } from 'vue'

export default {
  setup() {
    const count = ref(0)
    const increment = () => {
      count.value++
    }

    // like data
    const numbers = reactive({
      a: 0,
      b: 0
    })

    const increase = (n) => {
      numbers[n]++
    }

    // like computed
    const total = computed(() => {
      return numbers.a + numbers.b + count.value
      })

    // watch especific
    watch(numbers, (newVal)=> {
      console.log(`a: ${newVal.a}. b: ${newVal.b}`)
    })

    watchEffect(() => {
      console.log(numbers.a)
    })

    return {
      count,
      increment,
      increase,
      numbers,
      total
    }
  }
}
</script>

<style scoped>
button {
  height: 100px;
  width: 100px;
  font-size: 40px;
}
p {
  font-size: 40px;
}
</style>