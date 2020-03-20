import React, { useEffect } from "react";
import AllCountries from "../../Data/Countries.json";

const Step2_Address = props => {
  const [addressRes, setAddressRes] = React.useState("");
  const [suburbRes, setSuburbRes] = React.useState("");
  const [stateRes, setStateRes] = React.useState("");
  const [postcodeRes, setPostcodeRes] = React.useState("");
  const [countryRes, setCountryRes] = React.useState("");
  const [recentYear, setRecentYear] = React.useState(new Date().getFullYear());
  const [years, setYears] = React.useState([]);
  const [selectMonthRes, setSelectMonthRes] = React.useState("");
  const [selectYearRes, setSelectYearRes] = React.useState("");
  const [samePostalAdd, setSamePostalAdd] = React.useState("");
  const [addressPost, setAddressPost] = React.useState("");
  const [suburbPost, setSuburbPost] = React.useState("");
  const [statePost, setStatePost] = React.useState("");
  const [postcodePost, setPostcodePost] = React.useState("");
  const [countryPost, setCountryPost] = React.useState("");
  const [residentialAdd, setResidentialAdd] = React.useState("");
  const [residentFrom, setResidentFrom] = React.useState("");
  const [postalAdd, setPostalAdd] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState("Step1");

  useEffect(() => {
    setYearsOption(recentYear);
  }, [recentYear]);

  const handleAddressRes = e => {
    e.preventDefault();
    setAddressRes(e.target.value);
  };

  const handleSuburbRes = e => {
    e.preventDefault();
    setSuburbRes(e.target.value);
  };

  const handleStateRes = e => {
    e.preventDefault();
    setStateRes(e.target.value);
  };

  const handlePostcodeRes = e => {
    e.preventDefault();
    setPostcodeRes(e.target.value);
  };

  const listCountriesResidential = () => {
    return (
      <div>
        <div className="input select required">
          <select
            name="countryResidential"
            className="inpuststyles"
            required
            id="countryResidential"
            onChange={handleSelectCountryResidential}
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

  const handleSelectCountryResidential = e => {
    setCountryRes(e.target.value);
  };

  const handleSelectMonthRes = e => {
    setSelectMonthRes(e.target.value);
  };

  const handleYearRes = () => {
    return (
      <div>
        <div className="input select required">
          <select
            name="current_address_year"
            className="inpuststyles"
            required
            id="current-address-year"
            onChange={handleSelectYearRes}
          >
            <option value="">Select Year</option>
            {years.map((text, index) => {
              return (
                <option key={text + index} value={text}>
                  {text}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    );
  };

  const setYearsOption = yearnow => {
    let listYears = [];
    const currentYear = yearnow;
    const pastYear = currentYear - 70;
    for (let year = pastYear; year <= currentYear; year++) {
      listYears.push(year);
    }
    setYears(listYears);
  };

  const handleSelectYearRes = e => {
    setSelectYearRes(e.target.value);
  };

  const handleSamePostalAddress = e => {
    setSamePostalAdd(e.target.value);
  };

  const handleSelectPostalAddress = () => {
    if (samePostalAdd === "No") {
      return (
        <div>
          <div className="col-md-8">
            <div className="formboxs">
              <label>
                Address<span className="required">* </span>
              </label>
              <div className="input text">
                <input
                  type="text"
                  name="postaladdress"
                  className="inpuststyles"
                  maxLength="50"
                  id="postaladdress"
                  required="required"
                  value={addressPost}
                  onChange={handleAddressPost}
                  placeholder="Enter address name"
                />
              </div>{" "}
            </div>
          </div>
          <div className="col-md-4">
            <div className="formboxs">
              <label>
                Suburb/Town/Locality<span className="required">* </span>
              </label>
              <div className="input text">
                <input
                  type="text"
                  name="postalsuburb"
                  className="inpuststyles"
                  maxLength="50"
                  id="postalsuburb"
                  equired="required"
                  value={suburbPost}
                  onChange={handleSuburbPost}
                  placeholder="Enter suburb name"
                />
              </div>{" "}
            </div>
          </div>
          <div className="col-md-4">
            <div className="formboxs">
              <label>
                State<span className="required">* </span>
              </label>
              {/* <div className="input select">
            <select
              name="postalstate"
              className="inpuststyles"
              id="postalstate"
            >
              <option value="">Please Select State</option>
              <option value="Australian Capital Territory">
                Australian Capital Territory
              </option>
              <option value="New South Wales">New South Wales</option>
              <option value="Northern Territory">
                Northern Territory
              </option>
              <option value="Queensland">Queensland</option>
              <option value="South Australia">South Australia</option>
              <option value="Tasmania">Tasmania</option>
              <option value="Victoria">Victoria</option>
              <option value="Western Australia">Western Australia</option>
            </select>
          </div>{" "} */}
              <input
                type="text"
                name="postalState"
                className="inpuststyles"
                required
                maxLength="50"
                id="postalState"
                value={statePost}
                onChange={handleStatePost}
                placeholder="Enter state name"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="formboxs">
              <label>
                Postcode<span className="required">* </span>
              </label>
              <div className="input text">
                <input
                  type="text"
                  name="postalpostcode"
                  className="inpuststyles"
                  maxLength="50"
                  id="postalpostcode"
                  value={postcodePost}
                  onChange={handlePostcodePost}
                />
              </div>{" "}
            </div>
          </div>

          <div className="col-md-4">
            <div className="formboxs">
              <label>
                Select Country<span className="required">* </span>
              </label>
              {listCountriesPostal()}{" "}
            </div>
          </div>
        </div>
      );
    }
  };

  const handleAddressPost = e => {
    e.preventDefault();
    setAddressPost(e.target.value);
  };

  const handleSuburbPost = e => {
    e.preventDefault();
    setSuburbPost(e.target.value);
  };

  const handleStatePost = e => {
    e.preventDefault();
    setStatePost(e.target.value);
  };

  const handlePostcodePost = e => {
    e.preventDefault();
    setPostcodePost(e.target.value);
  };

  const listCountriesPostal = () => {
    return (
      <div>
        <div className="input select required">
          <select
            name="postalcountry"
            className="inpuststyles"
            required
            id="postalcountry"
            onChange={handleSelectCountryPostal}
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

  const handleSelectCountryPostal = e => {
    setCountryPost(e.target.value);
  };

  const handleBackButton = () => {
    props.onPostponed(currentPage);
  };

  const handleSubmitButton = () => {
    setCurrentPage("Step3");
    setResidentialAdd(
      `${addressRes} ", " ${suburbRes} ", " ${stateRes} " " ${postcodeRes} ", " ${countryRes}`
    );
    setResidentFrom(`${selectMonthRes} "/" ${selectYearRes}`);
    setPostalAdd(
      `${addressPost} ", " ${suburbPost} ", " ${statePost} " " ${postcodePost} ", " ${countryPost}`
    );
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    if (currentPage === "Step3") {
      props.onSuccess(residentialAdd, residentFrom, postalAdd, currentPage);
    }
  };

  return (
    <div>
      <div className="applyinner">
        <div className="container">
          <div className="col-md-12">
            <div className="stapdiv">
              <div className="stepbtnmain">
                <div className="stepbtndis">
                  Step 1<span className="stepbotomtxt">Personal Details</span>
                </div>
                <div className="stepbtninfo05">
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
          <form
            onSubmit={handleFormSubmit}
            // enctype="multipart/form-data"
            // method="post"
            // accept-charset="utf-8"
            // action="/applyonline/step2"
          >
            {/* <div style={{ display: "none" }}>
              <input type="hidden" name="_method" value="PUT" />
            </div> */}
            <div className="forminformation">
              <h3>
                <strong>Current Residential Address</strong>
              </h3>
              {/* <div className="col-md-12">
                <div className="formboxs">
                  <label>Search Your Address</label>
                  <Autocomplete
                    style={{ width: "100%" }}
                    onPlaceSelected={place => {
                      console.log(place);
                    }}
                    types={["(regions)"]}
                    // componentRestrictions={{ country: "ru" }}
                  />
                  <input
                    type="text"
                    name="searchaddress"
                    className="inpuststyles"
                    autoFocus
                    required
                    maxLength="50"
                    id="searchaddress"
                    placeholder="Search Your Address"
                    // autoComplete={true}
                  />
                </div>
              </div> */}
              <div className="col-md-8">
                <div className="formboxs">
                  <label>
                    Street Address<span className="required">* </span>
                  </label>
                  <div className="input text required">
                    <input
                      type="text"
                      name="address"
                      className="inpuststyles"
                      autoFocus
                      required
                      maxLength="50"
                      id="address"
                      value={addressRes}
                      onChange={handleAddressRes}
                      placeholder="Enter address name"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="formboxs">
                  <label>
                    Suburb/Town/Locality<span className="required">* </span>
                  </label>
                  <div className="input text required">
                    <input
                      type="text"
                      name="suburb"
                      className="inpuststyles"
                      id="suburb"
                      required
                      maxLength="50"
                      value={suburbRes}
                      onChange={handleSuburbRes}
                      placeholder="Enter suburb name"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="formboxs">
                  <label>
                    State<span className="required">* </span>
                  </label>
                  <div className="input select required">
                    <input
                      type="text"
                      name="state"
                      className="inpuststyles"
                      required
                      maxLength="50"
                      id="state"
                      value={stateRes}
                      onChange={handleStateRes}
                      placeholder="Enter state name"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="formboxs">
                  <label>
                    Postcode<span className="required">* </span>
                  </label>
                  <div className="input text required">
                    <input
                      type="text"
                      name="postcode"
                      className="inpuststyles"
                      required
                      maxLength="50"
                      id="postcode"
                      value={postcodeRes}
                      onChange={handlePostcodeRes}
                      placeholder="Enter postcode"
                    />
                  </div>{" "}
                </div>
              </div>
              <div className="col-md-4">
                <div className="formboxs">
                  <label>
                    Select country<span className="required">* </span>
                  </label>
                  {listCountriesResidential()}{" "}
                </div>
              </div>

              <h3>
                <strong>Resident From:</strong>
              </h3>
              <div className="col-md-4">
                <div className="formboxs">
                  <label>
                    Select Month<span className="required">* </span>
                  </label>
                  <div className="input select required">
                    <select
                      name="current_address_month"
                      className="inpuststyles"
                      required="required"
                      id="current-address-month"
                      onChange={handleSelectMonthRes}
                    >
                      <option value="">Select Month</option>
                      <option value="January">January</option>
                      <option value="February">February</option>
                      <option value="March">March</option>
                      <option value="April">April</option>
                      <option value="May">May</option>
                      <option value="June">June</option>
                      <option value="July">July</option>
                      <option value="August">August</option>
                      <option value="September">September</option>
                      <option value="October">October</option>
                      <option value="November">November</option>
                      <option value="December">December</option>
                    </select>
                  </div>{" "}
                </div>
              </div>
              <div className="col-md-4">
                <div className="formboxs">
                  <label>
                    Select Year<span className="required">* </span>
                  </label>
                  {handleYearRes()}{" "}
                </div>
              </div>
              <div className="clearfix"></div>

              <h3>
                <strong>Postal Address</strong>
              </h3>
              <div className="col-md-12 radiobuttonbox">
                <div className="formboxs">
                  <label>
                    Is your postal address the same as your residential address?
                    <span className="required">* </span>
                  </label>
                  <label htmlFor="postal-yes">
                    <input
                      type="radio"
                      name="postal"
                      value="Yes"
                      id="postal-yes"
                      defaultChecked={true}
                      required="required"
                      onClick={handleSamePostalAddress}
                    />
                    Yes
                  </label>
                  <label htmlFor="postal-no">
                    <input
                      type="radio"
                      name="postal"
                      value="No"
                      id="postal-no"
                      required="required"
                      onClick={handleSamePostalAddress}
                    />
                    No
                  </label>
                </div>
                {handleSelectPostalAddress()}
              </div>
              {/* <div className="clearfix"></div> */}

              <div className="col-md-12">
                {/* <a href="/applyonline/step1" className="backbtns">
                  Previous Step
                </a> */}
                {/* <a onClick={handleBackButton} className="backbtns">
                  Previous Step
                </a> */}
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
          </form>{" "}
        </div>
      </div>
    </div>
  );
};

export default Step2_Address;
