export const state = () => ({
  notPayed:[]
})
export const mutations = {
  notPayed(state, notPayed) {
    state.notPayed = notPayed
  },
}
export const actions = {
  async notPayed(context) {
    try {
      let response = await this.$axios.$get('/api/v1/debtor/not-payed')
      context.commit('notPayed', response.result)
    }catch (e) {
      console.log('error: ', e)
    }
  },
}
export const getters = {
  notPayed(state) {
    return state.notPayed
  }
}
