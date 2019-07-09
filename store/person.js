export const state = () => ({
  persons:[]
})
export const mutations = {
  persons(state, persons) {
    state.persons = persons
  },
  setFullName(state, {id, value}) {

    for (let i in state.persons) {
      if (state.persons[i].id == id) {
        state.persons[i].full_name = value
        break
      }
    }
  }
}
export const actions = {
  async persons(context) {
    try {
      let response = await this.$axios.$get('/api/v1/person')
      context.commit('persons', response.result)
    }catch (e) {
      console.log('error: ', e)
    }
  },
  async setFullName(context, {id, value}) {
    try {
      console.log('value: ', value)
      let response = await this.$axios.$post('/api/v1/person/'+id, {'full_name': value})
      console.log('response: ', response)
    }catch (e) {
      console.log('error: ', e)
    }
  }
}
export const getters = {
  persons(state) {
    return state.persons
  }
}
