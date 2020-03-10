import React from "react";

const AboutUs = () => {
  return (
    <div>
      <div className="innerhead">
        <div className="container">
          <div className="row">
            <div className="innerdetialshead">
              <h1>About Us</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="innerpage">
        <div className="container">
          <div className="col-md-3">
            <div className="aboutimgdiv">
              <img
                alt=""
                src="https://ondemandchecks.com/images/aboutimg.jpg"
              />
            </div>
          </div>

          <div className="col-md-9">
            <div className="innerdetials">
              <p style={{ textAlign: "justify" }}>
                Online demand Checks provides a fast and reliable method to
                obtain an Australian&nbsp;Police Check report for&nbsp;residents
                of the Australian Capital Territory (ACT), Jervis Bay Territory
                and external Commonwealth territories. The online form will
                collect your details&nbsp;and with your consent, this will be
                sent to the relevant Australian Authority. The Police Checks can
                be used for :&nbsp;
              </p>

              <ul>
                <li>
                  people seeking employment with the Commonwealth Government
                </li>
                <li>people requiring a check under Commonwealth legislation</li>
                <li>Australian immigration purposes</li>
                <li>where the applicant resides overseas</li>
                <li>overseas employment</li>
                <li>overseas adoption</li>
                <li>visa applications for overseas travel.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
