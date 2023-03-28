import React from "react";
import ReducerSample from "./ReducerSample";
import { SampleProvider } from "./SampleContext";

const App: React.FC = () => {
  return (
    <SampleProvider>
      <ReducerSample />
    </SampleProvider>
  );
};

export default App;
