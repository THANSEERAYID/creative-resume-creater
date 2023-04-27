import React from 'react';


import { Document, Page, Text, View, StyleSheet, PDFViewer, Image} from '@react-pdf/renderer';

import img from '../Images/resume page1.jpg'



const Resume = ({ formData }) => {


  const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      backgroundColor: 'white',
      padding: 20,
    },
    section: {
      margin: 1,
      padding: 1,
      flexGrow: 1,
    },
   
     
  
    contact:{
      flexDirection: 'row',
      marginTop: 5,
      fontSize:13,
      color: 'gray',
      
    },
    number:{
      marginLeft:10
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
    search:{
    backgroundColor: '#F1F1F1',
    borderRadius: 100,
    padding: 6,
    paddingLeft:16,
    paddingRight:16,
    marginTop: 12,
    marginBottom:10,
    width: '98%',
    border: '0.3pt solid gray',
    display:'flex',
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent:'space-between'
    },
    icon:{
      width: 20,
      height: 20,
     
    },
    position:{
      fontSize:14,
    }

  });



  console.log(formData)
  const name = "MOHAMMED THANSEER";
  const colors = ["#5884cf", "#d0594c", "#eec75a", "#4f8ad5", "#72b17d"];
  const email = "thanseermohammed001@gmailcom";
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


  return (
    <div className='h-screen w-full sticky top-16 flex justify-center'>
      <div className='lg:h-[86vh] aspect-h-[1.141] aspect-w-1  border '>
        <PDFViewer className='w-full h-full'  backgroundColor="red">
          <Document style={styles.Document} >
          
            <Page size="A4" style={styles.page}>
              <View style={styles.section}>
                <View style={{display:"flex", flexDirection:"row"}}>
                {name.split('').map((o, i)=>{
                  return(
                    <Text style={{fontSize: 18, color: colors[Math.round(i/4)] }}>{o}</Text>
                  )
                })}
                </View>
                <View style={styles.contact}>
                <Text style={styles.email}>{email}</Text>
                <Text style={styles.number}>{phoneNumber}</Text>
                </View>  
                <View style={styles.search} >
                  <Text style={styles.position}>{position}</Text>
                <Image source={img} style={styles.icon} />
      

                </View>
              </View>
            </Page>
          </Document>
        </PDFViewer>
      </div>
    </div>


  );
}



export default Resume;




