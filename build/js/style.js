'use strict';

$(function () {
    // tab切换
    function tabCtrl(ele) {
        $(ele + ' .tabContents .tabContent').hide().eq(0).show();
        $(ele + ' .tabs .tab').eq(0).addClass('active');
        $(ele + ' .tabs .tab').hover(function (e) {
            e.stopPropagation();
            e.preventDefault();
            if ($(this).hasClass('active')) {
                return;
            }
            $(this).addClass('active').siblings().removeClass('active');
            var me = $(this);
            var index = 0;
            $(ele + ' .tabs .tab').each(function (i) {
                if (me.get(0) === $(this).get(0)) {
                    index = i;
                }
            });
            $(ele + ' .tabContents .tabContent').hide().eq(index).fadeIn();
        });
    }
    function jude() {
        var num = $('.text').html();
        var jiao = 'rotate(' + num + 'deg)';
        $('.zhen').css('transform', jiao);
    }
    jude();
    $('.s_nav li li').hover(function () {
        var num = ($(this).index() + 1).toString() + ($(this).index() + 1).toString();
        var cnum = parseInt(num);
        var name = $(this).parent().parent().attr('class');
        var str = 'images/' + name + cnum + '.png';
        $(this).find('img').attr('src', str);
    }, function () {
        var num = ($(this).index() + 1).toString();
        var name = $(this).parent().parent().attr('class');
        var cnum = parseInt(num);
        var str = 'images/' + name + cnum + '.png';
        $(this).find('img').attr('src', str);
    });
});