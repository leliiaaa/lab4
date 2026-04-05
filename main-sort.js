function generateArray(size) {
    return Array.from({length: size}, () => Math.floor(Math.random() * 500));
}

const baseArr = generateArray(100);

console.log("%c 1. Нерозріджений масив (100 елементів) ", "background: #ff00ff; color: #fff");
SortLib.bubbleSort([...baseArr]);
SortLib.selectionSort([...baseArr]);
SortLib.insertionSort([...baseArr]);
SortLib.shellSort([...baseArr]);
SortLib.quickSort([...baseArr]);

console.log("%c 2. Розріджений масив (100 елементів) ", "background: #ff00ff; color: #ff69b4");

let sparseArr = generateArray(50);
sparseArr.length = 100; 

SortLib.quickSort(sparseArr, true);
console.log("Вигляд масиву після сортування (undefined знаходитьмя у кінці):", sparseArr);
