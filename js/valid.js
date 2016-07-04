
$(function(){
//            $('.main-container').Validform({
//                tiptype:1
//            });
    //$(".registerform").Validform();  //就这一行代码！;

    var demo=$('[data-form-valid="valid"]').Validform({
        tiptype:3,
        label:".label",
        showAllError:true,
        datatype:{
            "zh1-6":/^[\u4E00-\u9FA5\uf900-\ufa2d]{1,6}$/
        },
        ajaxPost:true
    });

    //通过$.Tipmsg扩展默认提示信息;
    //$.Tipmsg.w["zh1-6"]="请输入1到6个中文字符！";
//    demo.tipmsg.w["zh1-6"]="请输入1到6个中文字符！";
//
//    demo.addRule([{
//        ele:".inputxt:eq(0)",
//        datatype:"zh2-4"
//    },
//    {
//        ele:".inputxt:eq(1)",
//        datatype:"*6-20"	
//    },
//    {
//        ele:".inputxt:eq(2)",
//        datatype:"*6-20",
//        recheck:"userpassword"	
//    },
//    {
//        ele:"select",
//        datatype:"*"
//    },
//    {
//        ele:":radio:first",
//        datatype:"*"
//    },
//    {
//        ele:":checkbox:first",
//        datatype:"*"
//    }]);
})
