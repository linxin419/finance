(function($) {
    var oWidth, oHeight;
    //初始化字体
    var resetFontSize = function() {
        oWidth = $(window).width();
        oHeight = $(window).height();
        $('html').css("font-size", parseInt(oWidth / 75 * 10) + "px");
    }
    resetFontSize();
    $(window).resize(function() {
        resetFontSize();
    })
}(jQuery))

$(function() {
    /**
     * 获取客户端信息
     */
    function getClientInfo() {
        var userAgentInfo = navigator.userAgent;
        var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
        var agentinfo = null;
        for (var i = 0; i < Agents.length; i++) {
            if (userAgentInfo.indexOf(Agents[i]) > 0) { agentinfo = userAgentInfo; break; }
        }
        if (agentinfo) {
            
        } else {
            window.location.replace("http://linxboy.cn/saint_nong_h5/");
        }
    }
    //调用示例
    // getClientInfo()
})