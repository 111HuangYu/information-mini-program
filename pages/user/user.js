// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

	},
	set: function() {
    // console.log("设置按钮被点击");
    wx.switchTab({
      url: '../setting/setting',
      // success: function(res) {
      //   console.log("跳转成功");
      // },
      // fail: function(err) {
      //   console.error("跳转失败", err);
      // }
    });
  },
	
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})