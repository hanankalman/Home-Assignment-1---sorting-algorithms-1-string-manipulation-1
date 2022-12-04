//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//    Home Assignment 1 - sorting algorithms 1 & string manipulation 1
//                       writen by : Hanan Kalman
// ----------------------------------------------------------------------
//              grading system: (for each question)
//       
// 1. if the code is not working - *0
// 2. if the code is working but not according to the instructions - *0.5
// 3. if there's no explanation -  *0.75
// 4. late submission - final_grade -=  10*days_late
//
// ----------------------------------------------------------------------
//  --------------- DUE DATE: 05/12/2022 at 11:59pm ---------------------
// ______________________________________________________________________


// ______________________________________________________________________
//
// ------------------------  PART 1 - 60 Points -------------------------
//_______________________________________________________________________


// 1. sorting algorithms - bubble sort, selection sort, insertion sort
// part 1 - 60 points 20 points each

/*
* write the fulling functions below - you can't any built-in methods
* click the link to see the algorithm
* try implementing the algorithm in your own words
*/

// helpfull links:
// link to visualize the sorting : https://visualgo.net/en/sorting
// https://algorithm-visualizer.org/brute-force/bubble-sort (bubble sort)
// https://algorithm-visualizer.org/brute-force/selection-sort (selection sort)
// https://algorithm-visualizer.org/brute-force/insertion-sort (insertion sort)


// 1.1 bubble sort - https://en.wikipedia.org/wiki/Bubble_sort

const bubbleSort = (arr) => {
    let tempVal;
    let switchFlag = false;
    let switchCount = 0;
    do { // Loop until no switchs are made and the array is sorted
        for (let i = 0; i < arr.length; i++) { // compares two values and sorts them 
            if (arr[i] > arr[i + 1]) {
                tempVal = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = tempVal;
                switchFlag = true;
                switchCount++;
            }
        }
        if (switchCount == 0) {
            switchFlag = false;
        }
        switchCount = 0;
    } while (switchFlag == true);
};
bubbleSort(arr);
console.log("This Is The Result After Using A Bubble Sort Algorithm:")
console.log(...arr);

// 1.2 selection sort - https://en.wikipedia.org/wiki/Selection_sort

const selectionSort = (arr) => {
    let arrLength = arr.length;
    let tempArr = [];
    let minVal = arr[0];
    let minIndex = 0;
    do { // loops until all the organs in the source arry are sorted and moved to the new arry
        for (i = 0; i < arr.length; i++) {// locates the min Value and its index in the arry
            if (minVal > arr[i]) {
                minVal = arr[i];
                minIndex = i;
            }
        }
        tempArr.push(minVal);
        arrLength--;
        arr.splice(minIndex, 1);
        minVal = arr[0];
        minIndex = 0;
    } while (arrLength > 0);
    return tempArr;
};
console.log("This Is The Result After Using A Selection Sort Algorithm:")
console.log(...selectionSort(arr));

// 1.3 insertion sort - https://en.wikipedia.org/wiki/Insertion_sort

const insertionSort = (arr) => {
    let minVal;
    let minVIndex;

    for (let i = 0; i < arr.length; i++) {// compers to values and sorts them by order
        if (arr[i] > arr[i + 1]) {
            minVal = arr[i + 1];
            minVIndex = i + 1;
            arr[i + 1] = arr[i];
            arr[i] = minVal;
            for (let j = minVIndex; j >= 0; j--) {// compers all the previous organs in the arry with the min value and sorts them
                if (arr[j] < arr[j - 1]) {
                    let temp = arr[j];
                    arr[j] = arr[j - 1];
                    arr[j - 1] = temp;
                }
            }
        }
    }
};
insertionSort(arr);
console.log("This Is The Result After Using A Insertion Sort Algorithm:")
console.log(...arr);

//_______________________________________________________________________
//
// ------------------------  PART 2 - 40 Points -------------------------
//_______________________________________________________________________




