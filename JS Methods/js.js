// Task 1: map() Method
// // Problem Statement: Ek array [10, 20, 30, 40, 50] diya gaya hai. Is array ke har element ko 5 se multiply karke ek naya array banao.
function task1() {
    let mapArray = [10, 20, 30, 40, 50]
    let mappedArray = mapArray.map((item) => {
        return item * 5;
    });
    document.getElementById('output1').innerText = `Mapped Array: [${mappedArray}]`;
}



// Task 2: filter() Method
// // Problem Statement: Ek array [15, 26, 33, 40, 18, 29] diya gaya hai. Sirf even numbers ko filter karke ek naya array banao.
function task2() {
    let filterArray = [15, 26, 33, 40, 18, 29]
    let filteredArray = filterArray.filter((item) => {
        if (item % 2 == 0) {
            return item
        }
    });
    document.getElementById('output2').innerText = `Filtered Array: [${filteredArray}]`;
}



// Task 3: reduce() Method
// Problem Statement: Ek array [5, 10, 15, 20] diya gaya hai. Is array ke sare elements ka sum calculate karo.
function task3() {
    let reduceArray = [5, 10, 15, 20];
    let sumOfArray = reduceArray.reduce((acc, item) => {
        return acc + item;
    });
    document.getElementById('output3').innerText = `Sum of Array: ${sumOfArray}`;
}



// Task 4: find() Method
// Problem Statement: Ek array [7, 14, 21, 28, 35] diya gaya hai. Is array me pehla number find karo jo 20 se bada ho.
function task4() {
    let findArray = [7, 14, 21, 28, 35];
    let findElement = findArray.find((item) => {
        if (item > 20) {
            return item;
        }
    });
    document.getElementById('output4').innerText = `First Element greater than 20: [${findElement}]`;
}



// Task 5: findIndex() Method
// Problem Statement: Ek array [3, 5, 7, 9, 11] diya gaya hai. Us element ka index find karo jo 7 ke barabar ho.
function task5() {
    let findIndexArray = [3, 5, 7, 9, 11];
    let findIndex = findIndexArray.findIndex((item) => {
        if (item === 7) {
            return item
        }
    });
    document.getElementById('output5').innerText = `Index of 7: [${findIndex}]`;
}

// Task 6: includes() Method
// Problem Statement: Ek array [12, 24, 36, 48, 60] diya gaya hai. Check karo ki 36 is array me hai ya nahi.
function task6() {
    let includeArray = [12, 24, 36, 48, 60];
    let includedArray = includeArray.includes(36);
    document.getElementById('output6').innerText = `36 is Present? (True/False): ${includedArray}`;
}



// Task 7: indexOf() Method
// Problem Statement: Ek array [1, 2, 3, 4, 2, 5] diya gaya hai. Array me 2 ka index find karo.
function task7() {
    let indexOfArray = [1, 2, 3, 4, 2, 5];
    let indexOf2 = indexOfArray.indexOf(2);
    document.getElementById('output7').innerText = `Index of 2: [${indexOf2}]`;
}



// Task 8: lastIndexOf() Method
// Problem Statement: Ek array [1, 2, 3, 4, 2, 5] diya gaya hai. Array me 2 ka last index find karo.
function task8() {
    let lastIndexOfArray = [1, 2, 3, 4, 2, 5];
    let lastIndexOf2 = lastIndexOfArray.lastIndexOf(2);
    document.getElementById('output8').innerText = `Last Index of 2: [${lastIndexOf2}]`;
}
