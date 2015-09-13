// ==UserScript==
// @name        wangwang popup
// @description fix wangwang popup issue on Chrome
// @include     https://trade.taobao.com/trade/itemlist/*
// @require     http://code.jquery.com/jquery-2.1.1.min.js
// @version     1
// ==/UserScript==
$(function () {
    var getNodes = function () {
        return $('.ww-light.ww-large');
    };
    
    var replaceNodes = function () {
        var nodes = getNodes();
            nodes.each(function () {
                var node = $(this);
                node.replaceWith('<div>' + node.html() + "</div>");
            });
    };
    
    replaceNodes();
});