import * as Vue from "vue/dist/vue.esm-bundler.js";

const Num = {
  props: ["number"],
  template: `
    <button 
        v-bind:class="getClass(number)"
        v-on:click="click"    
    >
        {{ number }}
        <span v-if="isEven(number)">
            Even
        </span>
        <span v-else>
            Odd
        </span>    
    </button>
    `,
  methods: {
    click() {
        this.$emit('chosen', this.number)
        console.log(this.number)
    },
    isEven(number) {
      return number % 2 === 0;
    },
    getClass(number) {
      return this.isEven(number) ? "blue" : "red";
    },
  },
};

const app = Vue.createApp({
  components: {
    Num,
  },

  template: `
        <button v-on:click="increment(5)">Increment</button>
        <p>{{ count }}</p>

        <input 
            type="text"
            v-model="value"
        />
        <div class="red">
            {{ error }}
        </div>


        <num 
            v-for="number in numbers" 
            v-bind:number="number"
            v-on:chosen="addNumber" 
        /> 
        <hr />
        <num 
            v-for="number in numberHistory" 
            v-bind:number="number"
        /> 
    `,
  data() {
    return {
      count: 0,
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      value: "user",
      numberHistory: []
    };
  },

  computed: {
    evenList() {
      return this.numbers.filter((num) => this.isEven(num));
    },
    error() {
      if (this.value.length < 5) {
        return "Must be greater than 5";
      }
    },
  },
  methods: {
    increment(val) {
      this.count += val;
    },
    addNumber(number) {
        console.log('number: ', number)
        this.numberHistory.push(number)
    }
  },
});
app.mount("#app");
