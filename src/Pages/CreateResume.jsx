import React, { useState } from 'react';
import html2pdf from 'html2pdf.js';
import ResumeForm from '../CreateResumeComp/ResumeForm';
import ResumePreview from '../CreateResumeComp/ResumePreview';

const ResumeBuilder = () => {
  const [formData, setFormData] = useState({});
  const [pdfDataUri, setPdfDataUri] = useState(null);

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setPdfDataUri(null); // reset the PDF preview when the form changes
  };

  const handlePreview = () => {
    console.log("dskjfdb")
    const element = document.getElementById('resume');
    const options = {
      margin: 0,
      filename: 'my_resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };

    html2pdf().from(element).set(options).outputPdf('datauristring').then(pdfDataUri => {
      setPdfDataUri(pdfDataUri);
    });
  };

  const handleDownload = () => {
    const element = document.getElementById('resume');
    const options = {
      margin: 0,
      filename: 'my_resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };

    html2pdf().from(element).set(options).save();
  };

  return (
    <div class="resume-builder  flex ">
     <div>
    <ResumePreview formData={formData} />
  </div>
 
  <div className="w-1/2">
  <div className=''>
    <ResumeForm formData={formData} onFormChange={handleFormChange} />

<div className="resume-preview">
  {pdfDataUri ? (<embed src={pdfDataUri} />
  ) : (<p className='flex mx-16'>Enter your resume information and click the "Download PDF" button to download your resume.</p>
  )}

  <div className="resume-preview-buttons flex justify-center">
    {/* <button onClick={handlePreview} className="w-52 bg-black text-white">Preview PDF</button> */}

    {/* {pdfDataUri && ( */}
      <button className="w-52 bg-black text-white" onClick={handleDownload}>Download PDF</button>
     {/* )} */}
  </div>
</div>
    </div>
  </div>
  
 
</div>
   
  );
};

export default ResumeBuilder;
