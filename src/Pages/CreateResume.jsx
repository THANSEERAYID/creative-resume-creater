import React, { useEffect, useState } from "react";
import ResumeForm from "../CreateResumeComp/Form";
import Resume from "../CreateResumeComp/ResumePreview";
import { BlobProvider, PDFDownloadLink } from '@react-pdf/renderer';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const ResumeBuilder = () => {
  const [formData, setFormData] = useState({});
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const handleFormChange = (data) => {
    setFormData(data);
  };

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="#resume-builder flex mx-2 bg-white space-x-2">
      <div className="hidden w-1/2 lg:flex xl:mx-4 my-2 bg-white flex-col justify-start items-center">
        <BlobProvider document={<Resume formData={formData} />}>
          {({ blob, url, loading, error }) => {
            return (
              <Document file={url} onLoadSuccess={onDocumentLoadSuccess} className='top-16  justify-center items-start bg-white' loading={<div className="h-screen w-full bg-white"></div>} >
                {Array.from(new Array(numPages), (el, index) => (
                  <Page key={`page_${index + 1}`} pageNumber={index + 1} className=' shadow-lg xl:shadow-xl border bg-white m-10' />
                ))}
              </Document>
            )
          }}
        </BlobProvider>
      </div>
      <div className="flex-1 w-1/2 xl:mx-4 my-2 flex justify-center 2xl:justify-start items-center">
        <div>
          <ResumeForm handleFormChange={handleFormChange} />
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
