import React, { useEffect } from "react";
import { Table } from "react-bootstrap";

const Step5_Confirm = (props) => {
  const [userDetails, setUserDetails] = React.useState({});
  const [currentPage, setCurrentPage] = React.useState("Step4");
  const [status, setStatus] = React.useState("");

  useEffect(() => {
    setUserDetails(props.onDisplay());
    setStatus("ready");
  }, []);

  const checkPostalAddress = () => {
    if (userDetails.postalAdd === "") {
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
            {userDetails.postalAdd}
          </div>
        </div>
      );
    }
  };

  const checkPreviousName = () => {
    if (userDetails.selectPreviousName === "Yes") {
      return (
        <div>
          <div className="col-md-12">
            <div className="formboxs">
              <label>Name Type</label>
              {userDetails.prevNameType}
            </div>
          </div>
          <div className="col-md-4">
            <div className="formboxs">
              <label>First Name</label>
              {userDetails.prevFirstName}
            </div>
          </div>
          <div className="col-md-4">
            <div className="formboxs">
              <label>Middle Name</label>
              {userDetails.prevMiddleName}
            </div>
          </div>
          <div className="col-md-4">
            <div className="formboxs">
              <label>Surname</label>
              {userDetails.prevSurname}
            </div>
          </div>
        </div>
      );
    }
  };

  const displayAllDocs = () => {
    if (status === "ready") {
      return (
        <div>
          <Table>
            <tbody style={{ textAlign: "center" }}>
              <tr>
                <td>Photograph</td>
                <td>Photo with document 1</td>
              </tr>
              <tr>
                <td>{userDetails.file1.name}</td>
                <td>{userDetails.file2.name}</td>
              </tr>
              <tr>
                <td>Photo with document 2</td>
                <td>Photo with document 3</td>
              </tr>
              <tr>
                <td>{userDetails.file3.name}</td>
                <td>{userDetails.file4.name}</td>
              </tr>

              <tr>
                <td>Document 1</td>
                <td>{userDetails.file5[0].name}</td>
              </tr>
              <tr>
                <td>Document 2</td>
                <td>{userDetails.file6[0].name}</td>
              </tr>
              <tr>
                <td>Document 3</td>
                <td>{userDetails.file7[0].name}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      );
    }
  };

  const handleBackButton = () => {
    props.onPostponed(currentPage);
  };

  const handleSubmitButton = () => {
    setCurrentPage("Step6");
  };

  const handleFormSubmit = (e) => {
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
                    {userDetails.firstName}
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="formboxs">
                    <label>Middle Name</label>
                    {userDetails.middleName}
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="formboxs">
                    <label>Surname</label>
                    {userDetails.surname}
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="formboxs">
                    <label>
                      Have you ever been known by another name(including
                      previous, maiden, name)?
                    </label>
                    {userDetails.selectPreviousName}
                  </div>
                </div>
                {checkPreviousName()}
                <div className="col-md-4">
                  <div className="formboxs">
                    <label>Gender</label>
                    {userDetails.gender}
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="formboxs">
                    <label>Date Of Birth</label>
                    {userDetails.dOB}
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="formboxs">
                    <label>Birth Place</label>
                    {userDetails.birthplace}
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
                    {userDetails.email}
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="formboxs">
                    <label>Home Phone</label>
                    {userDetails.homePhone}
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="formboxs">
                    <label>Work Phone</label>
                    {userDetails.workPhone}
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="formboxs">
                    <label>Mobile Phone</label>
                    {userDetails.mobilePhone}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="formboxs">
                    <label>Preferred Contact Number</label>
                    {userDetails.selectPrefContactNum}
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
                    {userDetails.residentialAdd}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="formboxs">
                    <label>Resident Form</label>
                    {userDetails.residentFrom}
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
                    {userDetails.checkType}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="formboxs">
                    <label>Position Title</label>
                    {userDetails.positionTitle}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="formboxs">
                    <label>Place of work</label>
                    {userDetails.proposedPlaceOfWork}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="formboxs">
                    <label>Will you have contact with children?</label>
                    {userDetails.contactGroupsOfPeople}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="formboxs">
                    <label>Hard Copy</label>
                    {userDetails.hardCopyPoliceCheck}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="formboxs">
                    <label>
                      Digital Copy Forwarded To Employer/Organization?
                    </label>
                    {userDetails.digitalCopyPoliceCheck}
                  </div>
                </div>
              </div>
              <div className="persnalinfoshow">
                <h3>
                  <strong>Uploaded Documents</strong>
                </h3>
                {displayAllDocs()}
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
