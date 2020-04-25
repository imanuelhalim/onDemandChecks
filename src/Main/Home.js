import React, { useEffect } from "react";
import BannerImg from "../images/banner.jpg";
import ShadowEffectImg from "../images/shadoweffect.jpg";
import ApplyOnlineImg from "../images/chooseicon01.png";
import ContactUsImg from "../images/chooseicon02.png";
import PriceImg from "../images/chooseicon04.png";
import RoundShadowImg from "../images/roundshadow.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="bannerfull">
        <img src={BannerImg} border="0" alt="" />
        <div className="bannerinfo">
          <div className="container">
            <div className="banner-content">
              <h1>National Police Check</h1>
              <h2>100% Online. Results in 24 hours*</h2>
              <p>
                Our smart technology enables us to provide you the fastest &amp;
                simplest <br />
                way to apply for a Police Check online or on your mobile.
              </p>
              <div className="apply">
                <Link to="/ApplyOnline" className="btnappy">
                  APPLY NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="shadoweffect">
          <img src={ShadowEffectImg} border="0" alt="" />
        </div>
      </div>

      <div className="whyusfull">
        <div className="container">
          <div className="row">
            <div className="whyusinfo">
              <h2>WHY CHOOSE US</h2>

              <p>
                Simply because we provide user friendly service to all. Our
                focus is to ensure we deliver what you looking for. Getting a
                National Police Check certificate is now a few key strokes away
                from you.
              </p>

              <div className="whyboxmain">
                <div className="col-md-4 col-sm-4">
                  <div className="whybox">
                    <div className="whycriceldiv">
                      <div className="whyiocnbg">
                        <img alt="" src={ApplyOnlineImg} />
                      </div>

                      <div className="roundshadow">
                        <img alt="" src={RoundShadowImg} />
                      </div>
                    </div>

                    <div className="applywhydiv">
                      <h2>apply online</h2>

                      <p>
                        This will take you to the online application area where
                        you will input the necessary information to start
                        process.
                      </p>

                      <p>
                        <Link className="applybgnow" to="/ApplyOnline">
                          apply now
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-sm-4">
                  <div className="whybox">
                    <div className="whycriceldiv">
                      <div className="whyiocnbg">
                        <img alt="" src={ContactUsImg} />
                      </div>

                      <div className="roundshadow">
                        <img alt="" src={RoundShadowImg} />
                      </div>
                    </div>

                    <div className="applywhydiv">
                      <h2>contact with us</h2>

                      <p>
                        If you need more information about our servies or you
                        have any other queries please click on the option below
                      </p>

                      <p>
                        <Link className="applybgnow" to="/ContactUs">
                          contact us
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-sm-4">
                  <div className="whybox">
                    <div className="whycriceldiv">
                      <div className="whyiocnbg">
                        <img alt="" src={PriceImg} />
                      </div>

                      <div className="roundshadow">
                        <img alt="" src={RoundShadowImg} />
                      </div>
                    </div>

                    <div className="applywhydiv">
                      <h2>price</h2>

                      <p>
                        The application price is $60 and this option allows you
                        to pay this in many different ways&nbsp;
                      </p>

                      <p>
                        <Link className="applybgnow" to="/ApplyOnline">
                          apply now
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
