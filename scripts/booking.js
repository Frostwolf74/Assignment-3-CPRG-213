/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let costDaily = 35; // default is full 
let cost = 0;
let dayCounter = [];

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

let buttons = [document.getElementById("monday"), document.getElementById("tuesday"), document.getElementById("wednesday"), document.getElementById("thursday"), document.getElementById("friday")];

function changeColor(button){
    buttons[button].classList.add('clicked');
    dayCounter.push(buttons[button]);
}

for(let i = 0; i < 5; ++i){
    buttons[i].addEventListener("click", function(){changeColor(i);recalculate();}); // add an event lister for each button and when it is pressed it will send its array index to the changeColor function
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

const clearButton = document.getElementById("clear-button");

function resetAll(){
    buttons.forEach(b => {
        if(b.classList.contains('clicked')){
            b.classList.remove('clicked');
        }
    });

    cost = 0;
    dayCounter = [];
}

clearButton.addEventListener("click", function(){resetAll();recalculate();});


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

const halfDay = document.getElementById("half");
const fullDay = document.getElementById("full");

function halfClicked(){
    costDaily = 20;
    halfDay.classList.add('clicked');
    fullDay.classList.remove('clicked');
}

halfDay.addEventListener("click", function(){halfClicked();recalculate();});

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function fullClicked(){
    costDaily = 35;
    halfDay.classList.remove('clicked');
    fullDay.classList.add('clicked');
}

fullDay.addEventListener("click", function(){fullClicked();recalculate();});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function recalculate(){
    cost = costDaily * dayCounter.length;

    document.getElementById("calculated-cost").innerHTML = cost;
}

