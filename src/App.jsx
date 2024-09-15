import Input from "./Input";
import cities from "./cities.json";
import { useState } from "react";
function App() {
  const [hint, setHint] = useState("");
  const handleChange = (e) => {
    const value = e.target.value;
    const regex = new RegExp(`^${value}`);
    const findCity = value ? cities.find((city) => regex.test(city)) : "";
    setHint(findCity || (value ? "No match found" : ""));
  };

  return (
    <div>
      <Input handleChange={handleChange} hint={hint} />
    </div>
  );
}

export default App;
