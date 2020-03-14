import React from "react";
import validator from "validator";

const Step1_PersonalDetails = () => {
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
  const [dOB, setDOB] = React.useState(Date);
  const [birthplace, setBirthPlace] = React.useState("");

  const handleSetFirstName = e => {
    e.preventDefault();
    setFirstName(e.target.value);
  };

  const handleSetMiddleName = e => {
    e.preventDefault();
    setMiddleName(e.target.value);
  };

  const handleSetSurname = e => {
    e.preventDefault();
    setSurname(e.target.value);
  };

  const handleSelectPreviousName = e => {
    setSelectPreviousName(e.target.value);
  };

  const handleDetailPreviousName = () => {
    if (selectPreviousName === "Yes") {
      return (
        <div>
          <div className="col-md-4">
            <div className="formboxs">
              <label>Name Type</label>
              <div className="input select">
                <select
                  name="newnametype"
                  className="selectsyless"
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
              <label>First Name </label>
              <div className="input text">
                <input
                  type="text"
                  name="newfirstname"
                  className="inpuststyles"
                  maxLength="50"
                  id="newfirstname"
                  value={prevFirstName}
                  onChange={handleSetPrevFirstName}
                  placeholder="Enter Previous First Name"
                />
              </div>{" "}
            </div>
          </div>{" "}
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
              </div>{" "}
            </div>
          </div>
          <div className="clearfix"></div>
          <div className="col-md-4">
            <div className="formboxs">
              <label>Last Name </label>
              <div className="input text">
                <input
                  type="text"
                  name="newsurname"
                  className="inpuststyles"
                  maxLength="50"
                  id="newsurname"
                  value={prevSurname}
                  onChange={handleSetPrevSurname}
                  placeholder="Enter Previous Surname"
                />
              </div>{" "}
            </div>
          </div>
        </div>
      );
    }
  };

  const handleSelectPrevNameType = e => {
    setPrevNameType(e.target.value);
  };

  const handleSetPrevFirstName = e => {
    e.preventDefault();
    setPrevFirstName(e.target.value);
  };
  const handleSetPrevMiddleName = e => {
    e.preventDefault();
    setPrevMiddleName(e.target.value);
  };

  const handleSetPrevSurname = e => {
    e.preventDefault();
    setPrevSurname(e.target.value);
  };

  const handleSelectGender = e => {
    setGender(e.target.value);
  };

  const handleSetHomePhone = e => {
    if (validator.isMobilePhone(e.target.value)) {
      setHomePhone(e.target.value);
    }
    console.log(e.target.value);
  };

  const handleSetWorkPhone = e => {
    if (validator.isMobilePhone(e.target.value)) {
      setWorkPhone(e.target.value);
    }
    console.log(e.target.value);
  };

  const handleSetMobilePhone = e => {
    if (validator.isMobilePhone(e.target.value)) {
      setMobilePhone(e.target.value);
    }
    console.log(e.target.value);
  };

  const handleSelectPrefContactNum = e => {
    setSelectPrefContactNum(e.target.value);
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
                  Step 6<span className="stepbotomtxt">Consent From</span>
                </div>
              </div>
            </div>
          </div>

          <form
          // enctype="multipart/form-data"
          // method="post"
          // accept-charset="utf-8"
          // onsubmit="return checkform();"
          // autocomplete="off"
          // action="/applyonlines/step1"
          >
            {/* <div style={{ display: "none" }}>
              <input type="hidden" name="_method" value="POST" />
            </div> */}
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
                  <label>First Name</label>
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
                  </div>{" "}
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
                  </div>{" "}
                </div>
              </div>
              <div className="col-md-4">
                <div className="formboxs">
                  <label>Last Name</label>
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
                  </div>{" "}
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
                  </label>
                  <label for="anothername-yes">
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
                  <label for="anothername-no">
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
              </h3>

              <div className="radiobtn">
                <input type="hidden" name="gender" value="" />
                <label for="gender-male">
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
                <label for="gender-female">
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
                      maxLength="50"
                      id="phone-3"
                      value={homePhone}
                      onChange={handleSetHomePhone}
                    />
                  </div>{" "}
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
                      maxLength="50"
                      id="phone-2"
                      value={workPhone}
                      onChange={handleSetWorkPhone}
                    />
                  </div>{" "}
                </div>
              </div>
              <div className="col-md-4">
                <div className="formboxs">
                  <label>Mobile Phone </label>
                  <div className="input text required">
                    <input
                      type="text"
                      name="phone_1"
                      className="inpuststyles"
                      required
                      maxLength="50"
                      id="phone-1"
                      value={mobilePhone}
                      onChange={handleSetMobilePhone}
                    />
                  </div>{" "}
                </div>
              </div>
              <div className="clearfix"></div>

              <div className="col-md-12 radiobuttonbox">
                <div className="formboxs">
                  <label>Select your perferred contact number</label>
                  <input type="hidden" name="preferred_contact" value="" />
                  <label for="preferred-contact-3">
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
                  <label for="preferred-contact-2">
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
                  <label for="preferred-contact-1">
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
                  <label>Email </label>
                  <div className="input email required">
                    <input
                      type="email"
                      name="email"
                      className="inpuststyles"
                      required="required"
                      maxLength="50"
                      id="email"
                    />
                  </div>{" "}
                </div>
              </div>
              <div className="col-md-6">
                <div className="formboxs">
                  <label>Confirm your Email </label>
                  <div className="input text required">
                    <input
                      type="text"
                      name="secondaryemail"
                      className="inpuststyles"
                      required="required"
                      maxLength="50"
                      id="secondaryemail"
                    />
                  </div>{" "}
                </div>
              </div>

              <div className="clearfix"></div>
              <h3>
                <strong>Date of Birth</strong>
              </h3>
              <div className="col-md-4">
                <div className="formboxs">
                  <label>Date of birth</label>
                  <div className="input text required">
                    <input
                      type="text"
                      name="date_of_birth"
                      className="inpuststyles datepicker"
                      required="required"
                      maxLength="100"
                      id="date-of-birth"
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="formboxs">
                  <label>Birthplace </label>
                  <div className="input select required">
                    <select
                      name="countrybirth"
                      className="selectsyless"
                      required="required"
                      id="countrybirth"
                    >
                      <option value="">Please Select Country</option>
                      <option value="Nicaragua">Nicaragua</option>
                    <ngambil dari JSON file countries
                    </select>
                  </div>
                </div>
              </div>

              <div className="col-md-12">
                <input
                  type="submit"
                  value="Save &amp; Continue"
                  className="submitbtns"
                />
              </div>
            </div>
            <div style={{ display: "none" }}>
              <input
                type="hidden"
                name="_Token[fields]"
                value="aff0b2c7671c7cacdd0bc187846fc34f0fe7353d%3A"
              />
              <input type="hidden" name="_Token[unlocked]" value="" />
            </div>
          </form>
        </div>
      </div>
      {/* <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.0/themes/base/jquery-ui.css">
<script src="https://code.jquery.com/ui/1.12.0/jquery-ui.js"></script>
<script type="text/javascript">
    jQuery(document).ready(function () {
        jQuery(".datepicker").datepicker({
            dateFormat: "yy/mm/dd/",
            maxDate: 0,
            changeMonth: true,
            changeYear: true,
        });
        jQuery("input[name='anothername']").click(function () {
            var nameOptVal = jQuery("input[name='anothername']:checked").val();
            if (nameOptVal == "Yes") {
                jQuery(".anothername_field").show();
            } else {
                jQuery(".anothername_field").hide();
            }
        });

    });

    function checkalphabets(value) {
        if (value != value.match(/^[a-zA-Z]*$/)) {
            return false;
        }
    }
    function checkphonenumber(value) {
        if (value != value.match(/^[- +()]*[0-9][- +()0-9]*$/)) {
            return false;
        }
    }
    function checkform() {
        var firstname = document.getElementById('firstname').value;
        var secondname = document.getElementById('secondname').value;
        var surname = document.getElementById('surname').value;
        var newfirstname = document.getElementById('newfirstname').value;
        var newsecondname = document.getElementById('newsecondname').value;
        var newsurname = document.getElementById('newsurname').value;
        var phone_3 = document.getElementById('phone-3').value;
        var phone_2 = document.getElementById('phone-2').value;
        var phone_1 = document.getElementById('phone-1').value;
        if (checkalphabets(firstname) == false) {
            alert("First name inccorect");
            return false;
        } else
        if (checkalphabets(secondname) == false) {
            alert("Middle name inccorect");
            return false;
        } else
        if (checkalphabets(surname) == false) {
            alert("Last name inccorect");
            return false;
        } else
        if (checkalphabets(newfirstname) == false) {
            alert("Another first name inccorect");
            return false;
        } else
        if (checkalphabets(newsecondname) == false) {
            alert("Another middle name inccorect");
            return false;
        } else
        if (checkalphabets(newsurname) == false) {
            alert("Another last name inccorect");
            return false;
        } else
        if (checkphonenumber(phone_3) == false) {
            alert("Home phone inccorect");
            return false;
        } else
        if (checkphonenumber(phone_2) == false) {
            alert("Work phone inccorect");
            return false;
        } else
        if (checkphonenumber(phone_1) == false) {
            alert("Mobile phone inccorect");
            return false;
        }
    }
</script>         */}
    </div>
  );
};

export default Step1_PersonalDetails;
