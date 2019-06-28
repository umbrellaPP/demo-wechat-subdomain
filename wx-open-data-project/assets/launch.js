//
// api: https://developers.weixin.qq.com/minigame/dev/document/open-api/data/wx.getUserInfo.html
//
cc.Class({
    extends: cc.Component,

    properties: {
        test: cc.Label,

    },

    onLoad () {
        this._num = 0;
        this.test.string = this._num.toString();
    },

    test2 () {
        this._num++;
        this.test.string = this._num.toString();
    },



});
