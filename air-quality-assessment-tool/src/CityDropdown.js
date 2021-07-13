import CityDataCard from "./CityDataCard";
import { useState, useEffect } from "react";

const CityDropdown = () => {
  const [cities, setCities] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [cityData, setCityData] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    let numberOfCitiesFound;

    fetch(
      "https://u50g7n0cbj.execute-api.us-east-1.amazonaws.com/v2/cities?limit=100&page=1&offset=0&sort=asc&order_by=city",
      { signal: abortCont.signal }
    )
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch the cities");
        }
        return res.json();
      })
      .then((data) => {
        numberOfCitiesFound = data.meta.found;

        fetch(
          `https://u50g7n0cbj.execute-api.us-east-1.amazonaws.com/v2/cities?limit=${numberOfCitiesFound}&page=1&offset=0&sort=asc&order_by=city`,
          { signal: abortCont.signal }
        )
          .then((res) => {
            if (!res.ok) {
              throw Error("Could not fetch the cities");
            }
            return res.json();
          })
          .then((data) => {
            const cities = data.results.reduce((acc, result) => {
              acc.push(result.city);

              return acc;
            }, []);

            const filteredCities = [];
            cities.forEach((city) => {
              city = city
                .toLowerCase()
                .replace(/(^|\/|-|\s)(\S)/g, (s) => s.toUpperCase());
              if (!filteredCities.includes(city) && /\p{L}/gu.test(city)) {
                filteredCities.push(city);
              }
            });

            setCities(filteredCities);
            setIsPending(false);
            setError(null);
          });
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setIsPending(false);
          setError(err.message);
        }
      });

    return () => abortCont.abort();
  }, []);

  useEffect(() => {
    const abortCont = new AbortController();

    if (selectedCity) {
      fetch(
        `https://u50g7n0cbj.execute-api.us-east-1.amazonaws.com/v2/locations?limit=100&page=1&offset=0&sort=desc&radius=1000&city=${selectedCity}&order_by=lastUpdated&dumpRaw=false`,

        { signal: abortCont.signal }
      )
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch the data for that city");
          }
          return res.json();
        })
        .then((data) => {
          setCityData(data.results);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setIsPending(false);
            setError(err.message);
          }
        });
    }

    return () => abortCont.abort();
  }, [selectedCity]);

  const handleCitySelection = (e) => {
    setSelectedCity(e.target.value);
  };

  return (
    <div className="city-dropdown">
      {!isPending && !error && (
        <select onChange={handleCitySelection}>
          <option value="⬇️ Select a city ⬇️"> -- Select a city -- </option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      )}
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      <CityDataCard cityData={cityData} />
    </div>
  );
};

export default CityDropdown;
