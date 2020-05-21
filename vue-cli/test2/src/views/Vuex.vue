<template>
  <div>
    <h2>显示state中的num: {{$store.state.num}}</h2>
    <h2>显示getters中的num+cout的值XX: {{xx}}</h2>
    <button @click="$store.commit('add',8)">num++</button>
    <button @click="reduce(5)">num--</button>
    <button @click="addAction()">action add +20</button>
    <!-- <h2>显示state中的count: {{$store.state.count}}</h2> -->
    <h2>显示state中的count: {{count}}</h2>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters,mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["count"]),
    ...mapGetters(["xx"])
  },
  methods: {
    ...mapMutations(["reduce"]),
    ...mapActions(["addAction"])
  }
};
</script>

<style lang="scss" scoped>
</style>