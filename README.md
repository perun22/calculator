# calculator

The Odin Project - Foundation Course

1. The calculator must contain functions for all of the basic math operators typically found on calculators:
   - add
   - subtract
   - multiply
   - divide
2. A calculator operation has to consist of a number, an operator, and another number. Use these variables to update the display later.
3. Create a new function 'operate' that takes an operator and two numbers and then calls one of the above functions on the numbers.
4. Create a basic HTML calculator with buttons for each digit and operator (including =) as well as a display for the calculator. Add a “clear” button.
5. Create the functions that populate the display when you click the digit buttons. Store the content of the display (the number) in a variable for use in the next step.
6. Make the calculator work! Store the first and second numbers input by the user and then operate() on them when the user presses the = button, according to the operator that was selected between the numbers.
7. Gotchas: watch out for and fix these bugs if they show up in your code:
   - Your calculator should not evaluate more than a single pair of numbers at a time. Example: you enter a number (12), followed by an operator button (+), a second number button (7), and a second operator button (-). Your calculator should then do the following: first, evaluate the initial pair of numbers (12 + 7), then display the result of that calculation (19). Finally, use that result (19) as the first number in a new calculation, along with the next operator (-). An example of the behavior we’re looking for can be seen in this student’s calculator live preview.
   - You should round answers with long decimals so that they don’t overflow the display.
   - Pressing = before entering all of the numbers or an operator could cause problems!
   - Pressing “clear” should wipe out any existing data. Make sure the user is really starting fresh after pressing “clear”.
   - Display a snarky error message if the user tries to divide by 0… and don’t let it crash your calculator!
   - Make sure that your calculator only runs an operation when supplied with two numbers and an operator by the user. Example: you enter a number (2), followed by an operator button (+). You press the operator button (+) a second consecutive time. Your calculator should not evaluate this as (2 + 2) and should not display the result (4). If consecutive operator buttons are pressed, your calculator should not run any evaluations, it should only take the last operator entered to be used for the next operation.
   - When a result is displayed, pressing a new digit should clear the result and start a new calculation instead of appending the digit to the existing result. Check whether this is the case on your calculator!

Extra credit:

- Users can get floating point numbers if they do the math required to get one, but they can’t type them in yet. Add a . button and let users input decimals! Make sure you don’t let them type more than one though, like: 12.3.56.5. Disable the . button if there’s already a decimal separator in the display.
- Add a “backspace” button, so the user can undo their last input if they click the wrong number.
- Add keyboard support!
