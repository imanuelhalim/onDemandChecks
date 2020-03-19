import React from "react";

const Step5_Confirm = () => {
  return (
    <div>
      <div className="innerhead">
        <div className="container">
          <div className="row">
            <div className="innerdetialshead">
              <h1>On Demand Checks</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="applyinner">
        <div className="container">
          <div className="col-md-12">
            <div className="stapdiv">
              <div className="stepbtnmain">
                <div className="stepbtndis">
                  Step 1<span className="stepbotomtxt">Personal Details</span>
                </div>
                <div className="stepbtninfo02">
                  Step 2<span className="stepbotomtxt">Address</span>
                </div>
                <div className="stepbtninfo03">
                  Step 3<span className="stepbotomtxt">Purpose</span>
                </div>
                <div className="stepbtninfo03">
                  Step 4<span className="stepbotomtxt">Proof of Identity</span>
                </div>
                <div className="stepbtninfo05 tabpad">
                  Step 5<span className="stepbotomtxt">Confirm</span>
                </div>
                <div className="stepbtninfo04">
                  Step 6<span className="stepbotomtxt">Consent From</span>
                </div>
              </div>
            </div>
          </div>

          <div className="forminformation">
            <div className="persnalinfoshow">
              <h3>Personal Details:</h3>

              <div className="col-md-4">
                <div className="formboxs">
                  <label>First Name</label>
                  adasd{" "}
                </div>
              </div>

              <div className="col-md-4">
                <div className="formboxs">
                  <label>Middle Name</label>
                  adsasd{" "}
                </div>
              </div>

              <div className="col-md-4">
                <div className="formboxs">
                  <label>Surname</label>
                  adsasd{" "}
                </div>
              </div>

              <div className="col-md-4">
                <div className="formboxs">
                  <label>Gender</label>
                  Female{" "}
                </div>
              </div>

              <div className="col-md-4">
                <div className="formboxs">
                  <label>Date Of Birth</label>
                  2020/03/13/{" "}
                </div>
              </div>

              <div className="col-md-4">
                <div className="formboxs">
                  <label>Birth Place</label>
                  Nigeria{" "}
                </div>
              </div>
            </div>
            <div className="persnalinfoshow">
              <h3>Contact Details:</h3>
              <div className="col-md-12">
                <div className="formboxs">
                  <label>Email</label>
                  imanuel@email.com{" "}
                </div>
              </div>

              <div className="col-md-4">
                <div className="formboxs">
                  <label>Home Phone</label>
                  122354{" "}
                </div>
              </div>

              <div className="col-md-4">
                <div className="formboxs">
                  <label>Work Phone</label>
                  13243{" "}
                </div>
              </div>

              <div className="col-md-4">
                <div className="formboxs">
                  <label>Mobile Phone</label>
                  132{" "}
                </div>
              </div>
              <div className="col-md-4">
                <div className="formboxs">
                  <label>Preferred Contact Phone</label>
                  Mobile{" "}
                </div>
              </div>
            </div>
            <div className="persnalinfoshow">
              <h3>Residential Address:</h3>
              <div className="col-md-4">
                <div className="formboxs">
                  <label>Address</label>
                  280 Spencer St{" "}
                </div>
              </div>
              <div className="col-md-4">
                <div className="formboxs">
                  <label>Suburb/Town/Locality</label>
                  Melbourne{" "}
                </div>
              </div>
              <div className="col-md-4">
                <div className="formboxs">
                  <label>State</label>
                  Victoria{" "}
                </div>
              </div>
              <div className="col-md-4">
                <div className="formboxs">
                  <label>Postcode</label>
                  3000{" "}
                </div>
              </div>
              <div className="col-md-4">
                <div className="formboxs">
                  <label>Country</label>
                  Australia{" "}
                </div>
              </div>
              <div className="col-md-4">
                <div className="formboxs">
                  <label>Resident Form</label>
                  February/ 2012{" "}
                </div>
              </div>
            </div>
            <div className="persnalinfoshow">
              <h3>Purpose of Check:</h3>
              <div className="col-md-4">
                <div className="formboxs">
                  <label>Check Type</label>
                  Employment (Work for the Dole){" "}
                </div>
              </div>
              <div className="col-md-4">
                <div className="formboxs">
                  <label>Position Title</label>
                  Ambulance Attendant{" "}
                </div>
              </div>
              <div className="col-md-4">
                <div className="formboxs">
                  <label>Place of work</label>
                  Automotive Dealership{" "}
                </div>
              </div>
              <div className="col-md-4">
                <div className="formboxs">
                  <label>Will you have contact with children?</label>
                  Unsupervised contact - Direct or indirect contact with
                  children or vulnerable groups, without supervision{" "}
                </div>
              </div>
              <div className="col-md-4">
                <div className="formboxs">
                  <label>Hard Copy</label>
                  No{" "}
                </div>
              </div>
              <div className="col-md-4">
                <div className="formboxs">
                  <label>
                    Digital Copy Forwarded To Employer/Organization?
                  </label>
                  No{" "}
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <a href="/applyonline/step4" className="backbtns">
                Previous Step
              </a>
              <a
                href="/applyonlines/pay_paypal"
                className="backbtns pull-right"
              >
                Confirm
              </a>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Step5_Confirm;
