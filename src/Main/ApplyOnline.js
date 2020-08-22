import React, { useEffect } from "react";
import ApplyIcon1 from "../images/applyiocn01.png";
import ApplyIcon2 from "../images/applyiocn02.png";
import ApplyIcon3 from "../images/applyiocn03.png";
import RoundShadowImg from "../images/roundshadow.png";
import CreditCardsImg from "../images/credit-cards.png";
import Step1 from "./ApplyOnline/Step1_PersonalDetails";
import Step2 from "./ApplyOnline/Step2_Address";
import Step3 from "./ApplyOnline/Step3_Purpose";
import Step4 from "./ApplyOnline/Step4_ProffIdentity";
import Step5 from "./ApplyOnline/Step5_Confirm";
import Step6 from "./ApplyOnline/Step6_Payment";
import axios from "axios";

const ApplyOnline = () => {
  const [currentPage, setCurrentPage] = React.useState("main");
  const [firstName, setFirstName] = React.useState("");
  const [middleName, setMiddleName] = React.useState("");
  const [surname, setSurname] = React.useState("");
  const [fullName, setFullName] = React.useState("");
  const [selectPreviousName, setSelectPreviousName] = React.useState("");
  const [prevNameType, setPrevNameType] = React.useState("");
  const [prevFirstName, setPrevFirstName] = React.useState("");
  const [prevMiddleName, setPrevMiddleName] = React.useState("");
  const [prevSurname, setPrevSurname] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [homePhone, setHomePhone] = React.useState("");
  const [workPhone, setWorkPhone] = React.useState("");
  const [mobilePhone, setMobilePhone] = React.useState("");
  const [selectPrefContactNum, setSelectPrefContactNum] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [dOB, setDOB] = React.useState("");
  const [birthplace, setBirthPlace] = React.useState("");
  const [residentialAdd, setResidentialAdd] = React.useState("");
  const [residentFrom, setResidentFrom] = React.useState("");
  const [postalAdd, setPostalAdd] = React.useState("");
  const [checkType, setCheckType] = React.useState("");
  const [positionTitle, setPositionTitle] = React.useState("");
  const [proposedPlaceOfWork, setProposedPlaceOfWork] = React.useState("");
  const [contactGroupsOfPeople, setContactGroupsOfPeople] = React.useState("");
  const [hardCopyPoliceCheck, setHardCopyPoliceCheck] = React.useState("");
  const [digitalCopyPoliceCheck, setDigitalCopyPoliceCheck] = React.useState(
    ""
  );
  const [file1, setFile1] = React.useState([]);
  const [file2, setFile2] = React.useState([]);
  const [file3, setFile3] = React.useState([]);
  const [file4, setFile4] = React.useState([]);
  const [file5, setFile5] = React.useState([]);
  const [file6, setFile6] = React.useState([]);
  const [file7, setFile7] = React.useState([]);
  const [userDetails, setUserDetails] = React.useState({});
  const [payment, setPayment] = React.useState("");
  const [isSuccessfull, setIsSuccessfull] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    displayPage(currentPage);
  }, [currentPage]);

  const setPage = (e) => {
    e.preventDefault();
    setCurrentPage("Step1");
  };

  const concatUserFullName = (givenName, midName, familyName) => {
    if (midName.trim() === "") {
      setFullName(givenName + " " + familyName);
    } else {
      setFullName(givenName + " " + midName + " " + familyName);
    }
  };

  const displayPage = () => {
    if (currentPage === "main") {
      return mainPage();
    } else if (currentPage === "Step1") {
      return (
        <div>
          <Step1
            onSuccess={(
              getFirstName,
              getMiddleName,
              getSurname,
              getSelectPreviousName,
              getPrevNameType,
              getPrevFirstName,
              getPrevMiddleName,
              getPrevSurname,
              getGender,
              getHomePhone,
              getWorkPhone,
              getMobilePhone,
              getSelectPrefContactNum,
              getEmail,
              getDOB,
              getBirthplace,
              getCurrentPage
            ) => {
              setFirstName(getFirstName);
              setMiddleName(getMiddleName);
              setSurname(getSurname);
              concatUserFullName(getFirstName, getMiddleName, getSurname);
              setSelectPreviousName(getSelectPreviousName);
              setPrevNameType(getPrevNameType);
              setPrevFirstName(getPrevFirstName);
              setPrevMiddleName(getPrevMiddleName);
              setPrevSurname(getPrevSurname);
              setGender(getGender);
              setHomePhone(getHomePhone);
              setWorkPhone(getWorkPhone);
              setMobilePhone(getMobilePhone);
              setSelectPrefContactNum(getSelectPrefContactNum);
              setEmail(getEmail);
              setDOB(getDOB);
              setBirthPlace(getBirthplace);
              setCurrentPage(getCurrentPage);
            }}
          />
        </div>
      );
    } else if (currentPage === "Step2") {
      return (
        <div>
          <Step2
            onSuccess={(
              getResidentialAdd,
              getResidentFrom,
              getPostalAdd,
              getCurrentPage
            ) => {
              setResidentialAdd(getResidentialAdd);
              setResidentFrom(getResidentFrom);
              setPostalAdd(getPostalAdd);
              setCurrentPage(getCurrentPage);
            }}
            onPostponed={(getCurrentPage) => {
              setCurrentPage(getCurrentPage);
            }}
          />
        </div>
      );
    } else if (currentPage === "Step3") {
      return (
        <div>
          <Step3
            onSuccess={(
              getSelectCheckType,
              getSelectPositionTitle,
              getSelectProposedPlaceOfWork,
              getSelectContactGroupsOfPeople,
              getHardCopyPoliceCheck,
              getDigitalCopyPoliceCheck,
              getCurrentPage
            ) => {
              setCheckType(getSelectCheckType);
              setPositionTitle(getSelectPositionTitle);
              setProposedPlaceOfWork(getSelectProposedPlaceOfWork);
              setContactGroupsOfPeople(getSelectContactGroupsOfPeople);
              setHardCopyPoliceCheck(getHardCopyPoliceCheck);
              setDigitalCopyPoliceCheck(getDigitalCopyPoliceCheck);
              setCurrentPage(getCurrentPage);
            }}
            onPostponed={(getCurrentPage) => {
              setCurrentPage(getCurrentPage);
            }}
          />
        </div>
      );
    } else if (currentPage === "Step4") {
      return (
        <div>
          <Step4
            onSuccess={(
              getFile1,
              getFile2,
              getFile3,
              getFile4,
              getFile5,
              getFile6,
              getFile7,
              getCurrentPage
            ) => {
              setFile1(getFile1);
              // isFileExist(getFile1);
              console.log("GETFILE1");
              console.log(getFile1);
              setFile2(getFile2);
              // isFileExist(getFile2);
              setFile3(getFile3);
              // isFileExist(getFile3);
              setFile4(getFile4);
              // isFileExist(getFile4);
              setFile5(getFile5);
              // isFileExist(getFile5);
              setFile6(getFile6);
              // isFileExist(getFile6);
              setFile7(getFile7);
              // isFileExist(getFile7);
              setCurrentPage(getCurrentPage);
              setUserDetails({
                firstName: `${firstName}`,
                middleName: `${middleName}`,
                surname: `${surname}`,
                fullName: `${fullName}`,
                selectPreviousName: `${selectPreviousName}`,
                prevNameType: `${prevNameType}`,
                prevFirstName: `${prevFirstName}`,
                prevMiddleName: `${prevMiddleName}`,
                prevSurname: `${prevSurname}`,
                gender: `${gender}`,
                homePhone: `${homePhone}`,
                workPhone: `${workPhone}`,
                mobilePhone: `${mobilePhone}`,
                selectPrefContactNum: `${selectPrefContactNum}`,
                email: `${email}`,
                dOB: `${dOB}`,
                birthplace: `${birthplace}`,
                residentialAdd: `${residentialAdd}`,
                residentFrom: `${residentFrom}`,
                postalAdd: `${postalAdd}`,
                checkType: `${checkType}`,
                positionTitle: `${positionTitle}`,
                proposedPlaceOfWork: `${proposedPlaceOfWork}`,
                contactGroupsOfPeople: `${contactGroupsOfPeople}`,
                hardCopyPoliceCheck: `${hardCopyPoliceCheck}`,
                digitalCopyPoliceCheck: `${digitalCopyPoliceCheck}`,
                file1: getFile1,
                file2: getFile2,
                file3: getFile3,
                file4: getFile4,
                file5: getFile5,
                file6: getFile6,
                file7: getFile7,
              });
            }}
            onPostponed={(getCurrentPage) => {
              setCurrentPage(getCurrentPage);
            }}
          />
        </div>
      );
    } else if (currentPage === "Step5") {
      return (
        <div>
          <Step5
            onDisplay={() => {
              return userDetails;
            }}
            onSuccess={(getCurrentPage) => {
              setCurrentPage(getCurrentPage);
            }}
            onPostponed={(getCurrentPage) => {
              setCurrentPage(getCurrentPage);
            }}
          />
        </div>
      );
    } else if (currentPage === "Step6") {
      return (
        <div>
          <Step6
            onDisplay={() => {
              return userDetails;
            }}
            onSuccess={(getCurrentPage, payment) => {
              setCurrentPage(getCurrentPage);
              setPayment(payment);
              const formData = new FormData();
              formData.append("firstName", firstName);
              formData.append("middleName", middleName);
              formData.append("surname", surname);
              formData.append("fullName", fullName);
              formData.append("selectPreviousName", selectPreviousName);
              formData.append("prevNameType", prevNameType);
              formData.append("prevFirstName", prevFirstName);
              formData.append("prevMiddleName", prevMiddleName);
              formData.append("prevSurname", prevSurname);
              formData.append("gender", gender);
              formData.append("homePhone", homePhone);
              formData.append("workPhone", workPhone);
              formData.append("mobilePhone", mobilePhone);
              formData.append("selectPrefContactNum", selectPrefContactNum);
              formData.append("email", email);
              formData.append("dOB", dOB);
              formData.append("birthplace", birthplace);
              formData.append("residentialAdd", residentialAdd);
              formData.append("residentFrom", residentFrom);
              formData.append("postalAdd", postalAdd);
              formData.append("checkType", checkType);
              formData.append("positionTitle", positionTitle);
              formData.append("proposedPlaceOfWork", proposedPlaceOfWork);
              formData.append("contactGroupsOfPeople", contactGroupsOfPeople);
              formData.append("hardCopyPoliceCheck", hardCopyPoliceCheck);
              formData.append("digitalCopyPoliceCheck", digitalCopyPoliceCheck);
              formData.append("payment", payment);
              // appendFiles(formData);
              formData.append(file1.name, file1, file1.name);
              formData.append(file2.name, file2, file2.name);
              formData.append(file3.name, file3, file3.name);
              formData.append(file4.name, file4, file4.name);
              formData.append(file5[0].name, file5[0], file5[0].name);
              formData.append(file6[0].name, file6[0], file6[0].name);
              formData.append(file7[0].name, file7[0], file7[0].name);
              setIsLoading(true);
              axios
                .post(
                  "https://bx1pxkxsud.execute-api.ap-southeast-2.amazonaws.com/dev/applyonline",
                  formData,
                  {
                    headers: {
                      "Content-type": "multipart/form-data",
                      Accept: "multipart/form-data",
                    },
                  }
                )
                .then((response) => {
                  setIsSuccessfull(true);
                  setIsLoading(false);
                  window.location.reload(false);
                })
                .catch((error) => {
                  setIsLoading(false);
                  window.location.reload(false);
                });
            }}
            onPostponed={(getCurrentPage) => {
              setCurrentPage(getCurrentPage);
            }}
          />
        </div>
      );
    }
  };

  // const isFileExist = (file) => {
  //   if (file.length !== 0) {
  //     setFiles((files) => files.concat(file));
  //   }
  // };

  // const appendFiles = (formData) => {
  //   let number = 1;
  //   for (let i = 0; i < files.length; i++) {
  //     let fileName = "file" + [number];
  //     formData.append(fileName, files[i], files[i].name);
  //     number = number + 1;
  //   }
  // };

  const displayLoading = () => {
    if (isLoading) {
      return (
        <div
          style={{
            display: "block",
            position: "fixed",
            width: "100%",
            height: "100%",
            top: "0",
            left: "0",
            background: "rgba(0,0,0,0.5)",
            zIndex: "2",
          }}
        >
          Loading
        </div>
      );
    } else {
      return (
        <div
          style={{
            display: "none",
          }}
        ></div>
      );
    }
  };

  function mainPage() {
    return (
      <div>
        {displayLoading()}
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
                        <img alt="" src={ApplyIcon1} />
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
                        <img alt="" src={ApplyIcon2} />
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
                    <a onClick={setPage} className="applicationbg">
                      Start Application
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

                    <a onClick={setPage} className="startbtn">
                      Start Application
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
                                  color: "rgb(34, 34, 34)",
                                  fontFamily: "arial,sans-serif",
                                  fontSize: "16px",
                                }}
                              >
                                &nbsp;is conducted with your informed consent to
                                determine
                              </span>
                              <span
                                style={{
                                  color: "rgb(34, 34, 34)",
                                  fontFamily: "arial,sans-serif",
                                  fontSize: "16px",
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
                                <a onClick={setPage}>Start Application</a>
                              </li>
                              <li>
                                3-step process and takes approximately 5 minutes
                                to complete:
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
                                  fontSize: "16px",
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
                                  fontSize: "16px",
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
                                  width: "106px",
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
      </div>
    );
  }

  return <div>{displayPage()}</div>;
};

export default ApplyOnline;
