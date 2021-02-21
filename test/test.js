// // 

// const { stdin } = require("process");
// var readline = require("readline");
// var suri = readline.createInterface({
// input: process.stdin,
// output:process.stdout
// });

// suri.question('Enter your name ', (answer) => {
//     console.log(answer);
//     suri.question('Enter your DOB', (y) => {
//         console.log(y);
//         suri.close();
//     });
// });
// finding factorial
// var readline = require("readline");
// var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question('Enter the number ', (n) => {
//     var d = 1;
//     for (var i =1; i<=n ; i++)
//     {
//         d =d*i;
//     }
//     console.log(d);
//     rl.close();
// });

// var readline = require("readline");
// var rl = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// });
// rl.on('line', () => {
//     console.log();
// });

// var fs = require('fs');
// var info = fs.readFileSync('testing.txt');
// console.log(info.toString());

// var fs = require ('fs');
// fs.readFile('testing.txt', function(err, data){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data.toString());
//     }
//     setTimeout(() => {
//         console.log("2seconsds");
//     }, 2000);
// });
// console.log("suri");

// function display (name) {
//     return 'Hello ' + name + '' + !!!
// }
// console.log(display('Suri'));

// var student = {
//     name: 'Suri',
//     number:'34',
//     email: 'ss@gmail.com'
// };
// console.log(student.number);

// var fs = require('fs');
// fs.readFile('./testing.txt',  (err, data) => {
// if (!err) {
//     console.log(data.toString());
// }
// });

// var fs = require('fs');
// fs.writeFile('./testing.txt', 'Praise the Lord Jesus Christ', (err) => {
//     if (!err) {
//         fs.readFile('./testing.txt', (err,data) => {
//             console.log(data.toString());
//         });
//     }
// });

// var http = require('http');
// var server = http.createServer(function (req, res){
// res.end('your server');
// });
// server.listen(3000, 'localhost', () => {
//     console.log("your server ready");
// });



