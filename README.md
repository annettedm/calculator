The calculator evaluates a single pair of numbers at a time, when a consecutive operator is entered, a calculation of the previous expression is triggered. The previous calculation result is used as a first operand, a consecutive operator is used for the new operation and the second number is expected to be entered for the next calculation.

Any calculation result that is returned as 'infinity' is displayed as 'Bad operation'. Any wrong operators, dot, number combination entered is displayed as 'Error'.
Calculation value is not stored in any variable, it is parsed from the display each time for the calculation.

    - Negative numbers calculation is implemented.
    - Power calculation, including negative power calculation, is displayed.
    - Operator combinations like '-+', '++', '/*' etc. get converted to '-', '+', '*' respectively.
    - Pasting expressions for correct calculation is implemented. 
    - Trimming calculation result of the number decimal up to 6 digits is implemented. 

Added functions for the following items:
    - add
    - subtract
    - multiply
    - divide


Created a basic HTML calculator with buttons for each digit and operator, including digits and operators input from a keyboard:
    - numbers
    - dot
    - clear, Escape-key - removes all data from display
    - delete, Delete-key - removes the last character at display
    - +, -, *, /, =
    - =, Enter-key - do not show at display, trigger calculation

Created the functions to
    - match btn click and value
    - allow entering only digits and operators
       

There are 4 operation parts at calculation:
    - a number
    - an operator
    - another number
    - another operator if a user enters before calculation
