import React from "react";

import classes from "./Details.module.css";

const Details = () => {
  const details = [
    {
      name: "IP ADDRESS",
      value: "127.0.0.1",
    },
    {
      name: "LOCATION",
      value: "Kathmandu, Nepal",
    },
    {
      name: "TIMEZONE",
      value: "UTC-05:00",
    },
    {
      name: "ISP",
      value: "World Link",
    },
  ];
  return (
    <div className={classes.detailsContainer}>
      {details.map((detail) => {
        return (
          <div key={detail.name} className={classes.detailCard}>
            <div className={classes.detail}>
              <p>{detail.name}</p>
              <h2>{detail.value}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Details;
