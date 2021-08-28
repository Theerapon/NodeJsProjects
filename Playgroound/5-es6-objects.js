// Object property shorthand

const name = 'Fakie'
const userAge = 22

const user = {
    name: name,
    age: userAge,
    location: 'Thailand'
}

console.log(user)

// Object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 33
}

// const label = product.label
// const stock = product.stock


const transaction = (type, myProduct) => {
    const {
        label:productLabel, 
        stock:productStock, 
        rating:productRating, 
    } = myProduct

    console.log(productLabel)
    console.log(productStock)
    console.log(productRating)
}

transaction('order', product)