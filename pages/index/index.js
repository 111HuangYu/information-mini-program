// index.js
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

Page({
  data: {
    currentTab: 0,
    flag: 0
  },
  switchNav: function(e) {
    console.log(e);
    var page = this;
    var id = e.target.id;
    if (this.data.currentTab == id) {
      return false;
    } else {
      page.setData({ currentTab: id });
    }
    page.setData({ flag: id })
  },
  recDetail: function() {
    wx.navigateTo({
      url: '../detail/detail',
    })
  },
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs',
    });
  },
  onLoad: function() {

  },
});
