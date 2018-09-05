let sequentialNum;
do {
    sequentialNum = parseInt(prompt("Введіть будь-ласка послідовний номер числа Фібоначчі, котрий ви бажаєте отримати"));
} while (isNaN(sequentialNum)||(sequentialNum < 0));

alert ("Відповідь: " + fibonacciNum(sequentialNum));

function fibonacciNum(a) {
    let fibArray = [0, 1];
    if (a === 0) {
        return fibArray.shift();
    }
    if (a === 1) {
        return fibArray.pop();
    }
    for (let i = 2; i <= a; i++) {
        fibArray.push(fibArray[i-1] + fibArray[i-2]);
    }
    return fibArray.pop();
}