/**
 * Created by shuai on 2016/2/28.
 */
seajs.config({
    // 别名配置
    alias: {
        'jquery': './sea-modules/jquery/jquery-1.8.0.min.js',
        'layer':'./sea-modules/layer-v2.1/layer.js'
    }
});

define(function(require,exports,module){
    var $=require('jquery');
       //菜单展开收缩
       $(".main_left li h3").click(function(){
           $(this).find("span").toggleClass("arrow-down").parents("h3").next("dl").slideToggle();
       });
    //菜单选中
    $(".main_left li .sub-item").click(function(){
        $(".main_left li .sub-item").removeClass("active");
        $(this).addClass("active");

    })

});



