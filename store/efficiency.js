export const state = () => ({
  efficiency:[]
})
export const mutations = {
  efficiency(state, efficiency) {
    state.efficiency = efficiency
  },
}
export const actions = {
  async efficiency(context) {
    try {
      let response = await this.$axios.$get('/api/v1/debtor/efficiency')
      context.commit('efficiency', response.result)
    }catch (e) {
      console.log('error: ', e)
    }
  },
}
export const getters = {
  efficiency(state) {
    return state.efficiency
  }
}
