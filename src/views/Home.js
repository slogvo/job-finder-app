import {Image, ScrollView,Text,  FlatList, View, Dimensions, ImageBackground, } from "react-native"
import BannerCarousel from "../layout/BannerCarousel"
import colors from "../../assets/colors/colors"
import SearchLayout from "../layout/SearchLayout"
import LargeCategories from "../../assets/data/LargeCategories"
import { useEffect, useState } from "react"
import boxShadow from "../../assets/images/box-shadow.png"
import RenderItem from "../layout/RenderItem"

const {width: screenWidth} = Dimensions.get("window");


const Home = () => {
  const [largeCategories, setLargeCategories] = useState([]);
  useEffect(()=>{
    setLargeCategories(LargeCategories)
  },[])

  const renderItem = ({ item }) => (
    <RenderItem item={item}></RenderItem>
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
            }}
            stickyHeaderIndices={[0]}
        >
        <SearchLayout></SearchLayout>
        <BannerCarousel></BannerCarousel>
        <View style={{
            marginTop: 20,
            width: '100%',
            }}>
            <View style={{
                paddingHorizontal:25,
                flexDirection:"row", 
                justifyContent:"space-between", 
                alignItems:"center"}}>
                <Text style={{
                    color: colors.text,
                    fontSize:20,
                    fontWeight: "500",
                }}>
                    Đề xuất cho bạn
                </Text>
                <Text style={{
                    color: colors.text,
                    fontSize: 14,
                    fontWeight: "500",
                    color: colors.primary,
                }}>
                    Xem tất cả
                </Text>
            </View>

            <View style={{
                marginTop: 15,
                width: '100%',
                paddingLeft:25,
                justifyContent: 'center',
                alignItems: 'center',
            }} >
                <FlatList
                    style ={{
                    height: 210,        
                    }}
                    contentContainerStyle={{flexGrow: 1, justifyContent: 'center', alignItems:'center', padding: 2}}
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