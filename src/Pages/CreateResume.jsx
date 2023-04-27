import React, { useEffect, useState } from "react";

import ResumeForm from "../CreateResumeComp/Form";
import Resume from "../CreateResumeComp/ResumePreview";
import ReactPDF from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
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




  return (
    <div class="resume-builder  flex mx-5   ">
      <div className="hidden w-1/2 md:flex flex-col mx-6  justify-start items-center">
      <Resume formData={formData} />
         {/* <PDFDownloadLink
          document={<Resume formData={formData} />}
          fileName="my-document.pdf">
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download now!"
          }
        </PDFDownloadLink>  */}
      </div>
      <div className="flex-1 w-1/2 mt-2">
        <div>
          <ResumeForm formData={formData} onFormChange={handleFormChange} />
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
