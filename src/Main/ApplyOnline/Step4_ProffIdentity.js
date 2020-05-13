import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import Dropzone from "react-dropzone";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import ImagePreview from "../imagePreview";

const Step4_ProffIdentity = (props) => {
  const [photograph, setPhotograph] = React.useState([]);
  const [photographURI, setPhotographURI] = React.useState("");
  const [photographName, setPhotographName] = React.useState("");
  const [photographStatus, setPhotographStatus] = React.useState(true);
  const [errorPhotograph, setErrorPhotograph] = React.useState("");
  const [pic1, setPic1] = React.useState([]);
  const [pic1URI, setPic1URI] = React.useState("");
  const [pic1Name, setPic1Name] = React.useState("");
  const [pic1Status, setPic1Status] = React.useState(true);
  const [errorPic1, setErrorPic1] = React.useState(false);
  const [pic2, setPic2] = React.useState([]);
  const [pic2URI, setPic2URI] = React.useState("");
  const [pic2Name, setPic2Name] = React.useState("");
  const [pic2Status, setPic2Status] = React.useState(true);
  const [errorPic2, setErrorPic2] = React.useState(false);
  const [pic3, setPic3] = React.useState([]);
  const [pic3URI, setPic3URI] = React.useState("");
  const [pic3Name, setPic3Name] = React.useState("");
  const [pic3Status, setPic3Status] = React.useState(true);
  const [errorPic3, setErrorPic3] = React.useState(false);
  const [doc1, setDoc1] = React.useState([]);
  const [doc1Name, setDoc1Name] = React.useState("");
  const [doc1Status, setDoc1Status] = React.useState("Incomplete");
  const [doc2, setDoc2] = React.useState([]);
  const [doc2Name, setDoc2Name] = React.useState("");
  const [doc2Status, setDoc2Status] = React.useState("Incomplete");
  const [doc3, setDoc3] = React.useState([]);
  const [doc3Name, setDoc3Name] = React.useState("");
  const [doc3Status, setDoc3Status] = React.useState("Incomplete");
  const [currentPage, setCurrentPage] = React.useState("Step3");
  const [errorInformation, setErrorInformation] = React.useState("");
  const [disabledButton, setDisabledButton] = React.useState("disabled");
  const [totalFilesUpload, setTotalFilesUpload] = React.useState(0);

  let filesUpload = totalFilesUpload;

  const isFullscreen = false;

  const isSilentMode = true;

  function dataURItoBlob(dataURI, fileName) {
    let nameFile = fileName + ".png";
    // convert base64 to raw binary data held in a string
    // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
    let byteString = atob(dataURI.split(",")[1]);

    // separate out the mime component
    let mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];

    // write the bytes of the string to an ArrayBuffer
    let ab = new ArrayBuffer(byteString.length);

    // create a view into the buffer
    let ia = new Uint8Array(ab);

    // set the bytes of the buffer to the correct values
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    // write the ArrayBuffer to a blob, and you're done
    let blob = new Blob([ab], { name: nameFile, type: mimeString });
    return blob;
  }

  function handleTakePhotograph(dataUri) {
    setPhotographURI(dataUri);
    setPhotographStatus(false);
    filesUpload = filesUpload + 1;
    setTotalFilesUpload(filesUpload);
  }

  const handlePhotograph = (e) => {
    e.preventDefault();
    setPhotographName(e.target.value);
  };

  function handleTakePhoto1(dataUri) {
    setPic1URI(dataUri);
    setPic1Status(false);
    filesUpload = filesUpload + 1;
    setTotalFilesUpload(filesUpload);
  }

  const handlePhoto1 = (e) => {
    e.preventDefault();
    setPic1Name(e.target.value);
  };

  function handleTakePhoto2(dataUri) {
    setPic2URI(dataUri);
    setPic2Status(false);
    filesUpload = filesUpload + 1;
    setTotalFilesUpload(filesUpload);
  }

  const handlePhoto2 = (e) => {
    e.preventDefault();
    setPic2Name(e.target.value);
  };

  function handleTakePhoto3(dataUri) {
    setPic3URI(dataUri);
    setPic3Status(false);
    filesUpload = filesUpload + 1;
    setTotalFilesUpload(filesUpload);
  }

  const handlePhoto3 = (e) => {
    e.preventDefault();
    setPic3Name(e.target.value);
  };

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

  const isUploadDoc2 = (acceptedFiles) => {
    setDoc2(acceptedFiles);
    setDoc2Name(acceptedFiles[0].name);
    setDoc2Status("Complete");
    filesUpload = filesUpload + 1;
    setTotalFilesUpload(filesUpload);
  };

  const isRemoveDoc2 = () => {
    setDoc2([]);
    setDoc2Name("");
    setDoc2Status("Incomplete");
    filesUpload = filesUpload + 1;
    setTotalFilesUpload(filesUpload);
  };

  const isUploadDoc3 = (acceptedFiles) => {
    setDoc3(acceptedFiles);
    setDoc3Name(acceptedFiles[0].name);
    setDoc3Status("Complete");
    filesUpload = filesUpload + 1;
    setTotalFilesUpload(filesUpload);
  };

  const isRemoveDoc3 = () => {
    setDoc3([]);
    setDoc3Name("");
    setDoc3Status("Incomplete");
    filesUpload = filesUpload + 1;
    setTotalFilesUpload(filesUpload);
  };

  const editPhotographName = () => {
    setPhotograph(dataURItoBlob(photographURI, photographName));
  };

  const removePhotographName = () => {
    setPhotographName("");
  };

  const editPic1Name = () => {
    setPic1(dataURItoBlob(pic1URI, pic1Name));
  };

  const removePic1Name = () => {
    setPic2Name("");
  };

  const editPic2Name = () => {
    setPic2(dataURItoBlob(pic2URI, pic2Name));
  };

  const removePic2Name = () => {
    setPic2Name("");
  };
  const editPic3Name = () => {
    setPic3(dataURItoBlob(photographURI, pic3Name));
  };

  const removePic3Name = () => {
    setPic3Name("");
  };

  const displayErrorPhotograph = () => {
    if (errorPhotograph) {
      return <div className="errorMsg">Photograph Name Required</div>;
    }
  };

  const displayErrorPic1 = () => {
    if (errorPic1) {
      return <div className="errorMsg">Photo 1 Name Required</div>;
    }
  };

  const displayErrorPic2 = () => {
    if (errorPic2) {
      return <div className="errorMsg">Photo 2 Name Required</div>;
    }
  };

  const displayErrorPic3 = () => {
    if (errorPic3) {
      return <div className="errorMsg">Photo 3 Name Required</div>;
    }
  };

  const handleBackButton = () => {
    props.onPostponed(currentPage);
  };

  const handleSubmitButton = () => {
    if (photographName === "") {
      setErrorPhotograph(true);
    } else {
      setErrorPhotograph(false);
    }
    if (pic1Name === "") {
      setErrorPic1(true);
    } else {
      setErrorPic1(false);
    }
    if (pic2Name === "") {
      setErrorPic2(true);
    } else {
      setErrorPic2(false);
    }
    if (pic3Name === "") {
      setErrorPic3(true);
    } else {
      setErrorPic3(false);
    }

    if (
      totalFilesUpload === 7 &&
      photographName !== "" &&
      pic1Name !== "" &&
      pic2Name !== "" &&
      pic3Name != ""
    ) {
      setDisabledButton("");
      setCurrentPage("Step5");
      console.log(photograph);
    }
    if (totalFilesUpload < 7) {
      setErrorInformation("Please upload more files");
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (
      currentPage === "Step5" &&
      totalFilesUpload === 7 &&
      !photographStatus &&
      !pic1Status &&
      !pic2Status &&
      !pic3Status
    ) {
      props.onSuccess(
        photograph,
        pic1,
        pic2,
        pic3,
        doc1,
        doc2,
        doc3,
        currentPage
      );
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
                      support@ondemandchecks.com.au.
                    </h4>
                  </div>
                </div>

                <div className="col-md-3 col-sm-6">
                  <label>
                    <strong className="pichead">Photograph</strong>
                  </label>
                  <div id="camera" className="camera"></div>
                  <br />
                  <Camera
                    onTakePhotoAnimationDone={handleTakePhotograph}
                    isFullscreen={isFullscreen}
                    isSilentMode={isSilentMode}
                    onCameraStop={() => {}}
                  />
                  <div>
                    <input
                      type="text"
                      name="photo"
                      className="form-control"
                      id="photowebcam"
                      maxlength="50"
                      onChange={handlePhotograph}
                      placeholder="Enter Photograph Name"
                      value={photographName}
                    />{" "}
                    {displayErrorPhotograph()}{" "}
                    <input
                      type="button"
                      value="Edit"
                      onClick={editPhotographName}
                    />{" "}
                    <input
                      type="button"
                      value="Remove"
                      onClick={removePhotographName}
                    />
                  </div>
                </div>

                <div className="col-md-3 col-sm-6">
                  <table className="table table-bordered">
                    <tbody id="imagelist"></tbody>
                    <ImagePreview
                      dataUri={photographURI}
                      isFullscreen={isFullscreen}
                    />
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
                      </Dropzone>{" "}
                      {doc1.length > 0 && (
                        <button onClick={isRemoveDoc1}>Remove</button>
                      )}
                      {doc1.length === 0 && `${doc1Status}`}
                      <label for="file-1" style={{ width: "auto" }}>
                        <strong>{doc1Name}</strong>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="formboxs">
                    <div className="col-md-12 imagpicpad">
                      <label>
                        <strong>Photo with document 1</strong>
                      </label>
                      <div id="camera2" className="camerasmaill"></div>
                      <br />
                      <Camera
                        onTakePhotoAnimationDone={handleTakePhoto1}
                        isFullscreen={isFullscreen}
                        isSilentMode={isSilentMode}
                        onCameraStop={() => {}}
                      />

                      <div>
                        <input
                          type="text"
                          name="doc1_photo"
                          className="form-control"
                          id="photowebcam2"
                          maxlength="250"
                          onChange={handlePhoto1}
                          placeholder="Enter Photo 1 Name"
                          value={pic1Name}
                        />{" "}
                        {displayErrorPic1()}{" "}
                        <input
                          type="button"
                          value="Edit"
                          onClick={editPic1Name}
                        />{" "}
                        <input
                          type="button"
                          value="Remove"
                          onClick={removePic1Name}
                        />
                      </div>
                    </div>
                    <div className="col-md-12 imagpicpad">
                      <label>
                        <strong>&nbsp;</strong>
                      </label>
                      <table className="table table-bordered">
                        <tbody id="imagelist2"></tbody>
                        <ImagePreview
                          dataUri={pic1URI}
                          isFullscreen={isFullscreen}
                        />
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
                      <Dropzone
                        onDrop={isUploadDoc2}
                        accept=".pdf"
                        maxSize={1500000}
                      >
                        {({ getRootProps, getInputProps }) => (
                          <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <button>Upload</button>
                          </div>
                        )}
                      </Dropzone>{" "}
                      {doc2.length > 0 && (
                        <button onClick={isRemoveDoc2}>Remove</button>
                      )}
                      {doc2.length === 0 && `${doc2Status}`}
                      <label for="file-2" style={{ width: "auto" }}>
                        <strong>{doc2Name}</strong>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="formboxs">
                    <div className="col-md-12 imagpicpad">
                      <label>
                        <strong>Photo with document 2</strong>
                      </label>
                      <div id="camera3" className="camerasmaill"></div>
                      <br />
                      <Camera
                        onTakePhotoAnimationDone={handleTakePhoto2}
                        isFullscreen={isFullscreen}
                        isSilentMode={isSilentMode}
                        onCameraStop={() => {}}
                      />
                      <div>
                        <input
                          type="text"
                          name="doc2_photo"
                          className="form-control"
                          id="photowebcam3"
                          maxlength="250"
                          onChange={handlePhoto2}
                          placeholder="Enter Photo 2 Name"
                          value={pic2Name}
                        />{" "}
                        {displayErrorPic2()}{" "}
                        <input
                          type="button"
                          value="Edit"
                          onClick={editPic2Name}
                        />{" "}
                        <input
                          type="button"
                          value="Remove"
                          onClick={removePic2Name}
                        />
                      </div>{" "}
                    </div>
                    <div className="col-md-12 imagpicpad">
                      <label>
                        <strong>&nbsp;</strong>
                      </label>
                      <table className="table table-bordered">
                        <tbody id="imagelist3"></tbody>
                        <ImagePreview
                          dataUri={pic2URI}
                          isFullscreen={isFullscreen}
                        />
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
                      <Dropzone
                        onDrop={isUploadDoc3}
                        accept=".pdf"
                        maxSize={1500000}
                      >
                        {({ getRootProps, getInputProps }) => (
                          <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <button>Upload</button>
                          </div>
                        )}
                      </Dropzone>{" "}
                      {doc3.length > 0 && (
                        <button onClick={isRemoveDoc3}>Remove</button>
                      )}
                      {doc3.length === 0 && `${doc3Status}`}
                      <label for="file-3" style={{ width: "auto" }}>
                        <strong>{doc3Name}</strong>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="formboxs">
                    <div className="col-md-12 imagpicpad">
                      <label>
                        <strong>Photo with document 3</strong>
                      </label>
                      <div id="camera4" className="camerasmaill"></div>
                      <br />
                      <Camera
                        onTakePhotoAnimationDone={handleTakePhoto3}
                        isFullscreen={isFullscreen}
                        isSilentMode={isSilentMode}
                        onCameraStop={() => {}}
                      />
                      <div>
                        <input
                          type="text"
                          name="doc3_photo"
                          className="form-control"
                          id="photowebcam4"
                          maxlength="250"
                          onChange={handlePhoto3}
                          placeholder="Enter Photo 3 Name"
                          value={pic3Name}
                        />{" "}
                        {displayErrorPic3()}{" "}
                        <input
                          type="button"
                          value="Edit"
                          onClick={editPic3Name}
                        />{" "}
                        <input
                          type="button"
                          value="Remove"
                          onClick={removePic3Name}
                        />
                      </div>
                    </div>
                    <div className="col-md-12 imagpicpad">
                      <label>
                        <strong>&nbsp;</strong>
                      </label>
                      <table className="table table-bordered">
                        <tbody id="imagelist4"></tbody>
                        <ImagePreview
                          dataUri={pic3URI}
                          isFullscreen={isFullscreen}
                        />
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ color: "red" }}>
                <strong>{errorInformation}</strong>
              </div>
              <div className="col-md-12 col-sm-6 padtablet">&nbsp;</div>

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
