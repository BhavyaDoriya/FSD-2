// Callback
function main(cb) {
  console.log("Operation 1");
  setTimeout(() => cb("Operation end"), 2000);
  console.log("Operation 2");
}
function fun(result) {
  console.log("final " + result);
}
main(fun);
