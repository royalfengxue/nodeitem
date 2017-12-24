/**
 * Created by dongyang on 2017.12.24.
 */
var fs=require('fs');
// var read=fs.createReadStream('G:/A/1.mp3');
// var write=fs.createWriteStream('G:/B/1.mp3');
// read.pipe(write);
// console.log('完毕');
var zlib=require('zlib');
// fs.createReadStream('G:/A/1.mp3').pipe(zlib.createGzip()).pipe(fs.createWriteStream('G:/B/1.mp3.zip'));
// console.log('压缩结束');
fs.createReadStream('G:/B/1.mp3.zip').pipe(zlib.createGunzip()).pipe(fs.createWriteStream('G:/A/1.mp3'));
console.log('解压成功');