import React from "react";

const Step3_Purpose = props => {
  const [selectCheckType, setSelectCheckType] = React.useState("");
  const [selectPositionTitle, setSelectPositionTitle] = React.useState("");
  const [
    selectProposedPlaceOfWork,
    setSelectProposedPlaceOfWork
  ] = React.useState("");
  const [
    selectContactGroupsOfPeople,
    setSelectContactGroupsOfPeople
  ] = React.useState("");
  const [hardCopyPoliceCheck, setHardCopyPoliceCheck] = React.useState("No");
  const [digitalCopyPoliceCheck, setDigitalCopyPoliceCheck] = React.useState(
    "No"
  );
  const [currentPage, setCurrentPage] = React.useState("Step2");

  const handleSelectCheckType = e => {
    setSelectCheckType(e.target.value);
  };

  const handleSelectPositionTitle = e => {
    setSelectPositionTitle(e.target.value);
  };

  const handleSelectProposedPlaceOfWork = e => {
    setSelectProposedPlaceOfWork(e.target.value);
  };

  const handleSelectContactGroupsOfPeople = e => {
    setSelectContactGroupsOfPeople(e.target.value);
  };

  const handleHardCopyPoliceCheck = e => {
    setHardCopyPoliceCheck(e.target.value);
  };

  const handleDigitalCopyPoliceCheck = e => {
    setDigitalCopyPoliceCheck(e.target.value);
  };

  const handleBackButton = () => {
    props.onPostponed(currentPage);
  };

  const handleSubmitButton = () => {
    setCurrentPage("Step4");
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    if (currentPage === "Step4") {
      props.onSuccess(
        selectCheckType,
        selectPositionTitle,
        selectProposedPlaceOfWork,
        selectContactGroupsOfPeople,
        hardCopyPoliceCheck,
        digitalCopyPoliceCheck,
        currentPage
      );
    }
  };

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
                <div className="stepbtninfo05 tabpad">
                  Step 3<span className="stepbotomtxt">Purpose</span>
                </div>
                <div className="stepbtninfo03">
                  Step 4<span className="stepbotomtxt">Proof of Identity</span>
                </div>
                <div className="stepbtninfo03">
                  Step 5<span className="stepbotomtxt">Confirm</span>
                </div>
                <div className="stepbtninfo04">
                  Step 6<span className="stepbotomtxt">Payment</span>
                </div>
              </div>
            </div>
          </div>
          <form onSubmit={handleFormSubmit}>
            <div className="forminformation">
              <h3>
                <strong>
                  Check Type<span className="required">* </span>
                </strong>
              </h3>
              <div className="col-md-12">
                <div className="formboxs">
                  <div className="input select required">
                    <select
                      name="volunteer"
                      className="selectsyless"
                      required="required"
                      id="volunteer"
                      onChange={handleSelectCheckType}
                    >
                      <option value="">Please select check type</option>
                      <option value="Employment">Employment</option>
                      <option value="Employment (Work for the Dole">
                        Employment (Work for the Dole)
                      </option>
                      <option value="Volunteer / Student Placement / Work Experience">
                        Volunteer / Student Placement / Work Experience
                      </option>
                      <option value="Visa / Citizenship / Immigration into Australia">
                        Visa / Citizenship / Immigration into Australia
                      </option>
                    </select>
                  </div>{" "}
                </div>
              </div>

              <h3>
                <strong>Purpose</strong>
              </h3>
              <h4>
                The purpose for your check helps determine what police
                information is disclosed on your result.
              </h4>
              <div className="col-md-12">
                <div className="formboxs">
                  <label>
                    Your position title, occupation or entitlement being sought
                    <span className="required">* </span>
                  </label>

                  <div className="input select required">
                    <select
                      name="position"
                      className="selectsyless"
                      required
                      id="position"
                      onChange={handleSelectPositionTitle}
                    >
                      <option value="">Please select position</option>
                      <option value="Accountant">Accountant</option>
                      <option value="Administrator">Administrator</option>
                      <option value="Aged Care Worker">Aged Care Worker</option>
                      <option value="Ambulance Attendant">
                        Ambulance Attendant
                      </option>
                      <option value="Assistant">Assistant</option>
                      <option value="Call Center Operator">
                        Call Center Operator
                      </option>
                      <option value="Carer">Carer</option>
                      <option value="Caretaker">Caretaker</option>
                      <option value="Carpenter">Carpenter</option>
                      <option value="Chef">Chef</option>
                      <option value="Childcare Worker">Childcare Worker</option>
                      <option value="Cleaner">Cleaner</option>
                      <option value="Construction Worker">
                        Construction Worker
                      </option>
                      <option value="Contractor">Contractor</option>
                      <option value="Customer Service Representative">
                        Customer Service Representative
                      </option>
                      <option value="Dentist">Dentist</option>
                      <option value="Director">Director</option>
                      <option value="Disability Worker">
                        Disability Worker
                      </option>
                      <option value="Doctor">Doctor</option>
                      <option value="Driver">Driver</option>
                      <option value="Driver-Bus">Driver-Bus</option>
                      <option value="Driver-Car">Driver-Car</option>
                      <option value="Driver-Delivery">Driver-Delivery</option>
                      <option value="Driver-Truck">Driver-Truck</option>
                      <option value="Educator">Educator</option>
                      <option value="Electrician">Electrician</option>
                      <option value="Engineer">Engineer</option>
                      <option value="Gardener">Gardener</option>
                      <option value="Guest Service Attendant">
                        Guest Service Attendant
                      </option>
                      <option value="Hairdresser">Hairdresser</option>
                      <option value="Hospitality Worker">
                        Hospitality Worker
                      </option>
                      <option value="Information Technology Worker">
                        Information Technology Worker
                      </option>
                      <option value="Instructor">Instructor</option>
                      <option value="Labourer">Labourer</option>
                      <option value="Maintenance Worker">
                        Maintenance Worker
                      </option>
                      <option value="Manager">Manager</option>
                      <option value="Marketing Officer">
                        Marketing Officer
                      </option>
                      <option value="Mechanic">Mechanic</option>
                      <option value="Medical Worker">Medical Worker</option>
                      <option value="Mortgage Broker">Mortgage Broker</option>
                      <option value="Nurse">Nurse</option>
                      <option value="Office Worker">Office Worker</option>
                      <option value="Pathologist">Pathologist</option>
                      <option value="Patient Transport Officer">
                        Patient Transport Officer
                      </option>
                      <option value="Physiotherapist">Physiotherapist</option>
                      <option value="Plumber">Plumber</option>
                      <option value="Podiatrist">Podiatrist</option>
                      <option value="Real Estate Agent">
                        Real Estate Agent
                      </option>
                      <option value="Receptionist">Receptionist</option>
                      <option value="Retail Worker">Retail Worker</option>
                      <option value="Sales Worker">Sales Worker</option>
                      <option value="Security Officer">Security Officer</option>
                      <option value="Social Worker">Social Worker</option>
                      <option value="Student">Student</option>
                      <option value="Student Placement">
                        Student Placement
                      </option>
                      <option value="Student Placement - Nurse">
                        Student Placement - Nurse
                      </option>
                      <option value="Support">Support</option>
                      <option value="Technician">Technician</option>
                      <option value="Telecommunication Worker">
                        Telecommunication Worker
                      </option>
                      <option value="Trades Person">Trades Person</option>
                      <option value="Transport Officer">
                        Transport Officer
                      </option>
                      <option value="Youth Worker">Youth Worker</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="formboxs">
                  <label>
                    Your proposed place of work
                    <span className="required">* </span>
                  </label>
                  <div className="input select required">
                    <select
                      name="workplace"
                      className="selectsyless"
                      required="required"
                      id="workplace"
                      onChange={handleSelectProposedPlaceOfWork}
                    >
                      <option value="">Please select work place</option>
                      <option value="Aged Care Facility">
                        Aged Care Facility
                      </option>
                      <option value="Airport">Airport</option>
                      <option value="Ambulance">Ambulance</option>
                      <option value="Automotive Dealership">
                        Automotive Dealership
                      </option>
                      <option value="Charity">Charity</option>
                      <option value="Church">Church</option>
                      <option value="Commercial Kitchen">
                        Commercial Kitchen
                      </option>
                      <option value="Commercial Property">
                        Commercial Property
                      </option>
                      <option value="Construction Site">
                        Construction Site
                      </option>
                      <option value="Consultant Agency">
                        Consultant Agency
                      </option>
                      <option value="Day Care">Day Care</option>
                      <option value="Defence Base">Defence Base</option>
                      <option value="Financial Institution">
                        Financial Institution
                      </option>
                      <option value="Government Agency">
                        Government Agency
                      </option>
                      <option value="1Hospital5">Hospital</option>
                      <option value="Hotel">Hotel</option>
                      <option value="Law Firm">Law Firm</option>
                      <option value="Medical Clinic">Medical Clinic</option>
                      <option value="Mine Site">Mine Site</option>
                      <option value="Mine, Industry Regulation or Safety license">
                        Mine, Industry Regulation or Safety license
                      </option>
                      <option value="Public Building">Public Building</option>
                      <option value="Recreation Centre">
                        Recreation Centre
                      </option>
                      <option value="Residential Property">
                        Residential Property
                      </option>
                      <option value="Restaurant">Restaurant</option>
                      <option value="School">School</option>
                      <option value="Software Company">Software Company</option>
                      <option value="University">University</option>
                      <option value="Vehicle - Business">
                        Vehicle - Business
                      </option>
                      <option value="Vehicle - Private">
                        Vehicle - Private
                      </option>
                      <option value="Wildlife Rescue">Wildlife Rescue</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="clearfix"></div>
              <div className="col-md-12">
                <div className="formboxs">
                  <label>
                    Will you have contact with children and/or vulnerable groups
                    as part of the role you are applying for?
                    <span className="required">* </span>
                  </label>

                  <div className="input select required">
                    <select
                      name="contact"
                      className="selectsyless"
                      required="required"
                      id="contact"
                      onChange={handleSelectContactGroupsOfPeople}
                    >
                      <option value="">Please select contact</option>
                      <option
                        value="Supervised contact - Direct or indirect contact with
                        children or vulnerable groups, with supervision"
                      >
                        Supervised contact - Direct or indirect contact with
                        children or vulnerable groups, with supervision
                      </option>
                      <option
                        value="Unsupervised contact - Direct or indirect contact with
                        children or vulnerable groups, without supervision"
                      >
                        Unsupervised contact - Direct or indirect contact with
                        children or vulnerable groups, without supervision
                      </option>
                      <option
                        value="No contact - No direct or indirect contact with children
                        or vulnerable groups"
                      >
                        No contact - No direct or indirect contact with children
                        or vulnerable groups
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="col-md-12 radiobuttonbox">
                <div className="formboxs">
                  <label>
                    Do you require a hard copy certificate(additional $9.95)?
                    <span className="required">* </span>
                  </label>
                  <input type="hidden" name="hardcopy" value="" />
                  <label htmlFor="hardcopy-yes">
                    <input
                      type="radio"
                      name="hardcopy"
                      value="Yes"
                      id="hardcopy-yes"
                      required="required"
                      onClick={handleHardCopyPoliceCheck}
                    />
                    Yes
                  </label>
                  <label htmlFor="hardcopy-no">
                    <input
                      type="radio"
                      name="hardcopy"
                      value="No"
                      id="hardcopy-no"
                      defaultChecked={true}
                      required="required"
                      onClick={handleHardCopyPoliceCheck}
                    />
                    No
                  </label>
                </div>
              </div>
              <div className="clearfix"></div>

              <p>&nbsp;</p>
              <h4>
                Would you like a digital copy Of your police check certificate
                forwarded electronically to your employer/organisation to assess
                your suitability?<span className="required">* </span>
              </h4>
              <div className="radiobtn">
                <input type="hidden" name="forward" value="" />
                <label htmlFor="forward-yes">
                  <input
                    type="radio"
                    name="forward"
                    value="Yes"
                    id="forward-yes"
                    required="required"
                    onClick={handleDigitalCopyPoliceCheck}
                  />
                  Yes
                </label>
                <label htmlFor="forward-no">
                  <input
                    type="radio"
                    name="forward"
                    value="No"
                    id="forward-no"
                    defaultChecked={true}
                    required="required"
                    onClick={handleDigitalCopyPoliceCheck}
                  />
                  No
                </label>{" "}
              </div>

              <div className="col-md-12">
                <input
                  type="button"
                  value="Previous Step"
                  className="backbtns"
                  onClick={handleBackButton}
                />
                <input
                  type="submit"
                  value="Save &amp; Cantinue"
                  className="submitbtns"
                  onClick={handleSubmitButton}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Step3_Purpose;
