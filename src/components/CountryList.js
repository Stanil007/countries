import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Country from "./Country";
import { useCountryContext } from "../CountryContext";
import styles from "../styles/countryList.module.css";

const CountryList = () => {
  const { countries } = useCountryContext();

  return (
    <div>
      <Row xs={1} md={4} className="g-4">
        {Array.from({ length: 4 }).map(() =>
          countries.map((c) => (
            <Col key={c.name.official} className={styles["container"]}>
              <Country {...c} />
            </Col>
          ))
        )}
      </Row>
    </div>
  );
};

export default CountryList;
