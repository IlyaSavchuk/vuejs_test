<template>
  <div class="row">
    <div class="col-md-10 col-sm-10">
      <div class="panel panel-default">
        <div class="panel-body">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Filter by label" @input="filterInput" ref="filter">
            <span class="input-group-btn">
            <button class="btn btn-default" type="button" @click="resetFilter">Reset</button>
          </span>
          </div>

        </div>
      </div>
    </div>
    <div class="col-md-11 col-sm-10 col-xs-8">
      <div class="panel panel-default">
        <div class="panel-body">
          <deposit-station-list></deposit-station-list>
        </div>
      </div>
    </div>
    <div class="col-md-1 col-sm-2 col-xs-4">
      <div class="panel panel-default">
        <div class="panel-body">
          <deposit-station-navigation></deposit-station-navigation>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import DepositStationList from './DepositStationList'
  import DepositStationNavigation from './DepositStationNavigation'

  import {mapGetters} from 'vuex'

  export default {
    methods: {
      filterInput(event) {
        this.$store.dispatch('filterByInput', ['label', event.target.value])
      },
      resetFilter() {
        this.$refs.filter.value = ''
        this.$store.dispatch('resetInputFilter')
      }
    },
    components: {
      DepositStationList,
      DepositStationNavigation
    }
  }
</script>
