<template>
  <li
    class="folder"
    :class="[folder.leaf ? 'is-leaf' : 'is-folder']"
  >
    <span @click="expand()">{{ folder.name }}</span>

    <ul
      v-if="folder.children && folder.children.length > 0"
      v-show="folder.expanded"
      class="sub-folders"
    >
      <Folder
        v-for="child in folder.children"
        :key="child.id"
        :folder="child"
      />
    </ul>
    <div
      v-else
      v-show="!folder.leaf && folder.expanded"
      class="folder-empty"
    >No Data</div>
  </li>
</template>
<script>
export default {
  name: 'Folder',
  props: {
    folder: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    handlerSelect(id) {
      console.log(id)
    },
    expand() {
      if (this.folder.leaf) {
        return
      }
      if (this.folder.hasOwnProperty('expanded')) {
        this.folder.expanded = !this.folder.expanded
        this.$forceUpdate()
      } else {
        this.handlerSelect(this.folder.id)
      }
    }
  }
}
</script>
<style lang="less" scope>
ul.folders {
  padding: 1rem;
  margin: 0;
  box-sizing: border-box;
  width: 100%;
  list-style: none
}
ul.folders > li:first-child {
  padding: 1rem 1rem 1rem 0
}
</style>
