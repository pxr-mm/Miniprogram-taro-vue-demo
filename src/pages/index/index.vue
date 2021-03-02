<template>
  <view class="index">

    <button @tap="toMine" type="primary">
      跳转mine
    </button>
    <!-- <button @tap="getData">
      发起请求
    </button> -->
    <view class="content">
        <swiper
          class='test-h'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          current="current"
          autoplay
          >
          <swiper-item v-for="(item, idx) in imgList" :key="idx">
            <image :src="item.banner_cover" class="slide-image" />
          </swiper-item>
        </swiper>
      </view>
    <!-- <view class="imageStyle">
      <view class="" v-for="(item,i) in imgList" :key="i">
        <image :src="item.banner_cover"></image>
      </view>
    </view> -->

    <map id="map" longitude="113.324520" latitude="23.099994" scale="14" :markers="markers" @markertap="markertap"
      :polyline="polyline" @regionchange="regionchange" show-location style="width: 100%; height: 200px;"></map>
    <view class="content">

    </view>
<AtButton type='primary' :on-click="(e)=>clickBtn(1)">按钮文案</AtButton>
<view>
     <view class="index">
        <AtTag :on-click="clickBtn">标签</AtTag>
        <AtIcon value="clock" color="#F00"></AtIcon>
      </view>
  </view>
  <!-- click事件无效，但在点击getData事件会触发 -->
  <!-- <view class="content" :on-click="(e)=>clickB()">
    点击
  </view> -->

 <!-- <AtTabBar
    backgroundColor='#ececec'
    :fixed="true"
    color='#ea6bb8'
    :tabList="[
      { title: '待办事项', iconType: 'bullet-list', text: 'new' },
      { title: '拍照', iconType: 'camera' },
      { title: '文件夹', iconType: 'folder', text: '100', max: 99 }
    ]"
    :onClick="handleClick"
    :current="current"
  /> -->
  </view>
</template>

<script>
  import './index.scss'
  import Taro from '@tarojs/taro'
// import { AtTag, AtIcon,AtButton } from 'taro-ui-vue'
// import 'taro-ui-vue/dist/style/components/icon.scss'
// import 'taro-ui-vue/dist/style/components/tag.scss'
// import 'taro-ui-vue/dist/style/components/button.scss'

import {getRecommendList}  from '../../../http/api.js'
  export default {
     // components: {
     //    AtTag,
     //    AtIcon,
     //    AtButton
     //  },
    data() {
      return {
        msg: 'Hello world!hahha',
        imgList: [],
        markers: [{
          iconPath: "https://avatars2.githubusercontent.com/u/1782542?s=460&u=d20514a52100ed1f82282bcfca6f49052793c889&v=4",
          id: 0,
          latitude: 23.099994,
          longitude: 113.324520,
          width: 50,
          height: 50
        }],
        polyline: [{
          points: [{
            longitude: 113.3245211,
            latitude: 23.10229
          }, {
            longitude: 113.324520,
            latitude: 23.21229
          }],
          color: "#FF0000DD",
          width: 2,
          dottedLine: true,
          current:0,
        }]
      }
    },
    mouted() {

    },
    onPullDownRefresh: function (){
      Taro.startPullDownRefresh()
      // Taro.stopPullDownRefresh()
    },
    methods: {
      handleClick(value) {
        console.log(value)
        this.current = value
        if(value===1){
          Taro.navigateTo({url:'/pages/mine/index'})
        }
        // console.log(this.current)
      },
      toMine() {
        console.log("5555")
        // 传入参数 id=2&type=test
        wx.switchTab({
          url: '/pages/mine/index'
        })
        // Taro.navigateTo({
        //   url: '/pages/mine/index'
        // })
      },
      // 请求
     async getData(e) {
        let that = this
        // Taro.showLoading({
        //   title: '加载中',
        // })
        // Taro.request({
        //   url: 'http://192.168.1.183/banner/recommend_list', //仅为示例，并非真实的接口地址
        //   method: 'POST',
        //   header: {
        //     'content-type': 'application/json' // 默认值
        //   },
        //   success(res) {
        //     console.log(res.data)
        //     that.imgList = res.data.data.result
        //     Taro.hideLoading()
        //   }
        // })
       let res = await getRecommendList()
       console.log(res,'res')
       if(res.code === 1) {
         that.imgList = res.data.result
             // Taro.hideLoading()
       }

      },
       // 地图
      regionchange(e) {
        console.log(e.type)
      },
      markertap(e) {
        console.log("markertap:", e.detail.markerId)
      },

      clickBtn(value){
        console.log(value,"点了")
      },
      clickB(){
        console.log("点了222")
      },

    },
  }
</script>
<style lang="scss">
  .content {
    margin: 30rpx;
  }

  .imageStyle {
    margin-top: 20rpx;
    display: flex;
    justify-content: space-around;

    image {
      width: 200rpx;
      height: 200rpx;
    }
  }
</style>
