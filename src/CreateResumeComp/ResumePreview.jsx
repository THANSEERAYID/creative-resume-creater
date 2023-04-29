import React, { Fragment } from 'react';


import { Document, Page, Text, View, StyleSheet, PDFViewer, Image} from '@react-pdf/renderer';

import icons from '../Images/svg/icons.png'
import { BorderBottomSharp } from '@mui/icons-material';



const Resume = ({ formData }) => {


  const styles = StyleSheet.create({
    Document:{
    height:'100%',
    position:"sticky",
    top:'20px'
    },
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
    backgroundColor: '#f7f7f7',
    borderRadius: 100,
    padding: 6,
    paddingLeft:16,
    paddingRight:16,
    marginTop: 12,
    marginBottom:10,
    width: '98%',
    border: '0.3pt solid #CDCBCB',
    display:'flex',
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent:'space-between'
    },
    icon:{
      width: 100,
      height: 20,
     
    },
    position:{
      fontSize:14,
      color:'#212121'
    },
    hobby:{
      display:'flex',
      justifyContent:'space-between',
      flexDirection:'row',
      fontSize:'12',
    
    },
  border:{
    borderBottom: '1px solid #ebebeb'
  }

  });




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
    "=",
    "hobbies"
  ];
  const Skills = ["html", "css", "tailwind", "java", "python", "c", "c++"];
  // md:h-[70vh] 2md:h-[80vh] lg:h-[84vh] xl:h-[90vh] w-full max-w-4xl

  return (
    <Fragment >
          <Document style={styles.Document} >
            <Page size="A4" style={styles.page}>
              <View style={styles.section}>
                <View style={{display:"flex", flexDirection:"row"}}>
                {formData?.firstName?.split('').map((o, i)=>{
                  return(
                    <Text style={{fontSize: 18, color: colors[Math.round(i/4)] }} key={i}>{o}</Text>
                  )
                })}
                </View>
                <View style={styles.contact}>
                <Text style={styles.email}>{formData?.email}</Text>
                <Text style={styles.number}>{formData?.phone}</Text>
                </View>  
                <View style={styles.search} >
                  <Text style={styles.position}>{position}</Text>
                <Image source={icons} style={styles.icon} />
                </View>
                <View style={styles.hobby}>
                  {hobbies.map((o, i)=>{
                    return(
                      <Text style={{borderBottom: i==0 ? '2px solid #1b72e8' :"", color:i==0 ?"#1b72e8":"gray" , paddingBottom:  "6px",  margin:'10px', marginBottom:'0px'}}>{o}</Text>
                    )
                  })}
                </View>
                <View style={styles.border}></View>
                <Text style={{fontSize:'10px', color:'#CDCBCB', margin:'8px'}}>About few best results (0.51 seconds)</Text>
              </View>
            </Page>
          </Document>
        </Fragment>


  );
}



export default Resume;




