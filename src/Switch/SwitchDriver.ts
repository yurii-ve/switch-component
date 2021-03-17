import { classes } from "./switch.st.css";

class SwitchDriver {
  checkbox: HTMLInputElement;

  constructor(public root: Element) {
    this.checkbox = root.querySelector(`.${classes.checkbox}`)!;
  }

  toggle() {
    return this.checkbox.click();
  }

  isChecked() {
    return this.checkbox.checked;
  }

  isDisabled() {
    return this.checkbox.disabled;
  }
}

export default SwitchDriver;
