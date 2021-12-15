import { useEffect, useState, useReducer } from 'react'


// ☝ It's good practice to define/declare initial states before passing them to the relative hooks.
const initialState = 0;

const pinkRGB = `rgb(236, 72, 153)`

/**
 * Unpacks the actionObj passed through the dispatch function. Uses a switch statement and references the actionObj type key:value pair to execute the associated code block(which updates the state).
 * @param {object} state - Does not pass through the dispatch function. Automagically accesses the state through the useReducer hook.
 * @param {object} actionObj - REQUIRED! An object, with a type key:value pair that is passed through the dispatch function.
 * @returns A new state to the useReducer hook.
 */
function reducer(state, actionObj){
  switch (actionObj.type) {
    case 'increment': {
          // the useReducer state is updated by the reducer return. We no longer use a 'setState' type function here.
        return state + 1 
    }
    case 'decrement': {
          // the useReducer state is updated by the reducer return. We no longer use a 'setState' type function here.
        return state - 1 
    }
    case 'reset': {
          // the useReducer state is updated by the reducer return. We no longer use a 'setState' type function here.
        return 0
    }
    default: {
      // How do we trigger this? Do we exclude an action object or a type key/value from the action object?
      throw new Error(`No matching 'type' for ${actionObj.type}`);
    }
  }
}


export default function Counter() {
  // state to be updated by useEffect
  const [currentColor, setCurrentColor] = useState(pinkRGB)

  // I'm used to there being a fn here, that handles setting of state. Now... We call dispatch to trigger the reducer, which actually sets the new state.
  const [count, dispatch] = useReducer(reducer, initialState);

  // useEffect, which updates the currentColor state when the count state updates. 
  useEffect(() => {
    if (count === 0) {
      setCurrentColor(pinkRGB);
    }
    
    if (count > 0) {
      setCurrentColor(`rgb(52, 211, 153)`);
    }
    
    if (count < 0) {
      setCurrentColor(`rgb(239, 68, 68)`);
    }
  }, [count]);
  

  // handlers, call onClick in jsx.
  const increment = () => {
    // this is now calling dispatcher.
    // ❓ Do we need to pass 'count' state to the dispatcher so it can be passed to the render function? Or does the render function automagically have access to the 
    dispatch({type: 'increment'});
  }

  const decrement = () => {
    // this is now calling dispatcher.
    dispatch({type: 'decrement'});
  }

  const reset = () => {
    // this is now calling dispatcher.
    dispatch({type: 'reset'});
  }

  return (
    <main className="bg-black bg-opacity-90 min-h-screen flex flex-col items-center justify-center text-4xl text-pink-500">
      <h1 className="mb-5" style={{ color: currentColor }}>
        {count}
      </h1>
      <div className="flex w-1/2 justify-around">
        <button
          className="text-green-400 border-2 border-green-400 p-3"
          type="button"
          // update onlicks to call dispatch with the appropriate action object type value.
          onClick={increment}
          aria-label="increment"
        >
          Increment
        </button>
        <button
          className="text-red-500 border-2 border-red-500 p-2"
          type="button"
          onClick={decrement}
          aria-label="decrement"
        >
          Decrement
        </button>
        <button
          className="text-pink-500 border-2 border-pink-500 p-2"
          type="button"
          aria-label="reset"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </main>
  )
}
