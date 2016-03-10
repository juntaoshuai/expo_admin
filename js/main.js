$(function(){
    //菜单展开收缩
    $(".main_left li h3").click(function(){
        $(this).find("span").toggleClass("arrow-down").closest("h3").next("dl").slideToggle();
    });
    //菜单选中
    $(".main_left li .sub-item").click(function(){
        $(".main_left li .sub-item").removeClass("active");
        $(this).addClass("active");

    });
    //导航下拉列表
    $(".nav li").hover(function(){
        $(this).find("dl").toggle();
    });
    //复制框全选
    (function(){
        $(":checkbox[name=dataId]").click(function() {
            var flag=true;
            $("[name=dataId]:checkbox").each(function() {
                if(!this.checked){
                    flag=false;
                }
            });
            $("#checkAll").attr("checked",flag);
        });

        $("#checkAll").click(function() {
            $("[name=dataId]:checkbox").attr("checked",this.checked);
        });
    })();

    jQuery.delPopup=function(obj,msg){
        $(obj).click(function() {
            $.layer({
                shade: [0],
                area: [341,182],
                title:['删除','background:#80addb;color:#fff; font-size:14px;font-weight:bold;'],
                bgcolor:'#fdfdfd',
                shade: [0.5, '#000'],
                border: [1,1,'#80addb'],
                dialog: {
                    msg:msg,
                    btns: 2,
                    type:-1,
                    btn: ['确 定','取 消'],
                    yes: function(index){
                        layer.close(index);
                        // $("#productMgtForm").attr("action","/exhibitor/booth/deleteProductInBatch.xhtml").submit();
                    }
                }
            });
        });

	}

    $.delPopup("#delProduct","此产品已在展位中，您确定要删除吗？");
    $.delPopup("#delVideo","此视频已在展位中，您确定要删除吗？")
    $.delPopup("#delFile","此资料已在展位中，您确定要删除吗？");
    $.delPopup("#delPic","此图片已在展位中，您确定要删除吗？");
//当前页面打开一个新窗口

    (function(){
        //增加产品分组
      var i=2;
        $("#add_proGroup_btn").click(function(){
            i++==20?$(this).hide():"";

           var html='<li class="mt10"><label class="f14 c000">产品分组: </label><input type="text" value="输入分组名"><a href="add_product.html" target="_blank" class="btn_grey92 ml20">添加产品</a><a href="javascript:;" class="remove-group">移除分组</a></li>';
           $(html).appendTo($(this).prev());

        });
        $(".remove-group").live('click',function(){
            $(this).closest("li").remove();
        })
    })();

    (function(){
        //清空文本框提示文字和输入文字变黑色
        jQuery.clearTxt=function(obj){
            $(obj).focus(function(){
                    if($(this).val()==this.defaultValue){
                        $(this).val("");
                    }
                })
                .blur(function(){
                    if($(this).val()==""){
                        $(this).css("color","#999").val(this.defaultValue);
                    }
                });
        }
        $.clearTxt(".txt");
        $.clearTxt(" .group-list input");

        jQuery.chageFontColor=function(obj){
            $(obj).on("input propertychange",function(){
                // alert(1242);
                $(this).css("color","#000");
            });
        }
        $.chageFontColor(".txt");
        $.chageFontColor(".group-list input");

    })();
//地址当为中国以外地区，则省份隐藏
    $("#country").change(function(){
        if($(this).val()==-1){
            $("#province").hide();
        }else{
            $("#province").show();
        }
    });

//展位基本设置时，保存用户选择视频还是图集
    $("#nextStep").click(function(){
        setCookie("ptype",$("input[name=ptype]:checked").val(),30);

    });








});

//cookie存储和取值
function setCookie(key, value, t) {
    var oDate = new Date();
    oDate.setDate( oDate.getDate() + t );
    document.cookie = key + '=' + value + ';expires=' + oDate.toGMTString();
}

function getCookie(key) {
    var arr1 = document.cookie.split('; ');
    for (var i=0; i<arr1.length; i++) {
        var arr2 = arr1[i].split('=');
        if ( arr2[0] == key ) {
            return decodeURI(arr2[1]);
        }
    }
}


function open_window(url,width,height){
    window.open(url,"subWnd","Toolbar=1,menubar=0,scrollbars=1,resizable=1,width="+width+",height="+height+",top=75,left=150");

}





