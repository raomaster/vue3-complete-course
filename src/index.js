import * as Vue from "vue/dist/vue.esm-bundler.js";

const app = Vue.createApp({
  template: `
        <button v-on:click="increment(5)">Increment</button>
        <p>{{ count }}</p>

        <input 
            v-bind:value="value" 
            v-on:input="input"
        />
        <div class="red">
            {{ error }}
        </div>
        <div 
            v-for="number in numbers" 
            v-bind:class="getClass(number)"
        >
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
      numbers: [1,2,3,4,5,6,7,8,9,10],
      value: 'user',
    };
  },

  computed: {
    evenList() {
        return this.numbers.filter(
            num=> this.isEven(num)
        )
    },
    error() {
        if (this.value.length <5) {
            return "Must be greater than 5"
  
        }
    }
  },
  methods: {
    increment(val) {
      this.count += val;
    },
    isEven(number) {
        return number % 2 === 0
    },
    getClass(number) {
        return this.isEven(number) ? 'blue' : 'red'
    },
    input($event) {
        this.value = $event.target.value
        if (this.value.length <5) {
            this.error = "Must be greater than 5"
        } else {
            this.error = ''
        }
    }
  },
});
app.mount("#app");
