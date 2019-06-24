// let mustang = {
//     color: "Midnight BLue",
//     year: 1976,
//     length: 120,
//     width: 62,
//     height: 47
// }

// let mustangKeys = []
// for( let foo in mustang) {          //foo is the key inside onject
//     // console.log(mustang[foo])
//     mustangKeys.push(foo)
// }

// // The above is the same as this
// let mustangKeysNew = Object.keys(mustang)

// // Access just values and put into array
// let mustangValues = Object.values(mustang)

// // Access key and values in the object and put into nested array
// let mustangProps = Object.entries(mustang)

// for( let foo of mustangKeysNew) {
//     console.log(foo)
// }


const allCars = [
    {
        model: "Mustang",
        color: "Midnight Blue",
        year: 1976,
        length: 120,
        width: 62,
        height: 47
    },
    {
        model: "Xterra",
        color: "Forest Green",
        year: 2011,
        length: 144,
        width: 71,
        height: 55
    },
    {
        model: "Thunderbird",
        color: "Red",
        year: 2005,
        length: 115,
        width: 58,
        height: 42
    },
    {
        model: "Suburban",
        color: "Grey",
        year: 2015,
        length: 149,
        width: 73,
        height: 58
    }
]

const outputElement = document.querySelector("#app")

// Iterate the array of cars. Individual objects stored in `car`.
allCars.forEach(car => {

    // Iterate all of the values of the current car
    for (const value of Object.values(car)) {
        outputElement.innerHTML += `<div>${value}</div>`
    }
})


// Lightning Exercise 1: Create an object that represents a bill from your doctor's office. It should have the following properties: officeName, streetAddress, doctorName, patientName, visitDate, amountBilled, dueDate. You provide example values for each one.
const dateVisited = "visitDate"
const owed = "amountBilled"
const patient = "patientName"

let bill = {
    officeName: "TriStar",
    streetAddress: "100 Milky Way Ave",
    doctorName: "Dr. Smith",
    patientName: "Gretchen",
    visitDate: "06/20/2019",
    amountBilled: 86.49,
    dueDate: "07/20/2019"
}
// Lightning Exercise 2: Copy the code below and paste it above your object.
// const dateVisited = "visitDate"
// const owed = "amountBilled"
// const patient = "patientName"

// Use square bracket notation to output the value of those three properties to the console in Chrome.
console.log(bill[dateVisited])
console.log(bill[owed])
console.log(bill[patient])

// Lightning Exercise 3: Use Object.values() to output all the property values to the console in Chrome.
let billObj = Object.values(bill)
console.log(billObj)

const firstCar = allCars[0]

// Now iterate its keys
outputElement.innerHTML += "<h1>Properties</h1>"
for (const key of Object.keys(firstCar)) {
  outputElement.innerHTML += `<div>${key}</div>`
}

// Iterate the array of cars. Individual objects stored in `car`.
outputElement.innerHTML += "<h1>Car List</h1>"
allCars.forEach(car => {

    // Iterate all of the values of the current car
    for (const value of Object.values(car)) {
      outputElement.innerHTML += `<div>${value}</div>`
    }
})


// Lightning Exercise 1: Output all of the key names from your doctor's office bill to the console in Chrome.
let billKeys = Object.keys(bill)
console.log(billKeys)

// Lightning Exercise 2: Output all of the key names from your doctor's office bill to the DOM inside a parent <section> element. Wrap each one in a <span> element.
outputElement.innerHTML += "<h1>Bill Info</h1>"
for( key of billKeys) {
    outputElement.innerHTML += `
    <span>
        <section>${key}</section>
    </span>
    `
}
