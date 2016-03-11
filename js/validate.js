/**
 * Created by shuai on 2016/3/11.
 */
$(function () {
    //展位基本设置页面
    $("#setBoothForm").validate({
        debug:false,
        submitHandler:function(form){
            form.submit();
        },
        onfocusout: function(element){
            $(element).valid();
        },
        errorPlacement:function(error,element){
            if(element.attr("name")=="account"){
                error.insertAfter(element.parent()).addClass("accounterr"); //error是错误信息的元素，element是要验证的表单元素
            }
          else  if(element.attr("name")=="ptype"){
                error.appendTo(element.parent()); //error是错误信息的元素，element是要验证的表单元素
            }else{
                error.insertAfter(element);
            }
		},
           rules: {
                boothname: {
                    required:true
                },
               account:{
                   required:true
               },
               ptype:{
                   required:true
               }
            },
            messages:{
                boothname: {
                    required:"请填写展位名称"
                },
                account:{
                    required:"请选择客服帐号"
                },
                ptype:{
                    required:"请选择多媒体区播放类型"
                }
            },
        })
    //公司资料
    $("#comInfoForm").validate({
        debug:false,
        submitHandler:function(form){
            form.submit();
        },
        onfocusout: function(element){
            $(element).valid();
        },
        errorPlacement:function(error,element){
            if(element.attr("name")=="account"){
                error.insertAfter(element.parent()).addClass("accounterr"); //error是错误信息的元素，element是要验证的表单元素
            }
            else  if(element.attr("name")=="ptype"){
                error.appendTo(element.parent()); //error是错误信息的元素，element是要验证的表单元素
            }else{
                error.insertAfter(element);
            }
        },
        rules: {
           /* boothname: {
                required:true
            },*/
            mainPro:{
                required:true
            },
            comProfile:{
                required:true
            }
        },
        messages:{
            /*boothname: {
                required:"请上传Logo"
            },*/
            mainPro:{
                required:"请填写主营产品"
            },
            comProfile:{
                required:"请填写请公司介绍"
            }
        },
    })

    jQuery.validator.addMethod("phoneRequired", function(value, element) {
        var referenceElement = $(element).attr("reference");
        var referenceValue = $(referenceElement).val();
        if ($.trim(value) == "" && $.trim(referenceValue) == "") {
            return false;
        }
        return true;
    }, "座机电话必填！");
    $("#telephone").attr("reference", "#mobilePhone");
    // 手机号码验证
    jQuery.validator.addMethod("isMobile", function(value, element) {
        var length = value.length;
        return this.optional(element)
            || (length == 11 && /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test(value));
    }, "请正确填写您的手机号码。");

    $.validator.addMethod("laxEmail", function(value, element) {
        return this.optional( element ) || /^\s*\w+(?:\.{0,1}[\w-]+)*@[a-zA-Z0-9]+(?:[-.][a-zA-Z0-9]+)*\.[a-zA-Z]+\s*$/.test(value);
    }, '请输入正确的邮箱地址');


    // 展位名片
    $("#boothBusinessCardForm").validate({
        debug : false,
       // errorClass : "error",
      //  focusInvalid : true,
        onfocusout: function(element) {
            $(element).valid();
        },
       // onsubmit : true,
       // ignore : "[name='']",
        errorPlacement : function(error, element) {
            var name = $(element).attr("name");
            var tipElement = $("[id='tip_" + name + "']");
            if (tipElement != null && tipElement.length > 0) {
                error.appendTo(tipElement);
            } else {
                error.appendTo(element.parent());
            }
        },
        submitHandler : function(form) {
            form.submit();
        },
        rules : {
            "contacts.name" : {
                required : true
            },
            "contacts.dept" : {
                required : true
            },
            "contacts.job" : {
                required : true
            },
            "contacts.email" : {
                required : true,
                laxEmail : true
            },
            "contacts.telephone" : {
                isPhone : true,
                phoneRequired : true
            },
            "contacts.mobilePhone" : {
                isMobile : true
            },
            "contacts.sex" : {
                required : true
            },
            "address.countryCode" : {
                required : true
            },
            "industryCodeValues" : {
                industryCodeValues : true
            },
            "address.detail" : {
                required : true
            }
        },
        messages : {
            "contacts.name" : {
                required : "请输入您的姓名"
            },
            "contacts.dept" : {
                required : "请输入您所在的部门"
            },
            "contacts.job" : {
                required : "请输入您的职位"
            },
            "contacts.email" : {
                required : "请输入您的邮箱"
            },
            "contacts.telephone" : {
                required : "请输入您的联系电话"
            },
            "contacts.sex" : {
                required : "请填写您的性别"
            },
            "address.countryCode" : {
                required : "请选择国家地区"
            },
            "address.detail" : {
                required : '请输入您的详细联系地址'
            },
        }
    });

















});