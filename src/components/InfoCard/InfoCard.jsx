import React from "react";

import Draggable from "../DraggablePanel/draggablePanel";
import "./InfoCard.css";
import Timebox from "../TimeBox/timeBox";
import { connect } from "react-redux";
import { countryInfo } from "../../services/countryInfoService";

/**
 *
 * @param {activeCountry} props
 *
 * Info card - shows regional info of the chosen country
 * Info shown - country native name , currency , currency symbol
 * flag , population , area in sqmt, etc
 *
 * Live Time of selected region - Timebox component
 *
 * */
const InfoCard = (props) => {
  const { activeCountry } = props;

  return activeCountry && activeCountry.name ? (
    <Draggable x={200} y={50}>
      <div className="infoCard">
        <div className="infoCardTitle">
          <span className="countryTitle">{activeCountry.name}</span>
          <span>
            <img
              src={activeCountry.flag}
              className="countryFlag"
              alt={activeCountry.alpha2Code}
            ></img>
          </span>
        </div>
        <div className="infoCardBody">
          {countryInfo && (
            <React.Fragment>
              <p>
                <span>Native Name : {activeCountry.nativeName}</span>
              </p>
              <p>
                <span>Region : {activeCountry.region}</span>
              </p>
              <p>
                <span>Sub-Region : {activeCountry.subregion}</span>
              </p>
              <p>
                <span>
                  Area : {activeCountry.area} km<sup>2</sup>
                </span>
              </p>
              <p>
                <span>Population : {activeCountry.population}</span>
              </p>
              <p>
                <span>Capital : {activeCountry.capital}</span>
              </p>
              <p>
                <span>Currency : {activeCountry.currencies[0].name}</span>
              </p>
              <p>
                <span>Calling Code : {activeCountry.callingCodes}</span>
              </p>
              <p>
                <span>
                  Currency Symbol : {activeCountry.currencies[0].symbol}
                </span>
              </p>
              <p>
                <span>
                  Languages :{" "}
                  {activeCountry.languages.map((l) => {
                    return (
                      <small key={l.name} className="chipStyle">
                        {l.name}
                      </small>
                    );
                  })}
                </span>
              </p>
              <p>
                <span>
                  Languages :{" "}
                  {activeCountry.timezones.map((l, i) => {
                    return (
                      <small key={i} className="chipStyle">
                        {l}
                      </small>
                    );
                  })}
                </span>
              </p>
            </React.Fragment>
          )}
        </div>
        {/* Time shown of the active country - fetched using coordinates */}
        <Timebox
          longitude={activeCountry.latlng[1]}
          latitude={activeCountry.latlng[0]}
        ></Timebox>
      </div>
    </Draggable>
  ) : null;
};

const mapStateToProps = (state) => ({
  activeCountry: state.countrySelector,
});

export default connect(mapStateToProps)(InfoCard);
