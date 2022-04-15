import React from "react";

import classes from "./Details.module.css";
import Loading from "../UI/Loading/Loading";

const Details = (props) => {
  const { ipAddress, location, timeZone, isp, loading } = props;

  const details = [
    {
      name: "IP ADDRESS",
      value: ipAddress,
    },
    {
      name: "LOCATION",
      value: `${location.city}, ${location.country}`,
    },
    {
      name: "TIMEZONE",
      value: `${timeZone.abbreviation}-${timeZone.current_time}`,
    },
    {
      name: "ISP",
      value: isp,
    },
  ];
  return (
    <div className={classes.detailsContainer}>
      {details.map((detail, index) => {
        // const IsfirstDetail =
        return (
          <div key={detail.name} className={classes.detailCard}>
            <div className={classes.detail}>
              <p>{detail.name}</p>
              {!loading ? <h2>{detail.value}</h2> : <Loading />}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Details;
