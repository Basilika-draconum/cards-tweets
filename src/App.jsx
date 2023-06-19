import { Route, Routes } from "react-router-dom";

import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import { lazy } from "react";

const Home = lazy(() => import("./components/Home/Home"));
const CardsTweets = lazy(() => import("./components/CardsTweets/CardsTweets"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/tweets" element={<CardsTweets />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
