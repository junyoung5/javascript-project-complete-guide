// Junyoung Oh
// Basic Javascript

// shortcut list
// line comment: shift + /
// code formatting: shit + alt + F
// add next occurence command + d
// move line up: alt + arrow

const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];


function getUserNumberInput() {
    return parseInt(userInput.value);
}

// generates and writes calculation log 
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription); // from vendor file. currentResult come from calc function directly
}


function writeToLog(operation, prevResult, opertaionNumber, newResult) {
    const logEntry = {  //object. python의 딕셔너리와 같이 Key-value pair. 리스트 안에 저장 가능. 
        operation: operation,
        prevResult: prevResult,
        number: opertaionNumber,
        result: newResult
    };
    logEntries.push(logEntry); // save log information
    // console.log(logEntry.operation) #object의 요소 하나만 가져온 뒤 콘솔창에 띄움. 
    console.log(logEntries); // 개발자 도구에서 로그 현황 확인 가능하게 함. array[0]
}
function calculateResult(calculationType) {
    if (
        calculationType !== 'ADD' && 
        calculationType !== 'SUBTRACT' &&
        calculationType !== 'MULTIPLY' &&
        calculationType !== 'DIVIDE'
    )   {
        return;
    } 

    
    const enteredNumber = getUserNumberInput();
    const initialNumber = currentResult;
    let mathOperator;
    if (calculationType == 'ADD') {
        currentResult += enteredNumber;
        mathOperator = '+';
    } else if (calculationType == 'SUBTRACT') {
        currentResult -= enteredNumber;
        mathOperator = '-';
    } else if (calculationType = 'MULTIPLY') {
        currentResult *= enteredNumber;
        mathOperator = '*';
    } else if (calculationType == 'DIVIDE') {
        currentResult /= enteredNumber;
        mathOperator = '/';
    }
    createAndWriteOutput(mathOperator, initialNumber, enteredNumber);
    writeToLog(mathOperator, initialNumber, enteredNumber, currentResult);

}
function add() {
    calculateResult('ADD');
}

function subtract() {
    calculateResult('SUBTRACT');
}

function multiply() {
    calculateResult('MULTIPLY');
}

function divide() {
    calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);




/*
Undefined: default value of uninitialized value. data type where nothing was asggined to a varible. you dont assgien a variable 'undefined' this is default.
Null: is not default value.
NaN(Not a Number): kind of error, it yeilds a NaN when you multiply a text.  (e.g. 3 * 'hi' shows NaN)

*/