//your JS code here. If required.

const input = document.getElementById("fname");

input.addEventListener('blur',()=>{
	input.value = input.value.toUpperCase();
});