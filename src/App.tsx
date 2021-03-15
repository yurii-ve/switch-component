import React, { useState } from "react";
import Switch, { Appearance, Size, SwitchProps } from "./Switch";
import { style, classes } from "./App.st.css";

const App: React.FC = () => {
  const propsFromQueryString = getSwitchPropsFromQueryString(
    window.location.search
  );

  const [checked, setChecked] = useState(propsFromQueryString.checked);

  return (
    <div className={style(classes.root)}>
      <Switch
        checked={checked}
        disabled={propsFromQueryString.disabled}
        size={propsFromQueryString.size}
        appearance={propsFromQueryString.appearance}
        onChange={() => setChecked((checked) => !checked)}
      />
    </div>
  );
};

function getSwitchPropsFromQueryString(
  queryString: string
): Partial<SwitchProps> {
  const urlParams = new URLSearchParams(queryString);
  const sizeQueryParam = urlParams.get("size") || "";
  const appearanceQueryParam = urlParams.get("appearance") || "";

  const props: Partial<SwitchProps> = {
    checked: urlParams.get("checked") === "true",
    disabled: urlParams.get("disabled") === "true",
  };

  if (["small", "medium", "large"].includes(sizeQueryParam)) {
    props.size = sizeQueryParam as Size;
  }

  if (["primary", "secondary"].includes(appearanceQueryParam)) {
    props.appearance = appearanceQueryParam as Appearance;
  }

  return props;
}

export default App;
