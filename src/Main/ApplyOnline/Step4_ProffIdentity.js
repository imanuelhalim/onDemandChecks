import React from "react";
import { Table } from "react-bootstrap";
import Dropzone from "react-dropzone";

const Step4_ProffIdentity = (props) => {
  const [doc1, setDoc1] = React.useState([]);
  const [doc1Name, setDoc1Name] = React.useState("");
  const [doc1Status, setDoc1Status] = React.useState("Incomplete");
  const [doc2, setDoc2] = React.useState([]);
  const [doc2Name, setDoc2Name] = React.useState("");
  const [doc2Status, setDoc2Status] = React.useState("Incomplete");
  const [doc3, setDoc3] = React.useState([]);
  const [doc3Name, setDoc3Name] = React.useState("");
  const [doc3Status, setDoc3Status] = React.useState("Incomplete");
  const [doc4, setDoc4] = React.useState([]);
  const [doc4Name, setDoc4Name] = React.useState("");
  const [doc4Status, setDoc4Status] = React.useState("Incomplete");
  const [doc5, setDoc5] = React.useState([]);
  const [doc5Name, setDoc5Name] = React.useState("");
  const [doc5Status, setDoc5Status] = React.useState("Incomplete");
  const [doc6, setDoc6] = React.useState([]);
  const [doc6Name, setDoc6Name] = React.useState("");
  const [doc6Status, setDoc6Status] = React.useState("Incomplete");
  const [doc7, setDoc7] = React.useState([]);
  const [doc7Name, setDoc7Name] = React.useState("");
  const [doc7Status, setDoc7Status] = React.useState("Incomplete");
  const [doc8, setDoc8] = React.useState([]);
  const [doc8Name, setDoc8Name] = React.useState("");
  const [doc8Status, setDoc8Status] = React.useState("Incomplete");
  const [doc9, setDoc9] = React.useState([]);
  const [doc9Name, setDoc9Name] = React.useState("");
  const [doc9Status, setDoc9Status] = React.useState("Incomplete");
  const [doc10, setDoc10] = React.useState([]);
  const [doc10Name, setDoc10Name] = React.useState("");
  const [doc10Status, setDoc10Status] = React.useState("Incomplete");
  const [doc11, setDoc11] = React.useState([]);
  const [doc11Name, setDoc11Name] = React.useState("");
  const [doc11Status, setDoc11Status] = React.useState("Incomplete");
  const [doc12, setDoc12] = React.useState([]);
  const [doc12Name, setDoc12Name] = React.useState("");
  const [doc12Status, setDoc12Status] = React.useState("Incomplete");
  const [doc13, setDoc13] = React.useState([]);
  const [doc13Name, setDoc13Name] = React.useState("");
  const [doc13Status, setDoc13Status] = React.useState("Incomplete");
  const [doc14, setDoc14] = React.useState([]);
  const [doc14Name, setDoc14Name] = React.useState("");
  const [doc14Status, setDoc14Status] = React.useState("Incomplete");
  const [doc15, setDoc15] = React.useState([]);
  const [doc15Name, setDoc15Name] = React.useState("");
  const [doc15Status, setDoc15Status] = React.useState("Incomplete");
  const [doc16, setDoc16] = React.useState([]);
  const [doc16Name, setDoc16Name] = React.useState("");
  const [doc16Status, setDoc16Status] = React.useState("Incomplete");
  const [doc17, setDoc17] = React.useState([]);
  const [doc17Name, setDoc17Name] = React.useState("");
  const [doc17Status, setDoc17Status] = React.useState("Incomplete");
  const [doc18, setDoc18] = React.useState([]);
  const [doc18Name, setDoc18Name] = React.useState("");
  const [doc18Status, setDoc18Status] = React.useState("Incomplete");
  const [doc19, setDoc19] = React.useState([]);
  const [doc19Name, setDoc19Name] = React.useState("");
  const [doc19Status, setDoc19Status] = React.useState("Incomplete");
  const [doc20, setDoc20] = React.useState([]);
  const [doc20Name, setDoc20Name] = React.useState("");
  const [doc20Status, setDoc20Status] = React.useState("Incomplete");
  const [doc21, setDoc21] = React.useState([]);
  const [doc21Name, setDoc21Name] = React.useState("");
  const [doc21Status, setDoc21Status] = React.useState("Incomplete");
  const [doc22, setDoc22] = React.useState([]);
  const [doc22Name, setDoc22Name] = React.useState("");
  const [doc22Status, setDoc22Status] = React.useState("Incomplete");
  const [doc23, setDoc23] = React.useState([]);
  const [doc23Name, setDoc23Name] = React.useState("");
  const [doc23Status, setDoc23Status] = React.useState("Incomplete");
  const [doc24, setDoc24] = React.useState([]);
  const [doc24Name, setDoc24Name] = React.useState("");
  const [doc24Status, setDoc24Status] = React.useState("Incomplete");
  const [doc25, setDoc25] = React.useState([]);
  const [doc25Name, setDoc25Name] = React.useState("");
  const [doc25Status, setDoc25Status] = React.useState("Incomplete");
  const [doc26, setDoc26] = React.useState([]);
  const [doc26Name, setDoc26Name] = React.useState("");
  const [doc26Status, setDoc26Status] = React.useState("Incomplete");
  const [totalPoints, setTotalPoints] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState("Step3");
  const [errorInformation, setErrorInformation] = React.useState("");
  const [disabledButton, setDisabledButton] = React.useState("disabled");

  let points = totalPoints;

  const uploadDoc1 = (acceptedFiles) => {
    setDoc1(acceptedFiles);
    setDoc1Name(acceptedFiles[0].name);
    setDoc1Status("Complete");
    points = points + 70;
    setTotalPoints(points);
  };

  const uploadDoc2 = (acceptedFiles) => {
    setDoc2(acceptedFiles);
    setDoc2Name(acceptedFiles[0].name);
    setDoc2Status("Complete");
    points = points + 70;
    setTotalPoints(points);
  };

  const uploadDoc3 = (acceptedFiles) => {
    setDoc3(acceptedFiles);
    setDoc3Name(acceptedFiles[0].name);
    setDoc3Status("Complete");
    points = points + 70;
    setTotalPoints(points);
  };

  const uploadDoc4 = (acceptedFiles) => {
    setDoc4(acceptedFiles);
    setDoc4Name(acceptedFiles[0].name);
    setDoc4Status("Complete");
    points = points + 70;
    setTotalPoints(points);
  };

  const uploadDoc5 = (acceptedFiles) => {
    setDoc5(acceptedFiles);
    setDoc5Name(acceptedFiles[0].name);
    setDoc5Status("Complete");
    points = points + 40;
    setTotalPoints(points);
  };

  const uploadDoc6 = (acceptedFiles) => {
    setDoc6(acceptedFiles);
    setDoc6Name(acceptedFiles[0].name);
    setDoc6Status("Complete");
    points = points + 40;
    setTotalPoints(points);
  };

  const uploadDoc7 = (acceptedFiles) => {
    setDoc7(acceptedFiles);
    setDoc7Name(acceptedFiles[0].name);
    setDoc7Status("Complete");
    points = points + 40;
    setTotalPoints(points);
  };

  const uploadDoc8 = (acceptedFiles) => {
    setDoc8(acceptedFiles);
    setDoc8Name(acceptedFiles[0].name);
    setDoc8Status("Complete");
    points = points + 40;
    setTotalPoints(points);
  };

  const uploadDoc9 = (acceptedFiles) => {
    setDoc9(acceptedFiles);
    setDoc9Name(acceptedFiles[0].name);
    setDoc9Status("Complete");
    points = points + 40;
    setTotalPoints(points);
  };

  const uploadDoc10 = (acceptedFiles) => {
    setDoc10(acceptedFiles);
    setDoc10Name(acceptedFiles[0].name);
    setDoc10Status("Complete");
    points = points + 40;
    setTotalPoints(points);
  };

  const uploadDoc11 = (acceptedFiles) => {
    setDoc11(acceptedFiles);
    setDoc11Name(acceptedFiles[0].name);
    setDoc11Status("Complete");
    points = points + 40;
    setTotalPoints(points);
  };

  const uploadDoc12 = (acceptedFiles) => {
    setDoc12(acceptedFiles);
    setDoc12Name(acceptedFiles[0].name);
    setDoc12Status("Complete");
    points = points + 25;
    setTotalPoints(points);
  };

  const uploadDoc13 = (acceptedFiles) => {
    setDoc13(acceptedFiles);
    setDoc13Name(acceptedFiles[0].name);
    setDoc13Status("Complete");
    points = points + 25;
    setTotalPoints(points);
  };

  const uploadDoc14 = (acceptedFiles) => {
    setDoc14(acceptedFiles);
    setDoc14Name(acceptedFiles[0].name);
    setDoc14Status("Complete");
    points = points + 25;
    setTotalPoints(points);
  };

  const uploadDoc15 = (acceptedFiles) => {
    setDoc15(acceptedFiles);
    setDoc15Name(acceptedFiles[0].name);
    setDoc15Status("Complete");
    points = points + 25;
    setTotalPoints(points);
  };

  const uploadDoc16 = (acceptedFiles) => {
    setDoc16(acceptedFiles);
    setDoc16Name(acceptedFiles[0].name);
    setDoc16Status("Complete");
    points = points + 25;
    setTotalPoints(points);
  };

  const uploadDoc17 = (acceptedFiles) => {
    setDoc17(acceptedFiles);
    setDoc17Name(acceptedFiles[0].name);
    setDoc17Status("Complete");
    points = points + 25;
    setTotalPoints(points);
  };

  const uploadDoc18 = (acceptedFiles) => {
    setDoc18(acceptedFiles);
    setDoc18Name(acceptedFiles[0].name);
    setDoc18Status("Complete");
    points = points + 25;
    setTotalPoints(points);
  };

  const uploadDoc19 = (acceptedFiles) => {
    setDoc19(acceptedFiles);
    setDoc19Name(acceptedFiles[0].name);
    setDoc19Status("Complete");
    points = points + 25;
    setTotalPoints(points);
  };

  const uploadDoc20 = (acceptedFiles) => {
    setDoc20(acceptedFiles);
    setDoc20Name(acceptedFiles[0].name);
    setDoc20Status("Complete");
    points = points + 25;
    setTotalPoints(points);
  };

  const uploadDoc21 = (acceptedFiles) => {
    setDoc21(acceptedFiles);
    setDoc21Name(acceptedFiles[0].name);
    setDoc21Status("Complete");
    points = points + 25;
    setTotalPoints(points);
  };

  const uploadDoc22 = (acceptedFiles) => {
    setDoc22(acceptedFiles);
    setDoc22Name(acceptedFiles[0].name);
    setDoc22Status("Complete");
    points = points + 25;
    setTotalPoints(points);
  };

  const uploadDoc23 = (acceptedFiles) => {
    setDoc23(acceptedFiles);
    setDoc23Name(acceptedFiles[0].name);
    setDoc23Status("Complete");
    points = points + 25;
    setTotalPoints(points);
  };

  const uploadDoc24 = (acceptedFiles) => {
    setDoc24(acceptedFiles);
    setDoc24Name(acceptedFiles[0].name);
    setDoc24Status("Complete");
    points = points + 20;
    setTotalPoints(points);
  };

  const uploadDoc25 = (acceptedFiles) => {
    setDoc25(acceptedFiles);
    setDoc25Name(acceptedFiles[0].name);
    setDoc25Status("Complete");
    points = points + 20;
    setTotalPoints(points);
  };

  const uploadDoc26 = (acceptedFiles) => {
    setDoc26(acceptedFiles);
    setDoc26Name(acceptedFiles[0].name);
    setDoc26Status("Complete");
    points = points + 20;
    setTotalPoints(points);
  };

  const handleBackButton = () => {
    props.onPostponed(currentPage);
  };

  const handleSubmitButton = () => {
    if (totalPoints > 99) {
      setDisabledButton("");
      setCurrentPage("Step5");
    } else {
      setErrorInformation(
        "Total points is not enough, Please upload more documents"
      );
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (currentPage === "Step5" && totalPoints > 69) {
      props.onSuccess(
        doc1,
        doc2,
        doc3,
        doc4,
        doc5,
        doc6,
        doc7,
        doc8,
        doc9,
        doc10,
        doc11,
        doc12,
        doc13,
        doc14,
        doc15,
        doc16,
        doc17,
        doc18,
        doc19,
        doc20,
        doc21,
        doc22,
        doc23,
        doc24,
        doc25,
        doc26,
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
                <h3>
                  <strong>Proof of Identity</strong>
                </h3>

                <h4>
                  <strong>Note: </strong>Documents in a language other than
                  English must be accompanied by an official translation. If
                  your document is not in English please email translations to
                  support@ondemandchecks.com.au.
                </h4>
                <h4>
                  Please provide the list of documents below. Copies of
                  identification documents totalling 100 points must be provided
                  with your application.
                </h4>

                <div className="formboxs">
                  <div className="col-sm-12">
                    <Table striped bordered condesed="true">
                      <thead>
                        <tr>
                          <th style={{ textAlign: "center" }}>No.</th>
                          <th style={{ textAlign: "center" }}>Document Name</th>
                          <th style={{ textAlign: "center" }}>Points Worth</th>
                          <th style={{ textAlign: "center" }}>Points Gained</th>
                          <th style={{ textAlign: "center" }}>Upload File</th>
                          <th style={{ textAlign: "center" }}>Attached File</th>
                        </tr>
                      </thead>
                      <tbody style={{ textAlign: "center" }}>
                        <tr style={{ backgroundColor: "#D3D3D3" }}>
                          <td colSpan="6">
                            <strong>Primary Documents</strong>
                          </td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>Foreign or Australian Passport(current)</td>
                          <td>70</td>
                          <td>{doc1Status}</td>
                          <td>
                            <Dropzone
                              onDrop={uploadDoc1}
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
                          <td>{doc1Name}</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Australian Citizenship Certificate</td>
                          <td>70</td>
                          <td>{doc2Status}</td>
                          <td>
                            <Dropzone
                              onDrop={uploadDoc2}
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
                          <td>{doc2Name}</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>
                            Full Birth Certificate (not birth certificate
                            extract)
                          </td>
                          <td>70</td>
                          <td>{doc3Status}</td>
                          <td>
                            <Dropzone
                              onDrop={uploadDoc3}
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
                          <td>{doc3Name}</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>
                            Certificate of identity issued by the Australian
                            Government to refugees and non Australian citizens
                            for enrty to Australia
                          </td>
                          <td>70</td>
                          <td>{doc4Status}</td>
                          <td>
                            <Dropzone
                              onDrop={uploadDoc4}
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
                          <td>{doc4Name}</td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>Australian Driver Licence/Learner Permit</td>
                          <td>40</td>
                          <td>{doc5Status}</td>
                          <td>
                            <Dropzone
                              onDrop={uploadDoc5}
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
                          <td>{doc5Name}</td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>
                            Current (Australian) Tertiary Student Identification
                            Card
                          </td>
                          <td>40</td>
                          <td>{doc6Status}</td>
                          <td>
                            <Dropzone
                              onDrop={uploadDoc6}
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
                          <td>{doc6Name}</td>
                        </tr>
                        <tr>
                          <td>7</td>
                          <td>
                            Photo identification card issued for Australian
                            regulatory purposes (e.g. Aviation/Maritime Security
                            identification, security, industry etc)
                          </td>
                          <td>40</td>
                          <td>{doc7Status}</td>
                          <td>
                            <Dropzone
                              onDrop={uploadDoc7}
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
                          <td>{doc7Name}</td>
                        </tr>
                        <tr>
                          <td>8</td>
                          <td>
                            Government Employee ID (Australian
                            Federal/State/Territory)
                          </td>
                          <td>40</td>
                          <td>{doc8Status}</td>
                          <td>
                            <Dropzone
                              onDrop={uploadDoc8}
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
                          <td>{doc8Name}</td>
                        </tr>
                        <tr>
                          <td>9</td>
                          <td>
                            Defence Force Identify Card (with photo or
                            signature)
                          </td>
                          <td>40</td>
                          <td>{doc9Status}</td>
                          <td>
                            <Dropzone
                              onDrop={uploadDoc9}
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
                          <td>{doc9Name}</td>
                        </tr>
                        <tr style={{ backgroundColor: "#D3D3D3" }}>
                          <td colSpan="6">
                            <strong>Secondary Documents</strong>
                          </td>
                        </tr>
                        <tr>
                          <td>10</td>
                          <td>Department of Veterans Affairs (DVA) card</td>
                          <td>40</td>
                          <td>{doc10Status}</td>
                          <td>
                            <Dropzone
                              onDrop={uploadDoc10}
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
                          <td>{doc10Name}</td>
                        </tr>
                        <tr>
                          <td>11</td>
                          <td>Centrelink card (with reference number)</td>
                          <td>40</td>
                          <td>{doc11Status}</td>
                          <td>
                            <Dropzone
                              onDrop={uploadDoc11}
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
                          <td>{doc11Name}</td>
                        </tr>
                        <tr>
                          <td>12</td>
                          <td>Birth Certificate Extract</td>
                          <td>25</td>
                          <td>{doc12Status}</td>
                          <td>
                            <Dropzone
                              onDrop={uploadDoc12}
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
                          <td>{doc12Name}</td>
                        </tr>
                        <tr>
                          <td>13</td>
                          <td>
                            Birth Card(NSW Births, Deaths, Marriages issue only)
                          </td>
                          <td>25</td>
                          <td>{doc13Status}</td>
                          <td>
                            <Dropzone
                              onDrop={uploadDoc13}
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
                          <td>{doc13Name}</td>
                        </tr>
                        <tr>
                          <td>14</td>
                          <td>Medicare Card</td>
                          <td>25</td>
                          <td>{doc14Status}</td>
                          <td>
                            <Dropzone
                              onDrop={uploadDoc14}
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
                          <td>{doc14Name}</td>
                        </tr>
                        <tr>
                          <td>15</td>
                          <td>Credit card or account card</td>
                          <td>25</td>
                          <td>{doc15Status}</td>
                          <td>
                            <Dropzone
                              onDrop={uploadDoc15}
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
                          <td>{doc15Name}</td>
                        </tr>
                        <tr>
                          <td>16</td>
                          <td>
                            Australian Marriage Certificate (Australian Registry
                            Issue Only)
                          </td>
                          <td>25</td>
                          <td>{doc16Status}</td>
                          <td>
                            <Dropzone
                              onDrop={uploadDoc16}
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
                          <td>{doc16Name}</td>
                        </tr>
                        <tr>
                          <td>17</td>
                          <td>
                            Decree Nisi / Decress Absolute (Australian Registry
                            Issue Only)
                          </td>
                          <td>25</td>
                          <td>{doc17Status}</td>
                          <td>
                            <Dropzone
                              onDrop={uploadDoc17}
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
                          <td>{doc17Name}</td>
                        </tr>
                        <tr>
                          <td>18</td>
                          <td>
                            Change of name certificate (Australian Registry
                            Issue Only)
                          </td>
                          <td>25</td>
                          <td>{doc18Status}</td>
                          <td>
                            <Dropzone
                              onDrop={uploadDoc18}
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
                          <td>{doc18Name}</td>
                        </tr>
                        <tr>
                          <td>19</td>
                          <td>Bank Statement (showing transactions)</td>
                          <td>25</td>
                          <td>{doc19Status}</td>
                          <td>
                            <Dropzone
                              onDrop={uploadDoc19}
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
                          <td>{doc19Name}</td>
                        </tr>
                        <tr>
                          <td>20</td>
                          <td>Property Lease Agreement - Current Address</td>
                          <td>25</td>
                          <td>{doc20Status}</td>
                          <td>
                            <Dropzone
                              onDrop={uploadDoc20}
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
                          <td>{doc20Name}</td>
                        </tr>
                        <tr>
                          <td>21</td>
                          <td>Taxation Assessment Notice</td>
                          <td>25</td>
                          <td>{doc21Status}</td>
                          <td>
                            <Dropzone
                              onDrop={uploadDoc21}
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
                          <td>{doc21Name}</td>
                        </tr>
                        <tr>
                          <td>22</td>
                          <td>
                            Australian Mortgage Documents - Current Address
                          </td>
                          <td>25</td>
                          <td>{doc22Status}</td>
                          <td>
                            <Dropzone
                              onDrop={uploadDoc22}
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
                          <td>{doc22Name}</td>
                        </tr>
                        <tr>
                          <td>23</td>
                          <td>
                            Rating Authority - Current Address eg Land Rates
                          </td>
                          <td>25</td>
                          <td>{doc23Status}</td>
                          <td>
                            <Dropzone
                              onDrop={uploadDoc23}
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
                          <td>{doc23Name}</td>
                        </tr>
                        <tr>
                          <td>24</td>
                          <td>
                            Utility Bill - electricty, gas, telephone - Current
                            address (less than 12 months old)
                          </td>
                          <td>20</td>
                          <td>{doc24Status}</td>
                          <td>
                            <Dropzone
                              onDrop={uploadDoc24}
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
                          <td>{doc24Name}</td>
                        </tr>
                        <tr>
                          <td>25</td>
                          <td>References from Indigenous Organisation</td>
                          <td>20</td>
                          <td>{doc25Status}</td>
                          <td>
                            <Dropzone
                              onDrop={uploadDoc25}
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
                          <td>{doc25Name}</td>
                        </tr>
                        <tr>
                          <td>26</td>
                          <td>
                            Documents issued outside Australia (equivalent to
                            Australian documents Must have official transaltion
                            attached)
                          </td>
                          <td>20</td>
                          <td>{doc26Status}</td>
                          <td>
                            <Dropzone
                              onDrop={uploadDoc26}
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
                          <td>{doc26Name}</td>
                        </tr>
                        <tr style={{ backgroundColor: "#D3D3D3" }}>
                          <td colSpan="5">
                            <strong>Total Points </strong>
                            <br />
                            <span className="required">{errorInformation}</span>
                          </td>
                          <td>{totalPoints}</td>
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