// 2. working with strings! - without using built-in methods!
// part 2 - 40 points 10 points each


// 2.1 Capitalize the first letter of a string
let str = "hanan";

const capitalize = (str) => {
    let strLength = str.length;
    let newStr = "";
    let count;
    let temp = str.codePointAt(0); // retrive the utf8 value of the first letter
    count = 122 - temp;
    newStr = String.fromCharCode(90 - count); // convert the letter from lower case to upper case
    for (let i = 1; i < strLength; i++) {
        newStr += str[i];
    }
     return newStr;
};
console.log(capitalize(str));
// example:
// let str = "hello world";
// console.log(capitalize(str)); -> "Hello world"

// 2.2 Capitalize the first letter of each word in a string
const capitalizeWords = (str) => {
    let tempWord = null;
    let newWordFlag = false;

    for (let i = 0; i < str.length; i++) {
        if (i == 0) {//Capitalize the first letter in the first word
            let temp = str.codePointAt(i);
            count = 122 - temp;
            newStr = String.fromCharCode(90 - count);
            tempWord = newStr;
        } else {
            if (str[i - 1] == " ") {//Capitalize the first letter in the next words
                let temp = str.codePointAt(i);
                count = 122 - temp;
                newStr = String.fromCharCode(90 - count);
                tempWord += newStr;
            } else {
                tempWord += str[i];
            }
        }
    }
    return tempWord;
};
let str = "hanan nicole kalman";
console.log(capitalizeWords(str));
// example:
// let str = "hey mom";
// console.log(capitalizeWords(str)); -> "Hey Mom"

// 2.3 Reverse a string 
const reverseString = (str) => {
    let newStr = "";
    for (let i = str.length; i > 0; i--) {// loop the string in reverse order 
        if (str.codePointAt(i - 1) >= 65 && str.codePointAt(i - 1) <= 90) { //recognize an upper case letter
            let temp = 90 - str.codePointAt(i - 1);
            let tempStr = String.fromCharCode(122 - temp); //conver the letter to lower case
            newStr = newStr + tempStr;
        } else {
            newStr = newStr + str[i - 1];
        }
    }
    return newStr;
};
let str = "HanaN";
console.log(reverseString(str));// example:
// let srt = "Pizza";
// console.log(reverseString(str)); -> "azzip" - notice that the capital P is not capitalized


// 2.4 trim a string - remove the white spaces from the beginning and end of a string
// but not the white spaces in the middle of the string
const trim = (str) => {
    let newStr = "";
    for (let i = 0; i < str.length; i++) { // loop on the string
        if (str[i] != " " || (str[i] == " " && str[i+1] != " " && str[i-1] != " ")) { //recognize " " that are not between two words
            newStr += str[i];
        }
    }
     return newStr;
};
let str = "   hello world   ";
console.log(trim(str));// example:
// let str = "   hello world   ";
// console.log(trim(str)); -> "hello world"


//______________________________________________________________________
//
// ---------------------- BONUS QUESTIONS ------------------------------
//______________________________________________________________________


// Hard mode Bonus! - 15 points -> code wihout explanation will get 0 points

// fibunacci sequence - https://en.wikipedia.org/wiki/Fibonacci_number
// write a function that returns the nth number in the fibonacci sequence

const fibonacci = (n) => {
    let fiboArr = [0, 1, 1]; // the 3 first values are constant
    for (let i = 3; i <= n; i++) { // build an arry off fibonacci size n
        fiboArr.push(fiboArr[i - 2] + fiboArr[i - 1]);
    }
    return fiboArr[n];
};
let n = 7;
console.log(fibonacci(n));

// example:
// let n = 7;
// console.log(fibonacci(n)); -> 13


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !submit your homework on github and send me the link to your homework!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// Good Luck!


// #####################################################################
//  ---------------------- Done? Submit! -------------------------------
// #####################################################################



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~