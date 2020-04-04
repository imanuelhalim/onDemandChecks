import React from "react";

const ContactUs = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [statusSend, setStatusSend] = React.useState(false);

  const handleName = e => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleEmail = e => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handlePhone = e => {
    e.preventDefault();
    setPhone(e.target.value);
  };

  const handleMessage = e => {
    e.preventDefault();
    setMessage(e.target.value);
  };

  const sendEmail = () => {
    if (name !== "" && email !== "" && phone !== "" && message !== "") {
      setStatusSend(true);
    }
  };

  // const displayMessageSent = () => {
  //   if (statusSend) {

  //     );
  //   }
  // };

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
            <form className="contact-form">
              <div className="contactformdiv">
                <h4>
                  Send us an <span className="txtcolor"> Email</span>
                </h4>
                <div className="col-md-4">
                  <input
                    type="text"
                    value={name}
                    className="forminputs"
                    placeholder="Enter name"
                    required
                    onChange={handleName}
                  />
                </div>
                <div className="col-md-4">
                  <input
                    type="email"
                    value={email}
                    className="forminputs"
                    placeholder="Enter email"
                    required
                    onChange={handleEmail}
                  />
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    value={phone}
                    className="forminputs"
                    placeholder="Enter phone number"
                    required
                    onChange={handlePhone}
                  />
                </div>
                <div className="col-md-12">
                  <div className="input textarea required">
                    <textarea
                      value={message}
                      className="formmsgbox"
                      placeholder="Enter your message"
                      required
                      rows="5"
                      id="message"
                      onChange={handleMessage}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <input
                    type="submit"
                    value="SEND"
                    className="sendbg"
                    onClick={sendEmail}
                  />
                </div>
              </div>
            </form>
          </div>

          <div className="col-md-12">
            <div className="locationinfo">
              <h5>Location</h5>
              <div className="mapdivs">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3146.37977467793!2d145.11590481532255!3d-37.94491757972888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad66b422c55a2c3%3A0x6bc5a906b6d77401!2sFactory+28%2F266+Osborne+Ave%2C+Clayton+South+VIC+3169%2C+Australia!5e0!3m2!1sen!2sin!4v1549885587604"
                  width="100%"
                  height="230"
                  frameBorder="0"
                  style={{ border: "0" }}
                  allowFullScreen
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
