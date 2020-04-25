import React from "react";
import AllCountries from "../../Data/Countries.json";
import PhoneInput from "react-phone-number-input";
import DatePicker from "react-date-picker";

const Step1_PersonalDetails = (props) => {
  const [firstName, setFirstName] = React.useState("");
  const [middleName, setMiddleName] = React.useState("");
  const [surname, setSurname] = React.useState("");
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
  const [confirmEmail, setConfirmEmail] = React.useState("");
  const [statusConfirmEmail, setStatusConfirmEmail] = React.useState(true);
  const [dOB, setDOB] = React.useState("");
  const [formatDOB, setFormatDOB] = React.useState("");
  const [birthplace, setBirthPlace] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState("");

  const handleSetFirstName = (e) => {
    e.preventDefault();
    setFirstName(e.target.value);
  };

  const handleSetMiddleName = (e) => {
    e.preventDefault();
    setMiddleName(e.target.value);
  };

  const handleSetSurname = (e) => {
    e.preventDefault();
    setSurname(e.target.value);
  };

  const handleSelectPreviousName = (e) => {
    setSelectPreviousName(e.target.value);
  };

  const handleDetailPreviousName = () => {
    if (selectPreviousName === "Yes") {
      return (
        <div>
          <div className="col-md-4">
            <div className="formboxs">
              <label>
                Name Type<span className="required">* </span>
              </label>
              <div className="input select">
                <select
                  name="newnametype"
                  className="inpuststyles"
                  id="newnametype"
                  placeholder="Select name type"
                  onClick={handleSelectPrevNameType}
                >
                  <option value="Previous">Previous</option>
                  <option value="Also known as">Also known as</option>
                  <option value="Maiden">Maiden</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="formboxs">
              <label>
                First Name<span className="required">* </span>
              </label>
              <div className="input text">
                <input
                  type="text"
                  name="newfirstname"
                  className="inpuststyles"
                  maxLength="50"
                  id="newfirstname"
                  required
                  value={prevFirstName}
                  onChange={handleSetPrevFirstName}
                  placeholder="Enter Previous First Name"
                />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="formboxs">
              <label>Middle Name(if applicable) </label>
              <div className="input text">
                <input
                  type="text"
                  name="newsecondname"
                  className="inpuststyles"
                  maxLength="50"
                  id="newsecondname"
                  value={prevMiddleName}
                  onChange={handleSetPrevMiddleName}
                  placeholder="Enter Previous Middle Name"
                />
              </div>
            </div>
          </div>
          <div className="clearfix"></div>
          <div className="col-md-4">
            <div className="formboxs">
              <label>
                Last Name<span className="required">* </span>
              </label>
              <div className="input text">
                <input
                  type="text"
                  name="newsurname"
                  className="inpuststyles"
                  maxLength="50"
                  id="newsurname"
                  required
                  value={prevSurname}
                  onChange={handleSetPrevSurname}
                  placeholder="Enter Previous Surname"
                />
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  const handleSelectPrevNameType = (e) => {
    setPrevNameType(e.target.value);
  };

  const handleSetPrevFirstName = (e) => {
    e.preventDefault();
    setPrevFirstName(e.target.value);
  };
  const handleSetPrevMiddleName = (e) => {
    e.preventDefault();
    setPrevMiddleName(e.target.value);
  };

  const handleSetPrevSurname = (e) => {
    e.preventDefault();
    setPrevSurname(e.target.value);
  };

  const handleSelectGender = (e) => {
    setGender(e.target.value);
  };

  const handleSetHomePhone = (e) => {
    e.preventDefault();
    setHomePhone(e.target.value);
  };

  const handleSetWorkPhone = (e) => {
    e.preventDefault();
    setWorkPhone(e.target.value);
  };

  const handleSetEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handleSetConfirmEmail = (e) => {
    e.preventDefault();
    setConfirmEmail(e.target.value);
  };

  const handleSelectPrefContactNum = (e) => {
    setSelectPrefContactNum(e.target.value);
  };

  const handleSetDOB = (date) => {
    setFormatDOB(new Intl.DateTimeFormat("en-GB").format(date));
    setDOB(date);
  };

  const listCountries = () => {
    return (
      <div>
        <div className="input select required">
          <select
            name="countrybirth"
            className="selectsyless"
            required="required"
            id="countrybirth"
            onChange={handleSelectCountry}
          >
            <option value="">Please Select Country</option>
            {AllCountries.map((text, index) => {
              return (
                <option key={text + index} value={text.CountryName}>
                  {text.CountryName}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    );
  };

  const handleSelectCountry = (e) => {
    setBirthPlace(e.target.value);
  };

  const displayErrorConfirmEmail = () => {
    if (email !== confirmEmail && !statusConfirmEmail) {
      return (
        <div>
          <span className="required">Confirm Email is Invalid</span>
        </div>
      );
    }
  };

  const handleSubmitButton = () => {
    if (email === confirmEmail && email !== "") {
      setCurrentPage("Step2");
    } else if (email !== confirmEmail || email === "") {
      setStatusConfirmEmail(false);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (currentPage === "Step2") {
      props.onSuccess(
        firstName,
        middleName,
        surname,
        selectPreviousName,
        prevNameType,
        prevFirstName,
        prevMiddleName,
        prevSurname,
        gender,
        homePhone,
        workPhone,
        mobilePhone,
        selectPrefContactNum,
        email,
        formatDOB,
        birthplace,
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
                <div className="stepbtninfo">
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
                <strong>Personal Details</strong>
              </h3>
              <h4>
                Please include all names (including Middle Name(s)) as they
                appear on your Identification Documents, failing to do so may
                delay processing of your application.
              </h4>

              <div className="col-md-4">
                <div className="formboxs">
                  <label>
                    First Name<span className="required">* </span>
                  </label>
                  <div className="input text required">
                    <input
                      type="text"
                      value={firstName}
                      onChange={handleSetFirstName}
                      className="inpuststyles"
                      autoFocus
                      required
                      maxLength="50"
                      id="firstname"
                      placeholder="Enter first name"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="formboxs">
                  <label>Middle Name(if applicable)</label>
                  <div className="input text">
                    <input
                      type="text"
                      value={middleName}
                      onChange={handleSetMiddleName}
                      className="inpuststyles"
                      maxLength="50"
                      id="secondname"
                      placeholder="Enter middle name"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="formboxs">
                  <label>
                    Last Name<span className="required">* </span>
                  </label>
                  <div className="input text required">
                    <input
                      type="text"
                      value={surname}
                      onChange={handleSetSurname}
                      className="inpuststyles"
                      required
                      maxLength="50"
                      id="surname"
                      placeholder="Enter last name"
                    />
                  </div>
                </div>
              </div>

              <h3>
                <strong>Previous Names</strong>
              </h3>
              <div className="col-md-12 radiobuttonbox">
                <div className="formboxs">
                  <label>
                    Have you ever been known by another name (including
                    previous, maiden name, etc)?
                    <span className="required">* </span>
                  </label>
                  <label htmlFor="anothername-yes">
                    <input
                      type="radio"
                      name="anothername"
                      value="Yes"
                      id="anothername-yes"
                      required
                      onClick={handleSelectPreviousName}
                    />
                    Yes
                  </label>
                  <label htmlFor="anothername-no">
                    <input
                      type="radio"
                      name="anothername"
                      value="No"
                      id="anothername-no"
                      required
                      onClick={handleSelectPreviousName}
                    />
                    No
                  </label>
                </div>
                {handleDetailPreviousName()}
              </div>

              <h3>
                <strong>Gender</strong>
                <span className="required">* </span>
              </h3>

              <div className="radiobtn">
                <input type="hidden" name="gender" value="" />
                <label htmlFor="gender-male">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    id="gender-male"
                    required
                    onClick={handleSelectGender}
                  />
                  Male
                </label>
                <label htmlFor="gender-female">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    id="gender-female"
                    required
                    onClick={handleSelectGender}
                  />
                  Female
                </label>
              </div>

              <h3>
                <strong>Contact Details</strong>
              </h3>
              <div className="col-md-4">
                <div className="formboxs">
                  <label>Home Phone </label>
                  <div className="input text required">
                    <input
                      type="text"
                      name="phone_3"
                      className="inpuststyles"
                      maxLength="20"
                      id="phone-3"
                      value={homePhone}
                      onChange={handleSetHomePhone}
                      placeholder="Enter home phone number"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="formboxs">
                  <label>Work Phone </label>
                  <div className="input text required">
                    <input
                      type="text"
                      name="phone_2"
                      className="inpuststyles"
                      maxLength="20"
                      id="phone-2"
                      value={workPhone}
                      onChange={handleSetWorkPhone}
                      placeholder="Enter work phone number"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="formboxs">
                  <label>
                    Mobile Phone<span className="required">* </span>
                  </label>
                  <div className="input text required">
                    <PhoneInput
                      className="inpuststyles"
                      required
                      value={mobilePhone}
                      onChange={setMobilePhone}
                      placeholder="Enter mobile phone number"
                    />
                  </div>
                </div>
              </div>
              <div className="clearfix"></div>

              <div className="col-md-12 radiobuttonbox">
                <div className="formboxs">
                  <label>Select your perferred contact number</label>
                  <input type="hidden" name="preferred_contact" value="" />
                  <label htmlFor="preferred-contact-3">
                    <input
                      type="radio"
                      name="preferred_contact"
                      value="Home"
                      id="preferred-contact-3"
                      required="required"
                      onClick={handleSelectPrefContactNum}
                    />
                    Home
                  </label>
                  <label htmlFor="preferred-contact-2">
                    <input
                      type="radio"
                      name="preferred_contact"
                      value="Work"
                      id="preferred-contact-2"
                      required="required"
                      onClick={handleSelectPrefContactNum}
                    />
                    Work
                  </label>
                  <label htmlFor="preferred-contact-1">
                    <input
                      type="radio"
                      name="preferred_contact"
                      value="Mobile"
                      id="preferred-contact-1"
                      required="required"
                      onClick={handleSelectPrefContactNum}
                    />
                    Mobile
                  </label>
                </div>
              </div>

              <div className="clearfix"></div>
              <div className="col-md-6">
                <div className="formboxs">
                  <label>
                    Email
                    <span className="required">* </span>
                  </label>
                  <div className="input email required">
                    <input
                      type="email"
                      name="email"
                      className="inpuststyles"
                      required="required"
                      maxLength="50"
                      id="email"
                      value={email}
                      onChange={handleSetEmail}
                      placeholder="Enter email"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="formboxs">
                  <label>
                    Confirm your Email<span className="required">* </span>
                  </label>
                  <div className="input text required">
                    <input
                      type="text"
                      name="secondaryemail"
                      className="inpuststyles"
                      required="required"
                      maxLength="50"
                      id="secondaryemail"
                      value={confirmEmail}
                      onChange={handleSetConfirmEmail}
                      placeholder="Enter confirm email"
                    />
                    {displayErrorConfirmEmail()}
                  </div>
                </div>
              </div>

              <div className="clearfix"></div>
              <h3>
                <strong>Date of Birth</strong>
              </h3>
              <div className="col-md-4">
                <div className="formboxs">
                  <label>
                    Date of birth<span className="required">* </span>
                  </label>
                  <div className="input text required">
                    <DatePicker
                      dateFormat="dd/MM/yyyy"
                      className="inpuststyles datepicker"
                      required
                      selected={dOB}
                      onChange={handleSetDOB}
                      value={dOB}
                      placeholderText="dd/MM/yyyy"
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="formboxs">
                  <label>
                    Birthplace<span className="required">* </span>
                  </label>
                  {listCountries()}
                </div>
              </div>

              <div className="col-md-12">
                <input
                  type="submit"
                  value="Save &amp; Continue"
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

export default Step1_PersonalDetails;
