import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import styles from '../styles/country.module.css';

const Country = ({
    name,
    capital,
    area,
    population,
    flags
}) => {
    return(
        <Card className={styles["container"]}>
            <Card.Img variant="top" src={flags.png} className={styles["flag"]}/>
            <Card.Body>
              <Card.Title>{name.official}</Card.Title>
              <Card.Text>
                {!capital ? <span>{name.official} does not have a capital. </span>
                          : <span>Capital:  <strong>{capital}</strong>. </span>}
              </Card.Text>
            </Card.Body>
            <Link to={`/name/${name.official}`} className={styles["btn"]}>
              <Button>Details</Button>
            </Link>
          </Card>
    );
};

export default Country;