import React from "react";
import classNames from "classnames";
import styles from "./Switch.module.css";
import useSwitch from "./useSwitch";

export interface SwitchProps {
  checked?: boolean;
  disabled?: boolean;
  size?: "small" | "normal" | "large";
  onChange?: () => void;
  className?: string;
}

const Switch: React.FC<SwitchProps> = function Switch(props) {
  const { disabled, size = "normal" } = props;
  const { checked, focused, onChange, onBlur, onFocus } = useSwitch({
    checked: props.checked,
    onChange: props.onChange,
  });

  const className = classNames(
    {
      [styles.switch]: true,
      [styles.checked]: checked,
      [styles.disabled]: disabled,
      [styles.focused]: focused,
      [styles.small]: size === "small",
      [styles.large]: size === "large",
    },
    props.className
  );

  return (
    <div className={className}>
      <div className={styles.track}>
        <div className={styles.buttonContainer}>
          <div className={styles.buttonHoverEffect} />
          <div className={styles.button} />
        </div>
        <input
          className={styles.checkbox}
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
