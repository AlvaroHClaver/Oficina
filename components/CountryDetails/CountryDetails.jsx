import styles from "./countryDetails.module.css";
import { BorderButton } from "../BorderButton/BorderButton";
import { BackArrow } from "../BackArrow/BackArrow";

export const CountryDetails = ({
  name,
  nativeName,
  population,
  region,
  subRegion,
  capital,
  topLevelDomain,
  currencies,
  language,
  borders,
}) => {
  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.h2}>{name}</h2>
      <div className={styles.textContainer}>
        <div className={styles.left}>
          <p>
            <span>Native Name: </span>
            {nativeName}
          </p>
          <p>
            <span>Population: </span>
            {population}
          </p>
          <p>
            <span>Region: </span>
            {region}
          </p>
          <p>
            <span>Sub Region: </span>
            {subRegion}
          </p>
          <p>
            <span>Capital: </span>
            {capital}
          </p>
        </div>
        <div className={styles.right}>
          <p>
            <span>Top Level Domain: </span>
            {topLevelDomain}
          </p>
          <p>
            <span>Currencies: </span>
            {currencies}
          </p>
          <p>
            <span>Leanguage: </span>
            {language?.[0].name}
          </p>
        </div>
      </div>
      <div className={styles.borderCountries}>
        <p>Border Countries: </p>
        <div className={styles.buttons}>
          {borders?.map((border, index) => {
            return <BorderButton border={border} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};
