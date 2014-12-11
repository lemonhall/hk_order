var kafka 			  = require('kafka-node');
var HighLevelProducer = kafka.HighLevelProducer;
var kclient			  = new kafka.Client("127.0.0.1:2181");
var producer 		  = new HighLevelProducer(kclient);

//1、topic：队列名称
//2、messages：消息

producer.on('ready', function () {
    setInterval(function(){
    	producer.send( [ { topic:'test', messages : "fly me to the moon" } ], function (err, data) {
	   	if(!err){
        		console.log(data);
		}else{
			console.log(err);
		}
	
    	});
    },10);
});
