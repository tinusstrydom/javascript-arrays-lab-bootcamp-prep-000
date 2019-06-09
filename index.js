var kittens = ["Milo","Otis","Garfield"]; //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}
function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}
function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}
function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}
function appendKitten(name){
  kittens = [...kittens, name];
  return kittens;
}
function prependKitten(name){
  kittens = [name, ...kittens];
  return kittens;
}
function removeLastKitten(){
  kittens = kittens.slice(1);
  return kittens;
}
function removeFirstKitten(){
  kittens.slice(1);
  return kittens;
}
