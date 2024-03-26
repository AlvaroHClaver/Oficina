"use client";
import { Card } from "../components/Card/Card";
import styles from "./home.module.css";
import { useState, useEffect } from "react";

export default function Home() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `/api/country`,
        {
          cache: "no-store",
        }
      );

      const data = await response.json();
      setCountries(data);
    }
    fetchData();
  }, []);
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {countries.map((country, index) => (
          <Card
            imagePath={country.flag}
            country={country.name}
            region={country.region}
            population={country.population}
            capital={country.capital}
            code={country.code}
            key={index}
          />
        ))}
      </div>
    </main>
  );
}
