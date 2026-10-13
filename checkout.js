// Get saved orders

let orders = JSON.parse(localStorage.getItem("orders")) || [];
let total = localStorage.getItem("total") || 0;
let customer = localStorage.getItem("custoName");


let customerName = document.getElementById("customerName");
let checkoutList = document.getElementById("checkoutList");
let checkoutTotal = document.getElementById("checkoutTotal");
let checkoutForm = document.getElementById("checkoutForm");
let success = document.getElementById("success");

customerName.textContent = "Customer: " + customer;

orders.forEach(function(item) {

    let li = document.createElement("li");
    let itemTotal = item.price * item.quantity;

    li.textContent =
        item.food + " | " + item.price + " $ x " + item.quantity + " = " + itemTotal + " $";

    checkoutList.appendChild(li);

});



checkoutTotal.textContent = "Total: " + total + " $";


checkoutForm.addEventListener("submit", function(event) {

    event.preventDefault();


    let name = document.getElementById("fullName").value;

    let phone = document.getElementById("phone").value;

    let address = document.getElementById("address").value;

    let payment = document.getElementById("payment").value;


    success.textContent =
        "🎉 Thank you " +
        name +
        "! Your order has been completed successfully.";

});
