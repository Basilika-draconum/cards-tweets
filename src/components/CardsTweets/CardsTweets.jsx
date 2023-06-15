import React, { useEffect } from "react";
import styles from "./cardsTweets.module.scss";
import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { selectUsers } from "../../redux/users/usersSelector";
import { getUsersThunk } from "../../redux/users/usersThunk";

const CardsTweets = () => {
  const card = useSelector(selectUsers);
  const dispatch = useDispatch();
  const cardUser = card.map((item) => {
    return <Card item={item} />;
  });
  useEffect(() => {
    dispatch(getUsersThunk());
  }, [dispatch]);

  return (
    <main>
      <ul className={styles.background}>{cardUser}</ul>
    </main>
  );
};

export default CardsTweets;
