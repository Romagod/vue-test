export const state = () => ({
  progress:[]
})
export const mutations = {
  progress(state, progress) {
    state.progress = progress
  },
}
export const actions = {
  async progress(context) {
    try {
      let response = await this.$axios.$get('/api/v1/debtor/in-progress')
      context.commit('progress', response.result)
    }catch (e) {
      console.log('error: ', e)
    }
  },
}
export const getters = {
  progress(state) {
    return state.progress
  }
}
