// //LIGHTNING EXERCISE
// var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

// // Sort the numbers in descending order (10, 9, 8, 7, etc).
// let descend = integers.sort( (a, b) => {
//     return b - a
// })
// console.log(descend)

// // Remove any integers greater than 19.
// let biggerNum = integers.filter( num => num <= 19)
// console.log(biggerNum)

// // Multiply each remaining number by 1.5 and then substract 1.
// let mult = biggerNum.map( num => num * 1.5 - 1)
// console.log(mult)

// // Then output (either in the DOM or the console) the sum of all the resulting numbers.
// let sum = mult.reduce( (a, b) => {
//     return a + b
// })
// console.log(sum)

// //DOES SAME AS ABOVE ^^^^^^^^^^^^^^
// let chainResults = integers
// .sort( (a, b) => b - a)
// .filter( num => num <= 19)
// .map( num => num * 1.5 - 1)
// .reduce( (a, b) => a + b)

// console.log(chainResults)

// // // CLASS LIVECODE







// let nums = [1,2,3,4,5]
// let num = nums.pop()
// let otherNum = nums[3]

// JOIN
// let numstring = nums.join(' ')

// SPLICE
// let months = ['Jan', 'March', 'April', 'June']
// months.splice(1, 0, 'Feb')

// SORT <-- optionally takes a function as an arg
// let numArr = [2,3,5,1,9,6]
// let orgNums = numArr.sort()

// let bigNums = [1,6,10,234,9,3]
// let expected = bigNums.sort( (current, next) => {
//     return current - next
// })
// console.log(expected)

// let people = [
// {
//     name: "Fred",
//     age: 90
// },
// {
//     name: "Wilma",
//     age: 88
// },
// {
//     name: "Fred",
//     age: 4
// }
// ]
// let myPerson = people.find ( person => person.name === "Fred")  //finds first or only item in array that meets condition

// let freds = []
// people.forEach( person => {
//     if(person.name === "Fred") {
//         freds.push(person)
//     }
// })

// FIND <-- takes function as an arg
// let smallNum = bigNums.find( num => num < 250 && num > 20)

// Creating new arrys from existing arrays. Very cool
// FILTER
// let onlyFreds = people.filter( person => person.name === "Fred")

// let freddsOnly = []
// for( let i = 0; i <people.length; i++) {       //DOES SAME AS ABOVE
//     if (people[i].name === "Fred") {
//         freddsOnly.push(people[i])
//     }
// }

// // MAP <-- mutate values in array and add to new array
// let doubles = numArr.map( num => num * 2)
// console.log(doubles)

// Combining array values into one
// REDUCE
// let total = numArr.reduce( (current, next) => {
//     return current+ next
// })
// console.log(total)

// let dataArr = [
//     {
//       country: 'China',
//       pop: 1409517397,
//     },
//     {
//       country: 'India',
//       pop: 1339180127,
//     },
//     {
//       country: 'USA',
//       pop: 324459463,
//     },
//     {
//       country: 'Indonesia',
//       pop: 263991379
//     }
//   ]

//   let population = dataArr.reduce( (curr, next) => {            //starts at the 0 (curr) and moves on to China (next.pop)
//       return curr + next.pop
//   }, 0)



