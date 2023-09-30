import { Link } from "react-router-dom";
import "./index.css";

import Home from "./homePage";

export default (props) => {
  return (
    <div className="app">
      <Home />
      <Link to={"jobs"} reloadDocument={true}></Link>
    </div>
  );
};
