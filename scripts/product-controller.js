const reviews = require("./review-controller")
const productsEl = document.getElementById("products")

const printToDom = (product) => {
	productsEl.innerHTML += `
        <img class="image" src="../img/${product.image}">
        <h1>Title: ${product.title}</h1>
        <h3>Description:${product.description}</h3>
        <h3>Quantity: ${product.quantity}</h3> 
        <div id="review_${product.id}">test</div>
        `
	console.log(product)
	reviews.printReviews(product)
}


module.exports = printToDom