$(function(){
    console.log('aa');
    $(document).on("click",".menus .item-a",function(){
        var menusParent = $(this).parents(".menus").first();
        console.log();
        menusParent.find(".items .item .item-a").each(function(index,ele){
//            console.log(ele);
            $(ele).removeClass("checked-menu");
        });
//        console.log($(menusParent))
        $(this).addClass("checked-menu");
    })
})