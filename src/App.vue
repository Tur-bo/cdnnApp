<template>
<div>
  <router-view class="view">

  </router-view>    
    <van-tabbar v-model="active" fixed>
        <van-tabbar-item icon="home-o" to="/base">定位</van-tabbar-item>
        <van-tabbar-item icon="search" to="/pro" >拍照</van-tabbar-item>
        <van-tabbar-item icon="friends-o" >图片上传</van-tabbar-item>
        <van-tabbar-item icon="setting-o" >图片浏览</van-tabbar-item>
    </van-tabbar>
</div>
</template>

<script>
  import { PullRefresh } from 'vant'; 
export default {
  data() {
    return {
      active: 0
    }
  },
  methods: {
    onClickLeft() {
      alert('返回');
    },
    onClickRight() {
      alert('按钮');
    }
  }
}
</script>

<style>
 .blue{
     background: rgb(39, 49, 196);
 }
</style>
