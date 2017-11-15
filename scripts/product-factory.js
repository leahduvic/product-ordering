const idMaker = function* (startFrom = 0) {
	let id = 1

	while (true) {
		yield id + startFrom
		id++
	}
}

const idGenerator = idMaker()

const productFactory = (title, description, price, quantity, image, reviews) => {
	return Object.create(null, {
		"id": {
			value: idGenerator.next().value,
			enumerable: true
		},
		"title": {
			value: title
		},
		"description": {
			value: description
		},
		"price": {
			value: price
		},
		"quantity": {
			value: quantity
		},
		"image": {
			value: image
		},
		"reviews": {
			value: reviews
		}
	})
}

module.exports = productFactory