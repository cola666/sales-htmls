var demo = new Object();

$(function() {
//    demo.addHtml('./sales.html', 'main-container');
//    加载订单页面的监听事件
    $(document).on("click", "[data-refresh-page='order']", function() {
        demo.addHtml('./order.html', 'main-container');
    });

    //    加载业绩页面的监听事件
    $(document).on("click", "[data-refresh-page='achievement']", function() {
        demo.addHtml('./achi_fgs.html', 'main-container');
    });

    //    加载销售管理页面的监听事件
    $(document).on("click", "[data-refresh-page='sales']", function() {
        demo.addHtml('./sales.html', 'main-container');
    });

    //    加载角色页面的监听事件
    $(document).on("click", "[data-refresh-page='roles']", function() {
        demo.addHtml('./roles.html', 'main-container');
    });

    //销售管理中,从分公司加载销售信息的监听事件
    $(document).on("click", "[data-refresh-item='sales']", function() {
        demo.addHtml('./sales_sales.html', 'sales-sales-box');
    });

    //销售管理中,从销售加载代理人信息的监听事件
    $(document).on("click", "[data-refresh-item='act']", function() {
        demo.addHtml('./sales_act.html', 'sales-act-box');
    });
    
    //销售管理页面,打开添加分公司模态框的监听事件
    $(document).on('click', '[data-modal="addFgs"]', function() {
        $('#addFgsModal').modal('toggle');
    });
    
    
     //销售管理页面,打开添加销售员模态框的监听事件
    $(document).on('click', '[data-modal="addsale"]', function() {
        //console.log('aaaaaaaaaaaaaaaa');
        $('#addsales').modal('toggle');
    });

    
    
     //销售管理页面,打开添加代理人模态框的监听事件
    $(document).on('click', '[data-modal="adddlr"]', function() {
        console.log('aaaaaaaaaaaaaaaa');
        $('#adddlr').modal('toggle');
    });
    
    
    
    
    
    
    
    
    //角色管理中,为分公司加载其下销售的方法
    $(document).on("click","[data-refresh-item='fgs']",function(){
        $(this).nextAll(".users-role-inner-dl").first().html('<dd><i class="icon icon-sanjiaoyou users-item-i" data-refresh-item="xs"></i><a>张铁蛋</a><dl class="users-role-inner-dl"></dd><dd><i class="icon icon-sanjiaoyou users-item-i" data-refresh-item="xs"></i><a>张铁蛋1</a><dl class="users-role-inner-dl"></dd>')
        $(this).removeClass('icon-sanjiaoyou').addClass('icon-sanjiaoxia');
    });
    //角色管理中,为销售加载代理人的方法---未完善
    $(document).on("click","[data-refresh-item='xs']",function(){
        $(this).nextAll(".users-role-inner-dl").first().html('<dd><a>代理人2</a></dd><dd><a>代理人2</a></dd>');
        $(this).removeClass('icon-sanjiaoyou').addClass('icon-sanjiaoxia');
    });

});

demo.addHtml = function(sourceUrl, targetId) {
    $.ajax({
        url: sourceUrl,
        type: 'GET',
        data: {
            // _id: user_id
        },
        async: false,
        //- cache: false,
        //- contentType: false,
        //- processData: false,
        success: function(data) {
            //				 console.log(data);
            $("#" + targetId).html(data);
            //				cb(data);
        },
        error: function() {
            console.log('加载页面出错');
        }
    });
}