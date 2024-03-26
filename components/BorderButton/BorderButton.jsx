import styles from "./borderButton.module.css";

export const BorderButton = ({ border }) => {
  return <button className={styles.button}>{border}</button>;
};
