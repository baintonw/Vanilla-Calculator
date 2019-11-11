# Vanilla-Calculator

This is a very basic calculator written in Vanilla Javascript. Has four major operands, a decimal point, and an equals button.

Project was built as follows:

1. Began mock up following a simple calculator design.

2. Laid out divs for the calculator, screen, and button map respectively.

3. Wrote in and positioned buttons as needed.

4. Set up and defined HTML elements as variables.

5. Added event listeners to all buttons for calculating, and displaying calculation.

6. Show function displays digits/calculation on 'screen.'

7. Calculate function registers a button press, and, if it is a numbered button, adds that to a 'number array' which is in turn converted into a float.
  a. if this is the first variable, the value is stored into 'x'
  b. if it is the second variable, as dictated by a boolean, the value is stored into 'y'
  c. if an operand button is pressed (e.g. '+', '-') the numberArray is reset, the operand is saved, the 'first' boolean is toggled, and the screen displays the current number to be evaluated against.
  d. if both x and y variables are full, and the operand button is hit again, they are evaluated using the operand as a key to a 'math' object, containing the corresponding functions (an addition function for '+' for instance.) The result of that function is in turn saved as x, so further computations can be made against that result. Variables are reset.

8. Evaluate function is set to trigger when the equals button is pushed, combining the saved operand value, as well as x and y variables. The result is displayed on the screen and variables are reset.

9. Event listener added to AC button to clear variables and reset the clock on all progress made.
