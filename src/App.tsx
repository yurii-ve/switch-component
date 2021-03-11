import React, { useState } from "react";
import Switch from "./Switch";
import { style, classes } from "./App.st.css";

const App: React.FC = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className={style(classes.root)}>
      <Switch
        checked={checked}
        onChange={() => setChecked((checked) => !checked)}
      />
    </div>
  );
};

export default App;
