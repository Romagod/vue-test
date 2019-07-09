export const state = () => ({
  depts:[]
})
export const mutations = {
  depts(state, depts) {
    state.depts = depts
  },
}
export const actions = {
  async depts(context) {
    try {
      let response = await this.$axios.$get('/api/v1/debtor')
      context.commit('depts', response.result)
    }catch (e) {
      console.log('error: ', e)
    }
  },
}
export const getters = {
  depts(state) {
    return state.depts
  }
}
