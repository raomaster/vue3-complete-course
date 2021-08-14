<template>
  <div class="cards">

    <card 
        v-for="pokemon in pokemons" 
        :key="pokemon.id"
        :class="{
            opace: selectedId && pokemon.id !== selectedId
        }"
        class="card"
        @click="click(pokemon)"
    >
      <template v-slot:title>
        {{ pokemon.name }} # {{ pokemon.id }}
      </template>
      <template v-slot:content>
        <img :src="pokemon.sprite" />
      </template>
      <template v-slot:description>
        <div 
          v-for="type in pokemon.types" 
          :key="type"
        >
          {{ type }}
        </div>
      </template>
    </card>
  </div>
</template>

<script>
import Card from './Card.vue'

export default {
    components: {
        Card
    },    
    props: {
        pokemons: {
          type: Array
        },
        selectedId: {
            type: Number
        }
    },
    methods: {
        click(pokemon) {
            this.$emit('pokemonSelected', pokemon)
        },
        getClass(pokemonId) {
            return { 
                opace: !(pokemonId == this.selectedId || 
                pokemonId == this.selectedId + 1 ||
                pokemonId == this.selectedId + 2
                ) 
                
                }
        },
    }
}
</script>

<style scoped>
img {
    width: 100%;
  }
  .cards {
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }
  .opace {
    opacity: 0.5;
  }
  .card:hover {
    opacity: 1;
  }
</style>