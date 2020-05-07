import React, { useEffect } from "react";
import { Table } from "react-bootstrap";

const Step5_Confirm = (props) => {
  const [userDetails, setUserDetails] = React.useState({});
  const [currentPage, setCurrentPage] = React.useState("Step4");
  const [docs, setDocs] = React.useState([]);
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

  const checkDoc = (doc) => {
    if (doc.length === 0) {
      return "not given";
    } else {
      return <div style={{ color: "green" }}>{doc[0].name}</div>;
    }
  };

  const displayAllDocs = () => {
    if (status === "ready") {
      return (
        <div>
          <Table>
            <tbody style={{ textAlign: "center" }}>
              <tr>
                <td>1.</td>
                <td> Foreign or Australian Passport(current)</td>
                <td>{checkDoc(userDetails.doc1)}</td>
              </tr>
              <tr>
                <td>2.</td>
                <td> Australian Citizenship Certificate</td>
                <td>{checkDoc(userDetails.doc2)}</td>
              </tr>
              <tr>
                <td>3.</td>
                <td> Full Birth Certificate (not birth certificate extract)</td>
                <td>{checkDoc(userDetails.doc3)}</td>
              </tr>
              <tr>
                <td>4.</td>
                <td>
                  {" "}
                  Certificate of identity issued by the Australian Government to
                  refugees and non Australian citizens for enrty to Australia
                </td>
                <td>{checkDoc(userDetails.doc4)}</td>
              </tr>
              <tr>
                <td>5.</td>
                <td> Australian Driver Licence/Learner Permit</td>
                <td>{checkDoc(userDetails.doc5)}</td>
              </tr>
              <tr>
                <td>6.</td>
                <td>
                  Current (Australian) Tertiary Student Identification Card
                </td>
                <td>{checkDoc(userDetails.doc6)}</td>
              </tr>
              <tr>
                <td>7.</td>
                <td>
                  Photo identification card issued for Australian regulatory
                  purposes (e.g. Aviation/Maritime Security identification,
                  security, industry etc)
                </td>
                <td>{checkDoc(userDetails.doc7)}</td>
              </tr>
              <tr>
                <td>8. </td>
                <td>
                  Government Employee ID (Australian Federal/State/Territory)
                </td>
                <td>{checkDoc(userDetails.doc8)}</td>
              </tr>
              <tr>
                <td>9. </td>
                <td>Defence Force Identify Card (with photo or signature) </td>
                <td>{checkDoc(userDetails.doc9)}</td>
              </tr>
              <tr>
                <td>10. </td>
                <td>Department of Veterans Affairs (DVA) card </td>
                <td>{checkDoc(userDetails.doc10)}</td>
              </tr>
              <tr>
                <td>11. </td>
                <td>Centrelink card (with reference number) </td>
                <td>{checkDoc(userDetails.doc11)}</td>
              </tr>
              <tr>
                <td>12. </td>
                <td>Birth Certificate Extract </td>
                <td>{checkDoc(userDetails.doc12)}</td>
              </tr>
              <tr>
                <td>13. </td>
                <td>Birth Card(NSW Births, Deaths, Marriages issue only) </td>
                <td>{checkDoc(userDetails.doc13)}</td>
              </tr>
              <tr>
                <td>14. </td>
                <td>Medicare Card </td>
                <td>{checkDoc(userDetails.doc14)}</td>
              </tr>
              <tr>
                <td>15. </td>
                <td>Credit card or account card </td>
                <td>{checkDoc(userDetails.doc15)}</td>
              </tr>
              <tr>
                <td>16. </td>
                <td>
                  Australian Marriage Certificate (Australian Registry Issue
                  Only)
                </td>
                <td>{checkDoc(userDetails.doc16)}</td>
              </tr>
              <tr>
                <td>17. </td>
                <td>
                  Decree Nisi / Decress Absolute (Australian Registry Issue
                  Only)
                </td>
                <td>{checkDoc(userDetails.doc17)}</td>
              </tr>
              <tr>
                <td>18. </td>
                <td>
                  Change of name certificate (Australian Registry Issue Only)
                </td>
                <td>{checkDoc(userDetails.doc18)}</td>
              </tr>
              <tr>
                <td>19. </td>
                <td>Bank Statement (showing transactions)</td>
                <td>{checkDoc(userDetails.doc19)}</td>
              </tr>
              <tr>
                <td>20. </td>
                <td>Property Lease Agreement - Current Address</td>
                <td>{checkDoc(userDetails.doc20)}</td>
              </tr>
              <tr>
                <td>21. </td>
                <td>Taxation Assessment Notice</td>
                <td>{checkDoc(userDetails.doc21)}</td>
              </tr>
              <tr>
                <td>22. </td>
                <td>Australian Mortgage Documents - Current Address</td>
                <td>{checkDoc(userDetails.doc22)}</td>
              </tr>
              <tr>
                <td>23. </td>
                <td>Rating Authority - Current Address eg Land Rates</td>
                <td>{checkDoc(userDetails.doc23)}</td>
              </tr>
              <tr>
                <td>24. </td>
                <td>
                  Utility Bill - electricty, gas, telephone - Current address
                  (less than 12 months old)
                </td>
                <td>{checkDoc(userDetails.doc24)}</td>
              </tr>
              <tr>
                <td>25. </td>
                <td>References from Indigenous Organisation</td>
                <td>{checkDoc(userDetails.doc25)}</td>
              </tr>
              <tr>
                <td>26. </td>
                <td>
                  Documents issued outside Australia (equivalent to Australian
                  documents Must have official transaltion attached)
                </td>
                <td>{checkDoc(userDetails.doc26)}</td>
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
