import React from "react";

const Step3_Purpose = () => {
  return (
    <div>
      <div class="innerhead">
        <div class="container">
          <div class="row">
            <div class="innerdetialshead">
              <h1>On Demand Checks</h1>
            </div>
          </div>
        </div>
      </div>
      <div class="applyinner">
        <div class="container">
          <div class="col-md-12">
            <div class="stapdiv">
              <div class="stepbtnmain">
                <div class="stepbtndis">
                  Step 1<span class="stepbotomtxt">Personal Details</span>
                </div>
                <div class="stepbtninfo02">
                  Step 2<span class="stepbotomtxt">Address</span>
                </div>
                <div class="stepbtninfo05 tabpad">
                  Step 3<span class="stepbotomtxt">Purpose</span>
                </div>
                <div class="stepbtninfo03">
                  Step 4<span class="stepbotomtxt">Proof of Identity</span>
                </div>
                <div class="stepbtninfo03">
                  Step 5<span class="stepbotomtxt">Confirm</span>
                </div>
                <div class="stepbtninfo04">
                  Step 6<span class="stepbotomtxt">Consent From</span>
                </div>
              </div>
            </div>
          </div>
          <form
            enctype="multipart/form-data"
            method="post"
            accept-charset="utf-8"
            action="/applyonline/step3"
          >
            <div style="display:none;">
              <input type="hidden" name="_method" value="PUT" />
            </div>{" "}
            <div class="forminformation">
              <div class="col-md-12">
                <div class="formboxs">
                  <label>Check Type </label>
                  <div class="input select required">
                    <select
                      name="volunteer"
                      class="selectsyless"
                      required="required"
                      id="volunteer"
                    >
                      <option value="" selected="selected">
                        Please select check type
                      </option>
                      <option value="1">Employment</option>
                      <option value="2">Employment (Work for the Dole)</option>
                      <option value="3">
                        Volunteer / Student Placement / Work Experience
                      </option>
                      <option value="4">
                        Visa / Citizenship / Immigration into Australia
                      </option>
                    </select>
                  </div>{" "}
                </div>
              </div>

              <h3>Purpose:</h3>
              <h4>
                The purpose for your check helps determine what police
                information is disclosed on your result.
              </h4>
              <div class="col-md-12">
                <div class="formboxs">
                  <label>
                    Your position title, occupation or entitlement being sought{" "}
                  </label>

                  <div class="input select required">
                    <select
                      name="position"
                      class="selectsyless"
                      required="required"
                      id="position"
                    >
                      <option value="">Please select position</option>
                      <option value="1">Accountant</option>
                      <option value="2">Administrator</option>
                      <option value="3">Aged Care Worker</option>
                      <option value="4">Ambulance Attendant</option>
                      <option value="5">Assistant</option>
                      <option value="6">Call Center Operator</option>
                      <option value="7">Carer</option>
                      <option value="8">Caretaker</option>
                      <option value="9">Carpenter</option>
                      <option value="10">Chef</option>
                      <option value="11">Childcare Worker</option>
                      <option value="12">Cleaner</option>
                      <option value="13">Construction Worker</option>
                      <option value="14">Contractor</option>
                      <option value="15">
                        Customer Service Representative
                      </option>
                      <option value="16">Dentist</option>
                      <option value="17">Director</option>
                      <option value="18">Disability Worker</option>
                      <option value="19">Doctor</option>
                      <option value="20">Driver</option>
                      <option value="21">Driver - Bus</option>
                      <option value="22">Driver - Car</option>
                      <option value="23">Driver - Delivery</option>
                      <option value="24">Driver - Truck</option>
                      <option value="25">Educator</option>
                      <option value="26">Electrician</option>
                      <option value="27">Engineer</option>
                      <option value="28">Gardener</option>
                      <option value="29">Guest Service Attendant</option>
                      <option value="30">Hairdresser</option>
                      <option value="31">Hospitality Worker</option>
                      <option value="32">Information Technology Worker</option>
                      <option value="33">Instructor</option>
                      <option value="34">Labourer</option>
                      <option value="35">Maintenance Worker</option>
                      <option value="36">Manager</option>
                      <option value="37">Marketing Officer</option>
                      <option value="38">Mechanic</option>
                      <option value="39">Medical Worker</option>
                      <option value="40">Mortgage Broker</option>
                      <option value="41">Nurse</option>
                      <option value="42">Office Worker</option>
                      <option value="43">Pathologist</option>
                      <option value="44">Patient Transport Officer</option>
                      <option value="45">Physiotherapist</option>
                      <option value="46">Plumber</option>
                      <option value="47">Podiatrist</option>
                      <option value="48">Real Estate Agent</option>
                      <option value="49">Receptionist</option>
                      <option value="50">Retail Worker</option>
                      <option value="51">Sales Worker</option>
                      <option value="52">Security Officer</option>
                      <option value="53">Social Worker</option>
                      <option value="54">Student</option>
                      <option value="55">Student Placement</option>
                      <option value="56">Student Placement - Nurse</option>
                      <option value="57">Support</option>
                      <option value="58">Technician</option>
                      <option value="59">Telecommunication Worker</option>
                      <option value="60">Trades Person</option>
                      <option value="61">Transport Officer</option>
                      <option value="62">Youth Worker</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <div class="formboxs">
                  <label> Your proposed place of work </label>
                  <div class="input select required">
                    <select
                      name="workplace"
                      class="selectsyless"
                      required="required"
                      id="workplace"
                    >
                      <option value="">Please select work place</option>
                      <option value="1">Aged Care Facility</option>
                      <option value="2">Airport</option>
                      <option value="3">Ambulance</option>
                      <option value="4">Automotive Dealership</option>
                      <option value="5">Charity</option>
                      <option value="6">Church</option>
                      <option value="7">Commercial Kitchen</option>
                      <option value="8">Commercial Property</option>
                      <option value="9">Construction Site</option>
                      <option value="10">Consultant Agency</option>
                      <option value="11">Day Care</option>
                      <option value="12">Defence Base</option>
                      <option value="13">Financial Institution</option>
                      <option value="14">Government Agency</option>
                      <option value="15">Hospital</option>
                      <option value="16">Hotel</option>
                      <option value="17">Law Firm</option>
                      <option value="18">Medical Clinic</option>
                      <option value="19">Mine Site</option>
                      <option value="20">
                        Mine, Industry Regulation or Safety license
                      </option>
                      <option value="21">Public Building</option>
                      <option value="22">Recreation Centre</option>
                      <option value="23">Residential Property</option>
                      <option value="24">Restaurant</option>
                      <option value="25">School</option>
                      <option value="26">Software Company</option>
                      <option value="27">University</option>
                      <option value="28">Vehicle - Business</option>
                      <option value="29">Vehicle - Private</option>
                      <option value="30">Wildlife Rescue</option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="clearfix"></div>
              <div class="col-md-12">
                <div class="formboxs">
                  <label>
                    {" "}
                    Will you have contact with children and/or vulnerable groups
                    as part of the role you are applying for?
                  </label>

                  <div class="input select required">
                    <select
                      name="contact"
                      class="selectsyless"
                      required="required"
                      id="contact"
                    >
                      <option value="">Please select contact</option>
                      <option value="1">
                        Supervised contact - Direct or indirect contact with
                        children or vulnerable groups, with supervision
                      </option>
                      <option value="2">
                        Unsupervised contact - Direct or indirect contact with
                        children or vulnerable groups, without supervision
                      </option>
                      <option value="3">
                        No contact - No direct or indirect contact with children
                        or vulnerable groups
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="col-md-12 radiobuttonbox">
                <div class="formboxs">
                  <label>
                    Do you require a hard copy certificate(additional $9.95)?
                  </label>
                  <input type="hidden" name="hardcopy" value="" />
                  <label for="hardcopy-yes">
                    <input
                      type="radio"
                      name="hardcopy"
                      value="Yes"
                      id="hardcopy-yes"
                      required="required"
                    />
                    Yes
                  </label>
                  <label for="hardcopy-no">
                    <input
                      type="radio"
                      name="hardcopy"
                      value="No"
                      id="hardcopy-no"
                      checked="checked"
                      required="required"
                    />
                    No
                  </label>
                </div>
              </div>
              <div class="clearfix"></div>

              <p>&nbsp;</p>
              <h4>
                Would you like a digital copy Of your police check certificate
                forwarded electronically to your employer/organisation to assess
                your suitability?
              </h4>
              <div class="radiobtn">
                <input type="hidden" name="forward" value="" />
                <label for="forward-yes">
                  <input
                    type="radio"
                    name="forward"
                    value="Yes"
                    id="forward-yes"
                    required="required"
                  />
                  Yes
                </label>
                <label for="forward-no">
                  <input
                    type="radio"
                    name="forward"
                    value="No"
                    id="forward-no"
                    checked="checked"
                    required="required"
                  />
                  No
                </label>{" "}
              </div>
              <div class="clearfix"></div>

              <div class="col-md-12">
                <a href="/applyonline/step2" class="backbtns">
                  Previous Step
                </a>
                <input
                  type="submit"
                  value="Save &amp; Cantinue"
                  class="submitbtns"
                />
              </div>
            </div>
            <div style="display:none;">
              <input
                type="hidden"
                name="_Token[fields]"
                value="6760474d79d64a11b7d9e9585dfc32f42535714f%3A"
              />
              <input type="hidden" name="_Token[unlocked]" value="" />
            </div>
          </form>{" "}
        </div>
      </div>
    </div>
  );
};

export default Step3_Purpose;
