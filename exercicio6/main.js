const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const submitButton = document.querySelector("#submit-button");
const messagePlace = document.querySelector(".msg");
const items = document.querySelector(".items");

submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    const nameValue = nameInput.value;
    const emailValue = emailInput.value;

    if (nameValue === "" || emailValue === "") {
     messagePlace.textContent = "Please fill out the fields";
     messagePlace.classList = "error";

     setTimeout(() => {
        messagePlace.textContent = "";
        messagePlace.classList = "";
        
     }, 3000);
     return;

    }
    
    const li = document.createElement("li");
    li.classList = "item";
    li.innerHTML = `Nome:${nameValue},<br />Email: ${emailValue}`;
  
    items.appendChild(li);
    nameInput.value = "";
    emailInput.value = "";

});
//"classList" me dá a opção de acessar qualquer classe modifiicada no CSS.
// "const li = document.createElement("li");
    //li.classList = "item";
   // li.textContent = `Nome: ${nameValue}, Email: ${emailValue}`;" SEM QUEBRAR LINHA NO FORMULARIO.