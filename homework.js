const arr = [9, 2, 4, 1, 5, 2, 9, 1, 2, 0];
printArray(arr);
bubbleSort(arr);
printArray(arr);
let index = binarySearch(arr, 5);
console.log(`index = ${index}`);
index = binarySearch(arr, 7);
console.log(`index = ${index}`);
function printArray(arr){
    console.log('=========================');
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
    console.log('=========================');
}

function bubbleSort(arr){
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length - i - 1; j++){
            if (arr[j] > arr[j + 1]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

function binarySearch(arr, value){
    let left = 0;
    let right = arr.length - 1;
    while (left <= right){
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === value){
            return mid;
        } if (arr[mid] > value){
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
}
const comparator = (a, b) => a - b;
function sort(arr, comparator) {
}
arr.sort(comparator);
printArray(arr);

