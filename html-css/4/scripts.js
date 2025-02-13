const display = document.getElementById('input')
const buttons = document.querySelectorAll('.keyboard button')

let currentInput = ""

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const val = button.textContent;
        currentInput = String(currentInput).replace(/×/g, '*')

        if (val === 'C') {
            currentInput = ''
        } else if (val === '=') {
            try {
                if (val === 'x') {
                    val = '*'
                }
                currentInput = eval(currentInput)
            } catch {
                currentInput = "Syntax Error"
            }
        } else {
            currentInput += val 
        }
        display.value = currentInput;
    })
})
