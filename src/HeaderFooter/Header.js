import React from "react";

const Header = () => {
  return (
    <div>
      <div className="pageLoader loader" style={{ display: "none" }}>
        <div className="pageLoaderBg"></div>
        <div className="pageloaderGif">
          <img src="/img/pageloader.gif" alt="" className="" />
        </div>
      </div>
      <div className="header">
        <div
          className="topheader"
          style={{
            background: "#ff0000",
            textAlign: "center",
            color: "#fff",
            fontSize: "18px"
          }}
        >
          <div className="container">
            <p style={{ margin: "0px" }}>
              Website under development and currently running only for testing
              purposes.
            </p>
          </div>
        </div>
        <div className="topheader">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="socialtop">
                  <div className="socinfo">
                    <a href="#">
                      <i
                        className="fa fa-facebook fbicons"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <a href="#" className="scialtxt">
                      Like Us on Facebook
                    </a>
                  </div>
                  <div className="socinfo">
                    <a href="#">
                      <i className="fa fa-phone fbicons" aria-hidden="true"></i>
                    </a>
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
                  <a href="https://ondemandchecks.com/">
                    <img
                      src="https://ondemandchecks.com/images/logo.png"
                      border="0"
                      alt=""
                    />
                  </a>
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
                          <a href="https://ondemandchecks.com/">Home</a>
                        </li>
                        <li>
                          <a href="/pages/view/3/about-us">About us</a>
                        </li>
                        <li>
                          <a href="/applyonline">Apply</a>
                        </li>
                        <li>
                          <a href="/pages/view/5/track">Track</a>
                        </li>
                        <li>
                          <a href="/pages/view/6/verify">Verify</a>
                        </li>
                        <li>
                          <a href="/pages/faq">FAQ</a>
                        </li>
                        <li>
                          <a href="/pages/contact_us">Contact</a>
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
    </div>
  );
};

export default Header;
