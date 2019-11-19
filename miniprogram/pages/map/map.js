// pages/map/map.js
const app = getApp()
Page({
  data: {
    addmissage:'选的位置',
    stitle:'故宫',
    latitude:"",
    longitude:"",
    scale:14,
    markers:[],
    //  是左下角圆圈小突变,用户无论放大多少,点这里可以立刻回到当前定位
    controls:[{
      id:0,
      iconPath:"/images/01.jpg",
      position:{
        left:120,
        top:100,
        width:35,
        height:30
      },
      clickable:true, 
    }],
  },
  data_map:function(){
    wx.showModal({
      title: '提示',
      content: '此功能暂未开通',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    // 获取当前位置
    wx.getLocation({
      type:'wgs84',//默认的坐标
      success: function(res) {
        that.setData({
          latitude:res.latitude,
          longitude:res.longitude
        })
      },
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})