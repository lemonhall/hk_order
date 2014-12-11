//第一部分，队列连接器
var kafka 			  = require('kafka-node');
var HighLevelProducer = kafka.HighLevelProducer;
var kclient			  = new kafka.Client("127.0.0.1:2181");
var producer 		  = new HighLevelProducer(kclient);

//第二部分，链接Hbase
var thrift 			  =  require("thrift");
var Hbase			  =  require("./node_modules/thrift1/Hbase.js");
var HbaseTypes 		  =  require("./node_modules/thrift1/hbase1_types.js");

//第三部分，拆单
var _            	  = require("underscore");




