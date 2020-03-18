import React from "react";

const Track = () => {
  return (
    <div>
      <div className="innerhead">
        <div className="container">
          <div className="row">
            <div className="innerdetialshead">
              <h1>Track My Application</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="innerpage">
        <div className="container">
          <div className="col-md-3">
            <div className="verfiybg">
              <div className="verfiyinner">
                <h2>
                  Enter your details below to track the status of your Police
                  Check application
                </h2>
                <p>
                  <input
                    type="text"
                    placeholder="Reference Number"
                    className="veryfiinput"
                  />
                </p>
                <p>
                  <input
                    type="text"
                    placeholder="E-mail"
                    className="veryfiinput"
                  />
                </p>
                <div className="veryfiybtns">
                  <a href="#" className="verfiylink">
                    <i
                      className="fa fa-search verirfyicon"
                      aria-hidden="true"
                    ></i>
                    Track
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="verifyinner">
              <h2>
                Track <span className="txtcolor">Application</span>
              </h2>
              <p>
                On Demand Checks real-time tracking system enables you to check
                the status of your Police Check.
              </p>

              <p>
                Whilst no issuing body can guarantee a turnaround time for
                Nationally Coordinated Criminal History Checks due to
                dependencies on background checking agencies, On Demand Checks
                automated notification system will ensure that you receive the
                results of your Nationally Coordinated Criminal History Check
                instantly - as soon as we get them.
              </p>

              <p>
                On average, 70% of application results are returned within 24
                hours from when we receive your lodgement and upload it to
                Australian Criminal Intelligence Commission (ACIC). In some
                cases, ACIC can flag applications as requiring further review
                and these may take up to 10 business days to complete.
              </p>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Track;
