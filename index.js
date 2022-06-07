// Write your solution here!
//function index.js()
//beforeEachfunction () {
   // cats.length = 0;
   // cats.push("Milo", "Otis", "Garfield");
const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat() {
  cats.push('Ralph');
}
function destructivelyPrependCat(name) {
  cats.unshift('Bob');
}
function destructivelyRemoveLastCat() {
  cats.splice(-1);
}
function destructivelyRemoveFirstCat() {
  cats.splice(0, 1);
}
function appendCat(name) {
  const newcats = cats.slice();
  newcats.push('Broom');
  return newcats;
}
function prependCat(name) {
  const newcats = cats.slice();
  newcats.unshift('Arnold');
  return newcats;
}
function removeLastCat() {
  const newcats = cats.slice();
  newcats.splice(-1);
  return newcats;
}
function removeFirstCat() {
  const newcats = cats.slice();
  newcats.splice(0, 1);
  return newcats;
}