import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Sign from "./pages/auth/Sign";
import Homepage from "./pages/homepage/Homepage";
import ReportPage from "./pages/report/ReportPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/sign-in" component={Sign} />
        <Route exact path="/report" component={ReportPage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
