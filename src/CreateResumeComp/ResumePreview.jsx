import React, { Fragment } from 'react';


import { Document, Page, Text, View, StyleSheet, Font, Image } from '@react-pdf/renderer';

import icons from '../Images/svg/icons.png'
import { BorderBottomSharp } from '@mui/icons-material';



const Resume = ({ formData }) => {


  Font.register({
    family: 'Arial',
    src: 'https://fonts.gstatic.com/s/arial/v13/7cHpv4kjgoGqM7E3t-uw-1s.woff2',
  });

  const styles = StyleSheet.create({
    Document: {
      width: '100%',
      height: 'auto',
      display:'flex',
      flexDirection:'column'
    },

    page: {
      flexDirection: 'column',
      backgroundColor: 'white',
      padding: 16,
      pageBreakBefore: 'always'
      
        },
    section: {
      margin: 1,
      padding: 1,
      flexGrow: 1,
    },
    contact: {
      flexDirection: 'row',
      marginTop: 5,
      fontSize: 13,
      color: 'gray',

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
    search: {
      backgroundColor: '#f7f7f7',
      borderRadius: 100,
      padding: 6,
      paddingLeft: 16,
      paddingRight: 16,
      marginTop: 12,
      marginBottom: 12,
      width: '100%',
      border: '0.3pt solid #CDCBCB',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },

    seeMore: {
      backgroundColor: '#f7f7f7',
      borderRadius: 100,
      padding: 8,
      paddingLeft: 16,
      paddingRight: 16,
      marginTop: 12,
      marginBottom: 12,
      width: '250px',
      border: '0.3pt solid #CDCBCB',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly'
    },

    icon: {
      width: 100,
      height: 20,

    },
    position: {
      fontSize: 14,
      color: '#212121'
    },
    hobby: {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row',
      fontSize: '12',

    },
    border: {
      borderBottom: '1px solid #F1EFEF'
    },
    borderWithBottom: {
      borderBottom: '1px solid #F1EFEF',
      marginTop: '8px'
    },
    summary: {
      fontSize: 13,
      color: '#2f302e',
      fontFamily: 'Helvetica',
      lineHeight: 1.3,
    },
    education: {
      fontSize: 13,
      color: '#2f302e',
      fontFamily: 'Helvetica',
      lineHeight: 1.3,
      marginTop:'6px'
    },
    bestThing: {
      display:'flex',
      flexDirection:'row',
      marginTop:'5px'
      
    },
    accord: {
      fontSize: 13,
      color: '#2f302e',
      fontFamily: 'Helvetica',
      lineHeight: 1.3,
      marginTop: '10px'
    },
    experience: {
      fontSize: 13,
      color: '#2f302e',
      fontFamily: 'Helvetica',
      lineHeight: 1.3,
      marginTop: '6px'
    },
    accordHead: {
      marginTop: '10px',
      color: '#2f302e',
      fontSize: '14px',
      marginBottom: '4px'
    },
    Header: {
      marginTop: '30px',
      color: '#2f302e',
      fontSize: '16px',
      marginBottom: '4px'
    }

  });




  const name = "MOHAMMED THANSEER";
  const colors = ["#5884cf", "#d0594c", "#eec75a", "#4f8ad5", "#72b17d"];
  const email = "thanseermohammed001@gmailcom";
  const phone = "8667744564";
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

  const summary = "As a programmer with 2 years of experince, I possess the necessary skill to handel both frontend, backend web development and mobile app development tasks. I love sloving problems. it gives me the confidence that i can do anything that i set my mind to. i would like to be the hardest worker in the room and i believe i am good at what i do. "
  // md:h-[70vh] 2md:h-[80vh] lg:h-[84vh] xl:h-[90vh] w-full max-w-4xl
  const education = "As a programmer with 2 years of experince, I possess the necessary skill to handel both frontend, backend web development and mobile app development tasks. I love sloving problems. it gives me the confidence that i can do anything that i set my mind to. i would like to be the hardest worker in the room and i believe i am good at what i do. "

  const stylesPage2 = StyleSheet.create({
  page: {
    backgroundColor: 'white',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  // Add more styles for the second page as needed
});



  return (
    <Fragment >
      <Document style={styles.Document}  >
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <View style={{ display: "flex", flexDirection: "row" }}>
              {name.split('').map((o, i) => {
                return (
                  <Text style={{ fontSize: 18, color: colors[Math.round(i / 4)] }} key={i}>{o}</Text>
                )
              })}
            </View>
            <View style={styles.contact}>
              <Text style={styles.email}>{email}</Text>
              <Text style={{ marginLeft: '8px', }}> | </Text>
              <Text style={styles.number}>{phone}</Text>
            </View>
            <View style={styles.search} >
              <Text style={styles.position}>{position}</Text>
              <Image source={icons} style={styles.icon} />
            </View>
            <View style={styles.hobby}>
              {hobbies.map((o, i) => {
                return (
                  <Text style={{ borderBottom: i == 0 ? '2px solid #1b72e8' : "", color: i == 0 ? "#1b72e8" : "gray", paddingBottom: "6px", marginRight: '20px', marginTop: '10px' }}>{o}</Text>
                )
              })}
            </View>
            <View style={styles.border}></View>
            <Text style={{ fontSize: '10px', color: '#CDCBCB', marginBottom: '10px', marginTop: '10px' }}>About few best results (0.51 seconds)</Text>
            <Text style={styles.summary}>{summary}</Text>
            <Text style={{ fontSize: '10px', color: '#2f302e', marginBottom: '5px', marginTop: '14px' }}>https://www.bestFullStackdeveloper.com</Text>
            <Text style={{ fontSize: "16px", color: '#7936b2', marginBottom: '4px' }}>Well qualified developer</Text>
            <Text style={styles.Header}>People also ask :</Text>
            <View style={styles.border}></View>
            <Text style={styles.accordHead}>Am I Creative and Imaginative Enough ?</Text>
            <View style={styles.borderWithBottom}></View>
            <Text style={styles.accordHead}>Do I Have The Right Expertice For The Job ?</Text>
            <Text style={styles.accord}>Yes, I have extensive experince in building dynamic web pages and mobile apps for e-commerce and social media, both as a freelancer and for a startup company. In addition, I've created several landing pages for small businesses and personal use cases. With this diverse skill set, I am well-experienced to handle the development challenges</Text>
            <Text style={styles.Header}>My Skills :</Text>
            <View style={styles.border}></View>
            <View style={{ height: '215px' }}></View>
            <View style={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }} >
              <View style={styles.seeMore}>
                <Text style={{ fontSize: '12px' }}>See more</Text>
              </View>
            </View>
          </View>
        </Page>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <View style={styles.search} >
              <Text style={styles.position}>{position}</Text>
              <Image source={icons} style={styles.icon} />
            </View>
            <View style={styles.hobby}>
              {hobbies.map((o, i) => {
                return (
                  <Text style={{ borderBottom: i == 1 ? '2px solid #1b72e8' : "", color: i == 0 ? "#1b72e8" : "gray", paddingBottom: "6px", marginRight: '20px', marginTop: '10px' }}>{o}</Text>
                )
              })}
            </View>
            <View style={styles.border}></View>
            <Text style={{ fontSize: "16px", color: '#7936b2', marginBottom: '4px', marginTop:'14px' }}>Education & Learning Curve</Text>
            <Text style={styles.education}>{education}</Text>
            {/* <Text style={{ fontSize: '10px', color: '#2f302e', marginBottom: '5px', marginTop: '14px' }}>https://www.bestFullStackdeveloper.com</Text> */}
            <View style={styles.bestThing}>
            <Text style={{ fontSize: "14px", color: '#7936b2', marginBottom: '4px' }}>Best thing to say about your Education...</Text>
            <Text style={{ fontSize: "14px", color: '#7936b2', marginBottom: '4px', marginLeft:'14px' }}>Best thing to say about your Learning...</Text>
            </View>
            <Text style={{ fontSize: "16px", color: '#7936b2', marginTop:'20px', marginBottom: '4px' }}>Experience on Projects & Companies</Text>
            <Text style={styles.experience}>Yes, I have extensive experince in building dynamic web pages and mobile apps for e-commerce and social media, both as a freelancer and for a startup company. In addition, I've created several landing pages for small businesses and personal use cases. With this diverse skill set, I am well-experienced to handle the development challenges</Text>
            <Text style={styles.Header}>My Skills :</Text>
            <View style={styles.border}></View>
            <View style={{ height: '222px' }}></View>
            <View style={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }} >
              <View style={styles.seeMore}>
                <Text style={{ fontSize: '12px' }}>See more</Text>
              </View>
            </View>
          </View>
        </Page>
      </Document>
    </Fragment>


  );
}



export default Resume;




