//1. What’s the result of executing this code and why.
// function test() {
//   let a;
//   console.log(a);
//   console.log(foo());

//   a = 1;
//   function foo() {
//     return 2;
//   }
// }
// test();
// It will return undefined and 2. The function test will return a value of the function foo, that inside it.

//2. What is result?
// let a = 1;

// function someFunction(number) {
//   function otherFunction(input) {
//     return a;
//   }

//   a = 5;

//   return otherFunction;
// }

// const firstResult = someFunction(9);
// const result = firstResult(2);
//Result will be 5

//3.What is the result of the following code? Explain your answer.
let fullname = "John Doe";
const obj = {
  fullname: "Colin Ihrig",
  prop: {
    fullname: "Aurelio De Rosa",
    getFullname: function () {
      return this.fullname;
    },
  },
};

console.log(obj.prop.getFullname());

const test = obj.prop.getFullname;

console.log(test());
//the result is Aurelio De Rosa and undefined.  The Aurelio De Rosa because return this.fullname; undefined because prop is an object inside the object and test is a global variable and it can't access the locale scope (inside the prop)(not sure).

//4. What will you see in the console for the following example?
let a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);

// I will see 1. Because console log the 'a' var. and 'a' var. is = to 1
