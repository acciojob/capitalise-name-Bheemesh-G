//your JS code here. If required.

const input = document.getElementById("#fname");

input.addEventListner('blur',()=>{
	input.value = input.value.toUpperCase();
});