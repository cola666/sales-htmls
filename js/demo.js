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
//				 console.log(data);
            $("#main-container").html(data);
//				cb(data);
			},
			error: function() {
				console.log('加载页面出错');
			}
		});
//        console.log("aaaaaaaa");
    });

    $(document).on("click","[data-refresh-page='achievement']",function(){
        $.ajax({
			url: './achi_fgs.html',
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
            $("#main-container").html(data);
//				cb(data);
			},
			error: function() {
				console.log('加载页面出错');
			}
		});
//        console.log("aaaaaaaa");
    });
    
    $(document).on("click","[data-refresh-page='sales']",function(){
        $.ajax({
			url: './sales.html',
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
            $("#main-container").html(data);
//				cb(data);
			},
			error: function() {
				console.log('加载页面出错');
			}
		});
//        console.log("aaaaaaaa");
    });

    $(document).on("click","[data-refresh-item='sales']",function(){
        $.ajax({
			url: './sales_sales.html',
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
            $("#sales-sales-box").html(data);
//				cb(data);
			},
			error: function() {
				console.log('加载页面出错');
			}
		});
//        console.log("aaaaaaaa");
    });

    $(document).on("click","[data-refresh-item='act']",function(){
        $.ajax({
			url: './sales_act.html',
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
            $("#sales-act-box").html(data);
//				cb(data);
			},
			error: function() {
				console.log('加载页面出错');
			}
		});
//        console.log("aaaaaaaa");
    });
})