<template>
  <b-table striped hover :items="efficiencyMonth">
    <template slot="date2" slot-scope="data">
      {{ getFullDate(new Date(data.item.date2)) }}
    </template>
    <template slot="res" slot-scope="data">
      {{ data.item.res }}
    </template>

  </b-table>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    methods: {
      getFullDate(date) {
        return date.getFullYear()
          + '-' + String(date.getMonth() + 1).padStart(2, '0')
          + '-' + String(date.getDate()).padStart(2, '0')
      }
    },
    computed: {
      ...mapGetters({
        efficiencyMonth: 'efficiencyMonth/efficiencyMonth',
      })
    },
    async fetch({store}) {
      await store.dispatch('efficiencyMonth/efficiencyMonth')
    }
  }
</script>

<style scoped>

</style>
