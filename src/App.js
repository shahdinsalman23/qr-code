


import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux"; // Import Provider from react-redux
// Import your Redux store
import store from "./redux/store";
import "../src/css/App.css";
import Landing from "./home/landing";
import SignUp from "./login/signup";
import Login from "./login/login";



function App() {
  return (
    <Provider store={store}>
      {" "}
      {/* Wrap your App with Provider */}
      <Router>
        <Routes>
          <Route path="/" exact element={<Landing/>} />
          <Route path="/signup" exact element={<SignUp />} />
          <Route path="/login" exact element={<Login />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
