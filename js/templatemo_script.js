// 加载数据文件
document.write(' <script src="js/date.js"> </script>');
var seeHeight = document.documentElement.clientHeight;
var seeWidth = document.documentElement.clientWidth;

var menuDisabled = false;
var fun = {
    title_P_ele_animation: function () {
        let b1 = $('.active .title_P_ele_html span b')
            .first();
        let b2 = $('.active .title_P_ele_html span b')
            .last();
        let b1Width = 0;
        let b2height = 0;
        var T2 = setInterval(function () {
            b1Width += 2;
            b2height += 1;
            b1.css('width', b1Width + 'px');
            b2.css('height', b2height + 'px');
            if (b1Width == 80) {
                clearInterval(T2);
            }
        }, 20)
    },
    load_html_li_list: function () {
        var data = dateHTML;
        var html = '';
        for (var i = 0; i < data.length; i++) {
            html += `<li>
                        <h3><i class="iconfont icon-biaotizhongdian"></i>${data[i].biaoqian}</h3>
                        <div class="showHTML">
                            <span style="display: block;">${data[i].yongtu}</span>
                            <div class='showHTML_twoBox_inf'></div>
                            <div class="row">
                                <!-- 这两个标签固定位置，不能移动 -->
                                <div class="col-sm-12 col-md-6">
                                    <span class='ST_span_title'>网页呈现的效果</span>
                                    <div class='ST_div_code'>${data[i].codeShow}</div>
                                </div>
                                <div class="col-sm-12 col-md-6">
                                    <span class='ST_span_title'>对应源代码</span>
                                    <div class='ST_div_code'>${data[i].xmpYuanMa}</div>
                                </div>                           
                            </div>
                        </div>
                    </li>`;
        }
        $('#carousel_html .slides').html(html);
    },
    set_contain_height: function (h, w) {
        let width = '';
        let height = '';
        if (h == undefined) {
            width = seeWidth;
            height = seeHeight
        } else {
            width = w;
            height = h
        }
        if (width < 768) {
            $(".templatemo-content").css({
                'height': height - 125,
                'overflowY': 'auto'
            });
            $("#iframe").css({
                'height': height - 170,
                'overflowY': 'auto',
                'marginTop': '40px'
            })
        } else {
            $(".templatemo-content").css({
                'height': height - 175,
                'overflowY': 'auto'
            });
            $("#iframe").css({
                'height': height - 220,
                'overflowY': 'auto',
                'marginTop': '40px'
            })
        }
    }
}
jQuery(function ($) {
    var T1 = setInterval(function () {
        var preloader_display = $('#preloader').css('display');
        if (preloader_display == 'none') {
            fun.title_P_ele_animation();
            clearInterval(T1);
        }
    }, 50)
    $(document).ready(function () {

        // 背景图片切换
        var defaultImgSrc = $('img.main-img').attr('src');
        $.backstretch(defaultImgSrc, {speed: 400});
        // 导航点击切换
        $(".nav a").on('click', function (e) {
            let b1 = $('.active .title_P_ele_html span b').first().css('width', 0);
            let b2 = $('.active .title_P_ele_html span b').last().css('height', 0);
            setTimeout(function () {
                fun.title_P_ele_animation();
            }, 800)
            if ($(this).hasClass("external")) {
                return;
            }
            e.preventDefault();
            if (menuDisabled == false) // check the menu is disabled?
            {
                menuDisabled = true; // disable the menu

                var name = $(this).attr('href');
                $('.nav li').removeClass('active');

                var menuClass = $(this).parent('li'); // .attr('class')
                $(menuClass).addClass('active');

                // get image url and assign to backstretch for background
                var imgSrc = $("img" + name + "-img").attr('src');
                $.backstretch(imgSrc, {speed: 400}); //backstretch for background fade in/out

                // content slide in/out
                $("section.active").animate({left: -$("section.active").outerWidth()}, 300, function () {
                    $(this).removeClass("active");
                    $(this).hide();
                    $(name + "-text").removeClass("inactive");
                    $(name + "-text").css({left: '703px', top: '0px'});
                    $(name + "-text").show();
                    $(name + "-text").animate({left: '0px'}, 300, function () {
                        $(this).addClass("active");
                        $.backstretch("resize"); // resize the background image
                        $(window).resize();

                        menuDisabled = false; // enable the menu
                    });
                });
            }
            return;
        });

    }); // document.ready


    // 框架列表事件
    var li_length = $('#templatemo-page3-text .library li').length;
    var iframl_Url = [
        './VueDemo/index.html', './React/index.html'
    ]
    $('#templatemo-page3-text .library li').css({
        'width': 100 / li_length + '%'
    })
    $('#templatemo-page3-text .library li').on('mouseenter', function () {
        let ind = $(this).index();
        if (ind == 0) {
            $(this).css({
                'borderTopLeftRadius': '20px'
            })
        } else if (ind == li_length - 1) {
            $(this).css({
                'borderTopRightRadius': '20px'
            })
        }
    });
    $('#templatemo-page3-text .library li').on('mouseout', function () {
        let ind = $(this).index();
        if (ind == 0) {
            $(this).css({
                'borderTopLeftRadius': 0
            })
        } else if (ind == li_length - 1) {
            $(this).css({
                'borderTopRightRadius': 0
            })
        }
    });
    // 库和框架点击选项动画
    $('#templatemo-page3-text .library li').on('click', function () {
        let ind = $(this).index();
        $('#iframe').attr('src', $.trim(iframl_Url[ind]));
        $(this).children().first().css({
            'transform': 'translate(15px,5px)',
            'borderLeft': '1px solid #fff',
            'borderBottom': '1px solid #fff',
            'opacity': 1
        }).siblings().css({
            'transform': 'translate(-15px,-13px)',
            'borderRight': '1px solid #fff',
            'borderTop': '1px solid #fff',
            'opacity': 1
        }).parent().siblings().children().first().css({
            'display': 'inlinBlock',
            'width': '20px',
            'height': '10px',
            'borderLeft': '1px solid #fff',
            'borderBottom': '1px solid #fff',
            'transform': 'translate(-20px,20px)',
            'transition': 'all 0.3s',
            'opacity': 0
        }).siblings().css({
            'display': 'inlinBlock',
            'width': '20px',
            'height': '10px',
            'borderRight': '1px solid #fff',
            'borderTop': '1px solid #fff',
            'transform': 'translate(20px,-30px)',
            'transition': 'all 0.3s',
            'opacity': 0
        });
    })
});

window.onload = function () {
    $('#preloader').delay(400).fadeOut('slow');
    let seeHeight = document.documentElement.clientHeight;
    let seeWidth = document.documentElement.clientWidth;
    fun.set_contain_height(seeHeight, seeWidth);
    fun.load_html_li_list();
}
// 监听屏幕变化
$(window).resize(function () {
    let seeHeight = document.documentElement.clientHeight;
    let seeWidth = document.documentElement.clientWidth;
    fun.set_contain_height(seeHeight, seeWidth);
});