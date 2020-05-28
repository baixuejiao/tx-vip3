<template>
  <div>
    <!-- 音乐列表 -->
    <!-- {{$route.query.id}} -->
    <aplayer 
        v-if="isShow"
        autoplay
        :music="list[0]"
        :list="list"
        showLrc
    />
  </div>
</template>

<script>
import axios from "axios";
import Aplayer from "vue-aplayer";
export default {
    data(){
        return {
            list:[],
            isShow:false
        }
    },
  components: {
    Aplayer
  },
  created() {
    axios.get("data/musicdata.json").then(res => {
    //   console.log(res.data);
      this.list = res.data.musicData;
      this.isShow = true;
    });
  }
};
</script>

<style lang="scss" scoped>
</style>