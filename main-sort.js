function generateArray(size) {
    return Array.from({length: size}, () => Math.floor(Math.random() * 500));
}

const baseArr = generateArray(100);

console.log("%c ПОЧАТКОВИЙ МАСИВ (100 елементів) ", "background: #ff00ff; color: #fff");
console.log(baseArr);
console.log("--------------------------------------------------");

console.log("%c 1. Нерозріджений масив (100 елементів) ", "background: #ff00ff; color: #fff");
SortLib.bubbleSort([...baseArr]);
SortLib.selectionSort([...baseArr]);
SortLib.insertionSort([...baseArr]);
SortLib.shellSort([...baseArr]);
SortLib.quickSort([...baseArr]);

console.log("%c 2. Розріджений масив (100 елементів) ", "background: #ff00ff; color: #fff");

let sparseArr = generateArray(50);
sparseArr.length = 100; 

console.log("%c РОЗРІДЖЕНИЙ МАСИВ ДО СОРТУВАННЯ: ", "background: #ff00ff; color: #fff");
console.log(sparseArr);
console.log("--------------------------------------------------");
SortLib.quickSort(sparseArr, true);
