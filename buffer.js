/**
 * Created by dongyang on 2017.12.24.
 */
// var buf=new Buffer(12);
// len=buf.write('hello');
// console.log(len);
// console.log(buf.toString());
// var json=buf.toJSON();
// console.log(json);
// var buf1=new Buffer('hello');
// var buf2=new Buffer('world');
// var buf3=Buffer.concat([buf1,buf2]);
// console.log(buf3.toString());
// var res=buf1.compare(buf2);
// console.log(res);
// if(res==0){
//     console.log('相等');
// }else {
//     console.log('不相等');
// }
var buf1=new Buffer('hello');
var buf2=new Buffer(5);
buf1.copy(buf2);
console.log(buf2.toString());
