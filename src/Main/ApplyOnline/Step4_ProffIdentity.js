import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import Dropzone from "react-dropzone";

const Step4_ProffIdentity = (props) => {
  const [pic1, setPic1] = React.useState([]);
  const [pic1Name, setPic1Name] = React.useState("");
  const [pic1Status, setPic1Status] = React.useState("Incomplete");
  const [pic2, setPic2] = React.useState([]);
  const [pic2Name, setPic2Name] = React.useState("");
  const [pic2Status, setPic2Status] = React.useState("Incomplete");
  const [pic3, setPic3] = React.useState([]);
  const [pic3Name, setPic3Name] = React.useState("");
  const [pic3Status, setPic3Status] = React.useState("Incomplete");
  const [pic4, setPic4] = React.useState([]);
  const [pic4Name, setPic4Name] = React.useState("");
  const [pic4Status, setPic4Status] = React.useState("Incomplete");
  const [doc1, setDoc1] = React.useState([]);
  const [doc1Name, setDoc1Name] = React.useState("");
  const [doc1Status, setDoc1Status] = React.useState("Incomplete");
  const [currentPage, setCurrentPage] = React.useState("Step3");
  const [errorInformation, setErrorInformation] = React.useState("");
  const [disabledButton, setDisabledButton] = React.useState("disabled");
  const [totalFilesUpload, setTotalFilesUpload] = React.useState(0);

  useEffect(
    () => () => {
      pic1.forEach((picture1) => URL.revokeObjectURL(picture1.preview));
      pic2.forEach((picture2) => URL.revokeObjectURL(picture2.preview));
      pic3.forEach((picture3) => URL.revokeObjectURL(picture3.preview));
      pic4.forEach((picture4) => URL.revokeObjectURL(picture4.preview));
    },
    [pic1, pic2, pic3, pic4]
  );

  const thumb = {
    display: "inline-flex",
    borderRadius: 2,
    border: "1px solid #eaeaea",
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: "border-box",
  };

  const thumbInner = {
    display: "flex",
    minWidth: 0,
    overflow: "hidden",
  };

  const img = {
    display: "block",
    width: "auto",
    height: "100%",
  };

  let filesUpload = totalFilesUpload;

  const isUploadpic1 = (acceptedFiles) => {
    setPic1(
      acceptedFiles.map((picture1) =>
        Object.assign(picture1, { preview: URL.createObjectURL(picture1) })
      )
    );
    setPic1Name(acceptedFiles[0].name);
    setPic1Status("Complete");
    filesUpload = filesUpload + 1;
    setTotalFilesUpload(filesUpload);
  };

  const isRemovepic1 = () => {
    setPic1([]);
    setPic1Name("");
    setPic1Status("Incomplete");
    filesUpload = filesUpload - 1;
    setTotalFilesUpload(filesUpload);
  };

  const isPreviewPic1 = pic1.map((picture1) => {
    return (
      <div style={thumb} key={picture1.name}>
        <div style={thumbInner}>
          <img src={picture1.preview} style={img} />
        </div>
      </div>
    );
  });

  const isUploadpic2 = (acceptedFiles) => {
    setPic2(
      acceptedFiles.map((picture2) =>
        Object.assign(picture2, { preview: URL.createObjectURL(picture2) })
      )
    );
    setPic2Name(acceptedFiles[0].name);
    setPic2Status("Complete");
    filesUpload = filesUpload + 1;
    setTotalFilesUpload(filesUpload);
  };

  const isRemovepic2 = () => {
    setPic2([]);
    setPic2Name("");
    setPic2Status("Incomplete");
    filesUpload = filesUpload - 1;
    setTotalFilesUpload(filesUpload);
  };

  const isPreviewPic2 = pic2.map((picture2) => {
    return (
      <div style={thumb} key={picture2.name}>
        <div style={thumbInner}>
          <img src={picture2.preview} style={img} />
        </div>
      </div>
    );
  });

  const isUploadpic3 = (acceptedFiles) => {
    setPic3(
      acceptedFiles.map((picture3) =>
        Object.assign(picture3, { preview: URL.createObjectURL(picture3) })
      )
    );
    setPic3Name(acceptedFiles[0].name);
    setPic3Status("Complete");

    filesUpload = filesUpload + 1;
    setTotalFilesUpload(filesUpload);
  };

  const isRemovepic3 = () => {
    setPic3([]);
    setPic3Name("");
    setPic3Status("Incomplete");

    filesUpload = filesUpload - 1;
    setTotalFilesUpload(filesUpload);
  };

  const isPreviewPic3 = pic3.map((picture3) => {
    return (
      <div style={thumb} key={picture3.name}>
        <div style={thumbInner}>
          <img src={picture3.preview} style={img} />
        </div>
      </div>
    );
  });

  const isUploadpic4 = (acceptedFiles) => {
    setPic4(
      acceptedFiles.map((picture4) =>
        Object.assign(picture4, { preview: URL.createObjectURL(picture4) })
      )
    );
    setPic4Name(acceptedFiles[0].name);
    setPic4Status("Complete");

    filesUpload = filesUpload + 1;
    setTotalFilesUpload(filesUpload);
  };

  const isRemovepic4 = () => {
    setPic4([]);
    setPic4Name("");
    setPic4Status("Incomplete");

    filesUpload = filesUpload - 1;
    setTotalFilesUpload(filesUpload);
  };

  const isPreviewPic4 = pic4.map((picture4) => {
    return (
      <div style={thumb} key={picture4.name}>
        <div style={thumbInner}>
          <img src={picture4.preview} style={img} />
        </div>
      </div>
    );
  });

  const isUploadDoc1 = (acceptedFiles) => {
    setDoc1(acceptedFiles);
    setDoc1Name(acceptedFiles[0].name);
    setDoc1Status("Complete");
    filesUpload = filesUpload + 1;
    setTotalFilesUpload(filesUpload);
  };

  const isRemoveDoc1 = () => {
    setDoc1([]);
    setDoc1Name("");
    setDoc1Status("Incomplete");

    filesUpload = filesUpload - 1;
    setTotalFilesUpload(filesUpload);
  };

  const handleBackButton = () => {
    props.onPostponed(currentPage);
  };

  const handleSubmitButton = () => {
    if (totalFilesUpload === 5) {
      setDisabledButton("");
      setCurrentPage("Step5");
    }
    if (totalFilesUpload < 5) {
      setErrorInformation("Please upload more files");
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (currentPage === "Step5" && totalFilesUpload === 5) {
      props.onSuccess(pic1, pic2, pic3, pic4, doc1, currentPage);
    }
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
                <div className="stepbtninfo05 tabpad">
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

          <form onSubmit={handleFormSubmit}>
            <div className="forminformation">
              <div className="takecontnet">
                <h3>
                  <strong>Proof of Identity</strong>
                </h3>

                <div className="formboxs">
                  <div className="col-sm-12">
                    <Table striped bordered condesed="true">
                      <thead>
                        <tr>
                          <td colSpan="2">
                            <h4>
                              You must provide a photograph of yourself as well
                              as three identity picuments with your completed
                              form to confirm your identity:
                            </h4>
                            <h4>
                              one commencement picument to confirm your birth in
                              Australia or arrival in Australia one primary and
                              two secondary picuments to show the use of your
                              identity in the community
                            </h4>
                            <h4>
                              Note: picuments in a language other than English
                              must be accompanied by an official translation. If
                              your picument is not in English please email
                              translations to{" "}
                              <strong>support@ondemandchecks.com.au</strong>.
                            </h4>
                          </td>
                        </tr>
                      </thead>
                      <tbody style={{ textAlign: "center" }}>
                        <tr>
                          <td>
                            <strong>Photograph</strong>
                          </td>
                          <td>
                            <strong>Photo with Document 1</strong>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Dropzone
                              onDrop={isUploadpic1}
                              accept="image/*"
                              maxSize={1500000}
                            >
                              {({ getRootProps, getInputProps }) => (
                                <div {...getRootProps()}>
                                  <input {...getInputProps()} />
                                  <button>Upload</button>
                                </div>
                              )}
                            </Dropzone>
                          </td>
                          <td>
                            <Dropzone
                              onDrop={isUploadpic2}
                              accept="image/*"
                              maxSize={1500000}
                            >
                              {({ getRootProps, getInputProps }) => (
                                <div {...getRootProps()}>
                                  <input {...getInputProps()} />
                                  <button>Upload</button>
                                </div>
                              )}
                            </Dropzone>
                          </td>
                        </tr>
                        <tr>
                          <td>{isPreviewPic1}</td>
                          <td>{isPreviewPic2}</td>
                        </tr>
                        <tr>
                          <td>
                            {pic1.length > 0 && (
                              <button onClick={isRemovepic1}>Remove</button>
                            )}
                            {pic1.length === 0 && `${pic1Status}`}
                          </td>
                          <td>
                            {pic2.length > 0 && (
                              <button onClick={isRemovepic2}>Remove</button>
                            )}
                            {pic2.length === 0 && `${pic2Status}`}
                          </td>
                        </tr>
                        <tr style={{ backgroundColor: "#D3D3D3" }}>
                          <td colSpan="2"></td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Photo with Document 2</strong>
                          </td>
                          <td>
                            <strong>Photo with Document 3</strong>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Dropzone
                              onDrop={isUploadpic3}
                              accept="image/*"
                              maxSize={1500000}
                            >
                              {({ getRootProps, getInputProps }) => (
                                <div {...getRootProps()}>
                                  <input {...getInputProps()} />
                                  <button>Upload</button>
                                </div>
                              )}
                            </Dropzone>
                          </td>
                          <td>
                            <Dropzone
                              onDrop={isUploadpic4}
                              accept="image/*"
                              maxSize={1500000}
                            >
                              {({ getRootProps, getInputProps }) => (
                                <div {...getRootProps()}>
                                  <input {...getInputProps()} />
                                  <button>Upload</button>
                                </div>
                              )}
                            </Dropzone>
                          </td>
                        </tr>
                        <tr>
                          <td>{isPreviewPic3}</td>
                          <td>{isPreviewPic4}</td>
                        </tr>
                        <tr>
                          <td>
                            {pic3.length > 0 && (
                              <button onClick={isRemovepic3}>Remove</button>
                            )}
                            {pic3.length === 0 && `${pic3Status}`}
                          </td>
                          <td>
                            {pic4.length > 0 && (
                              <button onClick={isRemovepic4}>Remove</button>
                            )}
                            {pic4.length === 0 && `${pic4Status}`}
                          </td>
                        </tr>
                        <tr style={{ backgroundColor: "#D3D3D3" }}>
                          <td colSpan="2"></td>
                        </tr>
                        <tr>
                          <td colSpan="2">
                            <strong>
                              Document (All documents must be in one file on pdf
                              format)
                            </strong>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan="2">{doc1Name}</td>
                        </tr>
                        <tr>
                          <td>
                            <Dropzone
                              onDrop={isUploadDoc1}
                              accept=".pdf"
                              maxSize={1500000}
                            >
                              {({ getRootProps, getInputProps }) => (
                                <div {...getRootProps()}>
                                  <input {...getInputProps()} />
                                  <button>Upload</button>
                                </div>
                              )}
                            </Dropzone>
                          </td>
                          <td>
                            {doc1.length > 0 && (
                              <button onClick={isRemoveDoc1}>Remove</button>
                            )}
                            {doc1.length === 0 && `${doc1Status}`}
                          </td>
                        </tr>
                        <tr>
                          <td colSpan="2" style={{ color: "red" }}>
                            <strong>{errorInformation}</strong>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
              </div>

              <div className="col-md-12">
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default Step4_ProffIdentity;
