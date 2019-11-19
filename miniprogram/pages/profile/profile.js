// pages/profile/profile.js
Page({
  data: {
    others:[
      {
        icon:"../../images/pot.png",
        tit:"看过的电影",
        types:"wanted"
      },
      {
        icon: "../../images/pot.png",
        tit: "想看的电影",
        types: "want"
      },
      {
        icon: "../../images/pot.png",
        tit: "帮助中心",
        types: "help"
      },
      {
        icon: "../../images/pot.png",
        tit: "意见反馈",
        types: "feed"
      },
      {
        icon: "../../images/pot.png",
        tit: "人工客服",
        types: "service"
      },
      {
        icon: "../../images/pot.png",
        tit: "设置",
        types: "setting"
      }
    ]
  },
  handle3:function(event){
    // 功能 获取用户信息,提前是否允许确认框
    //  获得 头像、昵称、性别、省、市、。。
    console.log(event);
  },
  othersClick:function(){
    wx.showModal({
      title: '提示',
      content: '此功能暂未开通',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.userInfo']) {
          wx.authorize({
            scope: "scope.userInfo",
            success: (
              wx.getUserInfo({
                success: function (res) {
                  console.log(res.userInfo)
                }
              })
            )
          })
        }
      }
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