
	var totalTrading,  //总交易量
    goodsDistribution = [], //货物分布
    goodsTrend1 = [], //主流货种趋势1
    goodsTrend2 = [], //主流货种趋势2
    goodsTrend3 = [], //主流货种趋势3
    transportOrder = [], //运输订单
    jingWeiDu = [] ,//经纬度
    liShiJiaoYiLiang = [] ,//历史交易量
    ships = [] , //运输船舶
    zhiShu = [] ,//指数
    price = [] //运输价格

	/************************数据库操作 begin************************/

    const DB_NAME = "bigdata";
    const TOTALTRADING = "totalTrading" ;//总交易量表
    const GOODSDISTRIBUTION = "goodsDistribution" ;//货种分布表
    const GOODSTREND1 = "goodsTrend1" ;//主流货种趋势1
    const GOODSTREND2 = "goodsTrend2" ;//主流货种趋势2
    const GOODSTREND3 = "goodsTrend3" ;//主流货种趋势3
    const TRANSORDER = "transOrder" ;//运输订单
    const JINGWEIDU = "jingweidu" ;//经纬度
    const LISHIJIAOYILIANG = "lishijiaoyiliang" ;//历史交易量
    const SHIPS = "ships" ;//船舶数据
    const ZHISHU = "zhishu" ;//指数数据
    const PRICE = "price" ;//运价价格

    var db ;


    // 连接数据库，没有就创建数据库
    var request = indexedDB.open(DB_NAME, 4);

    request.onsuccess = function(event){

        db = request.result;
        console.log( "success" );

        // add();
        // search();
        // deleteTable();
        //获取总交易量
        getTotalTrading();

        //获取货种分布
        getGoodsDistribution();

        //获取货种趋势1
        getGoodsTrend1();

        //获取货种趋势2
        getGoodsTrend2();

        //获取货种趋势3
        getGoodsTrend3();

        //获取运输订单
        getTransportOrder();

        //获取经纬度
        getJingWeiDu();

        //获取历史交易量
        getLiShiJiaoYiLiang();

        // 获取运输船舶
        getShips();

        //获取指数
        getZhiShu();

		//获取价格
        getPrice();

    }
    // 错误处理程序在这里。
    request.onerror = function(event) {
        console.log(event.target.error);
    };


    /**
     * 获取总交易量数据
     * @return {[type]} [description]
     */
    function getTotalTrading()
    {
    	var objectStore = db.transaction( TOTALTRADING , 'readonly' ).objectStore( TOTALTRADING );

	   	objectStore.openCursor().onsuccess = function (event) {
	     	var cursor = event.target.result;

	     	if (cursor) {

	     		totalTrading = cursor.value.amount

	     		//这里设置总交易量
	     		console.log( "总交易量" ,  totalTrading );

	       		// cursor.continue();
	    	} 
	    	else 
	    	{
	      		// console.log('没有更多数据了！');
	    	}
	  	};


    }


    /**
     * 获取货物分布
     * @return {[type]} [description]
     */
    function getGoodsDistribution()
    {
    	var objectStore = db.transaction( GOODSDISTRIBUTION , 'readonly' ).objectStore( GOODSDISTRIBUTION );

	   	objectStore.openCursor().onsuccess = function (event) {
	     	var cursor = event.target.result;

	     	if (cursor) {

	     		goodsDistribution.push( cursor.value );

	       		cursor.continue();
	    	} 
	    	else 
	    	{
	      		// console.log('没有更多数据了！');

	     		//这里设置货种分布数据
	     		console.log( "货种分布" , goodsDistribution );

	    	}
	  	};
    }



    /**
     * 获取主流货种趋势1
     * @return {[type]} [description]
     */
    function getGoodsTrend1()
    {
    	var objectStore = db.transaction( GOODSTREND1 , 'readonly' ).objectStore( GOODSTREND1 );

	   	objectStore.openCursor().onsuccess = function (event) {
	     	var cursor = event.target.result;

	     	if (cursor) {

	     		goodsTrend1.push( cursor.value );

	       		cursor.continue();
	    	} 
	    	else 
	    	{
	      		// console.log('没有更多数据了！');

	     		//这里设置货种趋势1
	     		
	     		console.log( "货种趋势1" , goodsTrend1 );

	    	}
	  	};
    }

    /**
     * 获取主流货种趋势2
     * @return {[type]} [description]
     */
    function getGoodsTrend2()
    {
    	var objectStore = db.transaction( GOODSTREND2 , 'readonly' ).objectStore( GOODSTREND2 );

	   	objectStore.openCursor().onsuccess = function (event) {
	     	var cursor = event.target.result;

	     	if (cursor) {

	     		goodsTrend2.push( cursor.value );

	       		cursor.continue();
	    	} 
	    	else 
	    	{
	      		// console.log('没有更多数据了！');

	     		//这里设置货种趋势2
	     		
	     		console.log( "货种趋势2" , goodsTrend2 );

	    	}
	  	};
    }

    /**
     * 获取主流货种趋势3
     * @return {[type]} [description]
     */
    function getGoodsTrend3()
    {
    	var objectStore = db.transaction( GOODSTREND3 , 'readonly' ).objectStore( GOODSTREND3 );

	   	objectStore.openCursor().onsuccess = function (event) {
	     	var cursor = event.target.result;

	     	if (cursor) {

	     		goodsTrend3.push( cursor.value );

	       		cursor.continue();
	    	} 
	    	else 
	    	{
	      		// console.log('没有更多数据了！');

	     		//这里设置货种趋势3
	     		
	     		console.log( "货种趋势3" , goodsTrend3 );

	    	}
	  	};
    }


    /**
     * 获取运输订单
     * @return {[type]} [description]
     */
    function getTransportOrder()
    {
    	var objectStore = db.transaction( TRANSORDER , 'readonly' ).objectStore( TRANSORDER );

	   	objectStore.openCursor().onsuccess = function (event) {
	     	var cursor = event.target.result;

	     	if (cursor) {

	     		transportOrder.push( cursor.value );

	       		cursor.continue();
	    	} 
	    	else 
	    	{
	      		// console.log('没有更多数据了！');

	     		//这里设置运输订单
	     		
	     		console.log( "运输订单" , transportOrder );

	    	}
	  	};
    }


    /**
     * 获取经纬度
     * @return {[type]} [description]
     */
    function getJingWeiDu()
    {
    	var objectStore = db.transaction( JINGWEIDU , 'readonly' ).objectStore( JINGWEIDU );

	   	objectStore.openCursor().onsuccess = function (event) {
	     	var cursor = event.target.result;

	     	if (cursor) {

	     		jingWeiDu.push( cursor.value );

	       		cursor.continue();
	    	} 
	    	else 
	    	{
	      		// console.log('没有更多数据了！');

	     		//这里设置经纬度
	     		
	     		console.log( "经纬度" , jingWeiDu );

	    	}
	  	};
    }

    /**
     * 获取历史交易量
     * @return {[type]} [description]
     */
    function getLiShiJiaoYiLiang()
    {
    	var objectStore = db.transaction( LISHIJIAOYILIANG , 'readonly' ).objectStore( LISHIJIAOYILIANG );

	   	objectStore.openCursor().onsuccess = function (event) {
	     	var cursor = event.target.result;

	     	if (cursor) {

	     		liShiJiaoYiLiang.push( cursor.value );

	       		cursor.continue();
	    	} 
	    	else 
	    	{
	      		// console.log('没有更多数据了！');

	     		//这里设置历史交易量
	     		
	     		console.log( "历史交易量" , liShiJiaoYiLiang );

	    	}
	  	};
    }

    /**
     * 获取运输船舶
     * @return {[type]} [description]
     */
    function getShips()
    {
    	var objectStore = db.transaction( SHIPS , 'readonly' ).objectStore( SHIPS );

	   	objectStore.openCursor().onsuccess = function (event) {
	     	var cursor = event.target.result;

	     	if (cursor) {

	     		ships.push( cursor.value );

	       		cursor.continue();
	    	} 
	    	else 
	    	{
	      		// console.log('没有更多数据了！');

	     		//这里设置运输船舶
	     		
	     		console.log( "运输船舶" , ships );

	    	}
	  	};
    }

    /**
     * 获取指数
     * @return {[type]} [description]
     */
    function getZhiShu()
    {
    	var objectStore = db.transaction( ZHISHU , 'readonly' ).objectStore( ZHISHU );

	   	objectStore.openCursor().onsuccess = function (event) {
	     	var cursor = event.target.result;

	     	if (cursor) {

	     		zhiShu.push( cursor.value );

	       		cursor.continue();
	    	} 
	    	else 
	    	{
	      		// console.log('没有更多数据了！');

	     		//这里设置指数
	     		
	     		console.log( "指数" , zhiShu );

	    	}
	  	};
    }

    /**
     * 获取价格
     * @return {[type]} [description]
     */
    function getPrice()
    {
    	var objectStore = db.transaction( PRICE , 'readonly' ).objectStore( PRICE );

	   	objectStore.openCursor().onsuccess = function (event) {
	     	var cursor = event.target.result;

	     	if (cursor) {

	     		price.push( cursor.value );

	       		cursor.continue();
	    	} 
	    	else 
	    	{
	      		// console.log('没有更多数据了！');

	     		//这里设置价格
	     		
	     		console.log( "价格" , price );

	    	}
	  	};
    }




