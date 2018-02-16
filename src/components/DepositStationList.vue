<template>
  <div class="dsl">
    <transition-group name="fade">
      <deposit-station-item v-for="(item, index) in currentNavigation.items" :item="item" :group="group" :key="index">
      </deposit-station-item>
    </transition-group>
  </div>
</template>

<script>
  import DepositStationItem from './DepositStationItem'
  import {mapState, mapGetters} from 'vuex'

  export default {
    computed: {
      ...mapState({
        currentNavigation: 'currentNavigation',
      }),
      ...mapGetters({
        group: 'isGrouped'
      })
    },
    components: {
      DepositStationItem
    }
  }
</script>
