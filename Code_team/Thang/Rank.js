import React,{useState} from 'react';
import { Image,SafeAreaView,StyleSheet, Text, View,TouchableOpacity,ScrollView,Button,Alert } from 'react-native';

  const Rank=() =>{
    const logo1='https://s3-symbol-logo.tradingview.com/ho-chi-minh-city--600.png'
    const filled='https://icons.iconarchive.com/icons/custom-icon-design/flatastic-2/512/favorite-icon.png'
    const unfilled='https://cdn-icons-png.flaticon.com/512/73/73814.png'

    return(
      <SafeAreaView style={styles.container}>
        {/* Long code giup Thang cai thanh Search nhe' <3 */}
       <Image
        style={styles.Search}
        source={require('./assets/search.png')}
      />
      <ScrollView style={{width:'100%',}}>
            <SafeAreaView style={styles.title}>
              <Text style={styles.titleTextStyle}>Bảng Xếp Hạng</Text>
            </SafeAreaView>
        
          <SafeAreaView style={styles.container1}>
            <SafeAreaView style={styles.tab}>
              <View style={styles.line}>
                  <Image style={styles.logoImgStyle} source={{uri: logo1}}/>
                  <Text style={styles.textStyle}>Chuyên Viên Quan Hệ Khách Hàng (Tuyển Dụng Tập Trung Toàn Quốc Quý I/2023)</Text>
              </View>
              <View style={styles.line}>
                <View style={styles.cell}>
                    <Text style={styles.textStyle}>4.5</Text>
                     </View> 
                     <View style={styles.cell}>
                     <Image
                      style={styles.heart}
                      source={require('./assets/unfilledHeart.png')}
                    />
                    <Text style={styles.textStyle}>Yêu thích</Text>
                    </View>
                    <View style={styles.cell}>
                    <Button
                      title="Nộp đơn"
                      onPress={() => Alert.alert('Chuyển trang')}
                    />  
                    </View>
              </View>
            </SafeAreaView>
            <SafeAreaView style={styles.tab}>
              <View style={styles.line}>
                  <Image style={styles.logoImgStyle} source={{uri: logo1}}/>
                  <Text style={styles.textStyle}>Chuyên Viên Quan Hệ Khách Hàng (Tuyển Dụng Tập Trung Toàn Quốc Quý I/2023)</Text>
              </View>
              <View style={styles.line}>
                <View style={styles.cell}>
                    <Text style={styles.textStyle}>4.5</Text>
                    <Image
                      style={styles.star}
                      source={require('./assets/star.png')}
                    />
                     </View> 
                     <View style={styles.cell}>
                     <Image
                      style={styles.heart}
                      source={require('./assets/unfilledHeart.png')}
                    />
                    <Text style={styles.textStyle}>Yêu thích</Text>
                    </View>
                    <View style={styles.cell}>
                    <Button
                      title="Nộp đơn"
                      onPress={() => Alert.alert('Chuyển trang')}
                    />  
                    </View>
              </View>
            </SafeAreaView>
            <SafeAreaView style={styles.tab}>
              <View style={styles.line}>
                  <Image style={styles.logoImgStyle} source={{uri: logo1}}/>
                  <Text style={styles.textStyle}>Chuyên Viên Quan Hệ Khách Hàng (Tuyển Dụng Tập Trung Toàn Quốc Quý I/2023)</Text>
              </View>
              <View style={styles.line}>
                <View style={styles.cell}>
                    <Text style={styles.textStyle}>4.5</Text>
                    <Image
                      style={styles.star}
                      source={require('./assets/star.png')}
                    />
                     </View> 
                     <View style={styles.cell}>
                    <Image
                      style={styles.heart}
                      source={require('./assets/unfilledHeart.png')}
                    />
                    <Text style={styles.textStyle}>Yêu thích</Text>
                    </View>
                    <View style={styles.cell}>
                    <Button
                      title="Nộp đơn"
                      onPress={() => Alert.alert('Chuyển trang')}
                    />  
                    </View>
              </View>
            </SafeAreaView>  
            <SafeAreaView style={styles.tab}>
              <View style={styles.line}>
                  <Image style={styles.logoImgStyle} source={{uri: logo1}}/>
                  <Text style={styles.textStyle}>Chuyên Viên Quan Hệ Khách Hàng (Tuyển Dụng Tập Trung Toàn Quốc Quý I/2023)</Text>
              </View>
              <View style={styles.line}>
                <View style={styles.cell}>
                    <Text style={styles.textStyle}>4.5</Text>
                    <Image
                      style={styles.star}
                      source={require('./assets/star.png')}
                    />
                     </View> 
                     <View style={styles.cell}>
                    <Image
                      style={styles.heart}
                      source={require('./assets/unfilledHeart.png')}
                    />
                    <Text style={styles.textStyle}>Yêu thích</Text>
                    </View>
                    <View style={styles.cell}>
                    <Button
                      title="Nộp đơn"
                      onPress={() => Alert.alert('Chuyển trang')}
                    />  
                    </View>
              </View>
            </SafeAreaView>
            <SafeAreaView style={styles.tab}>
              <View style={styles.line}>
                  <Image style={styles.logoImgStyle} source={{uri: logo1}}/>
                  <Text style={styles.textStyle}>Chuyên Viên Quan Hệ Khách Hàng (Tuyển Dụng Tập Trung Toàn Quốc Quý I/2023)</Text>
              </View>
              <View style={styles.line}>
                <View style={styles.cell}>
                    <Text style={styles.textStyle}>4.5</Text>
                    <Image
                      style={styles.star}
                      source={require('./assets/star.png')}
                    />
                     </View> 
                     <View style={styles.cell}>
                    <Image
                      style={styles.heart}
                      source={require('./assets/unfilledHeart.png')}
                    />
                    <Text style={styles.textStyle}>Yêu thích</Text>
                    </View>
                    <View style={styles.cell}>
                    <Button
                      title="Nộp đơn"
                      onPress={() => Alert.alert('Chuyển trang')}
                    />  
                    </View>
              </View>
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
      paddingTop:20,
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
      flexDirection:'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding:20,
      borderRadius:16,
      width:'100%',
      marginVertical:10,
      marginHorizontal:20
    },
    line:{
      flexDirection:'row',
      padding:10,
      borderRadius:20,
      marginHorizontal:20
    },
    cell:{
      flexDirection:'row',
      padding:10,
      borderRadius:20,
      margin:5
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
      borderRadius:10
    },
    Search:{
      width: '100%',
      height: '20%',
      resizeMode:'cover',
    },
    star:{
      width: 24,
      height: 24,
      resizeMode:'cover'
    },
    customRatingBarStyle:{
      justifyContent:'center',
      flexDirection:'row',
      marginTop:30
    },
    heart:{
      width: 24,
      height: 24,
      resizeMode:'cover'
    }
  });
export default  Rank;