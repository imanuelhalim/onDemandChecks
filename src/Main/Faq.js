import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Faq = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="innerhead">
        <div className="container">
          <div className="row">
            <div className="innerdetialshead">
              <h1>Frequently Asked Questions</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="innerpage">
        <div className="container">
          <div className="col-md-12">
            <div className="faqinfoshow">
              <div className="panel-group" id="accordion">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a
                        className="accordion-toggle"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapse0"
                      >
                        What is a Nationally Coordinated Criminal History Check?{" "}
                      </a>
                    </h4>
                  </div>
                  <div id="collapse0" className="panel-collapse collapse in">
                    <div className="panel-body">
                      <div className="faqansdetials">
                        <p>
                          <span
                            style={{
                              color: "rgb(34, 34, 34",
                              fontFamily: "arial,sans-serif",
                              fontSize: "16px",
                            }}
                          >
                            A&nbsp;
                          </span>
                          <strong>
                            nationally coordinated criminal history check
                          </strong>
                          <span
                            style={{
                              color: "rgb(34, 34, 34",
                              fontFamily: "arial,sans-serif",
                              fontSize: "16px",
                            }}
                          >
                            &nbsp;is conducted with your informed consent to
                            determine
                          </span>
                          <span
                            style={{
                              color: "rgb(34, 34, 34",
                              fontFamily: "arial,sans-serif",
                              fontSize: "16px",
                            }}
                          >
                            &nbsp;your suitability for a position of trust, a
                            specified field of endeavour or as required by
                            legislation.
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a
                        className="accordion-toggle"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapse1"
                      >
                        How do I apply for a Police Check?{" "}
                      </a>
                    </h4>
                  </div>
                  <div id="collapse1" className="panel-collapse collapse ">
                    <div className="panel-body">
                      <div className="faqansdetials">
                        <p>
                          &nbsp;The following is one way one must follow to
                          apply for a Police Check
                        </p>

                        <ol>
                          <li>
                            Step 1: Complete an&nbsp;
                            <strong>application</strong>&nbsp;form.{" "}
                            <Link to="/ApplyOnline">
                              https://ondemandchecks.com/applyonline
                            </Link>
                            &nbsp;-&nbsp;&nbsp;3-step process and takes
                            approximately 5 minutes to complete:
                          </li>
                          <li>
                            Step 2:&nbsp;<strong>Check</strong>&nbsp;your proof
                            of identity. - You will be asked to complete
                            information such as all names you have been known
                            by, 5 years of residential address history, date of
                            birth and contact details..&nbsp;Upload ID.&nbsp;You
                            will need access to a scanner or a mobile device
                            with a camera to upload your Identification
                            Documents.
                          </li>
                          <li>
                            Step 3: Find out what fees you need to pay. ...
                          </li>
                          <li>
                            Step 4: Get your&nbsp;<strong>application</strong>
                            &nbsp;processed. ...
                          </li>
                          <li>
                            Step 5: Pay the&nbsp;<strong>application</strong>
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
                          (which are beyond our control) where applications may
                          take longer to process. We can only lodge your
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
                </div>

                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a
                        className="accordion-toggle"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapse2"
                      >
                        Which states do you provide Police Checks for?{" "}
                      </a>
                    </h4>
                  </div>
                  <div id="collapse2" className="panel-collapse collapse ">
                    <div className="panel-body">
                      <div className="faqansdetials">
                        <p>
                          &nbsp;
                          <span
                            style={{
                              color: "rgb(102, 102, 102)",
                              fontFamily:
                                "open sans,helvetica,arial,sans-serif",
                              fontSize: "16px",
                            }}
                          >
                            Police Checks cover&nbsp;
                          </span>
                          <strong>all Australian States and Territories</strong>
                          <span
                            style={{
                              color: "rgb(102, 102, 102)",
                              fontFamily:
                                "open sans,helvetica,arial,sans-serif",
                              fontSize: "16px",
                            }}
                          >
                            &nbsp;and are accepted Australia Wide.
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a
                        className="accordion-toggle"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapse3"
                      >
                        How much does a Police Check cost? What forms of payment
                        do you accept?{" "}
                      </a>
                    </h4>
                  </div>
                  <div id="collapse3" className="panel-collapse collapse ">
                    <div className="panel-body">
                      <div className="faqansdetials">
                        <p>
                          &nbsp;The price for a Nationally Coordinated Criminal
                          History Check for employment purposes starts at
                          $30.00. The price for a volunteer starts at $15.00.
                        </p>

                        <p>
                          Police Check certificates are sent in digital form
                          (PDF). You can purchase a hard copy certificate for an
                          additional $9.95. Hard copy certificates can only be
                          posted to an Australian postal address.
                        </p>

                        <p>We accept Visa and MasterCard payments.</p>

                        <p>
                          <img
                            alt="We accept Visa and Mastercard payments"
                            src="https://www.veritascheck.com.au/images/credit-cards.png"
                            style={{
                              border: "0px",
                              boxSizing: "border-box",
                              height: "auto",
                              maxWidth: "100%",
                              width: "106px",
                            }}
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a
                        className="accordion-toggle"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapse4"
                      >
                        Can I purchase a Hard Copy Certificate after I have
                        submitted my online application?{" "}
                      </a>
                    </h4>
                  </div>
                  <div id="collapse4" className="panel-collapse collapse ">
                    <div className="panel-body">
                      <div className="faqansdetials">
                        <p>&nbsp;Yes. You can.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a
                        className="accordion-toggle"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapse5"
                      >
                        Are there any age restrictions for a Police Check?{" "}
                      </a>
                    </h4>
                  </div>
                  <div id="collapse5" className="panel-collapse collapse ">
                    <div className="panel-body">
                      <div className="faqansdetials">
                        <p>
                          &nbsp;
                          <span
                            style={{
                              color: "rgb(34, 34, 34)",
                              fontFamily: "arial,sans-serif",
                              fontSize: "16px",
                            }}
                          >
                            You must be at least 16 years old to undergo a&nbsp;
                          </span>
                          <strong>Police Check</strong>
                          <span
                            style={{
                              color: "rgb(34, 34, 34)",
                              fontFamily: "arial,sans-serif",
                              fontSize: "16px",
                            }}
                          >
                            &nbsp;through our service
                          </span>
                          <span
                            style={{
                              color: "rgb(34, 34, 34)",
                              fontFamily: "arial,sans-serif",
                              fontSize: "16px",
                            }}
                          >
                            . Anyone under&nbsp;
                          </span>
                          <strong>the age</strong>
                          <span
                            style={{
                              color: "rgb(34, 34, 34)",
                              fontFamily: "arial,sans-serif",
                              fontSize: "16px",
                            }}
                          >
                            &nbsp;of 18 must have consent of a parent, guardian
                            or legal representative.
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a
                        className="accordion-toggle"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapse6"
                      >
                        Which states do you provide Police Checks for?{" "}
                      </a>
                    </h4>
                  </div>
                  <div id="collapse6" className="panel-collapse collapse ">
                    <div className="panel-body">
                      <div className="faqansdetials">
                        <p>&nbsp;All Australian States.</p>
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
  );
};

export default Faq;
