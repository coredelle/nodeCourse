const fs = require('fs');
// const book = {
//     title: 'back that thang up',
//     author: 'girl you look good'
// }
// 
// const bookJSON = JSON.stringify(book)
// 
// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.name);

var challengeBuffer = fs.readFileSync('1-json.json');
var challengeJSON = challengeBuffer.toString();
var data = JSON.parse(challengeJSON);

data.name = 'Coredelle';
data.age = '32';

fs.writeFileSync('1-json.json', JSON.stringify(data));

var buff = fs.readFileSync('1-json.json');
var buffJson = buff.toString();
const string = JSON.parse(buffJson);
console.log(string);
