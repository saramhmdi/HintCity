import Input from "./components/Input";
import cities from "./cities.json";
import { useState } from "react";
import CityList from "./components/CityList";
function App() {
  const [hint, setHint] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    const regex = new RegExp(`^${value}`);
    const filteredList = value
      ? cities.filter((city) => regex.test(city))
      : cities;
    setFilteredCities(filteredList);
    const findCity = value ? cities.find((city) => regex.test(city)) : "";
    setHint(findCity || (value ? "No match found" : ""));
  };

  return (
    <div>
      <Input handleChange={handleChange} hint={hint} />
      <CityList cities={filteredCities} />
    </div>
  );
}

export default App;
