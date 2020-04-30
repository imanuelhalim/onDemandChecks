import React, { useEffect } from "react";
import PaypalButton from "react-paypal-express-checkout";
import axios from "axios";

const Step6_Payment = (props) => {
  const [userDetails, setUserDetails] = React.useState([]);
  const [paymentMethod, setPaymentMethod] = React.useState("");
  const [payPalAcc, setPayPalAcc] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState("Step5");
  const [isPaid, setIsPaid] = React.useState(false);
  const [totalAmount, setTotalAmount] = React.useState(53);
  const [sendArchives, setSendArchives] = React.useState(false);
  const [payment, setPayment] = React.useState("");
  const [sandbox, setSandbox] = React.useState("");
  const [production, setProduction] = React.useState("");

  useEffect(() => {
    setUserDetails(props.onDisplay());
    if (userDetails.hardCopyPoliceCheck === "Yes") {
      setTotalAmount(62.95);
    }
    axios
      .get(
        "https://bx1pxkxsud.execute-api.ap-southeast-2.amazonaws.com/dev/paypalcredentials"
      )
      .then((response) => {
        setSandbox(response.data.keyAccessId);
        setProduction(response.data.secretAccessId);
      });
  }, [userDetails]);

  const client = {
    sandbox: sandbox,
    production: production,
  };

  const onCancel = (data) => {
    // console.log("The payment was cancelled", data);
    setIsPaid(false);
  };

  const onSuccess = (payment) => {
    // console.log("the payment was succeeded", payment);
    setIsPaid(true);
  };

  const onError = (err) => {
    console.log("Error", err);
  };

  const handlePayment = (e) => {
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
            Before you transfer, please ensure that you put your name in the
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
            support@ondemandchecks.com.au and click button below
          </div>
          <input
            className="paymentBankTransfer"
            type="submit"
            value="Paid by Bank Transfer"
            onClick={handlePaymentBankTransfer}
          />
        </div>
      );
    }
  };

  const handlePaymentBankTransfer = () => {
    setPayment("Bank Transfer");
    setIsPaid(true);
  };

  const checkPayPalAcc = (e) => {
    setPayPalAcc(e.target.value);
  };

  const displayOptionPayPal = (e) => {
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
        <PaypalButton
          client={client}
          currency={"AUD"}
          total={0.5}
          onSuccess={onSuccess}
          onCancel={onCancel}
          onError={onError}
        />
      );
    }
  };

  const handleBackButton = () => {
    props.onPostponed(currentPage);
  };

  const handleSubmitButton = () => {
    setCurrentPage("main");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (currentPage === "main") {
      props.onSuccess(currentPage, payment);
    }
  };

  const displayHowToPay = () => {
    return (
      <div>
        <div className="forminformation">
          <h3>
            <strong>Payment Details</strong>
          </h3>
          <div className="col-md-12 radiobuttonbox">
            <label>
              Total amount for National Police Checks certificate is AUD
              {totalAmount}
            </label>
            <br />
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
            </div>
          </div>
        </div>
      </div>
    );
  };

  const displayResult = () => {
    return (
      <div>
        <form onSubmit={handleFormSubmit}>
          <div className="forminformation">
            Thank you for using our services. We will give you confirmation,
            once we received your payment.
            <div className="col-md-12">
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
    );
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
          {isPaid ? displayResult() : displayHowToPay()}
        </div>
      </div>
    </div>
  );
};

export default Step6_Payment;
