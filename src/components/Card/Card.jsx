import React, { useState } from "react";
import styles from "./card.module.scss";
import user from "../../images/Hansel.png";
import logo from "../../images/Logo.png";
import { useSelector } from "react-redux";
import { selectUsers } from "../../redux/users/usersSelector";

const Card = ({ item }) => {
  const [newFollower, setNewFollower] = useState(true);
  const users = useSelector(selectUsers);

  const handleFollow = () => setNewFollower(!newFollower);
  console.log(users[0]);

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
          src={user}
          alt="User"
          width={60}
          height={60}
        />
      </div>

      <p className={styles.tweets}>{item.tweets} tweets</p>
      <p className={styles.followers}>
        {newFollower ? `${item.followers}` : `${item.followers}+1`} Followers
      </p>
      <div className={styles.wrapbtn}>
        <button
          className={newFollower ? `${styles.btn}` : `${styles.btnActive}`}
          type="button"
          onClick={handleFollow}>
          {newFollower ? "Follow " : "Following "}
        </button>
      </div>
    </li>
  );
};

export default Card;
