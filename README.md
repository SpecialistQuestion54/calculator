Calculator App

A simple, responsive calculator app built with HTML, CSS, and JavaScript.
Features

    Basic Operations: Perform addition, subtraction, multiplication, and division.
    Clear and Backspace: Buttons to clear all input (C) and delete the last entry (D).
    History Tracking: Keeps a history of calculations (to be implemented).
    Responsive UI: User-friendly layout optimized for desktop screens.

Installation

    Clone the repository:

    bash

    git clone <repository-url>

    Open the index.html file in a web browser.

Usage

    Click on the number and operator buttons to enter calculations.
    Use the C button to clear the screen or D to delete the last character.
    Press = to evaluate the expression.
    You can also use your keyboard to enter numbers and operators, with the following mappings:
        Number keys (0-9) correspond to their respective buttons.
        Operators (+, -, *, /) correspond to their respective buttons.
        Press Enter to evaluate the expression.
        Use Backspace to delete the last entry and Delete to clear the input.

Implementation Details
HTML Structure

    The calculator layout is created using a grid system for easy organization of buttons and the display.

CSS Styles

    The design is minimalist with a focus on usability and responsiveness.

JavaScript Functionality

    Dynamic Input Handling: Updates the display as users click buttons or type on the keyboard.
    Expression Evaluation: Evaluates the mathematical expression entered using the built-in eval() function.
    History Feature: Stores calculated results in an array (history) for future reference.

Keyboard Support

    The app supports keyboard input for numbers, operators, and commands for evaluating and clearing the screen.
