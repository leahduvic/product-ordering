const reviewsEl = document.getElementById("products")

const addReview = (review, product) => {
	product.reviews.push(review)
	printReviews(product)
}

const printReviews = (product) => {
	const El = document.getElementById(`review_${product.id}`)
	El.innerHTML = ""    
	product["reviews"].forEach(review => {
		El.innerHTML += `
        <div id="review_${product.id}">
            <p>Review: ${review}</p>
        </div>
        `
	})
}

module.exports = {addReview, printReviews}
