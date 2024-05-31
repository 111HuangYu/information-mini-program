Page({
  data: {
    comment: '',
    comments: [] // 用于存储评论列表
  },

  onLoad: function (options) {
    // 初始化页面
  },

  submitComment: function () {
    if (this.data.comment.trim()) {
      // 将新评论添加到评论列表
      const newComments = this.data.comments.concat(this.data.comment);
      this.setData({
        comments: newComments,
        comment: '' // 清空输入框
      });
    } else {
      wx.showToast({
        title: '评论内容不能为空',
        icon: 'none'
      });
    }
  },

  bindCommentInput: function (e) {
    this.setData({
      comment: e.detail.value
    });
  }
});
