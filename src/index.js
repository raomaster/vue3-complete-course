import * as Vue from "vue/dist/vue.esm-bundler.js";

const app = Vue.createApp({
  template: `
        <button v-on:click="increment(5)">Increment</button>
        <p>{{ count }}</p>

        <div v-for="number in evenList">
            <div> {{ number }} 
                <span v-if="isEven(number)">
                    Even
                </span>
                <span v-else>
                    Odd
                </span>    
            </div>
        </div>

        <div v-if="isEven(count)">
            Even
        </div>
        <div v-else>
            Odd
        </div>
    `,
  data() {
    return {
      count: 0,
      numbers: [1,2,3,4,5,6,7,8,9,10]
    };
  },

  computed: {
    evenList() {
        return this.numbers.filter(
            num=> this.isEven(num)
        )
    }
  },
  methods: {
    increment(val) {
      this.count += val;
    },
    isEven(number) {
        return number % 2 === 0
    }
  },
});
app.mount("#app");
