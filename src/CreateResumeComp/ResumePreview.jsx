import React from 'react';
import html2pdf from 'html2pdf.js';

import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';



const Resume = ({ formData }) => {


  const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      backgroundColor: '#E4E4E4',
      padding: 10,
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
    title: {
      fontSize: 24,
      textAlign: 'center',
      marginBottom: 20,
    },
    subtitle: {
      fontSize: 18,
      textAlign: 'center',
      marginBottom: 10,
    },
    text: {
      fontSize: 12,
      textAlign: 'justify',
      marginBottom: 5,
    },
  });


  const handlePreview = () => {
    const element = document.getElementById('resume');
    const options = {
      margin: 0,
      filename: 'my_resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };

    html2pdf().from(element).set(options).outputPdf('datauristring').then(pdfDataUri => {
      window.open(pdfDataUri)})
    }
console.log(formData)
const name = "ARUN M";
const colors = ["#5884cf", "#d0594c", "#eec75a", "#4f8ad5", "#72b17d"];
const mail = "thanseermohammed001";
const phoneNumber = "8667744564";
const position = "full stack developer";

const hobbies = [
  "googling",
  "coding",
  "watching youtube",
  "playing football",
  "listening podcast",
];
const Skills = ["html", "css", "tailwind", "java", "python", "c", "c++"];
    return(
      
     
    
      <div className='hidden  transform  md:block scale-[0.3] sm:scale-[0.5] md:scale-[0.5] lg:scale-[0.6] xl:scale-[0.7] 2xl:scale-[0.9] 3xl:scale-[0.9] absolute top-0 right-0  -translate-y-[26rem] lg:-translate-y-[20rem] xl:-translate-y-[15rem] 2xl:-translate-y-[0rem] 3xl:-translate-y-[6rem] translate-x-[12rem] lg:translate-x-[7rem] xl:translate-x-[5rem] 2xl:translate-x-[0rem]'>
    <div id="resume" >
      <div className="w-[800px] h-[1050px] ">
        <div className="p-4">
          <div>
            <h2 className="">
              {name.split("").map((char, index) => (
                <span
                  key={index}
                  style={{ color: colors[index % colors.length] }}
                  className="font-bold text-xl "
                >
                  {char}
                </span>
              ))}
            </h2>
          </div>
          <div className="text-[#747474] ">
            {mail} | {phoneNumber}
          </div>

          <div className="flex-1 my-4  h-12  rounded-full border shadow-md bg-white flex justify-between items-center px-4">
            <div className="font-medium ">
              <h2>{position}</h2>
            </div>
            <div className="flex w-40 items-center justify-evenly">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-[#747474]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <p className="text-[#747474] border-l-2 h-7"></p>

              <svg
                class="goxjub"
                focusable="false"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
              >
                <path
                  fill="#4285f4"
                  d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"
                ></path>
                <path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path>
                <path
                  fill="#fbbc05"
                  d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"
                ></path>
                <path
                  fill="#ea4335"
                  d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"
                ></path>
              </svg>
              <svg
                class="Gdd5U"
                focusable="false"
                viewBox="0 0 192 192"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
              >
                <rect fill="none" height="192" width="192"></rect>
                <g>
                  <circle fill="#4285f4" cx="96" cy="104.15" r="28"></circle>
                  <path
                    fill="#ea4335"
                    d="M160,72v40.15V136c0,1.69-0.34,3.29-0.82,4.82v0v0c-1.57,4.92-5.43,8.78-10.35,10.35h0v0 c-1.53,0.49-3.13,0.82-4.82,0.82H66l16,16h50h12c4.42,0,8.63-0.9,12.46-2.51c3.83-1.62,7.28-3.96,10.17-6.86 c1.45-1.45,2.76-3.03,3.91-4.74c2.3-3.4,3.96-7.28,4.81-11.44c0.43-2.08,0.65-4.24,0.65-6.45v-12V96.15V84l-6-19l-10.82,2.18 C159.66,68.71,160,70.31,160,72z"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="M32,72c0-1.69,0.34-3.29,0.82-4.82c1.57-4.92,5.43-8.78,10.35-10.35C44.71,56.34,46.31,56,48,56 h96c1.69,0,3.29,0.34,4.82,0.82c0,0,0,0,0,0L149,45l-17-5l-16-16h-13.44H96h-6.56H76L60,40H48c-17.67,0-32,14.33-32,32v12v20l16,16 V72z"
                  ></path>
                  <path
                    fill="#34a853"
                    d="M144,40h-12l16.83,16.83c1.23,0.39,2.39,0.93,3.47,1.59c2.16,1.32,3.97,3.13,5.29,5.29 c0.66,1.08,1.2,2.24,1.59,3.47v0L176,84V72C176,54.33,161.67,40,144,40z"
                  ></path>
                  <path
                    fill="#fbbc05"
                    d="M48,168h39.89l-16-16H48c-8.82,0-16-7.18-16-16v-23.89l-16-16V136C16,153.67,30.33,168,48,168z"
                  ></path>
                </g>
              </svg>
              <svg
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#4285f4"
                className="w-6 h-6"
              >
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="flex mx-4 my-3 font-medium text-[#747474]">
          &#123; &#00;
          <p className="">
            {hobbies.map((hobby, i) => {
              if (i === 0) {
                return hobby.split("").map((char, index) => (
                  <span
                    key={index}
                    style={{ color: colors[index % colors.length] }}
                    className="font-medium  border-b-2 pb-3.5  border-[#4f8ad5] "
                  >
                    {char}
                  </span>
                ));
              } else {
                return (
                  <span
                    key={i}
                    className="font-medium ml-8 capitalize text-[#747474]"
                  >
                    {hobby}
                  </span>
                );
              }
            })}
          </p>
          &#00; &#125; &#00; = &#00; Hobbies
        </div>

        <hr className="border-1.5" />
        <div className="my-3 text-xs mx-4 text-[#747474]">
          Few best results for {position}
        </div>
        <p className="mx-4 font-normal text-gray-800 ">
          As a Programmer with 2 years of experience, I possess the necessary
          skill to handle both front-end, back-end web development and mobile
          app development tasks. I love solving problems , it gives me the
          confidence that i can do anything that I set my mind to. "I would like
          to be the hardest worker in the room and I belive I am good at what I
          do."
        </p>
        <div className="my-3 mx-4">
          <p className="text-sm">www.{position}.com</p>
          <p className="text-xl text-[#53178a] font-medium">
            Well Qualified {position}
          </p>
        </div>
        <div className="flex items-center px-4 w-full">
          <div className="w-[70%]">
            <hr className="" />
          </div>
          <div className="flex justify-evenly w-[30%]">
            <p className=" text-[#dadbdf] text-sm">About my skills</p>
            <p className=" text-[#dadbdf] text-sm">featured snippets</p>
          </div>
        </div>
      
        
        <div className="px-4 pt-10">
          <p className="text-xl font-medium pb-2 ">People also ask :</p>
          <hr />
          {/* <div className="flex justify-between items-center py-3">
            <p className="text-lg ">Am I creative and imaginative enough ?</p>
            <div className="flex items-center">
              <p>Yes I am a creative person</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 ml-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </div>
          <hr /> */}
          <div className="flex justify-between items-center pt-3">
            <p className="text-lg ">Do i have the right Experience</p>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 ml-3 rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </div>

          <p className="py-3">
            Yes, I have extensive experience in building dynamic web pages and
            mobile apps for e-commerce and social media, both as a freelancer
            and for a startup company. In addition, I've created several landing
            pages for small businesses and personal use cases. With this diverse
            skill set, I am well-experienced to handle the development
            challenges.
          </p>
        </div>
        <div className="px-4 pt-10">
          <p className="text-xl font-medium  my-2">My skills :</p>
          <hr />
          <p className="my-6">
            {Skills.map((skill, i) => {
              return (
                <span
                  key={i}
                  style={{ backgroundColor: colors[i % colors.length] }}
                  className="p-2 px-4 shadow-md  m-2  font-medium uppercase  rounded-md text-white"
                >
                  {skill}
                </span>
              );
            })}
          </p>
        </div>
      
      </div>

      <div className="w-[800px] h-[1050px] ">
       

      </div>
  
    </div>
    </div>
    

    );
}

export default Resume;




