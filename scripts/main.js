const productFactory = require("./product-factory")
const printToDom = require("./product-controller")
const reviews = require("./review-controller")
const reviewList = require("./review-factory")

const elvisMug = productFactory("Elvis Mug", "16oz", "$15.00", 10, "elvis.jpg", reviewList.elvisMugReviews)
const beatlesMug = productFactory("Beatles Mug", "10oz", "$10.00", 5, "beatles.jpg", reviewList.beatlesMugReviews)
const codingMug = productFactory("Code Mug", "16oz", "$12.00", 4, "coding.jpg", reviewList.codingMugReviews)


printToDom(elvisMug)
reviews.addReview("so great!", elvisMug)

printToDom(beatlesMug)
reviews.addReview("kick ass!", beatlesMug)

printToDom(codingMug)
reviews.addReview("kick ass!", codingMug)




