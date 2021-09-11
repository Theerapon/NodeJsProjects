const doWorkCallback = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve([1, 4, 5])
        reject('This is my error!')
    }, 2000)
})

doWorkCallback.then((result) => {
    console.log('Success!', result)
}).catch((error) => {
    console.log('Error!', error)
})