import CityDropdown from "./CityDropdown";

function App() {
  return (
    <div className="App">
      <div className="content">
        <h1>Air Quality Assessment Tool</h1>
        <h2>Choose Cities to Compare</h2>
        <div className="city-wrapper">
          <CityDropdown />
          <CityDropdown />
        </div>
      </div>
    </div>
  );
}

export default App;
