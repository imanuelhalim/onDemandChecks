import React from "react";

const Step1_PersonalDetails = () => {
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
            enctype="multipart/form-data"
            method="post"
            accept-charset="utf-8"
            onsubmit="return checkform();"
            autocomplete="off"
            action="/applyonlines/step1"
          >
            <div style={{ display: "none" }}>
              <input type="hidden" name="_method" value="POST" />
            </div>
            <div className="forminformation">
              <h3>Personal Details</h3>
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
                      name="firstname"
                      className="inpuststyles"
                      autofocus="autofocus"
                      required="required"
                      maxlength="50"
                      id="firstname"
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
                      name="secondname"
                      className="inpuststyles"
                      maxlength="50"
                      id="secondname"
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
                      name="surname"
                      className="inpuststyles"
                      required="required"
                      maxlength="50"
                      id="surname"
                    />
                  </div>{" "}
                </div>
              </div>

              <h3>Previous Names</h3>
              <div className="col-md-12 radiobuttonbox">
                <div className="formboxs">
                  <label>
                    Have you ever been known by another name (including
                    previous, maiden name, etc)?
                  </label>
                  <input type="hidden" name="anothername" value="" />
                  <label for="anothername-yes">
                    <input
                      type="radio"
                      name="anothername"
                      value="Yes"
                      id="anothername-yes"
                      required="required"
                    />
                    Yes
                  </label>
                  <label for="anothername-no">
                    <input
                      type="radio"
                      name="anothername"
                      value="No"
                      id="anothername-no"
                      required="required"
                    />
                    No
                  </label>
                </div>
              </div>

              <div
                className="prviousinfodiv anothername_field"
                style={{ display: "none" }}
              >
                <div className="col-md-4">
                  <div className="formboxs">
                    <label>Name Type</label>
                    <div className="input select">
                      <select
                        name="newnametype"
                        className="selectsyless"
                        id="newnametype"
                      >
                        <option value="">Name Type</option>
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
                        maxlength="50"
                        id="newfirstname"
                      />
                    </div>{" "}
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
                        maxlength="50"
                        id="newsecondname"
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
                        maxlength="50"
                        id="newsurname"
                      />
                    </div>{" "}
                  </div>
                </div>
              </div>

              <h3>Gender</h3>

              <div className="radiobtn">
                <input type="hidden" name="gender" value="" />
                <label for="gender-male">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    id="gender-male"
                    required="required"
                  />
                  Male
                </label>
                <label for="gender-female">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    id="gender-female"
                    required="required"
                  />
                  Female
                </label>
              </div>

              <h3>Contact Details</h3>
              <div className="col-md-4">
                <div className="formboxs">
                  <label>Home Phone </label>
                  <div className="input text required">
                    <input
                      type="text"
                      name="phone_3"
                      className="inpuststyles"
                      required="required"
                      maxlength="50"
                      id="phone-3"
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
                      required="required"
                      maxlength="50"
                      id="phone-2"
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
                      required="required"
                      maxlength="50"
                      id="phone-1"
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
                      value="3"
                      id="preferred-contact-3"
                      required="required"
                    />
                    Home
                  </label>
                  <label for="preferred-contact-2">
                    <input
                      type="radio"
                      name="preferred_contact"
                      value="2"
                      id="preferred-contact-2"
                      required="required"
                    />
                    Work
                  </label>
                  <label for="preferred-contact-1">
                    <input
                      type="radio"
                      name="preferred_contact"
                      value="1"
                      id="preferred-contact-1"
                      required="required"
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
                      maxlength="50"
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
                      maxlength="50"
                      id="secondaryemail"
                    />
                  </div>{" "}
                </div>
              </div>

              <div className="clearfix"></div>
              <h3>Date of Birth</h3>
              <div className="col-md-4">
                <div className="formboxs">
                  <label>Date of birth</label>
                  <div className="input text required">
                    <input
                      type="text"
                      name="date_of_birth"
                      className="inpuststyles datepicker"
                      required="required"
                      maxlength="100"
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
                      <option value="1">Nicaragua</option>
                      <option value="2">Suriname</option>
                      <option value="3">Netherlands Antilles</option>
                      <option value="4">Nauru</option>
                      <option value="5">Nepal</option>
                      <option value="6">Norway</option>
                      <option value="7">No Man s Land</option>
                      <option value="8">Netherlands</option>
                      <option value="9">Nigeria</option>
                      <option value="10">Niger</option>
                      <option value="11">Vanuatu</option>
                      <option value="12">Norfolk Island</option>
                      <option value="13">Niue</option>
                      <option value="14">New Caledonia</option>
                      <option value="15">Mozambique</option>
                      <option value="16">Malaysia</option>
                      <option value="17">Mexico</option>
                      <option value="18">Montenegro</option>
                      <option value="19">Maldives</option>
                      <option value="20">Malta</option>
                      <option value="21">Mauritania</option>
                      <option value="22">Mauritius</option>
                      <option value="23">Morocco</option>
                      <option value="24">Monaco</option>
                      <option value="25">Mali</option>
                      <option value="26">Macedonia</option>
                      <option value="27">Montserrat</option>
                      <option value="28">Malawi</option>
                      <option value="29">Mongolia</option>
                      <option value="30">Mayotte</option>
                      <option value="31">Moldova</option>
                      <option value="32">Macau</option>
                      <option value="33">Martinique</option>
                      <option value="34">Madagascar</option>
                      <option value="35">Libya</option>
                      <option value="36">Luxembourg</option>
                      <option value="37">Lesotho</option>
                      <option value="38">Liechtenstein</option>
                      <option value="39">Slovakia</option>
                      <option value="40">Liberia</option>
                      <option value="41">Lithuania</option>
                      <option value="42">Latvia</option>
                      <option value="43">Lebanon</option>
                      <option value="44">Laos</option>
                      <option value="45">Kazakhstan</option>
                      <option value="46">Kuwait</option>
                      <option value="47">Christmas Island</option>
                      <option value="48">South Korea</option>
                      <option value="49">Kiribati</option>
                      <option value="50">North Korea</option>
                      <option value="51">Kyrgyzstan</option>
                      <option value="52">Kenya</option>
                      <option value="53">Juan De Nova Island</option>
                      <option value="54">Jordan</option>
                      <option value="55">Jan Mayen</option>
                      <option value="56">Jamaica</option>
                      <option value="57">Jersey</option>
                      <option value="58">Japan</option>
                      <option value="59">Cote D Ivoire</option>
                      <option value="60">Italy</option>
                      <option value="61">Israel</option>
                      <option value="62">Iran</option>
                      <option value="63">Clipperton Island</option>
                      <option value="64">British Indian Ocean Territory</option>
                      <option value="65">India</option>
                      <option value="66">Isle Of Man</option>
                      <option value="67">Indonesia</option>
                      <option value="68">Iceland</option>
                      <option value="69">Hungary</option>
                      <option value="70">Croatia</option>
                      <option value="71">Honduras</option>
                      <option value="72">
                        Heard Island and Mcdonald Islands
                      </option>
                      <option value="73">Hong Kong</option>
                      <option value="74">Haiti</option>
                      <option value="75">Gaza Strip</option>
                      <option value="76">Guyana</option>
                      <option value="77">Guinea</option>
                      <option value="78">Guatemala</option>
                      <option value="79">Greece</option>
                      <option value="80">Guadeloupe</option>
                      <option value="81">Glorioso Islands</option>
                      <option value="82">Germany</option>
                      <option value="83">Greenland</option>
                      <option value="84">Guernsey</option>
                      <option value="85">Grenada</option>
                      <option value="86">Gibraltar</option>
                      <option value="87">Ghana</option>
                      <option value="88">Georgia</option>
                      <option value="89">Gabon GA Gambia, The</option>
                      <option value="90">French Southern and A. Lands</option>
                      <option value="91">France</option>
                      <option value="92">French Polynesia</option>
                      <option value="93">Faroe Islands</option>
                      <option value="94">Micronesia, Federated StatesOf</option>
                      <option value="95">
                        Falkland Islands (Islas Malvinas)
                      </option>
                      <option value="96">Fiji</option>
                      <option value="97">Finland</option>
                      <option value="98">French Guiana</option>
                      <option value="99">Czech Republic</option>
                      <option value="100">Europa Island</option>
                      <option value="101">Ethiopia</option>
                      <option value="102">El Salvador</option>
                      <option value="103">Eritrea</option>
                      <option value="104">Estonia</option>
                      <option value="105">Equatorial Guinea</option>
                      <option value="106">Ireland</option>
                      <option value="107">Egypt</option>
                      <option value="108">Ecuador</option>
                      <option value="109">Dominican Republic</option>
                      <option value="110">Dominica</option>
                      <option value="111">Djibouti</option>
                      <option value="112">Denmark</option>
                      <option value="113">Cyprus</option>
                      <option value="114">Cook Islands</option>
                      <option value="115">Cape Verde</option>
                      <option value="116">Cuba</option>
                      <option value="117">Central African Republic</option>
                      <option value="118">Costa Rica</option>
                      <option value="119">Coral Sea Islands</option>
                      <option value="120">Colombia</option>
                      <option value="121">Comoros</option>
                      <option value="122">Cameroon</option>
                      <option value="123">Cocos (Keeling) Islands</option>
                      <option value="124">Cayman Islands</option>
                      <option value="125">Chile</option>
                      <option value="126">China</option>
                      <option value="127">
                        Congo, Democratic Republic Of The
                      </option>
                      <option value="128">Congo</option>
                      <option value="129">Sri Lanka</option>
                      <option value="130">Chad</option>
                      <option value="131">Cambodia</option>
                      <option value="132">Canada</option>
                      <option value="133">Burundi</option>
                      <option value="134">Brunei</option>
                      <option value="135">Bouvet Island</option>
                      <option value="136">Bulgaria</option>
                      <option value="137">Bhutan</option>
                      <option value="138">Bassas Da India</option>
                      <option value="139">Brazil</option>
                      <option value="140">Solomon Islands</option>
                      <option value="141">Belarus</option>
                      <option value="142">Benin</option>
                      <option value="143">Burma</option>
                      <option value="144">Bolivia</option>
                      <option value="145">Bosnia and Herzegovina</option>
                      <option value="146">Belize</option>
                      <option value="147">Bangladesh</option>
                      <option value="148">Bahamas</option>
                      <option value="149">Belgium</option>
                      <option value="150">Bermuda</option>
                      <option value="151">Botswana</option>
                      <option value="152">Barbados</option>
                      <option value="153">Bahrain</option>
                      <option value="154">Anguilla</option>
                      <option value="155">Austria</option>
                      <option value="156">Ashmore and Cartier Islands</option>
                      <option value="157">Australia</option>
                      <option value="158">Argentina</option>
                      <option value="159">Angola</option>
                      <option value="160">Andorra</option>
                      <option value="161">Armenia</option>
                      <option value="162">Albania</option>
                      <option value="163">Azerbaijan</option>
                      <option value="164">Algeria</option>
                      <option value="165">Afghanistan</option>
                      <option value="166">United Arab Emirates</option>
                      <option value="167">Antigua and Barbuda</option>
                      <option value="168">Aruba</option>
                      <option value="169">New Zealand</option>
                      <option value="170">Oceans</option>
                      <option value="171">Paraguay</option>
                      <option value="172">Pitcairn Islands</option>
                      <option value="173">Peru</option>
                      <option value="174">Paracel Islands</option>
                      <option value="175">Spratly Islands</option>
                      <option value="176">Pakistan</option>
                      <option value="177">Poland</option>
                      <option value="178">Panama</option>
                      <option value="179">Portugal</option>
                      <option value="180">Papua New Guinea</option>
                      <option value="181">Palau</option>
                      <option value="182">Guinea-Bissau</option>
                      <option value="183">Qatar</option>
                      <option value="184">Reunion</option>
                      <option value="185">Marshall Islands</option>
                      <option value="186">Romania</option>
                      <option value="187">Philippines</option>
                      <option value="188">Russia</option>
                      <option value="189">Rwanda</option>
                      <option value="190">Saudi Arabia</option>
                      <option value="191">Saint Pierre and Miquelon</option>
                      <option value="192">Saint Kitts and Nevis</option>
                      <option value="193">Seychelles</option>
                      <option value="194">South Africa</option>
                      <option value="195">Senegal</option>
                      <option value="196">Saint Helena</option>
                      <option value="197">Slovenia</option>
                      <option value="198">Sierra Leone</option>
                      <option value="199">San Marino</option>
                      <option value="200">Singapore</option>
                      <option value="201">Somalia</option>
                      <option value="202">Spain</option>
                      <option value="203">Serbia</option>
                      <option value="204">Saint Lucia</option>
                      <option value="205">Sudan</option>
                      <option value="206">Svalbard</option>
                      <option value="207">Sweden</option>
                      <option value="208">South Georgia &amp; S.S.I.</option>
                      <option value="209">Syria</option>
                      <option value="210">Switzerland</option>
                      <option value="211">Trinidad and Tobago</option>
                      <option value="212">Tromelin Island</option>
                      <option value="213">Thailand</option>
                      <option value="214">Tajikistan</option>
                      <option value="215">Turks and Caicos Islands</option>
                      <option value="216">Tokelau</option>
                      <option value="217">Tonga</option>
                      <option value="218">Togo</option>
                      <option value="219">Sao Tome and Principe</option>
                      <option value="220">Tunisia</option>
                      <option value="221">Turkey</option>
                      <option value="222">Tuvalu</option>
                      <option value="223">Taiwan</option>
                      <option value="224">Turkmenistan</option>
                      <option value="225">Tanzania</option>
                      <option value="226">Uganda</option>
                      <option value="227">United Kingdom</option>
                      <option value="228">Ukraine</option>
                      <option value="229">United States of America</option>
                      <option value="230">Burkina Faso</option>
                      <option value="231">Uruguay</option>
                      <option value="232">Uzbekistan</option>
                      <option value="233">
                        Saint Vincent and The Grenadines
                      </option>
                      <option value="234">Venezuela</option>
                      <option value="235">British Virgin Islands</option>
                      <option value="236">Vietnam</option>
                      <option value="237">Virgin Islands</option>
                      <option value="238">Vatican City</option>
                      <option value="239">Namibia</option>
                      <option value="240">West Bank</option>
                      <option value="241">Wallis and Futuna</option>
                      <option value="242">Western Sahara</option>
                      <option value="243">Samoa</option>
                      <option value="244">Swaziland</option>
                      <option value="245">Yemen</option>
                      <option value="246">Zambia</option>
                      <option value="247">Zimbabwe</option>
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
