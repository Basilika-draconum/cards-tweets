import React, { useEffect, useState } from "react";
import styles from "./cardsTweets.module.scss";
import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { selectUsers } from "../../redux/users/usersSelector";
import { getUsersThunk } from "../../redux/users/usersThunk";

const CardsTweets = () => {
  const [list, setList] = useState([]);

  const [visibleCards, setVisibleCards] = useState(3);

  const cards = useSelector(selectUsers);
  const dispatch = useDispatch();

  const handleLoadMore = () => {
    setVisibleCards((prev) => prev + 3);
  };
  const addedCards = list.slice(0, visibleCards);

  const cardUser = addedCards.map((item) => {
    return <Card item={item} />;
  });

  useEffect(() => {
    if (list.length === 0) {
      dispatch(getUsersThunk());
    }
    setList(cards);
  }, [dispatch, list, cards]);

  return (
    <>
      <main className={styles.commonStyles}>
        {cards && <ul className={styles.background}>{cardUser}</ul>}
        {visibleCards < list.length && (
          <button
            type="button"
            className={styles.loadBtn}
            onClick={handleLoadMore}>
            Load More
          </button>
        )}
      </main>
    </>
  );
};

export default CardsTweets;
