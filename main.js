let cutie = document.getElementById("name")
let custo = document.getElementById("cust")


custo.addEventListener("click", function(event) {
    event.preventDefault()
    localStorage.setItem("custoName", cutie.value);    
    window.location.href = "order.html";
})
