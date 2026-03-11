setTimeout(() => {
  console.log("hello");
}, 2000);
// setInterval(() => {
//   console.log("hello");
// }, 2000);

function ut() {
  const times = new Date().toLocaleTimeString();
  console.log(times);
}
setInterval(ut, 1000);
