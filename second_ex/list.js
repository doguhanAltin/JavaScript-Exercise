
let todolist= [];
JSON.parse(localStorage.getItem("items"))==null? todolist = [] : todolist =JSON.parse(localStorage.getItem("items"))
let btn = document.querySelector("#liveToastBtn")
let liste = document.querySelector("#list")

todolist.forEach((animal) => {
    let newli= document.createElement("li")
    newli.innerHTML=animal
    newli.id=animal
    let span= document.createElement("span")
    span.innerHTML="&times;"
    span.className="close"
    newli.appendChild(span)
    liste.appendChild(newli)
})
btn.addEventListener('click',submitted)
let  closebtns = document.getElementsByClassName("close");
function submitted(event){
    let userInput= document.querySelector("#task")
    if (userInput.value.trim().length ==0) {
        alert("Boş yapma")
        return "sa";
    }
    let newli= document.createElement("li")
    let span= document.createElement("span")
    span.innerHTML="&times;"
    span.className="close"
    todolist.unshift(userInput.value)
    localStorage.setItem("items",JSON.stringify(todolist))
    // newli.innerHTML=userInput.value
    // newli.id=userInput.value
    // newli.appendChild(span)
    // liste.insertBefore(newli, liste.firstChild);  
    closebtns = document.getElementsByClassName("close"); 
    location.reload();

}



var i;

for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function() {
    this.parentElement.style.display="none";
    todolist.splice(todolist.indexOf(this.parentElement.innerHTML),1)
    localStorage.setItem("items",JSON.stringify(todolist))

  });
}
