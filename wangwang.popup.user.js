// ==UserScript==
// @name        wangwang popup
// @description fix wangwang popup issue on Chrome
// @include     https://trade.taobao.com/trade/itemlist/*
// @require     http://code.jquery.com/jquery-2.1.1.min.js
// @version     2
// ==/UserScript==
$(function () {
    var classes = '.ww-light.ww-large';
    var getNodes = function () {
        return $(classes);
    };
    
    var replaceNodes = function () {
        var nodes = getNodes();
            nodes.each(function () {
                var node = $(this);
                node.replaceWith('<div>' + node.html() + "</div>");
            });
    };
    
    replaceNodes();
    
    waitForKeyElements(classes, replaceNodes);
});