<template>
  <b-table striped hover :items="notPayed"></b-table>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        notPayed: 'notPayed/notPayed',
      })
    },
    async fetch({store}) {
      await store.dispatch('notPayed/notPayed')
    }
  }
</script>

<style scoped>

</style>
