// Arrow Functions
// Arrow functions allow us to write shorter function syntax:


// Before:
hello = function() {
  console.log ("Hello World!");
}
hello();

hello = () => "Hello Woooooooorld!";
console.log (hello());

greet = () => {
    return "hii there , i wont greet you "
}

console.log(greet());


sum = (a,b,c) => a+b+c; 

console.log(sum(1,"56",8));