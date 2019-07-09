<template>
  <b-table striped hover :items="efficiency"/>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        efficiency: 'efficiency/efficiency',
      })
    },
    async fetch({store}) {
      await store.dispatch('efficiency/efficiency')
    },
  }
</script>

<style scoped>

</style>
