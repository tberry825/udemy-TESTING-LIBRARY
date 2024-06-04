// import App from "./App";
// import { render, screen } from "@testing-library/react";
//render method comes from testing library react and it creates the simulated DOM. This is what allows the test to understand what we're testing against.
//Once rendered, the simulated DOM can be assessed via the global object called "screen" also imported by the testing library react



// test("App contains correct heading", () => {
//   render(<App />);// it creates a simulated DOM for whatever JS you give it as an argument. Here we are asking it to render the App component

//   const headingElement = screen.getByText(/learn react/i);
//  //using a method from "screen" called getByText.
//  //So its looking at the simulated DOM and it's trying to find an element that matches thee text that we give it.
//  //in this case a regular expression was given denoted by the forward slashes and the "i" saying it's case sensitive- "/learn react/i". Now if there is any element within that rendered simulated DOM whose display text  matched the regular expression that will be stored in "headingElement"

//   expect(headingElement).toBeInTheDocument();
//    //This last part is ViTest, (syntax is the same in Jest)
//  //This is what causes the test to pass or fail
//  //Asserting that the "headingElement" that was returned by the "getBytext" method, we are expecting that heading element to be in the document

//  //If we found an element that matches this text, then the statement will be true and the test will pass, otherwise it will fail.

//  //ViTest is ran in "watch mode meaning it will rerun each time you chang esomething"
//  //With a regular expression (/inside forward slashes/), you can have a partial match, and the test will pass, but with a string, you must have the exact match to pass.

// });

//Empty Test" (Passes)
// test("App contains correct heading", () => {});


import { render, screen } from "@testing-library/react";
import App from "./App";

test("App contains correct heading", () => {
  render(<App />);
  const headingElement = screen.getByText(/learn react/i);
  expect(headingElement).toBeInTheDocument();
});