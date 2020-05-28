<template>
  <div>
    <!-- {{$route.query.index}} -->
    <!-- <img :src="$store.state.photoData[index].src" alt=""> -->
    <router-link to="/photo">
      <v-touch class="img-box" 
        :style="{backgroundImage:`url(${$store.state.photoData[index].src})`}"
        @swipeleft="onSwipeLeft"
        @swiperight = "onSwipeRight"
        ></v-touch>
    </router-link>
  </div>
</template>

<script>
import Vue from 'vue';
import VueTouch from 'vue-touch';
Vue.use(VueTouch, {name: 'v-touch'})
export default {
  data() {
    return {
      index: this.$route.query.index
    };
  },
  methods:{
      onSwipeLeft(){
          this.index++;
          if(this.index >= this.$store.state.photoData.length){
              this.index = 0;
          }
      },
      onSwipeRight(){
          this.index--;
          if(this.index < 0){
              this.index = this.$store.state.photoData.length-1;
          }
      }
  }
};
</script>

<style lang="scss" scoped>
.img-box {
  position: absolute;
  left: 0;
  top: 50px;
  bottom: 50px;
  right: 0;
  background: #000 no-repeat center center;
  background-size: contain; //包含
}
</style>