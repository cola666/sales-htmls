var ibootbox = new Object();

ibootbox.chengeConfirmSubData = function(code, eleId) {
    $("#" + eleId).val(code);
}


$(function() {
    $(document).on('click', '[data-confirm-modal-button="false"]', function() {
        $("#remove-confirm-modal-data").val(500);
    });
    $(document).on('click', '[data-confirm-modal-button="true"]', function() {
        $("#remove-confirm-modal-data").val(200);
    });


    $(document).on("click", '[data-modal="remove"]', function() {
        //                执行自定义的删除确认对话框
        confirmRemove({
            text: "确认对话框中的内容",
            context: "模态框body部分的替换内容"
        }, function() {
            console.log("confirmCallBack");
        });
    });

    //            定义删除确认对话框的方法
    function confirmRemove(options, callBack) {
        console.log(options);
        //                设置传入的参数(确认框中提示的内)
        $("#remove-confirm-modal-text").text(options.text);
        //展开模态框
        $("#modal_remove").modal('toggle');
        //获取setInterval的值,并设置定时器开始定时处理
        var intervalVal = self.setInterval(function() {
            var stringConfirmData = $("#remove-confirm-modal-data").val();
            var confirmData = Number(stringConfirmData);

            if (confirmData == 200) {
                callBack();
                window.clearInterval(intervalVal);
                $("#modal_remove").modal('toggle');
                $("#remove-confirm-modal-data").val(404);
            } else if (confirmData == 500) {
                window.clearInterval(intervalVal);
                $("#modal_remove").modal('toggle');
                $("#remove-confirm-modal-data").val(404);
            }
            console.log(confirmData);
        }, 500);
    }
});