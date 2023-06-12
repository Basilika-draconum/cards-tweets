import React from "react";
import styles from "./card.module.scss";
import user from "../../images/user.png";
import logo from "../../images/Logo.png";

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.background}>
        <img
          className={styles.logo}
          src={logo}
          alt="Logo"
          width={76}
          height={22}
        />
      </div>

      <img
        className={styles.image}
        src={user}
        alt="User"
        width={80}
        height={80}
      />
      <p className={styles.tweets}>777 tweets</p>
      <p className={styles.followers}>100,500 Followers</p>
      <div className={styles.wrapbtn}>
        <button className={styles.btn} type="button">
          Follow
        </button>
      </div>
    </div>
  );
};

export default Card;
