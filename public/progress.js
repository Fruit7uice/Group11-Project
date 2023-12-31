var activeColor = "#e7b06f";
var passiveColor = "#adadad";
var counter = 1;

// The forwardProgress function is designed to control the 
// progression of a 3 - step process, 
// represented visually on a webpage.
// It relies on a counter variable to keep track of the current step.
// When called, it increments the counter and performs specific 
// actions based on its value. If counter is equal to 2, it updates
// the styles of certain elements and makes the "Previous" 
// utton visible. If counter is equal to 3,
// it updates the styles of different elements, 
// hides the "Next" button, and makes the "Register" button visible.
// The function also logs the current value of counter to the console.
function forwardProgress() {
        var form1 = document.getElementById('form-1')
        var form2 = document.getElementById('form-2')
        var form3 = document.getElementById('form-3')

    if (!(counter >= 3)) {
        counter++;
    }
    if (counter == 2) {
        const state2 = document.getElementById('state2');
        const line1 = document.getElementById('line1');

        form1.style.zIndex = -1;
        form2.style.zIndex = 1;
        form3.style.zIndex = -1;

        state2.style.border = "5px solid " + activeColor;
        state2.style.color = activeColor;
        line1.style.backgroundColor = activeColor;

        const pre_btn = document.getElementById('previous-btn');
        pre_btn.style.visibility = "visible";

    }
    if (counter == 3) {
        const state3 = document.getElementById('state3');
        const line2 = document.getElementById('line2');
     
        form1.style.zIndex = -1;
        form2.style.zIndex = -1;
        form3.style.zIndex = 1;

        state3.style.border = "5px solid " + activeColor;
        state3.style.color = activeColor;
        line2.style.backgroundColor = activeColor;

        const next_btn = document.getElementById('next-btn');
        next_btn.style.visibility = "hidden";

        const reg_btn = document.getElementById('register-btn');
        reg_btn.style.visibility = "visible";
    }
}

// The backwardProgress function is responsible for controlling the backward 
// progression of a 3 - step process, represented visually on a webpage.
// It utilizes a counter variable to keep track of the current step.
// When called, it decrements the counter and performs specific actions based
// on its value. If counter is equal to 1, it updates the styles
// of certain elements and hides the "Previous" button.
// If counter is equal to 2, it updates the styles of different elements,
// makes the "Next" button visible, and hides the "Register" button.
// The function assumes the existence of HTML elements 
// with specific IDs and uses the passiveColor variable for styling.
function backwardProgress() {
    var form1 = document.getElementById('form-1')
    var form2 = document.getElementById('form-2')
    var form3 = document.getElementById('form-3')

    if (!(counter <= 1)) {
        counter--;
    }
    if (counter == 1) {
        const state2 = document.getElementById('state2');
        const line1 = document.getElementById('line1');

        form1.style.zIndex = 1;
        form2.style.zIndex = -1;
        form3.style.zIndex = -1;

        state2.style.border = "5px solid " + passiveColor;
        state2.style.color = passiveColor;
        line1.style.backgroundColor = passiveColor;

        const pre_btn = document.getElementById('previous-btn');
        pre_btn.style.visibility = "hidden";
    }

    if (counter == 2) {
        const state3 = document.getElementById('state3');
        const line2 = document.getElementById('line2');

        form1.style.zIndex = -1;
        form2.style.zIndex = 1;
        form3.style.zIndex = -1;

        state3.style.border = "5px solid " + passiveColor;
        state3.style.color = passiveColor;
        line2.style.backgroundColor = passiveColor;

        const next_btn = document.getElementById('next-btn');
        next_btn.style.visibility = "visible";

        const reg_btn = document.getElementById('register-btn');
        reg_btn.style.visibility = "hidden";
    }
}