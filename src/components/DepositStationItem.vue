<template>
  <div class="dsi">
    <span v-if="!group">{{item.label}}</span>
    <template v-else>
      <a class="btn btn-link" data-toggle="collapse" :data-target="`#subItem${_uid}`" aria-expanded="false"
         :aria-controls="`subItem${_uid}`">
        {{item[0].group }}
      </a>
      <div class="collapse" :id="`subItem${_uid}`">
        <div class="well">
          <p v-for="subItem in item" v-text="subItem.label"></p>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
  export default {
    props: {
      item: {},
      group: {
        default: true
      }
    }
  }
</script>
<style lang="scss" scoped>
  .dsi {
    padding: 5px;
    border-bottom: 1px solid #ccc;
    border-right: 1px solid #ccc;
    &:not(:last-child) {
      margin-bottom: 5px;
    }
  }
</style>
