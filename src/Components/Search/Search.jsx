import React from 'react'

import arrowIcon from '../../Assets/Icons/icon-arrow.svg'

import classes from "./Search.module.css"

const Search = () => {
  return (
    <div>
        <form action="" className={classes.search}>
            <input type="text" className={classes.searchBar} placeholder="Search for any IP address or domain"/>
            <button type="submit" className={classes.searchBtn}><img src={arrowIcon} alt="go" /></button>
        </form>
    </div>
  )
}

export default Search