var kafka = require('kafka-node'),
    Consumer = kafka.Consumer,
    client = new kafka.Client("127.0.0.1:2181"),
    consumer = new Consumer(
        client,
        [
            { topic: 'test', partition: 0 }
        ],
        {
            autoCommit: true
        }
    );

//第二部分，链接Hbase
var thrift            =  require("thrift");
var Hbase             =  require("./node_modules/thrift1/Hbase.js");
var HbaseTypes        =  require("./node_modules/thrift1/hbase1_types.js");


var _     = require("underscore");

consumer.on('message', function (message) {
	var order = JSON.parse(message.value);

	//商家订单ID发生器，发生的时候应该根据一定的方式来生成商家的Id
	var splite_so = _.groupBy(order.products, function(product){ 
					return product.seller;
				});

	//之后将客户订单信息发给一个worker去存储，将拆好的细节订单，加上oms的主订单id，和生成好的商家订单Id发给另外一个东西去存储
    console.log(splite_so);

	//存储好之后，做第三次拆单，带上商家Id，和主订单号Id
	
});
