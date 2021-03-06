'use strict';

$(function () {
  // tab切换
  function tabCtrl(ele) {
    $(ele + ' .tabContents .tabContent').hide().eq(0).show();
    $(ele + ' .tabs .tab').eq(0).addClass('active');
    $(ele + ' .tabs .tab').click(function (e) {
      e.stopPropagation();
      //  e.preventDefault();
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
  tabCtrl('.denglu');
  tabCtrl('.dengluma');
  tabCtrl('.wtf');
  tabCtrl('.stf');
  tabCtrl('.sszc');
  tabCtrl('.htqc_wtf');
  tabCtrl('.htqc_xdf');
  tabCtrl('.xmzx');
  //角度变化
  function jude() {
    var num = $('.text').html();
    var j = num / 100 * 180;
    var jiao = 'rotate(' + j + 'deg)';
    $('.zhen').css('transform', jiao);
  }
  jude();
  //首页显示
  $('.ljjc').hover(function () {
    $(this).parent().find('.fly').fadeIn('fast');
    $('.fly').mouseleave(function () {
      $(this).fadeOut('fast');
    });
  });
  function nav() {
    $('.s_nav .one li').hover(function () {
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
    // $('.s_nav .two li').hover(function(){
    //   if($(this).index()==0){
    //     $(this).find('img').attr('src','images/qyfw77.png');
    //   }else{
    //     $(this).find('img').attr('src','images/qyfw88.png');
    //   }
    // },function(){
    //   if($(this).index()==0){
    //     $(this).find('img').attr('src','images/qyfw7.png');
    //   }else{
    //     $(this).find('img').attr('src','images/qyfw8.png');
    //   }
    // });
    $('.s_nav').css('display', 'none');
    $('.s_nav >li').css('display', 'none');

    $('.href li').hover(function () {
      $('.s_nav >li').stop().slideUp();
      $('.s_nav').stop().fadeOut();

      $('.s_nav').stop().fadeIn();
      var index = $(this).index();
      if (index > 3) {
        index = index - 1;
      }
      $('.s_nav>li').eq(index - 1).stop().slideDown();
      console.log(index);
    }, function () {

      $('.s_nav').hover(function () {}, function () {
        $('.s_nav >li').stop().slideUp();
        $('.s_nav').stop().fadeOut();
      });
      // $('.wrap').mouseleave(
      //   function(){
      //     $('.s_nav').stop().slideUp();
      //     $('.s_nav >li').stop().slideUp();
      //   }
      // );
    });
    $('.href li').hover(function () {
      var that = $(this).index();
      if (that == 0 || that == 3) {
        $('.s_nav >li').stop().slideUp();
        $('.s_nav').stop().fadeOut();
      }
      $('header').mouseenter(function () {
        $('.s_nav >li').stop().slideUp();
        $('.s_nav').stop().fadeOut();
      });
    });
  }
  nav();
  //登录
  $('.dl').click(function () {
    $('.wrap .inner .new').fadeOut();
    $('.wrap .inner .denglu').fadeIn();
  });
  $('.ma').click(function () {
    $('.wrap .inner .denglu').fadeOut();
    $('.wrap .inner .dengluma').fadeIn();
  });
  $('.sma').click(function () {
    $('.wrap .inner .dengluma').fadeOut();
    $('.wrap .inner .denglu').fadeIn();
  });
  //注册
  $('.in').click(function () {
    $('.wrap .inner .dengluma').fadeOut();
    $('.wrap .inner .denglu').fadeOut();
    $('.wrap .inner .new').fadeIn();
  });
  $('.get_code').on('click', function (e) {
    e.preventDefault();
    if ($(this).hasClass('btn_disabled')) {
      return;
    } else {
      $(this).addClass('btn_disabled');
      var count_down = 120;
      var timeout = null;
      var that = this;
      clearTimeout(timeout);
      timeout = setInterval(function () {
        count_down--;
        // console.log(count_down);
        $(that).text(count_down + '秒重新发送验证');

        if (count_down <= 0) {
          clearTimeout(timeout);
          $(that).removeClass('btn_disabled');
          $(that).text('重新获取验证码');
        }
      }, 1000);
    }
  });

  // function checkPhone(tel){ 
  //   var phone = $(tel);
  //   if(!(/^1[34578]\d{9}$/.test(phone))){ 
  //       alert("手机号码有误，请重填");  
  //       return false; 
  //   } 
  // }
  // checkPhone('#tel1');
  //点赞收藏
  $('.mt .content .part ol > li.three').click(function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $(this).addClass('active');
    }
  });
  //支付
  $('#way li').click(function () {
    if ($(this).hasClass('active')) {
      return;
    } else {
      $(this).addClass('active').siblings().removeClass('active');
    }
  });
  $('.price li').click(function () {
    if ($(this).hasClass('active')) {
      return;
    } else {
      $(this).addClass('active').siblings().removeClass('active');
    }
  });
  //添加相对方
  $('.add').click(function () {
    if ($('.stf').css('display') == 'block') {
      layer.msg('请先填写下方内容');
    } else {
      $('.stf').css('display', 'block');
    }
    if ($('.htqc_xdf').css('display') == 'block') {
      layer.msg('请先填写下方内容');
    } else {
      $('.htqc_xdf').css('display', 'block');
    }

    if ($('.delete').parent().parent().find('li').length == 0) {
      $('.delete').parent().css('display', 'block');
      $('.for').css('display', 'none');
    }
  });
  $('.subshow').click(function () {
    $('.for').css('display', 'block');
    $(this).parent().css('display', 'none');
  });
  $('.delete').click(function () {
    $(this).parent().remove();
  });
});