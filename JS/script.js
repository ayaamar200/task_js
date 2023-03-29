var AllProducts = document.querySelectorAll("#product-item button")
var div = document.querySelector(".products-price")
var noOfItems = document.querySelector(".products-price button")
var price = document.querySelector(".products-price .totalprice")
var span = document.querySelector(".totalprice span")
var totalPrice = 0
var x = 0
AllProducts.forEach(function (item) {
    item.onclick = function () {
        div.style.display = "block"
        totalPrice += parseInt(item.getAttribute("price"))
        noOfItems.innerHTML = ++x
        if (noOfItems.innerHTML != "") {
            noOfItems.style.display = "block"

        }
    }
})

noOfItems.onclick = function () {
    price.style.display = "block"
    span.innerHTML = "Total Price =  $" + totalPrice

}