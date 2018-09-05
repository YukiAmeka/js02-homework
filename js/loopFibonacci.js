let sequentialNum;
do {
    sequentialNum = parseInt(prompt("Введіть будь-ласка послідовний номер числа Фібоначчі, котрий ви бажаєте отримати"));
} while (isNaN(sequentialNum)||(sequentialNum < 0));

alert ("Відповідь: " + fibonacciNum(sequentialNum));

function fibonacciNum(a) {
    let prevNum = 0;
    let result = 1;
    if (a === 0) {
        return prevNum;
    }
    if (a === 1) {
        return result;
    }
    for (let i = 2; i <= a; i++) {
        result += prevNum;
        prevNum = result - prevNum;
    }
    return result;
}