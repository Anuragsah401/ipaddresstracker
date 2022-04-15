import React from "react";

// import arrowIcon from "../../Assets/Icons/icon-arrow.svg";

import classes from "./Search.module.css";
import IconArrow from "../../Assets/Icons/IconArrow";

const Search = (props) => {
  const [ipAddress, setIpAddress] = React.useState("");

  const submit = (e) => {
    e.preventDefault();
    if (ipAddress) {
      props.setIp(ipAddress);
    }
  };

  // console.log(data);

  return (
    <div>
      <form action="" onSubmit={submit} className={classes.search}>
        <input
          required="assd"
          onChange={(e) => setIpAddress(e.target.value.trim())}
          type="text"
          className={classes.searchBar}
          placeholder="Search for any IP address or domain"
        />
        <button type="submit" className={classes.searchBtn}>
          <IconArrow className={classes.searchBtnIcon} />
        </button>
      </form>
    </div>
  );
};

export default Search;
