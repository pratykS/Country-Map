import React from "react";
import Topbar from "./Topbar/Topbar";
import Sidebar from "./Sidebar/Sidebar";
import Map from "./Map/Map";
import CSelect from "./CountrySelect/CountrySelect";
import InfoCard from "./InfoCard/InfoCard";

/**
 *
 * App Container - contains the component
 *
 */
const App = () => (
  <div>
    <Topbar></Topbar>
    <Sidebar></Sidebar>
    <CSelect></CSelect>
    <InfoCard></InfoCard>
    <Map></Map>
  </div>
);

export default App;
