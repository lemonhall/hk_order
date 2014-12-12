1、模块
npm install kafka-node --save
npm install thrift --save
npm install underscore --save

2、开始
npm i

3、JAVA
wget http://119.254.108.84:8080/jdk.tar.gz
tar zxvf jdk.tar.gz

sudo update-alternatives --install /usr/bin/java java /opt/jdk/bin/java 300
sudo update-alternatives --install /usr/bin/javac javac /opt/jdk/bin/javac 300
sudo update-alternatives --install /usr/bin/jar jar /opt/jdk/bin/jar 300
sudo update-alternatives --config  java

vim /etc/profile
export JAVA_HOME=/opt/jdk
export
CLASSPATH=.:$JAVA_HOME/jre/lib/rt.jar:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar

4、安装zookeeper
wget http://mirrors.hust.edu.cn/apache/zookeeper/zookeeper-3.4.6/zookeeper-3.4.6.tar.gz
mv zookeeper-3.4.6 zk
cd zk/conf
mv zoo_sample.cfg zoo.cfg
./zkServer.sh start

5、安装kafka
wget http://mirrors.hust.edu.cn/apache/kafka/0.8.1.1/kafka_2.9.2-0.8.1.1.tgz

启动kafka
bin/kafka-server-start.sh config/server.properties

创建topic
bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1
--partitions 1 --topic test


