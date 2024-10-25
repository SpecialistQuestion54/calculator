// Get the screen input field
const screen = document.getElementById('screen');
// const buttons = document.getElementsByClassName('button');
const operator_buttons = document.getElementsByClassName('operator');
const numeric_buttons = document.getElementsByClassName('button number');
const delete_button = document.getElementById('D');
const clear_button = document.getElementById('C');
const eval_button = document.getElementById('=');
const buttons = document.getElementsByClassName('button');
// Convert HTMLCollection to an array
const numeric_buttons_array = Array.from(numeric_buttons);
const operator_buttons_array = Array.from(operator_buttons);
const buttons_array = Array.from(buttons);
let history = [];
const ops = ['+', '-', '*', '/'];
let eval_screen_value;

function getExpTillLastOp(sv, ops) {
    let i = -1;

    for (let op of ops) {
        i = Math.max(i, sv.lastIndexOf(op));
    }

    return sv.slice(0, i + 1);
}

function getLastNum(sv, ops) {
    let i = -1;

    for (let op of ops) {
        i = Math.max(i, sv.lastIndexOf(op));
    }

    return sv.slice(i + 1);
}

function lastCharNotOperator(sv) {
    return (sv[sv.length - 1] == '+' || sv[sv.length - 1] == '-' || sv[sv.length - 1] == '*' || sv[sv.length - 1] == '/') ? false : true
}

buttons_array.forEach(button => {
    button.addEventListener('mouseover', function () {
        button.style.backgroundColor = 'rgb(233, 232, 232)';
    })
    button.addEventListener('mouseout', function () {
        button.style.backgroundColor = '#f0f0f0';
    })
})

// Add a click event listener to each button
numeric_buttons_array.forEach(button => {
    button.addEventListener('click', function () {
        // Update the value of the screen input field
        screen.value += this.value;
        eval_screen_value += this.value;        
        let num = getLastNum(screen.value, ops);
        num = Number(num).toLocaleString('en-US');
        screen.value = getExpTillLastOp(screen.value, ops) + num;

    });
});

operator_buttons_array.forEach(button => {
    button.addEventListener('click', function () {
        // Update the value of the screen input field
        if (screen.value != '' && lastCharNotOperator(screen.value)) {
            screen.value += this.value;
        }
    });
});

delete_button.addEventListener('click', function () {
    screen.value = screen.value.slice(0, -1);
})

clear_button.addEventListener('click', function () {
    screen.value = '';
})

eval_button.addEventListener('click', function () {
    const ans = eval(eval_screen_value);
    if (eval_screen_value != '') screen.value = ans;
    history.push(screen.value);
})

// keyboard support
document.addEventListener('keydown', function (event) {
    switch (event.key) {
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
        case '+':
        case '-':
        case '*':
        case '/':
            const event_target = document.getElementById(event.key);
            event_target.dispatchEvent(new Event('click'));
            event_target.dispatchEvent(new Event('mouseover'));
            setTimeout(() => {
                event_target.dispatchEvent(new Event('mouseout'));
            }, 100);

            break;
        case 'Enter':
            eval_button.dispatchEvent(new Event('click'));
            eval_button.dispatchEvent(new Event('mouseover'));
            setTimeout(() => {
                eval_button.dispatchEvent(new Event('mouseout'));
            }, 100);
            break;
        case 'Backspace':
            delete_button.dispatchEvent(new Event('click'));
            delete_button.dispatchEvent(new Event('mouseover'));
            setTimeout(() => {
                delete_button.dispatchEvent(new Event('mouseout'))
            }, 200);
            break;
        case 'Delete':
            clear_button.dispatchEvent(new Event('click'));
            clear_button.dispatchEvent(new Event('mouseover'));
            setTimeout(() => {
                clear_button.dispatchEvent(new Event('mouseout'))
            }, 200);
            break;
    }
    if (event.ctrlKey && event.key === 'Backspace') {

        screen.value = getExpTillLastOp(screen.value, ops);
    }

})

// history

