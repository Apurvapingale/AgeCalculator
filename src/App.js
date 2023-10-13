import { useState } from "react";
import Title from "./components/Title";
import Main from "./components/Main";

function App() {
  const [date, setDate] = useState("");
  const [age, setAge] = useState(null);

  return (
    <div className="App">
      <Title />
      <Main date={date} setDate={setDate} age={age} setAge={setAge} />
    </div>
  );
}

export default App;
