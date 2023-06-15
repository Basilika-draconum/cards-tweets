import React, { useState } from "react";
import styles from "./card.module.scss";
// import user from "../../images/Hansel.png";
import logo from "../../images/Logo.png";
// import { useSelector } from "react-redux";
// import { selectUsers } from "../../redux/users/usersSelector";

const Card = ({ item }) => {
  const [newFollower, setNewFollower] = useState(false);
  // const users = useSelector(selectUsers);

  const handleFollow = () => setNewFollower(!newFollower);

  return (
    <li className={styles.card} key={item.id}>
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
          src={item.avatar}
          alt={item.user}
          width={60}
          height={60}
        />
      </div>

      <p className={styles.tweets}>{item.tweets} tweets</p>
      <p className={styles.followers}>
        {newFollower ? `${item.followers}+1` : `${item.followers}`} Followers
      </p>
      <div className={styles.wrapbtn}>
        <button
          className={newFollower ? `${styles.btnActive}` : `${styles.btn}`}
          type="button"
          onClick={handleFollow}>
          {newFollower ? "Following " : "Follow "}
        </button>
      </div>
    </li>
  );
};

export default Card;
