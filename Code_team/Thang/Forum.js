import React,{useState} from 'react'
import { Image,SafeAreaView,StyleSheet, Text, View,TouchableOpacity,ScrollView } from 'react-native';

  const Forum=() =>{
    const logo1='https://www.kaplan.com.sg/wp-content/uploads/2020/10/NH_BF-TSC.jpg'
    return(
      <SafeAreaView style={styles.container}>
         <Image
        style={styles.Search}
        source={require('./assets/icon.png')}
      />
         <ScrollView style={{width:'100%'}}>
            <SafeAreaView style={styles.title}>
              <Text style={styles.titleTextStyle}>Forum</Text>
            </SafeAreaView>
        
          <SafeAreaView style={styles.container1}>
          
            <SafeAreaView style={styles.tab}>
                <Image style={styles.logoImgStyle} source={{uri: logo1}}/>
                <Text style={styles.textStyle}>Chia sẻ kinh nghiệm cho các bạn học IT sắp ra trường và đang đi làm</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.tab}>
                <Image style={styles.logoImgStyle} source={{uri: logo1}}/>
                <Text style={styles.textStyle}>Chia sẻ kinh nghiệm cho các bạn học IT sắp ra trường và đang đi làm</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.tab}>
                <Image style={styles.logoImgStyle} source={{uri: logo1}}/>
                <Text style={styles.textStyle}>Chia sẻ kinh nghiệm cho các bạn học IT sắp ra trường và đang đi làm</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.tab}>
                <Image style={styles.logoImgStyle} source={{uri: logo1}}/>
                <Text style={styles.textStyle}>Chia sẻ kinh nghiệm cho các bạn học IT sắp ra trường và đang đi làm</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.tab}>
                <Image style={styles.logoImgStyle} source={{uri: logo1}}/>
                <Text style={styles.textStyle}>Chia sẻ kinh nghiệm cho các bạn học IT sắp ra trường và đang đi làm</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.tab}>
                <Image style={styles.logoImgStyle} source={{uri: logo1}}/>
                <Text style={styles.textStyle}>Chia sẻ kinh nghiệm cho các bạn học IT sắp ra trường và đang đi làm</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.tab}>
                <Image style={styles.logoImgStyle} source={{uri: logo1}}/>
                <Text style={styles.textStyle}>Chia sẻ kinh nghiệm cho các bạn học IT sắp ra trường và đang đi làm</Text>
            </SafeAreaView>
           
          </SafeAreaView>
          </ScrollView>
      </SafeAreaView>
    );
  };
  const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#fff',
      padding:20,
      marginTop:20
    },
    title: { 
      flex: 2,
      backgroundColor: '#fff',
      alignItems: 'center',
      borderRadius:20,
    },
    container1: {
      flex: 3,
      borderRadius:20,
      backgroundColor: '#fff',
      padding:20,
      alignItems: 'center',
      justifyContent: 'center',
    },

    tab:{
      backgroundColor: '#fbfbfb',
      flexDirection:'row',
      padding:10,
      borderRadius:20,
      marginVertical:10,
      marginHorizontal:20
    },
    titleTextStyle: {
      textAlign: 'center',
      fontSize: 23,
      fontWeight: 'bold',
    },
    textStyle:{
      textAlign: 'center',
      fontSize: 18,
      fontWeight: 'bold',
    },
    logoImgStyle:{
      width: 80,
      height: 80,
      resizeMode:'cover',
      borderRadius:80
    },
    Search:{
      width: 400,
      height: 200,
    }
  });
export default  Forum;