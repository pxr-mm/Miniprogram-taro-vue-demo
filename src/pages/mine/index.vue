<template>
  <view class="mine">
    <text>我的页面</text>
  </view>
</template>

<script>
import './index.scss'
import Taro from '@tarojs/taro'
export default {
  data () {
    return {
      msg: 'Hello world!'
    }
  },
  created(){
    console.log(1111)
  },
}
</script>
