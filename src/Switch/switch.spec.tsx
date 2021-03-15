import React from "react";
import ReactDOM from "react-dom";
import { expect } from "chai";
import sinon from "sinon";
import { classes } from "./switch.st.css";
import Switch from "./Switch";

describe("Switch Component", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
  });

  it("changes checked state on click", () => {
    const container = render(<Switch />);
    const input = container.querySelector<HTMLInputElement>(
      `.${classes.checkbox}`
    );

    expect(input?.checked).to.be.false;
    input?.click();
    expect(input?.checked).to.be.true;
  });

  it("accepts checked state", () => {
    const container = render(<Switch checked={true} />);
    const input = container.querySelector<HTMLInputElement>(
      `.${classes.checkbox}`
    );

    expect(input?.checked).to.be.true;
  });

  it("doesn't change checked state if disabled", () => {
    const container = render(<Switch disabled />);
    const input = container.querySelector<HTMLInputElement>(
      `.${classes.checkbox}`
    );

    expect(input?.checked).to.be.false;
    input?.click();
    expect(input?.checked).to.be.false;
  });

  it("triggers onChange handler", () => {
    const changeHandler = sinon.spy();
    const container = render(<Switch onChange={() => changeHandler()} />);
    const input = container.querySelector<HTMLInputElement>(
      `.${classes.checkbox}`
    );

    input?.click();

    expect(changeHandler.calledOnce).to.be.true;
  });
});

function render(jsx: React.ReactElement) {
  const container = document.createElement("div");
  document.body.appendChild(container);
  ReactDOM.render(jsx, container);
  return container;
}
