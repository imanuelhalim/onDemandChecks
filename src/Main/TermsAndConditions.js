import React, { useEffect } from "react";

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="innerhead">
        <div className="container">
          <div className="row">
            <div className="innerdetialshead">
              <h1>Terms & Conditions</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="applyinner">
        <div className="container">
          <div className="privacyinfo">
            <p>
              These terms and conditions are a binding legal agreement between
              yourself and OnDemandChecks. By submitting a request via the
              online form for a Police Check Report, you acknowledge and agree
              that you have read and understood these terms and conditions and
              are bound by them.
            </p>

            <p>
              1. OnDemandChecks cannot release any Nationally Coordinated
              Criminal History Check information without receiving the
              applicants signed Application/Informed Consent Form and 100 points
              of identification. The applicant agrees to their identification
              document information being checked with the Issuer or Official
              Record Holder.
            </p>

            <h4>2. Applicants Obligation</h4>

            <p>
              It is agreed that the applicant will review all the information
              they have provided in their application before submitting, to
              ensure the information they have provided is accurate and correct.
              Any incorrect information supplied by the applicant will result in
              an invalid NCCHC. The applicant understands that if their Police
              Check application has not been correctly lodged after 3 months,
              upon lodgement, updating of details may be required.
            </p>

            <h4>3. NCCHC</h4>

            <p>
              The applicant understands that OnDemand Checks cannot expedite the
              NCCHC process.
            </p>

            <h4>4. Refunds</h4>

            <p>OnDemand Checks is not required to provide a refund for:</p>

            <div className="refundtxt">
              <ul>
                <li>Incorrect forms that are submitted by the applicant</li>
                <li>Any data entry errors made by the applicant</li>
                <li>
                  Nationally Coordinated Criminal History Checks already
                  submitted to the Australian Criminal Intelligence Commission
                  (ACIC)
                </li>
                <li>Submissions for checks we are not authorised to process</li>
                <li>
                  Change of mind after partially or fully completing the
                  application process
                </li>
                <li>
                  Selection of the wrong check type and/or reason for the check
                </li>
              </ul>
            </div>

            <h4>5. Privacy</h4>

            <p>
              OnDemand Checks is committed to respecting applicants&#39; privacy
              and complies with the Australia Privacy Principles as set out in
              the Privacy Act 1988. View our Privacy Policy for more
              information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
