class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    clear() {

    }

    delete() {

    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation) {

    }

    compute() {

    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand)
    }
}



const numberButtons = document.querySelectorAll('[data-number]') //check
const operationButtons = document.querySelectorAll('[data-operation]') //check
const equalsButton = document.querySelector('[data-equals]') //check
const deleteButton = document.querySelector('[data-delete]') //check
const allClearButton = document.querySelector('[data-all-clear]') //check
const previousOperandTextElement = document.querySelector('[data-previous-operand]') //check
const currentOperandTextElement = document.querySelector('[data-current-operand]') //check

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement) //check

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
}) //check