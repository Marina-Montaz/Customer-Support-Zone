<!-- 
## Q&A

1. What is JSX?
JSX stands for JavaScript XML. It allows us to write HTML-like code directly in JavaScript files. It is used because it makes UI code easier to write compared to raw `React.createElement`.

2. State vs. Props
-State: The data managed within a component that can change is called state, such as the number of resolved tickets in the assignment.

- Props: The data passed into a component from a parent is called props,such as the title of a ticket card. Props are read-only.

3. What is the useState hook?
It is a function that allows functional components to have state. It returns the current state value and a function to update it.

 4. How to share state between components?
We could share state between components by Lifting State Up, which means moving the state to the closest common parent component and passing it down via props.

5. Event Handling in React
Events are handled using camelCase attributes and passing a function as the handler instead of a string. -->