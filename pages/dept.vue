<template>
    <b-table striped hover :items="depts"/>
</template>

<script>
  import {mapGetters} from 'vuex'
    export default {
      computed: {
        ...mapGetters({
          depts: 'dept/depts',
        })
      },
      async fetch({store}) {
        await store.dispatch('dept/depts')
      },
    }
</script>

<style scoped>

</style>
