import * as types from './mutation-types'

const mutations = {
  [types.SET_DATE_LIST] (state, dateList) {
    state.dateList = dateList
  },
  [types.SET_CURRENT_DATE] (state, currentDate) {
    state.currentDate = currentDate
  },
  [types.SET_CURRENT_ONE_LIST] (state, currentOneList) {
    state.currentOneList = currentOneList
  }
}

export default mutations
