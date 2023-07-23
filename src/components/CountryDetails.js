import React from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "../styles/countryDetails.module.css";
import { Button } from "react-bootstrap";

export const CountryDetails = () => {
  const [country, setCountry] = useState({});
  const { name } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then((res) => {
        if(!res.ok){
          navigate("./ErrorPage.js")
        }
        return res.json();
      })
      .then((result) => {
        setCountry(result[0]);
      })
  }, [name]);

  const goBackOnClick = () => {
    navigate(-1);
  };

  return (
    <div className={styles["container"]}>
      {country.name && (
        <>
          <h1>{country.name.common}</h1>
          <div className={styles["img-container"]}>
            <div className={styles["img-wrapper"]}>
              <img src={country.flags.png} alt="Flag" className={styles["img"]}/>
            </div>
            <div className={styles["img-wrapper"]}>
              <img src={country.coatOfArms.png} alt="Coat-Of-Arms" className={styles["img"]}/>
            </div>
          </div>
          <ul>
            <li className={styles["info-elements"]}>
              <strong>Population:</strong> {country.population}
            </li>
            <li className={styles["info-elements"]}>
              <strong>Area:</strong> {country.area} km²
            </li>
            <li className={styles["info-elements"]}>
              <strong>Capital:</strong>{" "}
              {!country.capital ? (
                <span>{country.name.common} does not have a capital.</span>
              ) : (
                <span>{country.capital}</span>
              )}
            </li>
          </ul>
          <Button className={styles.backButton} onClick={goBackOnClick}>
            Back to all countries
          </Button>
        </>
      )}
    </div>
  );
};
