import { Link } from "react-router-dom";
import styles from "../styles/header.module.css";
import SearchBar from "./SearchBar";

const Header = () => {
  

  return (
    <div className={styles["topnav"]}>
      <Link to={`/`}>Home</Link>
      <Link to={`/about`}>About</Link>
      <SearchBar/>
    </div>
  );
};
        


export default Header;
