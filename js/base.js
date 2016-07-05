$(function(){
//    左侧栏目点击后样式改变
    $(document).on("click",".menus .item-a",function(){
        var menusParent = $(this).parents(".menus").first();
//        console.log();
        menusParent.find(".items .item .item-a").each(function(index,ele){
//            console.log(ele);
            $(ele).removeClass("checked-menu");
        });
//        console.log($(menusParent))
        $(this).addClass("checked-menu");
    })
    
//    分页点击后,样式改变
    $(document).on("click",".pagination li .page-num",function(){
        var pageParent = $(this).parents(".pagination").first();
        pageParent.find("li .page-num").each(function(index,ele){
            $(ele).removeClass("page-checked-a");
        })
        $(this).addClass("page-checked-a");
    });
    
//    销售提成页面,切换标签的效果
    $(document).on("click", "#commission-nav-box li", function() {
        var navUl = $(this).parents("#commission-nav-box").first();
//        console.log(navUl.first());
        navUl.find("li").each(function(index, ele) {
//            console.log(ele);
            $(ele).removeClass("active");
        });
        $(this).addClass("active");
    })
})