// pages/home01/home01.js

Page({
  name:"movie1906",
  data: {
    list:[],  //查询电影列表
    imgs:[], //轮播图
    imgsList:[],  //推荐列表
  },
  loadMore:function(){
    // 功能:当组件创建成功调用云函数
    // 获取云函数返回结果并显示
    // start:参数 0  10  20  30
    // 1.调用云函数
    wx.cloud.callFunction({
      name:"movie1906",  //云函数名称
      data:{start:this.data.list.length}     //参数
    })
    .then(res=>{         //成功的回调函数
      // console.log(res.result);
      var rows=JSON.parse(res.result);
      // console.log(rows.subjects);
      rows=this.data.list.concat(rows.subjects);
      var img = rows.slice(0,4)
      var imgss = rows.slice(0,18)
      this.setData({
        list:rows,
        imgs: img,
        imgsList:imgss 
      })
    })
    .catch(err=>{        //失败的回调函数
      console.log(err)
    })
    // 2.传递参数start
    // 3.获取云函数返回结果并且保存在list
    // 获取轮播图
  },
  jumpComment: function (event) {
    // 1.添加参数event事件对象
    // 2.依据event获取自定义属性id
    var id = event.target.dataset.id;
    console.log(id);
    // 3.跳转pages/comment/comment参数id
    var url = "/pages/comment/comment?id=" + id
    wx.navigateTo({
      url: url,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadMore();
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
    this.loadMore();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})