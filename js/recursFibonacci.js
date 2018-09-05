let sequentialNum;
do {
    sequentialNum = parseInt(prompt("Введіть будь-ласка послідовний номер числа Фібоначчі, котрий ви бажаєте отримати"));
} while (isNaN(sequentialNum)||(sequentialNum < 0));

alert ("Відповідь: " + fibonacciNum(sequentialNum));

function fibonacciNum(a) {
    if (a === 0) {
        return 0;
    }
    if (a === 1) {
        return 1;
    }
    return fibonacciNum(a-1) + fibonacciNum(a-2);
}