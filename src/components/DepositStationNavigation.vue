<template>
  <div class="dsn text-center">
    <a :title="item.title" @click="setNavigation(item)" v-for="item in items" class="dsni"
       :class="{active: item === currentNavigation}"><i :class="`fa fa-${item.name}`"></i></a>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    computed: mapState({
      items: 'navigation',
      currentNavigation: 'currentNavigation'
    }),
    methods: {
      setNavigation(item) {
        this.$store.dispatch('changeCurrentNavigation', item)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .dsni {
    display: inline-block;
    padding: 5px 10px;
    width: 100%;
    color: #888;
    cursor: pointer;
    transition: 0.5s;
    &.active, &:hover {
      background: #414141;
      color: #fff;
    }
  }
</style>
