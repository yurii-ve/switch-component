import { useState, useEffect } from "react";

interface Arguments {
  checked?: boolean;
  onChange?: () => void;
}

function useSwitch(args: Arguments) {
  const [focused, setFocused] = useState(false);
  const [checked, setChecked] = useState(args.checked || false);

  useEffect(() => {
    if (typeof args.checked === "boolean") {
      setChecked(args.checked);
    }
  }, [args.checked]);

  function onChange() {
    if (args.onChange) {
      args.onChange();
    } else {
      setChecked((checked) => !checked);
    }
  }

  return {
    focused,
    checked,
    onChange,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
  };
}

export default useSwitch;
