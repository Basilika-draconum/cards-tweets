import React from "react";
import css from "./home.module.scss";
import tweeter from "../../images/tweeter.png";

const Home = () => {
  return (
    <main className={css.wrapper}>
      <h1 className={css.title}>Welcome to homepage!</h1>
      <img srcSet={tweeter} alt="Tweeter" width={500} className={css.picture} />
    </main>
  );
};

export default Home;
