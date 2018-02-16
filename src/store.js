import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'
import {getCookie, setCookie} from './utils/Cookie'
import data from './data'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navigation: [],
    collection: [],
    currentNavigation: {}
  },
  mutations: {
    setNavigation(state, navigation) {
      state.navigation = navigation
    },
    setCollection(state, collection) {
      state.collection = collection
    },
    setCurrentNavigation(state, currentNavigation) {
      state.currentNavigation = currentNavigation
    },
    setItems(state, items) {
      state.currentNavigation.items = items
    }
  },
  getters: {
    filterByProperty: (state) => {
      return _.filter(state.collection, state.currentNavigation.filter)
    },
    groupByProperty: (state) => {
      return _.groupBy(state.currentNavigation.items, state.currentNavigation.group)
    },
    isGrouped: (state) => {
      return state.currentNavigation.group
    },
    filterByInput: (state) => ([property, value]) => {
      return state.currentNavigation.items.filter(item => {
        return item[property].includes(value)
      })
    }
  },
  actions: {
    load({commit, state}) {
      commit('setNavigation', data.navigation)
      commit('setCollection', data.collection.sort((current, next) => {
        return current.label.localeCompare(next.label)
      }))
      let navigationId = getCookie('currentNavigation')
      if (navigationId) {
        this.dispatch('changeCurrentNavigation', state.navigation.find(item => item.id === navigationId))
      } else {
        this.dispatch('changeCurrentNavigation', data.navigation[0])
      }
    },
    changeCurrentNavigation({commit, state, getters}, item) {
      commit('setCurrentNavigation', item)
      commit('setItems', getters.filterByProperty)
      if (item.group) {
        commit('setItems', getters.groupByProperty)
      }
      setCookie('currentNavigation', state.currentNavigation.id)
    },
    filterByInput({commit, state, getters}, filter) {
      commit('setItems', getters.filterByProperty)
      commit('setItems', getters.filterByInput(filter))
      if (getters.isGrouped) {
        commit('setItems', getters.groupByProperty)
      }
    },
    resetInputFilter({commit, getters}) {
      commit('setItems', getters.filterByProperty)
      if (getters.isGrouped) {
        commit('setItems', getters.groupByProperty)
      }
    }
  }
})
