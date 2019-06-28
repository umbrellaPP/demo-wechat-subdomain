/**
 * wx api: https://developers.weixin.qq.com/minigame/dev/document/open-api/user-info/wx.createUserInfoButton.html
 */
cc.Class({
    extends: cc.Component,

    properties: {
        test: cc.WXSubContextView,
    },

    on () {
        a.enabled = true;
    },

    off () {
        a.enabled = false;
    },

    up () {
        a.update();
    },

    start () {
        window.a = this.test;
    },
});
