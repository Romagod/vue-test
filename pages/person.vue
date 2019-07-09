<template>
  <b-table striped hover :items="persons" :fields="fields" :sort-by.sync="sortBy"
           :sort-desc.sync="sortDesc">
    <div>
      Sorting By: <b>{{ sortBy }}</b>, Sort Direction:
      <b>{{ sortDesc ? 'Descending' : 'Ascending' }}</b>
    </div>
    <template slot="id" slot-scope="data">
      {{ data.item.id }}
    </template>
    <template slot="full_name" slot-scope="data">

      <input
        class="person-fullname"
        type="text"
        :value="data.item.full_name"
        @input="updateFullName"
        @change="setFullName(data.item.id, data.item.full_name)"
        :data-id="data.item.id"/>

    </template>
  </b-table>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        persons: 'person/persons',
      })
    },
    data() {
      return {
        sortBy: 'id',
        sortDesc: false,
        fields: [
          {key: 'id', sortable: false},
          {key: 'full_name', sortable: true},
        ],
      }
    },
    async fetch({store}) {
      await store.dispatch('person/persons')
    },
    methods: {
      setFullName(id, value) {
        this.$store.dispatch('person/setFullName', {id, value})
      },
      updateFullName(e) {
        this.$store.commit('person/setFullName', {id: e.target.dataset.id, value: e.target.value})
      }
    },
    mounted() {

    }
  }
</script>

<style>
  .person-fullname {
    width: 100%;
    text-align: center;
    background-color: transparent;
    border: none;
  }
</style>
