import React from "react";
import ReactDOM from "react-dom";
import { expect } from "chai";
import sinon from "sinon";
import Switch, { SwitchProps } from "./Switch";
import SwitchDriver from "./SwitchDriver";

describe("Switch Component", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
  });

  it("changes checked state on click", () => {
    const switchElement = renderSwitchComponent();

    expect(switchElement.isChecked()).to.be.false;
    switchElement.toggle();
    expect(switchElement.isChecked()).to.be.true;
  });

  it("accepts checked state", () => {
    const switchElement = renderSwitchComponent({ checked: true });

    expect(switchElement.isChecked()).to.be.true;
  });

  it("doesn't change checked state if disabled", () => {
    const switchElement = renderSwitchComponent({ disabled: true });

    expect(switchElement.isDisabled()).to.be.true;
    expect(switchElement.isChecked()).to.be.false;
    switchElement.toggle();
    expect(switchElement.isChecked()).to.be.false;
  });

  it("triggers onChange handler", () => {
    const onChange = sinon.spy();
    const switchElement = renderSwitchComponent({ onChange });

    switchElement.toggle();

    expect(onChange.calledOnce).to.be.true;
  });
});

function renderSwitchComponent(props: SwitchProps = {}) {
  const container = render(<Switch {...props} />);
  const element = new SwitchDriver(container.children[0]);

  return element;
}

function render(jsx: React.ReactElement) {
  const container = document.createElement("div");
  document.body.appendChild(container);
  ReactDOM.render(jsx, container);
  return container;
}
