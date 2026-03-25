const SortLib = {
    //метод для перевірки та підрахунку undefined
    _checkSparse: function(arr) {
        let undefinedCount = 0;
        for (let i = 0; i < arr.length; i++) {
            if (!(i in arr) || arr[i] === undefined) {
                undefinedCount++;
            }
        }
        if (undefinedCount > 0) {
            console.warn(`Знайдено розріджений масив: ${undefinedCount} елементів undefined.`);
        }
        return undefinedCount;
    },

    //cортування обміну (Bubble Sort)
    bubbleSort: function(inputArr, ascending = true) {
        let arr = [...inputArr];
        this._checkSparse(arr);
        let comparisons = 0;
        let swaps = 0;

        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length - i - 1; j++) {
                comparisons++;
                let condition = ascending ? arr[j] > arr[j + 1] : arr[j] < arr[j + 1];
                if (condition) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                    swaps++;
                }
            }
        }
        console.log(`Bubble Sort: Порівнянь: ${comparisons}, Обмінів: ${swaps}`); 
        return arr;
    },

    //cортування мін ел (Selection Sort)
    selectionSort: function(inputArr, ascending = true) {
        let arr = [...inputArr];
        this._checkSparse(arr);
        let comparisons = 0;
        let swaps = 0;

        for (let i = 0; i < arr.length; i++) {
            let minMaxIdx = i;
            for (let j = i + 1; j < arr.length; j++) {
                comparisons++;
                let condition = ascending ? arr[j] < arr[minMaxIdx] : arr[j] > arr[minMaxIdx];
                if (condition) minMaxIdx = j;
            }
            if (minMaxIdx !== i) {
                [arr[i], arr[minMaxIdx]] = [arr[minMaxIdx], arr[i]];
                swaps++;
            }
        }
        console.log(`Selection Sort: Порівнянь: ${comparisons}, Обмінів: ${swaps}`);
        return arr;
    },

    //cортування вставок (Insertion Sort)
    insertionSort: function(inputArr, ascending = true) {
        let arr = [...inputArr];
        this._checkSparse(arr);
        let comparisons = 0;
        let moves = 0;

        for (let i = 1; i < arr.length; i++) {
            let key = arr[i];
            let j = i - 1;
            while (j >= 0) {
                comparisons++;
                let condition = ascending ? arr[j] > key : arr[j] < key;
                if (condition) {
                    arr[j + 1] = arr[j];
                    j--;
                    moves++;
                } else break;
            }
            arr[j + 1] = key;
        }
        console.log(`Insertion Sort: Порівнянь: ${comparisons}, Переміщень: ${moves}`);
        return arr;
    },

    //cортування Шелла (Shell Sort)
    shellSort: function(inputArr, ascending = true) {
        let arr = [...inputArr];
        this._checkSparse(arr);
        let comparisons = 0;
        let moves = 0;
        let n = arr.length;

        for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
            for (let i = gap; i < n; i++) {
                let temp = arr[i];
                let j = i;
                while (j >= gap) {
                    comparisons++;
                    let condition = ascending ? arr[j - gap] > temp : arr[j - gap] < temp;
                    if (condition) {
                        arr[j] = arr[j - gap];
                        j -= gap;
                        moves++;
                    } else break;
                }
                arr[j] = temp;
            }
        }
        console.log(`Shell Sort: Порівнянь: ${comparisons}, Переміщень: ${moves}`);
        return arr;
    },

    //сортування Хоара (Quick Sort)
    quickSort: function(inputArr, ascending = true) {
        let arr = [...inputArr];
        this._checkSparse(arr);
        let comparisons = 0;
        let swaps = 0;

        const partition = (low, high) => {
            let pivot = arr[Math.floor((low + high) / 2)];
            let i = low;
            let j = high;
            while (i <= j) {
                while (ascending ? arr[i] < pivot : arr[i] > pivot) { i++; comparisons++; }
                while (ascending ? arr[j] > pivot : arr[j] < pivot) { j--; comparisons++; }
                if (i <= j) {
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                    swaps++;
                    i++;
                    j--;
                }
            }
            return i;
        };

        const sort = (low, high) => {
            let index = partition(low, high);
            if (low < index - 1) sort(low, index - 1);
            if (index < high) sort(index, high);
        };

        sort(0, arr.length - 1);
        console.log(`Quick Sort: Порівнянь: ~${comparisons}, Обмінів: ${swaps}`);
        return arr;
    }
};
