// regular function
// const square = function (x) {
//     return x * x
// }

// arrow function
// const square = (x) => {
//     return x * x
// }
// const square = (x) => { x * x }

// console.log(squares(3))

const event = {
    name: 'Birthday',
    guestList: ['Andrew', 'John', 'Fakie'],
    printGuestList() { 
        console.log('Gues list for ' + this.name)
        this.guestList.forEach((guest) => { 
            console.log(guest + ' is attending ' + this.name) 
        })
    }
}

event.printGuestList()