// const businesses = [
//     {
//         purchasingAgent: { nameLast: "Kirlin", nameFirst: "Kristy" },
//         phoneWork: "089.129.2290 x9400",
//         orders: [7826.96, 8323.11, 5756.28, 6308.42, 5622.28],
//         companyName: "Care-media",
//         companyIndustry: "Education",
//         addressZipCode: "56839",
//         addressStateCode: "WI",
//         addressFullStreet: "8417 Franklin Court Tunnel",
//         addressCity: "Mouthcard"
//     },
//     {
//         purchasingAgent: { nameLast: "Steuber", nameFirst: "Kamron" },
//         phoneWork: "(833) 222-7579 x5874",
//         orders: [6252.5, 9769.02, 9521.17, 7994.05, 7945.93],
//         companyName: "Stanholding",
//         companyIndustry: "Hospitality",
//         addressZipCode: "09705",
//         addressStateCode: "NY",
//         addressFullStreet: "2889 Fawn Court Garden",
//         addressCity: "Fellsmere"
//     },
//     {
//         purchasingAgent: { nameLast: "Gutkowski", nameFirst: "Kaylee" },
//         phoneWork: "235.266.6278",
//         orders: [7634.43, 9766.72, 9953.45, 6559.8, 5054.9],
//         companyName: "Highnix",
//         companyIndustry: "Agriculture",
//         addressZipCode: "49376",
//         addressStateCode: "ME",
//         addressFullStreet: "5734 Maple Avenue Throughway",
//         addressCity: "Little Genesee"
//     },
//     {
//         purchasingAgent: { nameLast: "Crona", nameFirst: "Lauren" },
//         phoneWork: "1-449-987-3083 x23263",
//         orders: [7384.52, 9252.72, 7272.65, 5251.84, 9680.08],
//         companyName: "Conit",
//         companyIndustry: "Defense",
//         addressZipCode: "53326",
//         addressStateCode: "IL",
//         addressFullStreet: "5755 Hillside Drive Crossroad",
//         addressCity: "Norval"
//     },
//     {
//         purchasingAgent: { nameLast: "Krajcik", nameFirst: "Elvera" },
//         phoneWork: "1-730-411-8580",
//         orders: [6069.05, 8535.38, 5782.7, 7838.91, 7578.36],
//         companyName: "Dong-tom",
//         companyIndustry: "Energy",
//         addressZipCode: "67071",
//         addressStateCode: "KS",
//         addressFullStreet: "4826 Arch Street Lights",
//         addressCity: "Newburyport"
//     },
//     {
//         purchasingAgent: { nameLast: "Kling", nameFirst: "Ellie" },
//         phoneWork: "(868) 043-0950",
//         orders: [6726.2, 8393.21, 8087.13, 6393.13, 8646.35],
//         companyName: "Dan-dox",
//         companyIndustry: "Manufacturing",
//         addressZipCode: "98842",
//         addressStateCode: "WV",
//         addressFullStreet: "9767 Cedar Court Corner",
//         addressCity: "Prince George"
//     },
//     {
//         purchasingAgent: { nameLast: "Robel", nameFirst: "Otilia" },
//         phoneWork: "(298) 305-1942 x53653",
//         orders: [8676.05, 7430.69, 9379.81, 8074.29, 5998.75],
//         companyName: "J-base",
//         companyIndustry: "Health care",
//         addressZipCode: "72993",
//         addressStateCode: "FL",
//         addressFullStreet: "9954 Buckingham Drive Mountains",
//         addressCity: "Vesper"
//     },
//     {
//         purchasingAgent: { nameLast: "Gusikowski", nameFirst: "Karolann" },
//         phoneWork: "(743) 934-8981 x692",
//         orders: [8650.08, 8042.69, 5555.72, 7467.86, 8851.43],
//         companyName: "Span-fix",
//         companyIndustry: "Construction",
//         addressZipCode: "59860",
//         addressStateCode: "MT",
//         addressFullStreet: "4151 Orange Street Extension",
//         addressCity: "Little Rock Air Force Base"
//     },
//     {
//         purchasingAgent: { nameLast: "Hartmann", nameFirst: "Zena" },
//         phoneWork: "727.635.6610 x6483",
//         orders: [9415.89, 8935.45, 7413.91, 6830.96, 9746.57],
//         companyName: "Sanaplane",
//         companyIndustry: "Information",
//         addressZipCode: "85156",
//         addressStateCode: "NY",
//         addressFullStreet: "4765 Fairview Avenue Locks",
//         addressCity: "Dennisville"
//     },
//     {
//         purchasingAgent: { nameLast: "Torphy", nameFirst: "Celia" },
//         phoneWork: "(992) 079-1670 x71569",
//         orders: [7431.21, 5911.85, 7954.86, 7141.52, 8416.79],
//         companyName: "Ran-taxon",
//         companyIndustry: "Manufacturing",
//         addressZipCode: "96673",
//         addressStateCode: "MD",
//         addressFullStreet: "7157 Hudson Street Ford",
//         addressCity: "Watrous"
//     }
// ];

