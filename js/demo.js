$(function(){
    $(document).on("click","[data-refresh-page='order']",function(){
        $.ajax({
			url: './order.html',
			type: 'GET',
			data: {
				// _id: user_id
			},
			async: false,
			//- cache: false,
			//- contentType: false,
			//- processData: false,
			success: function(data) {
				 console.log(data);
            $("#main").html(data);
//				cb(data);
			},
			error: function() {
				console.log('加载页面出错');
			}
		});
        console.log("aaaaaaaa");
    })
})