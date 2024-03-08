// import React, { useState } from "react";
import React from "react";
import ReactDOM from "react-dom";
import { Player3 } from "./component/home.jsx";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
// import Player3 from "./component/home.jsx";

ReactDOM.render(<Player3 />, document.getElementById("app"));
