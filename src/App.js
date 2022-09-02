import { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Header from "./components/Header";

import { getUserAuth } from "./actions";

function App(props) {
  
  useEffect(() => {
    props.getUserAuth();
  } , []);
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getUserAuth: () => dispatch(getUserAuth())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
