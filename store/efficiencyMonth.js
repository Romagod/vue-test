export const state = () => ({
  efficiencyMonth:[]
})
export const mutations = {
  efficiencyMonth(state, efficiencyMonth) {
    state.efficiencyMonth = efficiencyMonth
  },
}
export const actions = {
  async efficiencyMonth(context) {
    try {
      let response = await this.$axios.$get('/api/v1/debtor/efficiency-month')
      context.commit('efficiencyMonth', response.result)
    }catch (e) {
      console.log('error: ', e)
    }
  },
}
export const getters = {
  efficiencyMonth(state) {
    return state.efficiencyMonth
  }
}
