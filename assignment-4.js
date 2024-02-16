
// Problem Number-1
function calculateMoney(numbers) {

    if (numbers >= 0) {
        let sellingAmount = 120 * numbers;
        let everydayExpense = 500 + (8 * 50); let remainingBalance = sellingAmount - everydayExpense;

        return remainingBalance;
    }

    else {
        return console.log("You input a negetive value! Plz input a positive Number");
    }
}


// Problem Number 2

function checkName(name) {
    if (typeof name === 'string') {
        let lastInputValue = "ayieouw";
        let inputLastIndexValue = name.charAt(name.length - 1).toLowerCase();
        for (let i = 0; i < lastInputValue.length; i++) {
            if (inputLastIndexValue === lastInputValue[i].toLowerCase()) {
                return "Good Name";
            }
        }
        return "bad name";
        
    }
    else if(typeof name !== 'string') {
        return 'invalid';
    }
}


// Problem 3


function deleteInvalids(array) {
    if (!Array.isArray(array)) {
        return "Invalid Array"
    }
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === "number" && !isNaN(array[i])) {
            newArray.push(array[i])
        }
    }
    return newArray;
}


const array= [1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }];
console.log(deleteInvalids(array));
