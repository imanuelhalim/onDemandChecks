import React from "react";

const Verify = () => {
  return (
    <div>
      <div className="innerhead">
        <div className="container">
          <div className="row">
            <div className="innerdetialshead">
              <h1>Verify</h1>
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
                    placeholder="Certificate Number"
                    className="veryfiinput"
                  />
                </p>
                <p>
                  <input
                    type="text"
                    placeholder="Access Code"
                    className="veryfiinput"
                  />
                </p>
                <div className="veryfiybtns">
                  <a href="#" className="verfiylink">
                    <i
                      className="fa fa-search verirfyicon"
                      aria-hidden="true"
                    ></i>
                    Verify
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="verifyinner">
              <h2>
                Verify the authenticity of a{" "}
                <span className="txtcolor">Police Check certificate</span>
              </h2>
              <p>
                Enter the unique certificate number and access code on the
                Nationally Coordinated Criminal History Check certificate. This
                information is located on the top right hand corner of your
                certificate.
              </p>

              <p>
                The certificate you wish to verify must be an exact match
                against the results in our database. The certificate displayed
                on this website should match the certificate you wish to verify,
                if not, the certificate you hold is void.
              </p>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Verify;
