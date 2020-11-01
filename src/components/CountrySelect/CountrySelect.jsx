import React from "react";
import { connect } from "react-redux";
import { setCenter, setCountry } from "../../store/actions";
import "./CountrySelect.css";
import { countryInfo } from "../../services/countryInfoService";

import Select from "react-select";

const countryList = [
  { label: "United Kingdom", value: "gb" },
  { label: "United States", value: "us" },
  { label: "India", value: "in" },
];

/**
 *
 * @param {setCountry,setCenter} props
 *
 * Country select - which fetches country data from rest api  (https://restcountries.eu)
 *
 * Country selection updates the country data in redux store and brings map in the viewport
 *
 * Map Center point is set , which fetches the live time of the selected country from the coordinates
 *
 */

const CountrySelect = (props) => {
  const { setCountry, setCenter } = props;

  const onChangeHandler = async (e) => {
    const countryData = await getCountryData(e);
    setCountry(countryData);
    setCenter(countryData.latlng);
  };

  const getCountryData = async (country) => {
    if (country && country.label && country.value) {
      const countryResponse = await countryInfo(country.value);
      const countryInfoData = countryResponse && countryResponse.data;
      return countryInfoData;
    }
  };

  return (
    <div className="CountrySelect">
      <Select options={countryList} onChange={onChangeHandler} />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  setCountry: (country) => setCountry(country),
  setCenter: (center) => setCenter(center),
};

export default connect(mapStateToProps, mapDispatchToProps)(CountrySelect);
