import React from "react";
import styles from "./cardsTweets.module.scss";
import Card from "../Card/Card";

const CardsTweets = () => {
  return (
    <main className={styles.background}>
      {/* <h1>CardsTweets</h1> */}
      <Card />
    </main>
  );
};

export default CardsTweets;
