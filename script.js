function goToProducts(){

    window.location.href = "products.html";

}


let total = 0;

function addToCart(product, price, qtyId){

    let cartItems =
    document.getElementById("cartItems");

    let totalPrice =
    document.getElementById("total");

    let quantity =
    document.getElementById(qtyId).value;

    let itemTotal = price * quantity;

    let li =
    document.createElement("li");

    li.innerHTML =
    product +
    " x " +
    quantity +
    " = " +
    itemTotal +
    " SAR";

    cartItems.appendChild(li);

    total = total + itemTotal;

    totalPrice.innerHTML = total;

}

function checkout(){

    if(total === 0){

        alert("Your cart is empty!");

    }

    else{


        let deliverySection =
            document.getElementById("deliverySection");

        deliverySection.style.display = "block";


        document.getElementById("finalBill")
        .innerHTML = total;


        deliverySection.scrollIntoView({

            behavior: "smooth"

        });

    }

}


let form = document.getElementById("contactForm");

if(form){

    form.addEventListener("submit", function(event){

        event.preventDefault();

        alert("Thank you for contacting FreshMart!");

        form.reset();

    });

}


let deliveryForm =
    document.getElementById("deliveryForm");

if(deliveryForm){

    deliveryForm.addEventListener("submit",

    function(event){

        event.preventDefault();

        alert("Order placed successfully!");


        document.getElementById("cartItems")
        .innerHTML = "";

        total = 0;

        document.getElementById("total")
        .innerHTML = total;


        document.getElementById("deliverySection")
        .style.display = "none";

        deliveryForm.reset();

    });

}

let paymentMethod =
document.getElementById("paymentMethod");

if(paymentMethod){

    paymentMethod.addEventListener("change",

    function(){

        let cardDetails =
        document.getElementById("cardDetails");

        if(paymentMethod.value === "card"){

            cardDetails.style.display = "block";

        }

        else{

            cardDetails.style.display = "none";

        }

    });

}
