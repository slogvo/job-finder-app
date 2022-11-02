import {Image, ScrollView,Text,  FlatList, View, Dimensions, ImageBackground, } from "react-native"
import BannerCarousel from "../layout/BannerCarousel"
import colors from "../../assets/colors/colors"
import SearchLayout from "../layout/SearchLayout"
import LargeCategories from "../../assets/data/LargeCategories"
import { useEffect, useState } from "react"
import boxShadow from "../../assets/images/box-shadow.png"

const {width: screenWidth} = Dimensions.get("window");


const Home = () => {
  const [largeCategories, setLargeCategories] = useState([]);
  useEffect(()=>{
    setLargeCategories(LargeCategories)
  },[])

  const renderItem = ({ item }) => (
    <ImageBackground source={boxShadow} 
    resizeMode="cover"
    style ={{
      width: 250,
      height: 180,
      borderColor:colors.lightGreen,
      borderRadius: 16,
      padding: 15,
      marginRight: 30,
      }}>
        <View>{item.companyLogo}</View>
        <Text style={{marginTop:10, fontSize:20, color: colors.text, fontWeight:"600"}}>{item.companyDescription}</Text>
        <View style={{flexDirection: "row", justifyContent:"space-between",marginTop:"auto"}}>
          <Text style={{ fontSize:16, color: colors.text, fontWeight:"300"}}>{item.salary}</Text>
          <Text style={{ fontSize:16, color: colors.text, fontWeight:"300"}}>{item. companyLocation}</Text>
        </View>
      </ImageBackground>

  );

  return (
    <View style={{
        flex:1,
        backgroundColor: "#fff",
        paddingTop: 10,
    }}>
        <ScrollView 
            showsVerticalScrollIndicator={false} 
            persistentScrollbar={true}
            style={{
                backgroundColor: "#fff",
                position: "relative",
                paddingHorizontal:25,
            }}
            stickyHeaderIndices={[0]}
        >
        <SearchLayout></SearchLayout>
        <BannerCarousel></BannerCarousel>
        <View style={{
            marginTop: 20,
            width: '100%',
            }}>
            <View>
                <Text style={{
                    color: colors.text,
                    fontSize:18,
                    fontWeight: "500",
                }}>
                    Đề xuất cho bạn
                </Text>
                <Text style={{
                    color: colors.text,
                    fontSize:18,
                    fontWeight: "500",
                }}>
                    Nhiều hơn
                </Text>
            </View>

            <View style={{
                marginTop: 15,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
            }} >
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={largeCategories}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    horizontal ={true}
            />
            </View>
      </View>
     </ScrollView>
    </View>
  )
}

export default Home