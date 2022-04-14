import Map from "./Components/Map/Map";
import Search from "./Components/Search/Search";
import Details from "./Components/Details/Details";

import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.appContainer}>
      <div className={classes.header}>
        <h2>IP Address Tracker</h2>
        <Search />
      </div>
      <div className={classes.detailBox}>
        <Details />
      </div>
      <div className="map">
        <Map />
      </div>
    </div>
  );
}

export default App;
