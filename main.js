// Code to allow for user input
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

/*
 * Function return an number of sock pairs.
 * The function accepts following parameter:
 *      arr - socks in the form of an array of integers
 */

function sockMerchant(arr) {

    // Initiate number of pairs to 0
    let numPairs = 0
    
    // Sort arr so that pairs are together in the array
    arr.sort(function(a,b){return a - b})
   
    for (let i = 0; i < arr.length; i++) {

        // If next element matches, increment number of pairs and skip next element
        if (arr[i] === arr[i + 1]) {
            numPairs++
            i++
        }
    }

    return numPairs
}


// Get user input
rl.question('Enter socks as integers seperated by spaces:', (socks) => {
    // Convert user input into an array of intergers
    let arr = socks.split(" ")

    // Call function
    result = sockMerchant(arr)

    // Output number of total pairs
    console.log(result)

    rl.close()
})


