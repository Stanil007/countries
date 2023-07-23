import styles from "../styles/about.module.css";

const About = () => {
  return (
    <div className={styles["container"]}>
      <h1>Demo web site</h1>
      <div className={styles["info-container"]}>
        <p className={styles["info"]}>
           Hello, my name is Stanil Kalaydzhiev and this is demo site providing basic info
          about the countries around the world. I will keep improving it by adding different functionalities.
          I have used React for the Front-End and the API service provider is "https://restcountries.com/#rest-countries".
          </p>
          <p className={styles["info"]}>If you would like to see my certifications and work experience, you can find me on <a href="https:/www.linkedin.com/in/stan-kalaydzhiev-9b3b32263" target="_blank">LinkedIn</a>.</p>
          <p className={styles["info"]}>Thank you for visiting.</p>
      </div>
    </div>
  );
};

export default About;
