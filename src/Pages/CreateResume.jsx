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
    <div className="resume-builder flex">
      <div className="md:w-1/2 mx-4 my-16">
        <ResumeForm formData={formData} onFormChange={handleFormChange} />
        <div className="flex justify-end p-2 border rounded-md border-gray-300 my-4">
          <button className="w-32 bg-black py-1 rounded-md  text-white" onClick={handleDownload}>
            Download
          </button>
        </div>
      </div>
      <div className="md:w-1/2 sticky h-full top-0  right-12">
        <Resume formData={formData} />
      </div>
    </div>
  );
};

export default ResumeBuilder;
