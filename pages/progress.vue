<template>
  <b-table striped hover :items="progress">
    <template slot="cal_date" slot-scope="data">
      {{ getFullDate(new Date(data.item.cal_date)) }}
    </template>
    <template slot="debt_sum" slot-scope="data">
      {{ data.item.debt_sum }}
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
        progress: 'progress/progress',
      })
    },
    async fetch({store}) {
      await store.dispatch('progress/progress')
    },
  }
</script>

<style scoped>

</style>
