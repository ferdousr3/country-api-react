import React, { useEffect, useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((country) => setCountries(country));
  }, []);
  return (
    <div className="container mx-auto my-5">
      <div className="row gx-">
        {countries.map((country) => (
          <div
            key={country.cca3}
            className="col-12 col-sm-12 col-md-4 col-lg-3"
          >
            <Country country={country}></Country>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countries;
