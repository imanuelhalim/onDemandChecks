import React from "react";

const ContactUs = () => {
  return (
    <div>
      <div className="innerhead">
        <div className="container">
          <div className="row">
            <div className="innerdetialshead">
              <h1>Contact Us</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="innerpage">
        <div className="container">
          <div className="col-md-3">
            <div className="contactdetials">
              <h3>Contact Details</h3>

              <h5>Address</h5>

              <p>
                Building 28, 266 Osborne Avenue, Clayton South VIC 3169,
                Australia
              </p>
              <h5>Phone</h5>
              <p>p. 1300 85 65 25 f. (03) 9551 1166</p>
              <h5>Mobile</h5>
              <p>+61 423 296 250&nbsp;</p>
              <p>+61 425 104 105</p>
              <h5>Mail address</h5>
              <p>hamud@ondemandchecks.com</p>
            </div>
          </div>
          <div className="col-md-9 padspce">
            <form
              method="post"
              accept-charset="utf-8"
              className="contact-form"
              autocomplete="off"
              action="/pages/contact_us"
            >
              <div style={{ display: "none" }}>
                <input type="hidden" name="_method" value="POST" />
              </div>{" "}
              <div className="contactformdiv">
                <h4>
                  Send us an <span className="txtcolor"> Email</span>
                </h4>
                <div className="col-md-4">
                  <input
                    type="text"
                    name="name"
                    className="forminputs"
                    placeholder="Name"
                    required="required"
                  />
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    name="email"
                    className="forminputs"
                    placeholder="Email"
                    required="required"
                  />{" "}
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    name="phone"
                    className="forminputs"
                    placeholder="Phone"
                    required="required"
                  />{" "}
                </div>
                <div className="col-md-12">
                  <div className="input textarea required">
                    <textarea
                      name="message"
                      className="formmsgbox"
                      placeholder="Enter your message"
                      required="required"
                      rows="5"
                      id="message"
                    ></textarea>
                  </div>{" "}
                </div>
                <div className="col-md-12">
                  <input type="submit" value="SEND" className="sendbg" />
                </div>
              </div>
              <div style={{ display: "none" }}>
                <input
                  type="hidden"
                  name="_Token[fields]"
                  value="a0eb778a1f4c3eb28ba59bacd229cfba7552b107%3A"
                />
                <input type="hidden" name="_Token[unlocked]" value="" />
              </div>
            </form>{" "}
          </div>

          <div className="col-md-12">
            <div className="locationinfo">
              <h5>Location</h5>
              <div className="mapdivs">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3146.37977467793!2d145.11590481532255!3d-37.94491757972888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad66b422c55a2c3%3A0x6bc5a906b6d77401!2sFactory+28%2F266+Osborne+Ave%2C+Clayton+South+VIC+3169%2C+Australia!5e0!3m2!1sen!2sin!4v1549885587604"
                  width="100%"
                  height="230"
                  frameborder="0"
                  style={{ border: "0" }}
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
