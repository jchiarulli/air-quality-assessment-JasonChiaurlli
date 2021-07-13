const CityDataCard = (props) => {
  let cityData = null;
  if (props.cityData) {
    cityData = props.cityData;
  }

  return (
    <div className="city-data">
      {cityData ? (
        cityData.map((test) => (
          <div key={test.id}>
            <p className="city-data-name">Name of Test: {test.name}</p>
            <p>Entity: {test.entity}</p>
            <p>Country: {test.country}</p>
            <div>
              Sources:
              {test.sources.map((source) => (
                <div
                  key={
                    source.id !== undefined
                      ? source.id
                      : source.name + Math.random().toString()
                  }
                  className="nested-data"
                >
                  <p>Name: {source.name}</p>
                </div>
              ))}
            </div>
            <p>
              Mobile Location:{" "}
              {test.isMobile !== undefined ? test.isMobile.toString() : ""}
            </p>
            <p>
              Previous Analysis:{" "}
              {test.isAnalysis !== undefined ? test.isAnalysis.toString() : ""}
            </p>
            <div>
              Parameters:
              {test.parameters.map((parameter) => (
                <div key={parameter.id} className="nested-data">
                  <p>Name: {parameter.displayName}</p>
                  <p>Unit: {parameter.unit}</p>
                  <p>Average: {parameter.average}</p>
                  <p>Count: {parameter.count}</p>
                  <p>Last Value: {parameter.lastValue}</p>
                  <p>Last Updated: {parameter.lastUpdated}</p>
                  <p>First Updated: {parameter.firstUpdated}</p>
                </div>
              ))}
            </div>
            <p>Sensor Type: {test.sensorType}</p>
            <div>
              Coordinates:
              <div className="nested-data">
                <p>Latitude: {test.coordinates.latitude}</p>
                <p>Longitude: {test.coordinates.longitude}</p>
              </div>
            </div>
            <p>Measurements: {test.measurements}</p>
            <p>Last Updated: {test.lastUpdated}</p>
            <p>First Updated: {test.firstUpdated}</p>
            <hr />
          </div>
        ))
      ) : (
        <div>
          <p className="city-data-name">Name of Test:</p>
          <p>Entity:</p>
          <p>Country:</p>
          <div>
            Sources:
            <div className="nested-data">
              <p>Name:</p>
            </div>
          </div>
          <p>Mobile Location:</p>
          <p>Previous Analysis:</p>
          <div>
            Parameters:
            <div className="nested-data">
              <p>Name:</p>
              <p>Unit:</p>
              <p>Average:</p>
              <p>Count:</p>
              <p>Last Value:</p>
              <p>Last Updated:</p>
              <p>First Updated:</p>
            </div>
          </div>
          <div>
            Coordinates:
            <div className="nested-data">
              <p>Latitude:</p>
              <p>Longitude:</p>
            </div>
          </div>
          <p>Measurements:</p>
          <p>Last Updated:</p>
          <p>First Updated:</p>
        </div>
      )}
    </div>
  );
};

export default CityDataCard;
