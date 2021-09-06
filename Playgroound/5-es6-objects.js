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


const transaction = (type, { label = 'Unknown', stock = 0 } = {}) => {

    console.log(type)
    console.log(label)
    console.log(stock)
}

transaction('order')