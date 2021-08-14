<template>
  <pokemon-card 
    :pokemons="pokemons" 
    @pokemonSelected="fetchEvolutions"
    :selectedId="selectedId"
    >
      
    </pokemon-card>

  <pokemon-card 
    :pokemons="evolutions" 
    />

</template>

<script>
import PokemonCard from './PokemonCard.vue'

const api = "https://pokeapi.co/api/v2/pokemon"
const IDS = [1, 4, 7]

export default {
  components: {
    PokemonCard
  },
  data() {
    return {
      pokemons: [],
      evolutions: [],
      selectedId: null
    }
  },
  async created() {
    //console.log("created", this.$el)
    this.pokemons = await this.fetchData(IDS)
  },
  mounted() {
    //console.log("mounted", this.$el)
  },
  methods: {
    async fetchData(ids) {
      const responses = await Promise.all(
        ids.map(id => window.fetch(`${api}/${id}`))
      )

      const json = await Promise.all(
        responses.map(data => data.json())
      )
      console.log(json)


      return json.map(datum => ({
        id: datum.id,
        name: datum.name,
        sprite: datum.sprites.other['official-artwork'].front_default,
        types: datum.types.map(type => type.type.name)
      }))

      console.log(this.pokemons)
    },
    async fetchEvolutions(pokemon) {
      this.evolutions = await this.fetchData([pokemon.id + 1, pokemon.id + 2])
      this.selectedId = pokemon.id
    }
  }
};
</script>

<style scoped> 
</style>