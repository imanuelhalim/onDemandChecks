import React from "react";

const Home = () => {
  return (
    <div>
      <div className="bannerfull">
        <img
          src="https://ondemandchecks.com/images/banner.jpg"
          border="0"
          alt=""
        />
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
                <a href="/applyonline" className="btnappy">
                  APPLY NOW
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="verifiyfull">
        <div className="verifiyinfo">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="verifiytxt">
                  <h3>Verify Police Check</h3>
                  <h5>Verify the authenticity of a Police Check</h5>
                </div>
              </div>
              <div className="col-md-8">
                <div className="formverydiv">
                  <input
                    type="text"
                    Placeholder="Certificate Number"
                    className="veryinput"
                  />
                  <input
                    type="text"
                    Placeholder="Access Code"
                    className="veryinput"
                  />
                  <input
                    type="button"
                    value="VERIFY"
                    className="submitvrifiy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="shadoweffe">
            <img
              src="https://ondemandchecks.com/images/shadoweffect.jpg"
              border="0"
              alt=""
            />
          </div>
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
                <div className="col-md-3 col-sm-6">
                  <div className="whybox">
                    <div className="whycriceldiv">
                      <div className="whyiocnbg">
                        <img
                          alt=""
                          src="https://ondemandchecks.com/images/chooseicon01.png"
                        />
                      </div>

                      <div className="roundshadow">
                        <img
                          alt=""
                          src="https://ondemandchecks.com/images/roundshadow.png"
                        />
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
                        <a
                          className="applybgnow"
                          href="https://ondemandchecks.com/applyonline"
                        >
                          apply now
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 col-sm-6">
                  <div className="whybox">
                    <div className="whycriceldiv">
                      <div className="whyiocnbg">
                        <img
                          alt=""
                          src="https://ondemandchecks.com/images/chooseicon02.png"
                        />
                      </div>

                      <div className="roundshadow">
                        <img alt="" src="images/roundshadow.png" />
                      </div>
                    </div>

                    <div className="applywhydiv">
                      <h2>contact with us</h2>

                      <p>
                        If you need more information about our servies or you
                        have any other queries please click on the option below
                      </p>

                      <p>
                        <a
                          className="applybgnow"
                          href="https://ondemandchecks.com/pages/contact_us"
                        >
                          contact us
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 col-sm-6">
                  <div className="whybox">
                    <div className="whycriceldiv">
                      <div className="whyiocnbg">
                        <img
                          alt=""
                          src="https://ondemandchecks.com/images/chooseicon03.png"
                        />
                      </div>

                      <div className="roundshadow">
                        <img
                          alt=""
                          src="https://ondemandchecks.com/images/roundshadow.png"
                        />
                      </div>
                    </div>

                    <div className="applywhydiv">
                      <h2>fast results</h2>

                      <p>
                        We promise fast delivery of the results of your
                        application. We understand and apprecaite the value lf
                        your time.&nbsp;
                      </p>

                      <p>
                        <a
                          className="applybgnow"
                          href="https://ondemandchecks.com/pages/view/5/track"
                        >
                          track progress
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 col-sm-6">
                  <div className="whybox">
                    <div className="whycriceldiv">
                      <div className="whyiocnbg">
                        <img
                          alt=""
                          src="https://ondemandchecks.com/images/chooseicon04.png"
                        />
                      </div>

                      <div className="roundshadow">
                        <img
                          alt=""
                          src="https://ondemandchecks.com/images/roundshadow.png"
                        />
                      </div>
                    </div>

                    <div className="applywhydiv">
                      <h2>price</h2>

                      <p>
                        The application price is $60 and this option allows you
                        to pay this in many different ways&nbsp;
                      </p>

                      <p>
                        <a
                          className="applybgnow"
                          href="https://ondemandchecks.com/applyonline"
                        >
                          apply now
                        </a>
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
