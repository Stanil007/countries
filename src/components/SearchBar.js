import { useState } from "react";
import { useCountryContext } from "../CountryContext";
import { useNavigate } from "react-router-dom";
import styles from "../styles/searchBar.module.css";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const { countries } = useCountryContext();
  const navigate = useNavigate();

  const getFilterCountries = (query, countries) => {
    if (!query) {
      return [];
    }
    const lowerCaseQuery = query.toLowerCase();
    return countries.filter((c) =>
      c.name.official.toLowerCase().includes(lowerCaseQuery)
    );
  };

  const filteredCountries = getFilterCountries(query, countries);

  const onChangeHandler = (e) => {
    setQuery(e.target.value);
  };

  const onSelectedCountryClick = (countryName) => {
    setQuery("");
    navigate(`/name/${countryName}`);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for country"
        onChange={onChangeHandler}
        value={query}
      />
      <ul className={styles["result"]}>
        {filteredCountries.map((c) => (
          <li
            key={c.name.official}
            onClick={() => onSelectedCountryClick(c.name.official)}
            className={styles["item"]}
          >
            {c.name.official}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
