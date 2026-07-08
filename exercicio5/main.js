//const submitButton = document.querySelector('#submit-button');

//submitButton.addEventListener("click", function (e) {
    
    //console.log("clicked!");
//})
//Por padrão a apgina tenta enviar o formulário para algum lugar, entao a mensagem de "clicked" se esvai muito rapidamente.

//submitButton.addEventListener("click", function (e) {
    //e.preventDefault();

    //.log(e);
    //console.log("clicked!");
//});
//Agora a mensagem fica "salva" de forma estática na tela do console.

const submitButton = document.querySelector('#submit-button');
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const myForm = document.querySelector("#my-form");
const items = document.querySelector(".items");
const body = document.querySelector("#body");

submitButton.addEventListener("click", function (e) {
    e.preventDefault();

    const nameValue = nameInput.value;
    const emailValue = emailInput.value;

    if (nameValue === "" || emailValue == "" ) {
        alert("Please fill out all the fields!");
    }

      myForm.style.background = "blue";
      items.firstElementChild.textContent = nameValue;
      items.lastElementChild.textContent = emailValue;
      body.style.background = "grey";

});