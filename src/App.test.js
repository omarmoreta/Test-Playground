import { render, screen } from "@testing-library/react";
import App from "./App";

test("header renders with correct text", () => {
  //Create a virual DOM of desired component
  render(<App />);
  //Access the virtual DOM and query the element by role
  const headerEl = screen.getByRole("heading");
  //Assertion to look for the element in the virtual DOM using toBe matcher to test exact equality
  expect(headerEl.textContent).toBe("Testing Playground");
});
