import React, { Suspense } from "react";

import "app/App.css";
import logo from "app/logo.svg";
import Header from "components/Header";
import CommentModal from "../components/CommentModal";
const CommentsList = React.lazy(() => import("components/CommentsList"));
const TopCommenters = React.lazy(() => import("components/TopCommenters"));

function App() {
  return (
    <>
      <Header />

      <CommentModal />

      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </div>

      <Suspense fallback={<p>loading top commenters</p>}>
        <TopCommenters />
      </Suspense>

      <Suspense fallback={<p>loading all comments</p>}>
        <CommentsList />
      </Suspense>
    </>
  );
}

export default App;
