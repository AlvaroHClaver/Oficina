import styles from "./backArrow.module.css";
import Image from "next/image";
import Link from "next/link";

export const BackArrow = () => {
  return (
    <Link href="/">
      {" "}
      <button className={styles.backButton}>
        <Image src="/arrow.svg" width={20} height={20} alt="backArrow" />
        <span>Back</span>
      </button>
    </Link>
  );
};
