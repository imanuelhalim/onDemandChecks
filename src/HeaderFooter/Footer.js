import React from "react";

const Footer = () => {
  return (
    <div>
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
                      <a href="/pages/view/9/privacy-policy">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="/pages/view/7/terms-conditions">
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li>
                      <a href="/pages/view/3/about-us">About</a>
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
              &copy; Copyright 2019{" "}
              <a href="https://ondemandchecks.com/" className="copylink">
                On Demand Checks
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
