// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
// 1.引入request-promise 库
const rp = require("request-promise");
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  // 2.创建url
  var url =`http://api.douban.com/v2/movie/subject/${event.id}?apikey=0df993c66c0c636e29ecbb5344252a4a`;
  // 3.发送ajax请求并且返回结果
  return rp(url).then(res => {  //发送请求
    return res;                 //返回结果
  }).catch(err => {             //执行失败
    console.log(err);           //输出结果
  })

}