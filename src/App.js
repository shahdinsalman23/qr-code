import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux"; // Import Provider from react-redux
// Import your Redux store
import store from "./redux/store";
import "../src/css/App.css";
import Landing from "./home/landing";
import Login from "./login/login";
import Editinginner from "./marketing-page/Editinginner";
import Dynamicinner from "./marketing-page/Dynamicinner";
import Collaborating from "./marketing-page/Collaboratinginner";
import Links from "./Dashborad/Dashboard_Routing/Routing";
import Varietyinner from "./marketing-page/Varietyinner";
import Analytics from "./marketing-page/Analyticsinner";
import Facebook from "./marketing-page/Facebook";
import Templates from "./marketing-page/Templates";
import Static from "./marketing-page/Static";
import Bulk from "./marketing-page/Bulk";
import Custom from "./marketing-page/Custom";
import Password from "./marketing-page/Password";
import Tracking from "./marketing-page/Tracking";
import Signup from "./login/signup";
import Qrtypeone from "./generate-qr-types/qr-type-1/Qrtypeone";
import Prices from "./prices/Prices";
import Faq from "./faq/Faq";





function App() {
  return (
    <Provider store={store}>
      {" "}
      {/* Wrap your App with Provider */}
      <Router>
        <Routes>
          <Route path="/" exact element={<Landing/>} />
          <Route path="/Prices" exact element={<Prices/>} />
          <Route path="/Faq" exact element={<Faq/>} />
          <Route path="/Editing" exact element={<Editinginner/>} />
          <Route path="/Dynamic" exact element={<Dynamicinner/>} />
          <Route path="/Collaborating" exact element={<Collaborating/>} />
          <Route path="/Varietyinner" exact element={<Varietyinner/>} />
          <Route path="/Analytics" exact element={<Analytics/>} />
          <Route path="/Facebook" exact element={<Facebook/>} />
          <Route path="/Templates" exact element={<Templates/>} />
          <Route path="/Static" exact element={<Static/>} />
          <Route path="/Bulk" exact element={<Bulk/>} />
          <Route path="/Custom" exact element={<Custom/>} />
          <Route path="/Password" exact element={<Password/>} />
          <Route path="/Tracking" exact element={<Tracking/>} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/qrtypeone" exact element={<Qrtypeone />} />
           {/* All Dashboard related routes */}
           <Route path="/*" element={<Links />} />
        </Routes>
      </Router>

      
    </Provider>
  );
}

export default App;
