
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
        let lastInputValue = "Ayieouw";
        let inputLastIndexValue = name.charAt(name.length - 1).toLowerCase();
        for (let i = 0; i < lastInputValue.length; i++) {
            if (inputLastIndexValue === lastInputValue[i].toLowerCase()) {
                return "Good Name";
            }
        }
        return "bad name";

    }
    else if (typeof name !== 'string') {
        return 'invalid';
    }
}


// Problem num 3
function deleteInvalids(array) {

    let newUpdateArray = [];

    if (Array.isArray(array)) {
        for (let i = 0; i < array.length; i++) {

            if (typeof array[i] === 'number' && !isNaN(array[i])) {
                newUpdateArray.push(array[i]);
            }
        }
        return newUpdateArray;
    }
    else if (!Array.isArray(array)) {
        return "Invalid Array";
    }
}

// Problem 4
function password(obj) {

    if (!obj.name || !obj.siteName || !obj.birthYear) {
        return "invalid";
    }
    else if (obj.birthYear.toString().length <= 3) {
        return "invalid"
    }

    const webName = obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1);
    const birthYear = obj.birthYear;
    const clientName = obj.name;

    const outputData = webName + "#" + clientName + "@" + birthYear;

    return outputData;

}
