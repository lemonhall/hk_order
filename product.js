var kafka 			  = require('kafka-node');
var HighLevelProducer = kafka.HighLevelProducer;
var kclient			  = new kafka.Client("127.0.0.1:2181");
var producer 		  = new HighLevelProducer(kclient);

//1、topic：队列名称
//2、messages：消息

producer.on('ready', function () {
    setInterval(function(){

var order = {omsid:1111,buyer:1,products:[{sku:1,seller:1,price:3,amount:5},{sku:2,seller:1,price:2,amount:5},{sku:3,seller:2,price:2,amount:5},{sku:4,seller:2,price:2,amount:5},{sku:5,seller:2,price:2,amount:5},{sku:6,seller:3,price:2,amount:5}]};

    	producer.send( [ { topic:'test', messages : JSON.stringify(order) } ], function (err, data) {
	   		if(!err){
        		console.log(data);
			}else{
				console.log(err);
			}
    	});//producer.send....end....

    },100);//END OF set Interval
});
