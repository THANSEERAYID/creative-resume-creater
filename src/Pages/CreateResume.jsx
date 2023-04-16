import React, { useState } from "react";
import html2pdf from "html2pdf.js";
import ResumeForm from "../CreateResumeComp/Form";
import Resume from "../CreateResumeComp/ResumePreview";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";

const ResumeBuilder = () => {
  const [formData, setFormData] = useState({});
  const [pdfDataUri, setPdfDataUri] = useState(null);

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setPdfDataUri(null); // reset the PDF preview when the form changes
  };

  const handlePreview = () => {
    console.log("dskjfdb");
    const element = document.getElementById("resume");
    const options = {
      margin: 0,
      filename: "my_resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf()
      .from(element)
      .set(options)
      .outputPdf("datauristring")
      .then((pdfDataUri) => {
        setPdfDataUri(pdfDataUri);
      });
  };

  const handleDownload = () => {
    const element = document.getElementById("resume");
    const options = {
      margin: 0,
      filename: "my_resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf().from(element).set(options).save();
  };

  return (
    <div class="resume-builder  flex ">
      <div>
        {/* <PDFDownloadLink
          document={<Resume formData={formData} />}
          fileName="my-document.pdf"
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download now!"
          }
        </PDFDownloadLink> */}
        <Resume formData={formData} />
      </div>

      <div className="md:w-1/2">
        <div
          className="m-4">
          <ResumeForm formData={formData} onFormChange={handleFormChange} />

          <div className="resume-preview">
            <div className="resume-preview-buttons flex justify-center">
              {/* <button onClick={handlePreview} className="w-52 bg-black text-white">Preview PDF</button> */}

              {/* {pdfDataUri && ( */}
              <button
                className="w-52 bg-black text-white"
                onClick={handleDownload}
              >
                Download PDF
              </button>
              {/* )} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
