import React, { useState } from "react";
import styles from "./card.module.scss";
import user from "../../images/Hansel.png";
import logo from "../../images/Logo.png";

const Card = () => {
  const [newFollower, setNewFollower] = useState(true);

  const handleFollow = () => setNewFollower(!newFollower);

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
      <div className={styles.wrapimage}>
        <img
          className={styles.image}
          src={user}
          alt="User"
          width={60}
          height={60}
        />
      </div>

      <p className={styles.tweets}>777 tweets</p>
      <p className={styles.followers}>
        {newFollower ? "100,500 " : "100,501 "}Followers
      </p>
      <div className={styles.wrapbtn}>
        <button
          className={newFollower ? `${styles.btn}` : `${styles.btnActive}`}
          type="button"
          onClick={handleFollow}>
          {newFollower ? "Follow " : "Following "}
        </button>
      </div>
    </div>
  );
};

export default Card;
