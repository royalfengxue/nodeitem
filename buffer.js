/**
 * Created by dongyang on 2017.12.24.
 */
var buf=new Buffer(256);
len=buf.write('hello');
console.log(len);
console.log(buf.toString());