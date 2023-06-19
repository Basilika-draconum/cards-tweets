import React from "react";
import styles from "./card.module.scss";
import logo from "../../images/Logo.png";
import { useDispatch, useSelector } from "react-redux";
import {
  getUsersThunk,
  updateTweetByIdThunk,
} from "../../redux/users/usersThunk";
import { selectUsers } from "../../redux/users/usersSelector";

const Card = ({ item }) => {
  const users = useSelector(selectUsers);

  const dispatch = useDispatch();

  const handleToggle = (id, newFollower, followers) => {
    const obj = users.find((item) => item.id === id);
    const newObj = {
      ...obj,
      newFollower: !newFollower,
      followers: newFollower ? followers - 1 : followers + 1,
    };
    dispatch(updateTweetByIdThunk(newObj))
      .unwrap()
      .then(() => {
        dispatch(getUsersThunk());
      });
  };
  const rightFormatTweets = new Intl.NumberFormat().format(item.tweets);
  const rightFormatFollowers = new Intl.NumberFormat().format(item.followers);
  return (
    <li className={styles.card}>
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

      <p className={styles.tweets}>{rightFormatTweets} tweets</p>
      <p className={styles.followers}>{rightFormatFollowers} Followers</p>
      <div className={styles.wrapbtn}>
        <button
          className={item.newFollower ? `${styles.btnActive}` : `${styles.btn}`}
          type="button"
          onClick={() =>
            handleToggle(item.id, item.newFollower, item.followers)
          }>
          {item.newFollower ? "Following " : "Follow "}
        </button>
      </div>
    </li>
  );
};

export default Card;
