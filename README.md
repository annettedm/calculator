Here are some use cases (expectations about your project):

    Added functions for the following items:
    - add
    - subtract
    - multiply
    - divide


    Created a basic HTML calculator with buttons for each digit and operator:
    - numbers
    - dot
    - clear
    - delete
    - +, -, *, /, =

    Created the functions to
    - match btn click and value
    - allow entering only digits and operators
       

    Gotchas: watch out for and fix these bugs if they show up in your code:
        Your calculator should not evaluate more than a single pair of numbers at a time. For example, this is how your calculator should function:
            Enter a number (12).
            Enter an operator (+).
            Enter a second number (7).
            Enter a second operator (-). At this point, it should evaluate the initial pair of numbers (12 + 7), then display the result (19).
            Enter another number (1).
            Enter another operator or equals sign (=). At this point, it should use the previous result (19) as the first number, the operator (-), and the new number (1) to calculate the new equation 19 - 1. You should see the result (18) on the display.
            To see what this looks like in action, feel free to input the equation we just explained 12 + 7 - 1 = into this online calculator.
        You should round answers with long decimals so that they don’t overflow the display.
        Pressing = before entering all of the numbers or an operator could cause problems!
        Pressing “clear” should wipe out any existing data. Make sure the user is really starting fresh after pressing “clear”.
        Display a snarky error message if the user tries to divide by 0… and don’t let it crash your calculator!
        Make sure that your calculator only runs an operation when supplied with two numbers and an operator by the user. Example: you enter a number (2), followed by an operator button (+). You press the operator button (+) a second consecutive time. Your calculator should not evaluate this as (2 + 2) and should not display the result (4). If consecutive operator buttons are pressed, your calculator should not run any evaluations, it should only take the last operator entered to be used for the next operation.
        When a result is displayed, pressing a new digit should clear the result and start a new calculation instead of appending the digit to the existing result. Check whether this is the case on your calculator!

Extra credit

    Users can get floating point numbers if they do the math required to get one, but they can’t type them in yet. Add a . button and let users input decimals! Make sure you don’t let them type more than one though, like: 12.3.56.5. Disable the . button if there’s already a decimal separator in the display.
    Add a “backspace” button, so the user can undo their last input if they click the wrong number.
    Add keyboard support!


Keys

Key Name	event.which	event.key	event.code	Notes 
delete	46	
enter	13

forward slash	191	/	Slash

[48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105] -> numbers
[106, 107, 109, 111, 189, 191, ] -> * + - /
[110, 190] -> . 
[187] -> =