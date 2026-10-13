let fried = document.getElementById("fc");
let fries = document.getElementById("fr");
let taco = document.getElementById("to");
let suchi = document.getElementById("su");
let burgo = document.getElementById("bu");
let pizza = document.getElementById("pi");

let restmessage = document.getElementById("message");
let micky = document.getElementById("type");

let customer = localStorage.getItem("custoName");

restmessage.textContent = "Welcome, " + customer;

let orders = [];

let orderList = document.getElementById("orderlist");

let total = 0;


function addorder(food, price) {
    let existingItem = orders.find(function(item) {
        return item.food === food;
    });

    if (existingItem) {
        existingItem.quantity++;

    } else {

        orders.push({
            food: food,
            price: price,
            quantity: 1
        });

    }

    displayOrders();
}



function displayOrders() {

    orderList.innerHTML = "";
    total = 0;

    orders.forEach(function(item, index) {
        let itemTotal = item.price * item.quantity;
        total = total + itemTotal;
        let li = document.createElement("li");

        li.innerHTML = item.food + " | " + item.price + " $ " + " x " + item.quantity;
        
        let minusButton = document.createElement("button");
        minusButton.textContent = "-";
        minusButton.type = "button";

        minusButton.addEventListener("click", function() {

            item.quantity--;

            if (item.quantity === 0) {
                orders.splice(index, 1);
            }

            displayOrders();

        });


        let plusButton = document.createElement("button");
        plusButton.textContent = "+";
        plusButton.type = "button";


        plusButton.addEventListener("click", function() {
            item.quantity++;
            displayOrders();

        });


        li.appendChild(minusButton);
        li.appendChild(plusButton);

        orderList.appendChild(li);

    });


    micky.textContent = "Total price: " + total + " $";

    localStorage.setItem("orders", JSON.stringify(orders));

    localStorage.setItem("total", total);

}



fried.addEventListener("click", function() {
    addorder("🍗 Fried Chicken", 40);
});


fries.addEventListener("click", function() {
    addorder("🍟 Fries", 20);
});


taco.addEventListener("click", function() {
    addorder("🌮 Taco", 50);
});


suchi.addEventListener("click", function() {
    addorder("🍣 Sushi", 60);
});


burgo.addEventListener("click", function() {
    addorder("🍔 Burger", 30);
});


pizza.addEventListener("click", function() {
    addorder("🍕 Pizza", 30);
});



let checkoutBtn = document.getElementById("checkout");
checkoutBtn.addEventListener("click", function() {

    if (orders.length === 0) {
        micky.textContent = "Please add some food first!";

        return;
    }

    window.location.href = "checkout.html";

});
