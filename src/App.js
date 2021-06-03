import MessengerCustomerChat from 'react-messenger-customer-chat';
import { useState, useEffect } from "react";
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";
import Footer from './components/footer/footer'
import "./App.css";
import { Navbar } from "./components/navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/main";
import { Helmet } from 'react-helmet';

const loadercss = css`
 display: block;
 padding-top: 560px;
 margin-left: 48%;
 text-align: center;

 @media only screen and (max-width: 320px) {
    margin: 0 auto;
  }
  @media only screen and (min-width: 320px) and (max-width: 600px){
    margin: 0 auto;
  }
`

function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() =>{
      setLoading(false);
    }, 4000)
  }, [])

  return (
      loading ?
        <HashLoader
         color={"#ff0000"}
         loading={loading}
         css={loadercss}
         size={80}
         />

      :
      <Router>

        <Helmet>
          <meta charSet="UTF-8" />
          <title>Hackodisha 2021 hackathon by Webwiz NIT Rourkela</title>
          <meta name="description" content="Hackodisha 2021 hackathon organized by Webwiz NIT Rourkela" />
          <meta name="viewport" content="width= device width , initial-scale=1" />
          <meta name="keywords" content="Hackodisha,Hackathon,NIT Rourkela, Odisha, Hackathon2021,India, Developers , Webwiz"/>
        </Helmet>

        <div className="App">
          <Navbar />
          <div className="main">
            <Route path="/" exact component={Main} />
          </div>
        <MessengerCustomerChat
          pageId="104646555139813"
          appId="1639085279814437"
          themeColor="#b20000"
        />
        <Footer/>
        </div>
      </Router>

  );
}

export default App;
