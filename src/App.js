import MessengerCustomerChat from "react-messenger-customer-chat";
import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";
import Footer from "./components/footer/footer";
import "./App.css";
import { Navbar } from "./components/navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/main";
import NotFound from "./pages/404";
import TeamHackodisha from "./components/Team/teamHackodisha";


const loadercss = css`
  display: block;
  padding-top: 560px;
  margin-left: 48%;
  text-align: center;

  @media only screen and (max-width: 320px) {
    margin: 0 auto;
  }
  @media only screen and (min-width: 320px) and (max-width: 600px) {
    margin: 0 auto;
  }
`;

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return loading ? (
    <HashLoader color={"#ff0000"} loading={loading} css={loadercss} size={80} />
  ) : (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main">
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/team" exact component = {TeamHackodisha} />
            <Route component={NotFound} />
            
          </Switch>
        </main>
        <MessengerCustomerChat
          pageId="104646555139813"
          appId="1639085279814437"
          themeColor="#b20000"
        />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
