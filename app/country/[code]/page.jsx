import styles from "./page.module.css";
import { CountryDetails } from "../../../components/CountryDetails/CountryDetails";
import { BackArrow } from "@/components/BackArrow/BackArrow";
import data from "./../../../data.json";

export async function generateStaticParams() {
  return data.map((country) => {
    code: country.numericCode;
  });
}

const getCountryDetails = async (code) => {
  const selectedCountry = data.find((country) => country.numericCode == code);
  const borderCodes = selectedCountry.borders;
  const borderCountriesNames = data
    .filter((country) => borderCodes?.includes(country.alpha3Code))
    .map((country) => country.name);
  return {
    ...selectedCountry,
    borderCountriesNames,
  };
};

export default async function Details({ params }) {
  const country = await getCountryDetails(params.code);
  return (
    <main className={styles.main}>
      <div className={styles.backContainer}>
        <BackArrow />
      </div>
      <div className={styles.innerContainer}>
        <img className={styles.imageFlag} src={country.flags.svg} alt="flag" />
        <CountryDetails
          name={country?.name}
          nativeName={country?.nativeName}
          population={country?.population}
          region={country?.region}
          subRegion={country?.subregion}
          capital={country.capital}
          topLevelDomain={country.topLevelDomain?.[0]}
          currencies={country.currencies?.[0].name}
          language={country?.languages}
          borders={country?.borderCountriesNames}
        />
      </div>
    </main>
  );
}
