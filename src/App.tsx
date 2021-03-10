import React, { useState } from "react";
import Switch from "./Switch";
import styles from "./App.module.css";

const App: React.FC = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className={styles.app}>
      <Switch
        checked={checked}
        onChange={() => setChecked((checked) => !checked)}
      />
    </div>
  );
};

export default App;
