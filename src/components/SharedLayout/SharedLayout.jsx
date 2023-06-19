import React, { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import css from "./sharedLayout.module.scss";

export const SharedLayout = () => {
  return (
    <>
      <header className={css.header}>
        <nav className={css.headerNavigation}>
          <NavLink to="/" className={css.headerLink}>
            Home
          </NavLink>
          <NavLink to="/tweets" className={css.headerLink}>
            Tweets
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
