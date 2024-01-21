const el1 = document.getElementById('root');
console.log(el1); // 👉️ div#box

if (el1 !== null) {
  // 👇️ this runs
  console.log('The element exists in the DOM');
} else {
  console.log('The element does NOT exist in the DOM');
}