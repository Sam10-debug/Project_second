const hamburger=document.querySelector("#hamburger")
const nav= document.querySelector("aside")
hamburger.addEventListener("click",showNav)

function showNav(){
	nav.classList.toggle("active")
}