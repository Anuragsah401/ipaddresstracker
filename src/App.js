import React, { useEffect } from "react";

import Map from "./Components/Map/Map";
import Search from "./Components/Search/Search";
import Details from "./Components/Details/Details";
import axios from "axios";

import classes from "./App.module.css";

const App = () => {
  const [ip, setIp] = React.useState("");
  const [ipAddress, setIpAddress] = React.useState("");
  const [location, setLocation] = React.useState({});
  const [timeZone, setTimeZone] = React.useState("");
  const [isp, setIsp] = React.useState("");
  const [long, setLong] = React.useState("");
  const [lat, setLat] = React.useState("");
  const [error, setError] = React.useState("");

  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    axios
      .get(
        `https://ipgeolocation.abstractapi.com/v1/?api_key=b284f363f5c3488b9a732a386128ad5b&ip_address=${ip}`
      )
      .then((response) => {
        setIpAddress(response.data.ip_address);
        setLocation({ city: response.data.city, country: response.data.country });
        setTimeZone(response.data.timezone);
        setIsp(response.data.connection.isp_name);
        setLoading(false);
        setLong(response.data.longitude);
        setLat(response.data.latitude);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [ip]);

  return (
    <div className={classes.appContainer}>
      <div className={classes.header}>
        <h2>IP Address Tracker</h2>
        <Search setIp={setIp} />
      </div>
      <div className={classes.detailBox}>
        <Details
          ipAddress={ipAddress}
          location={location}
          timeZone={timeZone}
          isp={isp}
          loading={loading}
        />
      </div>
      <div className={classes.map}>
        <Map lat={lat} long={long} />
      </div>
    </div>
  );
};

export default App;
