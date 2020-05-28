<template>
  <div class="img-container">
    <img v-for="(obj,index) in $store.state.photoData" 
        :key="index" 
        :src="obj.src" alt 
        @click="$router.push({path:'/photodetail',query:{index}})"
    />
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
    //   photoData: []
    };
  },
  created() {
    axios
      .get("data/photodata.json")
      .then(res => {
        // console.log(res.data.photoData);
        // 将获取到的图片 添加到vuex中的state中 
        this.$store.commit('addPhoto',res.data.photoData)
      })
      .catch(res => {
        console.log(res);
      });
  }
};
</script>

<style lang="scss" scoped>
.img-container {
    overflow: hidden;
}
img {
  width: 50%;
  float: left;
}
</style>