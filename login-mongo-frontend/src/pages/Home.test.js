import React from "react";
import { act } from "@testing-library/react";
import { createRoot } from "react-dom/client";
import Home from "./Home";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  container.remove();
  container = null;
});

it("renders with or without a name", () => {
  const root = createRoot(container);

  act(() => {
    root.render(<Home />);
  });
  expect(container.textContent).toBe("Hey, stranger");

  act(() => {
    root.render(<Home name="Jenny" />);
  });
  expect(container.textContent).toBe("Hello, Jenny!");

  act(() => {
    root.render(<Home name="Margaret" />);
  });
  expect(container.textContent).toBe("Hello, Margaret!");
});
