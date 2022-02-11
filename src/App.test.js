import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("header renders with correct text", () => {
  //Create a virual DOM of desired component
  render(<App />);
  //Access the virtual DOM and query the element by role
  const headerEl = screen.getByRole("heading");
  //Assertion to look for the element in the virtual DOM using toBe matcher to test exact equality
  expect(headerEl.textContent).toBe("Testing Playground");
});

describe("test for the button", () => {
  test("button changes color when clicked", () => {
    render(<App />);
    const colorBtn = screen.getByRole("button");

    userEvent.click(colorBtn);

    expect(colorBtn).toHaveStyle({ backgroundColor: "blue" });
    expect(colorBtn.textContent).toBe("Change button color to green");
  });
});
