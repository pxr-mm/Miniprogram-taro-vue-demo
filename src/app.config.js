export default {
  pages: [
    'pages/index/index',
    'pages/mine/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#cac',
    selectedColor:'#2ea5ff',
    list: [{
        pagePath: "pages/index/index",
        iconPath:'static/images/hot.png',
        selectedIconPath:'static/images/hot2.png',
        text: "Ê×Ò³"
      },
      {
        iconPath:'static/images/huangguan.png',
        selectedIconPath:'static/images/huangguan2.png',
        pagePath: "pages/mine/index",
        text: "mine"
      }
    ]
  }
}
