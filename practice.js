//  Create a function that takes an array of numbers and return "Boom!" if the number 7 appears in the array. Otherwise, return "there is no 7 in the array".

// const sevenBoom = (arr) => {
//     let word = "";
//     let newArr = arr.join("")
//     newArr.includes(7) ? (word = "Boom!") : (word = "There is not 7 in array");
//     return word;
// };
// console.log(sevenBoom([12, 23, 34, 45, 6, 97]));

////////////
// Create a function that takes two dates and returns the number of days between the first and second date.
// const getDay = (date1, date2) => {
//     function getDays(date1, date2) {
//         return new Date(date2 - date1).getDate() - 1;
//     }
// };
//////////////////////

var convert = (degree) => {
    if (degree.includes("f")) {
        var newData = degree.substr(0, degree.indexOf("f"));
        return Math.round((parseFloat(newData - 32) * 5) / 9);
    } else if (degree.includes("c")) {
        var newData = degree.substr(0, degree.indexOf("c"));
        return Math.round(parseFloat((newData * 9) / 5) + 32);
    } else {
        return "Wrong!";
    }
};
