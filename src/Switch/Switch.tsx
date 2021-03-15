import React from "react";
import { style, classes } from "./switch.st.css";
import useSwitch from "./useSwitch";

export type Size = "small" | "medium" | "large";
export type Appearance = "primary" | "secondary";

export interface SwitchProps {
  checked?: boolean;
  disabled?: boolean;
  appearance?: Appearance;
  size?: Size;
  onChange?: () => void;
  className?: string;
}

const Switch: React.FC<SwitchProps> = function Switch(props) {
  const { disabled, appearance = "primary", size = "medium" } = props;
  const { checked, focused, onChange, onBlur, onFocus } = useSwitch({
    checked: props.checked,
    onChange: props.onChange,
  });

  return (
    <div
      className={style(
        classes.root,
        { checked, disabled, focused, size, appearance },
        props.className,
        "Switch"
      )}
    >
      <div className={style(classes.track)}>
        <div className={style(classes.buttonContainer)}>
          <div className={style(classes.buttonHoverEffect)} />
          <div className={style(classes.button)} />
        </div>
        <input
          className={style(classes.checkbox)}
          checked={checked}
          disabled={disabled}
          type="checkbox"
          role="switch"
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </div>
    </div>
  );
};

export default Switch;
