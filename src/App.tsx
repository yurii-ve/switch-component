import React, { useState } from "react";
import Switch from "./Switch";
import { style, classes } from "./App.st.css";
import { classes as switchVariants } from "./Switch/switch-variants.st.css";

const App: React.FC = () => {
  const [checked, setChecked] = useState(false);

  //test comment
  //another change

  return (
    <div className={style(classes.root)}>
      <Switch
        className={style(
          switchVariants.largeSwitch,
          switchVariants.secondarySwitch
        )}
        checked={checked}
        onChange={() => setChecked((checked) => !checked)}
      />
    </div>
  );
};

export default App;
