


import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux"; // Import Provider from react-redux
// Import your Redux store
import store from "./redux/store";
import "../src/css/App.css";
import Landing from "./home/landing";
import SignUp from "./login/signup";
import Login from "./login/login";
import Editinginner from "./marketing-page/Editinginner";
import Dynamicinner from "./marketing-page/Dynamicinner";
import Collaborating from "./marketing-page/Collaboratinginner";



function App() {
  return (
    <Provider store={store}>
      {" "}
      {/* Wrap your App with Provider */}
      <Router>
        <Routes>
          <Route path="/" exact element={<Landing/>} />
          <Route path="/Editing" exact element={<Editinginner/>} />
          <Route path="/Dynamic" exact element={<Dynamicinner/>} />
          <Route path="/Collaborating" exact element={<Collaborating/>} />
          <Route path="/signup" exact element={<SignUp />} />
          <Route path="/login" exact element={<Login />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
