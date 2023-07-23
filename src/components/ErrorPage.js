import styles from "../styles/errorPage.module.css";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };

  return (
    <div className={styles["container"]}>
      <h1 >Error Page</h1>
      <div className={styles["info-container"]}>
        <p className={styles["info"]}>
          An error has occured. Please refresh the page or click the button to
          go back.
        </p>
        <button onClick={goBack}>Go Back</button>
      </div>
    </div>
  );
};

export default ErrorPage;