// Lightning Exercise: Add another section sibling to the current one and use object dot notation to display each company's city. Use square bracket notation to display the state code. Use dynamic square bracket notation to add the zip code.
// const outEl = document.querySelector("#output")
// outEl.innerHTML = "<h1>Active Businesses:</h1>"

// businesses.forEach(business => {
//     outEl.innerHTML += `
//     <h2>${business.companyName}</h2>
//     <section>
//       ${business.addressFullStreet}
//     </section>
   
//     <section>
//     ${business.addressCity}
//     </section>
   
//     <section>
//     ${business["addressStateCode"]}
//     </section>

//   `
//     outEl.innerHTML += "<hr/>"
// });


// Lightning Exercise: Use filter() to create another array named manufacturingBusinesses that will contain all businesses in the manufacturing industry. Display those to the DOM.
// let manEl = document.querySelector("#man-out")
// let manBus = businesses.filter(manu => manu.companyIndustry === "Manufacturing")

// manEl.innerHTML = `<h1>Manufacturing Businesses:</h1>`

// manBus.forEach( mf => {
//     manEl.innerHTML += `
//     <h2>${mf.companyName}</h2>
//     `
// })

// manEl.innerHTML += `<hr/>`


// let agents = businesses.map(agent => {
//     return agent.purchasingAgent
// })
// console.table(agents)

// Lightning Exercise: Instead of just returning the purchasing agent object, return a new object that has the full name of the purchasing agent, the company name, and the phone number. The data structure is shown below. Use that new data structure to display the agent with their company and phone number
// let agentOut = document.querySelector("#agent-out")
// agentOut.innerHTML = `<h1>Purchasing Agents:</h1>`

// businesses.forEach( purch => {
//     agentOut.innerHTML += `
//     <h2>${purch.purchasingAgent.nameFirst} ${purch.purchasingAgent.nameLast}</h2>
//     <h3>
//     ${purch.companyName}
//     </h3>
//     <h3>
//     ${purch.phoneWork}
//     </h3>
//     `
//     agentOut.innerHTML += `<hr/>`
// })

// const candies = [
//     {
//         name: "Lollipop",
//         price: 2.99
//     },
//     {
//         name: "Tootsie Roll",
//         price: 1.49
//     },
//     {
//         name: "Sugar Daddy",
//         price: 2.49
//     }
// ]

// const firstCheapCandy = candies.find(candy => candy.price < 2.00)

// console.log(firstCheapCandy)
// > { name: "Tootsie Roll", price: 1.49 }

// document.querySelector("#companySearch").addEventListener("keypress", keyPressEvent => {
//     if (keyPressEvent.charCode === 13) {
//         /* WHEN  USER PRESSES ENTER, FIND MATCHING BUSINESS */
//         const foundBusiness = businesses.find(
//             business =>
//                 business.purchasingAgent.nameFirst.includes(keyPressEvent.target.value) && business.purchasingAgent.nameLast.includes(keyPressEvent.target.value)
//         );

//         outEl.innerHTML = `
//                 <h2>
//                 ${foundBusiness.purchasingAgent.nameFirst} ${foundBusiness.purchasingAgent.nameLast}
//                 </h2>
//                 `

//     }
// });


//PRACTICE: BIG SPENDERS
// let arrTotal = businesses.orders
// let orderTotal = businesses.reduce( (curr, next) => {
//     arrTotal.forEach() {
//         businesses.reduce( (curr, next) => {
//             return curr + next
//         })
//     }
//     return curr + next.orders
// }, 0)
// let bigSpenders = businesses.filter( big => big.)


// PRACTICE: SOLAR SYSTEM
const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
const planetEl = document.getElementById("planets")

/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/


/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/