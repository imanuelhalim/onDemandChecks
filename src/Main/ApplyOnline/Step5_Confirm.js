import React, { useEffect } from "react";

const Step5_Confirm = props => {
  const [userDetails, setUserDetails] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState("Step3");

  useEffect(() => {
    setUserDetails(props.onDisplay());
  }, [userDetails]);

  const checkPostalAddress = () => {
    if (userDetails[18] === "") {
      return (
        <div className="col-md-10">
          <div className="formboxs">
            <label>Postal Address</label>
            Same with residental address
          </div>
        </div>
      );
    } else {
      return (
        <div className="col-md-10">
          <div className="formboxs">
            <label>Postal Address</label>
            {userDetails[18]}
          </div>
        </div>
      );
    }
  };

  const checkPreviousName = () => {
    if (userDetails[3] === "Yes") {
      return (
        <div>
          <div className="col-md-12">
            <div className="formboxs">
              <label>Name Type</label>
              {userDetails[4]}
            </div>
          </div>

          <div className="col-md-4">
            <div className="formboxs">
              <label>First Name</label>
              {userDetails[5]}
            </div>
          </div>

          <div className="col-md-4">
            <div className="formboxs">
              <label>Middle Name</label>
              {userDetails[6]}
            </div>
          </div>

          <div className="col-md-4">
            <div className="formboxs">
              <label>Surname</label>
              {userDetails[7]}
            </div>
          </div>
        </div>
      );
    }
  };

  const handleAllDocs = () => {};

  const handleSubmitButton = () => {
    setCurrentPage("Step6");
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    if (currentPage === "Step6") {
      props.onSuccess(currentPage);
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
                  Step 6<span className="stepbotomtxt">Payment</span>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleFormSubmit}>
            <div className="forminformation">
              <div className="persnalinfoshow">
                <h3>
                  <strong>Personal Details:</strong>
                </h3>

                <div className="col-md-4">
                  <div className="formboxs">
                    <label>First Name</label>
                    {userDetails[0]}
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="formboxs">
                    <label>Middle Name</label>
                    {userDetails[1]}
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="formboxs">
                    <label>Surname</label>
                    {userDetails[2]}
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="formboxs">
                    <label>
                      Have you ever been known by another name(including
                      previous, maiden, name)?
                    </label>
                    {userDetails[3]}
                  </div>
                </div>
                {checkPreviousName()}
                <div className="col-md-4">
                  <div className="formboxs">
                    <label>Gender</label>
                    {userDetails[8]}
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="formboxs">
                    <label>Date Of Birth</label>
                    {userDetails[14]}
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="formboxs">
                    <label>Birth Place</label>
                    {userDetails[15]}
                  </div>
                </div>
              </div>
              <div className="persnalinfoshow">
                <h3>
                  <strong>Contact Details:</strong>
                </h3>
                <div className="col-md-12">
                  <div className="formboxs">
                    <label>Email</label>
                    {userDetails[13]}
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="formboxs">
                    <label>Home Phone</label>
                    {userDetails[9]}
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="formboxs">
                    <label>Work Phone</label>
                    {userDetails[10]}
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="formboxs">
                    <label>Mobile Phone</label>
                    {userDetails[11]}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="formboxs">
                    <label>Preferred Contact Phone</label>
                    {userDetails[12]}
                  </div>
                </div>
              </div>
              <div className="persnalinfoshow">
                <h3>
                  <strong> Address:</strong>
                </h3>
                <div className="col-md-10">
                  <div className="formboxs">
                    <label>Residential Address</label>
                    {userDetails[16]}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="formboxs">
                    <label>Resident Form</label>
                    {userDetails[17]}
                  </div>
                </div>
                {checkPostalAddress()}
              </div>
              <div className="persnalinfoshow">
                <h3>
                  <strong>Purpose of Check:</strong>
                </h3>
                <div className="col-md-4">
                  <div className="formboxs">
                    <label>Check Type</label>
                    {userDetails[19]}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="formboxs">
                    <label>Position Title</label>
                    {userDetails[20]}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="formboxs">
                    <label>Place of work</label>
                    {userDetails[21]}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="formboxs">
                    <label>Will you have contact with children?</label>
                    {userDetails[22]}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="formboxs">
                    <label>Hard Copy</label>
                    {userDetails[23]}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="formboxs">
                    <label>
                      Digital Copy Forwarded To Employer/Organization?
                    </label>
                    {userDetails[24]}
                  </div>
                </div>
              </div>
              <div className="persnalinfoshow">
                <h3>
                  <strong>Uploaded Documents</strong>
                </h3>
                {handleAllDocs()}
              </div>
              <div className="col-md-12">
                <input
                  type="submit"
                  value="Confirm"
                  className="backbtns pull-right"
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

export default Step5_Confirm;
