var totalItems;
var loc;


function showChange(cartTotal, totalCost) {
    cartTotal.innerHTML = totalItems;
    totalCost.innerHTML = "$" + (19.99 * totalItems).toFixed(2);
}

function radioClick() {
    if(totalItems > 0) {
        document.getElementById("purchase").style.display = "inline-block";
    }
}

window.addEventListener("load", function() {
    totalItems = 0;
    this.document.getElementById("remove").style.display = "none";
    this.document.getElementById("remove-all").style.display = "none";
    this.document.getElementById("purchase").style.display = "none";
    showChange(this.document.getElementById("cart-total"), this.document.getElementById("total-cost"));
});

document.getElementById("add").addEventListener("click", function() {
    document.getElementById("confirmation").innerHTML = "";
    totalItems += 1;
    document.getElementById("remove").style.display = "inline-block";
    document.getElementById("remove-all").style.display = "inline-block";
    if(document.getElementById("milwaukee").checked ||
       document.getElementById("new-york").checked ||
       document.getElementById("los-angeles").checked) {
        document.getElementById("purchase").style.display = "inline-block";
    }
    showChange(document.getElementById("cart-total"), document.getElementById("total-cost"));
});

document.getElementById("remove").addEventListener("click", function() {
    totalItems -= 1;
    if(totalItems === 0) {
        this.style.display = "none";
        document.getElementById("remove-all").style.display = "none";
        document.getElementById("purchase").style.display = "none";
    }
    showChange(document.getElementById("cart-total"), document.getElementById("total-cost"));
});

document.getElementById("remove-all").addEventListener("click", function() {
    totalItems = 0;
    this.style.display = "none";
    document.getElementById("remove").style.display = "none";
    document.getElementById("purchase").style.display = "none";
    showChange(document.getElementById("cart-total"), document.getElementById("total-cost"));
});

document.getElementById("milwaukee").addEventListener("click", function() {
    loc = "Milwaukee, Wisconsin";
    radioClick();
});

document.getElementById("new-york").addEventListener("click", function() {
    loc = "New York, NY";
    radioClick();
});

document.getElementById("los-angeles").addEventListener("click", function() {
    loc = "Los Angeles, California";
    radioClick();
});


document.getElementById("purchase").addEventListener("click", function() {
    document.getElementById("confirmation").innerHTML =
        "Thank you for your purchase! Your order of " + totalItems + " cheese sampler(s) " +
        "for $" + (19.99 * totalItems).toFixed(2) + " will be ready for pickup in our " + loc + " location by tomorrow! " +
        "Feel free to make another purchase if you'd like!"
    totalItems = 0;
    document.getElementById("remove").style.display = "none";
    document.getElementById("remove-all").style.display = "none";
    document.getElementById("purchase").style.display = "none";
    showChange(document.getElementById("cart-total"), document.getElementById("total-cost"));
});