'use strict';
let buttons = document.querySelectorAll(".show-modal")
let modal = document.querySelector(".modal")
let overlay = document.querySelector(".overlay")
let closeModal = document.querySelector(".close-modal")
for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        modal.classList.remove("hidden")
        overlay.classList.remove("hidden")
    })
}
closeModal.addEventListener("click",function(){
    modal.classList.add("hidden")
    overlay.classList.add("hidden")
})