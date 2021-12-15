# Reducer Counter

## Learning Objectives

- Use `useReducer` to manage complex application state
- Use the `dispatch` function to dispatch actions to update state
- Use a reducer function to update state
- Use a `switch` statement to handle multiple conditions

## Live Example

https://half-baked-reducer.netlify.app/

### Description

For this deliverable, we'll be refactoring our counter app to use the `userReducer` hook. Currently our application is handling our state updates through the use of functions to increase and reset our counter

Your task is to take our app from updating the state with those functions to using the `useReducer` hook. The app is currently fully tested and the tests are working with current code. After refactoring your tests should continue to work with no changes.

Use the [template](https://github.com/alchemycodelab/adv-react-alchemeetme) to start your project.

### Acceptance Criteria

- Existing tests are passing and should continue to pass after refactoring
- Users should be able to increment the counter with button click
- Users should be able to decrement counter with button click
- Users should be able to reset the counter with a button click

### Rubric

| Tasks                                             | Points |
| :------------------------------------------------ | -----: |
| Use the `useReducer` hook to manage counter state |      2 |
| Create a reducer function to handle state changes |      2 |
| Use a `switch` statement inside of your reducer   |      2 |
| Use the `dispatch` function to update state       |      2 |
| Set an initial value for `useReducer`             |      2 |
