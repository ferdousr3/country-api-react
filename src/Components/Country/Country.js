import React from "react";

const Country = (props) => {
  const { name, flags, region, population, capital } = props.country;
  const languages = props.country.languages;
  let countryLanguage = [];

  for (const key in languages) {
    if (languages.hasOwnProperty(key)) {
      // countryLanguage.push(languages[key]);
      countryLanguage += ` ${languages[key]}`;
    }
  }
  // console.log(name.common,'_', countryLanguage);
  return (
    <div className="m-2 border p-3 rounded-3 shadow-sm">
      <img width={150} height={75} src={flags.png} alt={name.common} />
      <div className="pt-2">
        <h6 className="m-0">
          <span className="fw-bold">Name: </span> <small>{name.common}</small>
        </h6>
        <h6 className="m-0">
          <span className="fw-bold">Region: </span> {region}
        </h6>
        <h6 className="m-0">
          <span className="fw-bold">Population:</span> {population}
        </h6>
        <h6 className="m-0">
          <span className="fw-bold">Capital: </span> {capital}
        </h6>
        <h6 className="m-0">
          <span className="fw-bold">Language: </span> {countryLanguage}
        </h6>
      </div>
    </div>
  );
};

export default Country;
