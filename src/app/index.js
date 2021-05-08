import React from "react";

import "app/App.css";
import logo from "app/logo.svg";
import Header from "components/Header";
import CommentModal from "components/CommentModal";
import CommentsList from "components/CommentsList";
import TopCommenters from "components/TopCommenters";

function App() {
  return (
    <>
      <Header />

      <CommentModal />

      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </div>

      <TopCommenters />

      <CommentsList />
    </>
  );
}

export default App;
