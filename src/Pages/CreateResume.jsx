import React, { useEffect, useState } from "react";

import ResumeForm from "../CreateResumeComp/Form";
import Resume from "../CreateResumeComp/ResumePreview";
import { BlobProvider,PDFDownloadLink } from '@react-pdf/renderer';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const ResumeBuilder = () => {
  const [formData, setFormData] = useState({});


  const handleFormChange = (data) => {
   
  
    console.log(data)
    setFormData(data)
   // reset the PDF preview when the form changes
  };
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }


  return (
    <div class="#resume-builder flex mx-2 bg-white">
      <div className="hidden w-1/2 xl:flex m-2  bg-white flex-col justify-start items-center">
        <BlobProvider document={<Resume formData={formData} />}>
          {({ blob, url, loading, error }) => {
            return (
              <Document file={url} onLoadSuccess={onDocumentLoadSuccess} className='w-full h-[100vh/80]  sticky top-16 flex justify-center items-start bg-white'  loading={<div className="h-screen w-full bg-white text-green-300">waitdskjfbsdlf.kbjds.fkjbds.vd sf.vkjdsbf.dsjkf vds.jfkbd.sjkf ds.jfkbds.kf ds.kjbf..</div>} >
              {loading ? <div className="h-screen w-full bg-white text-red-300">wait..</div> :<Page pageNumber={pageNumber} className='shadow-2xl border  bg-white' />}
              </Document>
            )
          }}
        </BlobProvider>
      </div>
      <div className="flex-1 w-1/2 m-4 flex justify-center 2xl:justify-start items-center">
        <div>
          <ResumeForm handleFormChange={handleFormChange} />
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
