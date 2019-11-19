// pages/mymovie/mymovie.js
// 9.创建数据库对象
const db=wx.cloud.database();
Page({
  data: {
    content:"", //留言内容
    images:[]   //选中图片
  },
  submit:function(){
    // 功能一:上传一张指定图片images,将图片fileID保存
    // 功能二:将留言/fileID添加到云数据库
    // 1.显示加载的提示框
    wx.showLoading({
      title:"评论中...",
    })
    // 2.获取选中的文件名
    console.log(this.data.images.length);
    if(this.data.images.length==0){
      wx.showToast({
        title: '请选择图片',
      });
      return;  //停止程序运行
    }
    var item=this.data.images;
    // 3.使用正则表达式获取文件名后缀
    // a.jpg>= [".jpg"]
    var su=/\.\w+$/.exec(item)[0];
    // 4.创建新文件名
    var newFile=new Date().getTime();
    newFile+=Math.floor(Math.random()*999);
    newFile+=su;
    console.log(newFile);
    // 5.上传图片
    wx.cloud.uploadFile({
      cloudPath:newFile,
      filePath:item,
      success:(res)=>{
        // 6.制定上传图片新文件名/选中文件
        // 7.上传成功获取当前文件fileID[图片路径]
        var fileId=res.fileID;
        // 8.获取评论内容
        var m=this.data.content;
        // 9.在云开发的控制面板中创建集合  mymovie1906
        // 10.添加数据库对象
        db.collection("mymovie1906")  //指定集合
        .add({     //添加
          data:{   //数据
            fileId:fileId,  //图片路径
            content:m    //评论内容
          }
        })
        .then(res=>{
          // 隐藏加载提示框
          wx.hideLoading();
          console.log(res)
          wx.showToast({
            title: '发表成功',
          })
        })
        .catch(err=>{console.log(err)})
        // 11.将fileID/内容添加集合中
        // 12.隐藏加载提示框
       
      }
    })    
  },
  onContentChange:function(event){
    // 功能:输入双向绑定
    // 1.添加参数event
    // 2.获取event.detail保存content
    this.setData({
      content:event.detail
    })
  },
  selectImg: function () {
    // 功能:获取用户选中图片并且保存images:[]
    // 1.显示加载提示框
    wx.showLoading({
      title:"图片上传中...",
    })
    // 2.选择一张图片
    // 3.类型
    // 4.来源
    wx.chooseImage({
      count: 1,  //选中数量1
      sizeType: ["original", "compressed"],
      sourceType: ["album", "camera"],
      // 5.选择成功
      // 6.将当前图片保存对象中
      success: (res) => {
        var file = res.tempFilePaths[0];
        this.setData({
          images: file
        })
      // 7.隐藏
      wx.hideLoading();
      },
    })     
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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