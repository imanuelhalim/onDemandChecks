import React from "react";
import ApplyIcon1 from "../images/applyiocn01.png";
import ApplyIcon2 from "../images/applyiocn02.png";
import ApplyIcon3 from "../images/applyiocn03.png";
import RoundShadowImg from "../images/roundshadow.png";
import CreditCardsImg from "../images/credit-cards.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Apply = () => {
  return (
    <div>
      <Router>
        <div className="innerhead">
          <div className="container">
            <div className="row">
              <div className="innerdetialshead">
                <h1>Apply Online</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="applyinner">
          <div className="container">
            <div className="applybg">
              <div className="col-md-10 col-md-offset-2 col-sm-12">
                <div className="applyinfodiv">
                  <div className="col-md-4 col-sm-4">
                    <div className="applybox">
                      <div className="applyimgs">
                        <a href="#">
                          <img alt="" src={ApplyIcon1} />
                        </a>
                      </div>

                      <div className="appyshaldow">
                        <img alt="" src={RoundShadowImg} />
                      </div>

                      <div className="applytext">
                        <h3>Complete Online Form</h3>

                        <p>
                          You will need to fill in details such as all names you
                          have been known by, 5 years of residential address
                          history, date and place of birth and contact details.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-4">
                    <div className="applybox">
                      <div className="applyimgs">
                        <a href="#">
                          <img alt="" src={ApplyIcon2} />
                        </a>
                      </div>

                      <div className="appyshaldow">
                        <img alt="" src={RoundShadowImg} />
                      </div>

                      <div className="applytext">
                        <h3>Upload ID</h3>

                        <p>
                          100% online. You will need access to a scanner or a
                          mobile device with a camera to upload your
                          Identification Documents.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-4">
                    <div className="applybox">
                      <div className="applyimgs">
                        <a href="#">
                          <img alt="" src={ApplyIcon3} />
                        </a>
                      </div>

                      <div className="appyshaldow">
                        <img alt="" src={RoundShadowImg} />
                      </div>

                      <div className="applytext">
                        <h3>Receive your Police Check</h3>

                        <p>
                          As soon as we receive your results they will be
                          emailed to you instantly. Hard Copy certificates are
                          also available.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <a
                      className="applicationbg"
                      href="https://ondemandchecks.com/applyonlines/step1"
                    >
                      Start Application{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="fulldimanddiv">
          <div className="container">
            <div className="fulltxtdiv">
              <p>
                On Demand Checks allows you to apply online for a National
                Police Clearance Certificate for employment or volunteer
                purposes. If you require an Australian Federal Police (AFP)
                Police Check specifically for visa, citizenship or immigration
                purposes, you will need to apply online using our AFP Check
                website.
              </p>
            </div>
          </div>
        </div>
        <div className="applyprize">
          <div className="container">
            <div className="col-md-5 colnopadding">
              <div className="applyprizebg">
                <h4>Price</h4>
                <div className="prizelist">
                  <div className="col-md-7">Employment</div>
                  <div className="col-md-5">
                    <span className="prizecolor">$53.00</span>
                  </div>
                </div>
                <div className="prizelist">
                  <div className="col-md-7">Volunteer</div>
                  <div className="col-md-5">
                    <span className="prizecolor">$23.00</span>
                  </div>
                </div>
                <div className="prizelist">
                  <div className="col-md-7">Hard Copy </div>
                  <div className="col-md-5">
                    <span className="prizecolor">$9.95</span>
                  </div>
                </div>
                <div className="prizelist">
                  <div className="col-md-12">
                    <p>All prices are in AUD and inc. GST.</p>
                    <p> We accept Visa and MasterCard payments.</p>
                    <a href="/applyonline/step1" className="startbtn">
                      Start Application{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="faqsinfos">
                <h4>FAQ's</h4>
                <div className="faqdetials">
                  <div id="accordion-first" className="clearfix">
                    <div className="accordion" id="accordion2">
                      <div className="accordion-group">
                        <div className="accordion-heading">
                          <a
                            className="accordion-toggle collapsed"
                            data-toggle="collapse"
                            data-parent="#accordion2"
                            href="#collapse0"
                          >
                            <em className="icon-fixed-width fa fa-plus"></em>
                            What is a Nationally Coordinated Criminal History
                            Check?
                          </a>
                        </div>
                        <div
                          style={{ height: "0px" }}
                          id="collapse0"
                          className="accordion-body collapse"
                        >
                          <div className="accordion-inner">
                            <p>
                              <span
                                style={{
                                  color: "rgb(34, 34, 34)",
                                  fontFamily: "arial,sans-serif",
                                  fontSize: "16px"
                                }}
                              >
                                A&nbsp;
                              </span>
                              <strong>
                                nationally coordinated criminal history check
                              </strong>
                              <span
                                style={{
                                  color: "rgb(34, 34, 34)",
                                  fontFamily: "arial,sans-serif",
                                  fontSize: "16px"
                                }}
                              >
                                &nbsp;is conducted with your informed consent to
                                determine
                              </span>
                              <span
                                style={{
                                  color: "rgb(34, 34, 34)",
                                  fontFamily: "arial,sans-serif",
                                  fontSize: "16px"
                                }}
                              >
                                &nbsp;your suitability for a position of trust,
                                a specified field of endeavour or as required by
                                legislation.
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="accordion-group">
                        <div className="accordion-heading">
                          <a
                            className="accordion-toggle collapsed"
                            data-toggle="collapse"
                            data-parent="#accordion2"
                            href="#collapse1"
                          >
                            <em className="icon-fixed-width fa fa-plus"></em>How
                            do I apply for a Police Check?
                          </a>
                        </div>
                        <div
                          style={{ height: "0px" }}
                          id="collapse1"
                          className="accordion-body collapse"
                        >
                          <div className="accordion-inner">
                            <p>
                              &nbsp;The following is one way one must follow to
                              apply for a Police Check
                            </p>

                            <ol>
                              <li>
                                Step 1: Complete an&nbsp;
                                <strong>application</strong>&nbsp;form.{" "}
                                <a href="https://ondemandchecks.com/applyonline">
                                  https://ondemandchecks.com/applyonline
                                </a>
                                &nbsp;-&nbsp;&nbsp;3-step process and takes
                                approximately 5 minutes to complete:
                              </li>
                              <li>
                                Step 2:&nbsp;<strong>Check</strong>&nbsp;your
                                proof of identity. - You will be asked to
                                complete information such as all names you have
                                been known by, 5 years of residential address
                                history, date of birth and contact
                                details..&nbsp;Upload ID.&nbsp;You will need
                                access to a scanner or a mobile device with a
                                camera to upload your Identification Documents.
                              </li>
                              <li>
                                Step 3: Find out what fees you need to pay. ...
                              </li>
                              <li>
                                Step 4: Get your&nbsp;
                                <strong>application</strong>
                                &nbsp;processed. ...
                              </li>
                              <li>
                                Step 5: Pay the&nbsp;
                                <strong>application</strong>
                                &nbsp;fee
                              </li>
                              <li>Receive your Police Check.</li>
                            </ol>

                            <p>
                              &nbsp;On average, 70% of application results are
                              returned&nbsp;
                              <strong>
                                within 24 hours from the day the application is
                                received
                              </strong>
                              . However, some applications can be flagged as
                              requiring further review and may take up to 15
                              business days. We aim to stay within these general
                              timeframes, however, there are some circumstances
                              (which are beyond our control) where applications
                              may take longer to process. We can only lodge your
                              application once we have&nbsp;
                              <strong>received all required documents</strong>.
                            </p>

                            <p>
                              For urgent needs, please contact&nbsp; us -
                              hamud@ondemancchecks.com and we will assist you.
                            </p>

                            <p>
                              We can only lodge your application once we have
                              received all required documents.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="accordion-group">
                        <div className="accordion-heading">
                          <a
                            className="accordion-toggle collapsed"
                            data-toggle="collapse"
                            data-parent="#accordion2"
                            href="#collapse2"
                          >
                            <em className="icon-fixed-width fa fa-plus"></em>
                            Which states do you provide Police Checks for?
                          </a>
                        </div>
                        <div
                          style={{ height: "0px" }}
                          id="collapse2"
                          className="accordion-body collapse"
                        >
                          <div className="accordion-inner">
                            <p>
                              &nbsp;
                              <span
                                style={{
                                  color: "rgb(102, 102, 102)",
                                  fontFamily:
                                    "open sans,helvetica,arial,sans-serif",
                                  fontSize: "16px"
                                }}
                              >
                                Police Checks cover&nbsp;
                              </span>
                              <strong>
                                all Australian States and Territories
                              </strong>
                              <span
                                style={{
                                  color: "rgb(102, 102, 102)",
                                  fontFamily:
                                    "open sans,helvetica,arial,sans-serif",
                                  fontSize: "16px"
                                }}
                              >
                                &nbsp;and are accepted Australia Wide.
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="accordion-group">
                        <div className="accordion-heading">
                          <a
                            className="accordion-toggle collapsed"
                            data-toggle="collapse"
                            data-parent="#accordion2"
                            href="#collapse3"
                          >
                            <em className="icon-fixed-width fa fa-plus"></em>How
                            much does a Police Check cost? What forms of payment
                            do you accept?
                          </a>
                        </div>
                        <div
                          style={{ height: "0px" }}
                          id="collapse3"
                          className="accordion-body collapse"
                        >
                          <div className="accordion-inner">
                            <p>
                              &nbsp;The price for a Nationally Coordinated
                              Criminal History Check for employment purposes
                              starts at $30.00. The price for a volunteer starts
                              at $15.00.
                            </p>

                            <p>
                              Police Check certificates are sent in digital form
                              (PDF). You can purchase a hard copy certificate
                              for an additional $9.95. Hard copy certificates
                              can only be posted to an Australian postal
                              address.
                            </p>

                            <p>We accept Visa and MasterCard payments.</p>

                            <p>
                              <img
                                alt=""
                                src={CreditCardsImg}
                                style={{
                                  border: "0px",
                                  boxSizing: "border-box",
                                  height: "auto",
                                  maxWidth: "100%",
                                  width: "106px"
                                }}
                              />
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
        </div>
      </Router>
    </div>
  );
};

export default Apply;
