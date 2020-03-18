import React from "react";
import { SocialIcon } from "react-social-icons";
import { MdCall } from "react-icons/md";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Logo from "./images/logo.png";
import Home from "./Main/Home";
import AboutUs from "./Main/AboutUs";
import ApplyOnline from "./Main/ApplyOnline";
import ContactUs from "./Main/ContactUs";

function App() {
  return (
    <div>
      <Router>
        <div className="pageLoader loader" style={{ display: "none" }}>
          <div className="pageLoaderBg"></div>
          <div className="pageloaderGif">
            <img src="/img/pageloader.gif" alt="" className="" />
          </div>
        </div>
        <div className="header">
          <div className="topheader">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="socialtop">
                    <div className="socinfo">
                      <SocialIcon
                        network="facebook"
                        style={{
                          width: "30px",
                          height: "30px",
                          float: "left"
                        }}
                      />
                      <a href="#" className="scialtxt">
                        Like Us on Facebook
                      </a>
                    </div>
                    <div className="socinfo">
                      <MdCall
                        style={{
                          color: "rgb(59, 89, 152)",
                          width: "30px",
                          height: "30px",
                          float: "left"
                        }}
                      />
                      <a href="tel:+61 423 296 250" className="scialtxt">
                        Call: +61 423 296 250
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="topright">
                    <span>
                      New Identity Documents 1 July 2018{" "}
                      <a href="/blogs/view/3"> Read more</a>{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="navheader">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="logo">
                    <Link to="/">
                      <img src={Logo} border="0" alt="" />
                    </Link>
                  </div>
                </div>
                <div className="col-md-8 padspce">
                  <div className="topnavdiv">
                    <nav className="navbar">
                      <div className="navbar-header">
                        <button
                          type="button"
                          className="navbar-toggle collapsed"
                          data-toggle="collapse"
                          data-target="#navbar"
                          aria-expanded="false"
                          aria-controls="navbar"
                        >
                          <span className="sr-only">Toggle navigation</span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                        </button>
                      </div>
                      <div id="navbar" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                          <li>
                            <Link to="/">Home</Link>
                          </li>
                          <li>
                            <Link to="/AboutUs">About Us</Link>
                          </li>
                          <li>
                            <Link to="/ApplyOnline">Apply</Link>
                          </li>

                          {/* <li>
                            <a href="/pages/view/5/track">Track</a>
                          </li>
                          <li>
                            <a href="/pages/view/6/verify">Verify</a>
                          </li>
                          <li>
                            <a href="/faq">FAQ</a>
                          </li> */}
                          <li>
                            <Link to="/ContactUs">Contact Us</Link>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Switch>
          <Route exact path="/" component={Home}>
            <Home />
          </Route>
          <Route path="/AboutUs" component={AboutUs}>
            <AboutUs />
          </Route>
          <Route path="/ApplyOnline" component={ApplyOnline}>
            <ApplyOnline />
          </Route>
          <Route path="/ContactUs" component={ContactUs}>
            <ContactUs />
          </Route>
        </Switch>
        <div className="footerfull">
          <div className="container">
            <div className="col-md-12">
              <div className="col-md-5">
                <div className="footerhead">
                  <h5>Contact Us</h5>
                  <p>
                    <i className="fa fa-user icnpads" aria-hidden="true"></i>{" "}
                    Building 28, 266 Osborne Avenue, Clayton South VIC 3169,
                    Australia{" "}
                  </p>
                  <p>
                    <i
                      className="fa fa-envelope-o icnpads"
                      aria-hidden="true"
                    ></i>
                    hamud@ondemandchecks.com &nbsp; &nbsp;{" "}
                    <i className="fa fa-phone icnpads" aria-hidden="true"></i>{" "}
                    Mobile: +61 423 296 250
                  </p>
                  <p>
                    <i className="fa fa-phone icnpads" aria-hidden="true"></i>{" "}
                    Phone: p. 1300 85 65 25 f. (03) 9551 1166
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="footerhead">
                  <h5>Links</h5>
                  <div className="foterlinks">
                    <ul>
                      <li>
                        <a href="/pages/view/9/privacy-policy">
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a href="/pages/view/7/terms-conditions">
                          Terms &amp; Conditions
                        </a>
                      </li>
                      <li>
                        <Link to="/AboutUs">About Us</Link>
                      </li>
                      <li>
                        <a href="/blogs">Police Checks Blog</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="followusdiv">
                  <h5>follow us</h5>
                  <div className="followlinks">
                    <ul>
                      <li>
                        <a href="#">
                          <i
                            className="fa fa-facebook-official"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i
                            className="fa fa-twitter-square"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-youtube" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="endfooter">
          <div className="container">
            <div className="col-md-12">
              <div className="endcopy">
                &copy; Copyright 2020 <Link to="/">On Demand Checks</Link>
              </div>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;