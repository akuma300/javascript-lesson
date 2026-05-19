//q1
let nickname ='蓮尾 憲治';
let age =28;

console.log('私のニックネームは' + nickname + 'です。年齢は' + age + 'です');

//q2
let languages =['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];

console.log(`私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`)

//q3
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(user.age);
//q4
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

console.log(playerList[1].favorites[1]);

//q5
console.log((playerList[0].age + playerList[1].age + playerList[2].age) / 3);

//q6
function sayHello(){
  console.log('Hello');
}
sayHello();

const sayWorld = function(){
  console.log('World');
}
sayWorld();

//q7
user.birthday ='2000-09-27';
user.sayHello = function() {
  console.log('Hello');
}

user.sayHello();

//q8
let calc = {};

calc.add = function(x, y){
  console.log(x + y);
}

calc.add(5,2);

calc.subtract = function(x, y){
  console.log(x - y);
}

calc.subtract(13,3);

calc.multiply = function(x, y){
  console.log(x * y);
}

calc.multiply(7,7);

calc.divide = function(x, y){
  console.log(x / y);
}

calc.divide(15,3);

//q9
function remainder(x,y){
  let number = x % y
  return number;
}

remainder(5,3)
console.log(5 +'を' + 3 + 'で割った余りは' + remainder(5,3) + 'です' );

//q10
function foo() {
  let x = 1;
}
console.log(x);
//JavaScriptでは、関数の中で変更した変数の値を、関数の外で参照することができない(スコープの有効範囲外になる)ためエラーが出力される。