import MessengerCustomerChat from 'react-messenger-customer-chat';
import Footer from './components/footer/footer'
import "./App.css";
import { Navbar } from "./components/navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/main";

function App() {
  return (
    <Router>
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
