import React from "react";
import PayPal from "../../images/paypal.jpg";

const Step6_Payment = props => {
  const [paymentMethod, setPaymentMethod] = React.useState("");
  const [payPalAcc, setPayPalAcc] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState("Step5");

  const handlePayment = e => {
    setPaymentMethod(e.target.value);
    if (paymentMethod === "PayPal") {
      setPayPalAcc("");
    } else if (paymentMethod === "Bank Transfer") {
      setPayPalAcc("");
    }
  };

  const displayPaymentMethod = () => {
    if (paymentMethod === "PayPal") {
      return (
        <div>
          <label>Have you registred PayPal account?</label>
          <div className="formboxs">
            <label htmlFor="anothername-yes">
              <input
                type="radio"
                name="paypallAcc"
                value="Yes"
                id="anothername-yes"
                required
                onClick={checkPayPalAcc}
              />
              Yes
            </label>
            <label htmlFor="anothername-no">
              <input
                type="radio"
                name="paypallAcc"
                value="No"
                id="anothername-no"
                required
                onClick={checkPayPalAcc}
              />
              No
            </label>
          </div>
        </div>
      );
    } else if (paymentMethod === "Bank Transfer") {
      return (
        <div>
          <div>
            Before you transfer, plase ensure that you put your name in the
            description.
          </div>
          <div>
            <label>Bank Name: Commonwealth Bank</label>
          </div>
          <div>
            <label>BSB No: 123-456</label>
          </div>
          <div>
            <label>Account No: 0987-6543</label>
          </div>
          <div>
            Once you finished do payment, please send the receipt to
            email@email.com.
          </div>
        </div>
      );
    }
  };

  const checkPayPalAcc = e => {
    setPayPalAcc(e.target.value);
  };

  const displayOptionPayPal = e => {
    if (payPalAcc === "No") {
      return (
        <div>
          To make PayPal payment, you must register PayPal account. To register
          PayPall account, please click{" "}
          <a href="https://www.paypal.com/au/home/" target="_blank">
            here
          </a>
        </div>
      );
    } else if (payPalAcc === "Yes") {
      return (
        <div>
          <div>Please click the PayPal logo to make a payment</div>
          {/* <a
            href=""
            target="_blank"
          > */}
          <img alt="" src={PayPal} />
          {/* </a> */}
          <div>
            Once you finished do payment, please send the receipt to
            email@email.com.
          </div>
        </div>
      );
    }
  };

  const handleBackButton = () => {
    props.onPostponed(currentPage);
  };

  const handleSubmitButton = () => {
    setCurrentPage("main");
    props.onSuccess(currentPage);
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
                <div className="stepbtninfo03">
                  Step 5<span className="stepbotomtxt">Confirm</span>
                </div>
                <div className="stepbtninfo06">
                  Step 6<span className="stepbotomtxt">Payment</span>
                </div>
              </div>
            </div>
          </div>
          <div className="forminformation">
            <h3>
              <strong>Payment Details</strong>
            </h3>
            <div className="col-md-12 radiobuttonbox">
              <label>Please select the payment method</label>
              <div className="formboxs">
                <label htmlFor="paymentMethod-paypal">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="PayPal"
                    id="paymentMethod-paypal"
                    required
                    onClick={handlePayment}
                  />
                  PayPal
                </label>
                <label htmlFor="paymentMethod-banktransfer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="Bank Transfer"
                    id="paymentMethod-banktransfer"
                    required
                    onClick={handlePayment}
                  />
                  Bank Transfer
                </label>
              </div>
              {displayPaymentMethod()}
              {displayOptionPayPal()}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step6_Payment;
