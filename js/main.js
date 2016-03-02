$(function(){
    //菜单展开收缩
    $(".main_left li h3").click(function(){
        $(this).find("span").toggleClass("arrow-down").parents("h3").next("dl").slideToggle();
    });
    //菜单选中
    $(".main_left li .sub-item").click(function(){
        $(".main_left li .sub-item").removeClass("active");
        $(this).addClass("active");

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




});







