import React from "react";

const Step4_ProffIdentity = () => {
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
                <div className="stepbtninfo05 tabpad">
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
            action="/applyonline/step4"
          >
            <div style={{ display: "none" }}>
              <input type="hidden" name="_method" value="PUT" />
            </div>
            <div className="forminformation">
              <div className="takecontnet">
                <div className="col-md-6">
                  <div className="takeformmatter">
                    <h3>Proof of Identity</h3>
                    <h4>
                      You must provide a photograph of yourself as well as three
                      identity documents with your completed form to confirm
                      your identity:
                    </h4>
                    <h4>
                      one commencement document to confirm your birth in
                      Australia or arrival in Australia one primary and two
                      secondary documents to show the use of your identity in
                      the community
                    </h4>
                    <h4>
                      Note: Documents in a language other than English must be
                      accompanied by an official translation. If your document
                      is not in English please email translations to
                      hamud@ondemandchecks.com.
                    </h4>
                  </div>
                </div>

                <div className="col-md-3 col-sm-6">
                  <label>
                    <strong className="pichead">Photograph</strong>
                  </label>
                  <div id="camera" className="camera"></div>
                  <br />
                  <button
                    type="button"
                    id="take_snapshots"
                    className="btn btn-success btn-sm take_snapshots"
                  >
                    Take Snapshots
                  </button>
                  <div className="input text required">
                    <input
                      type="text"
                      name="photo"
                      className="form-control"
                      id="photowebcam"
                      required="required"
                      maxlength="50"
                    />
                  </div>{" "}
                </div>

                <div className="col-md-3 col-sm-6">
                  <table className="table table-bordered">
                    <tbody id="imagelist"></tbody>
                  </table>
                </div>
              </div>

              <div className="col-md-4 col-sm-6 padtablet">
                <div className="col-md-12">
                  <div className="formboxs">
                    <label>
                      <strong>Document 1</strong>
                    </label>
                    <div style={{ float: "left", width: "100%" }}>
                      <input
                        type="file"
                        name="document_1"
                        id="file-1"
                        className="inputfile inputfile-6"
                        required="required"
                      />
                      <label for="file-1" style={{ width: "auto" }}>
                        <span></span> <strong>Choose a file&hellip;</strong>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="formboxs">
                    <div className="col-md-12 imagpicpad">
                      <label>
                        <strong>Photo with document</strong>
                      </label>
                      <div id="camera2" className="camerasmaill"></div>
                      <br />
                      <button
                        type="button"
                        id="take_snapshots2"
                        className="btn btn-success btn-sm take_snapshots"
                      >
                        Take Snapshots
                      </button>
                      <div className="input text required">
                        <input
                          type="text"
                          name="doc1_photo"
                          className="form-control"
                          id="photowebcam2"
                          required="required"
                          maxlength="250"
                          value=""
                        />
                      </div>{" "}
                    </div>
                    <div className="col-md-12 imagpicpad">
                      <label>
                        <strong>&nbsp;</strong>
                      </label>
                      <table className="table table-bordered">
                        <tbody id="imagelist2"></tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-6 padtablet">
                <div className="col-md-12">
                  <div className="formboxs">
                    <label>
                      <strong>Document 2</strong>
                    </label>
                    <div style={{ float: "left", width: "100%" }}>
                      <input
                        type="file"
                        name="document_2"
                        id="file-2"
                        className="inputfile inputfile-6"
                        required="required"
                      />
                      <label for="file-2" style={{ width: "auto" }}>
                        <span></span> <strong>Choose a file&hellip;</strong>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="formboxs">
                    <div className="col-md-12 imagpicpad">
                      <label>
                        <strong>Photo with document</strong>
                      </label>
                      <div id="camera3" className="camerasmaill"></div>
                      <br />
                      <button
                        type="button"
                        id="take_snapshots3"
                        className="btn btn-success btn-sm take_snapshots"
                      >
                        Take Snapshots
                      </button>
                      <div className="input text required">
                        <input
                          type="text"
                          name="doc2_photo"
                          className="form-control"
                          id="photowebcam3"
                          required="required"
                          maxlength="250"
                          value=""
                        />
                      </div>{" "}
                    </div>
                    <div className="col-md-12 imagpicpad">
                      <label>
                        <strong>&nbsp;</strong>
                      </label>
                      <table className="table table-bordered">
                        <tbody id="imagelist3"></tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-6 padtablet">
                <div className="col-md-12">
                  <div className="formboxs">
                    <label>
                      <strong>Document 3</strong>
                    </label>
                    <div style={{ float: "left", width: "100%" }}>
                      <input
                        type="file"
                        name="document_3"
                        id="file-3"
                        className="inputfile inputfile-6"
                        required="required"
                      />
                      <label for="file-3" style={{ width: "auto" }}>
                        <span></span> <strong>Choose a file&hellip;</strong>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="formboxs">
                    <div className="col-md-12 imagpicpad">
                      <label>
                        <strong>Photo with document</strong>
                      </label>
                      <div id="camera4" className="camerasmaill"></div>
                      <br />
                      <button
                        type="button"
                        id="take_snapshots4"
                        className="btn btn-success btn-sm take_snapshots"
                      >
                        Take Snapshots
                      </button>
                      <div className="input text required">
                        <input
                          type="text"
                          name="doc3_photo"
                          className="form-control"
                          id="photowebcam4"
                          required="required"
                          maxlength="250"
                          value=""
                        />
                      </div>{" "}
                    </div>
                    <div className="col-md-12 imagpicpad">
                      <label>
                        <strong>&nbsp;</strong>
                      </label>
                      <table className="table table-bordered">
                        <tbody id="imagelist4"></tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-12 col-sm-6 padtablet">&nbsp;</div>

              <div className="col-md-12 col-sm-12">
                <a href="/applyonline/step3" className="backbtns">
                  Previous Step
                </a>
                <input
                  type="submit"
                  value="Save &amp; Cantinue"
                  className="submitbtns"
                />
              </div>
            </div>
            <div style={{ display: "none" }}>
              <input
                type="hidden"
                name="_Token[fields]"
                value="3ccb5e239bef64965ea53552d32bb41513d25706%3A"
              />
              <input type="hidden" name="_Token[unlocked]" value="" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Step4_ProffIdentity;
