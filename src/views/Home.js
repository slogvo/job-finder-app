import {Image, ScrollView,Text,  FlatList, View, Dimensions, ImageBackground, } from "react-native"
import BannerCarousel from "../layout/BannerCarousel"
import colors from "../../assets/colors/colors"
import SearchLayout from "../layout/SearchLayout"
import LargeCategories from "../../assets/data/LargeCategories"
import { useEffect, useState } from "react"
import boxShadow from "../../assets/images/box-shadow.png"
import RenderItem from "../layout/RenderItem"
import Title from "../layout/Title"

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
        width:'100%',
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
                marginTop: 30,
                width: '100%',
                }}>
                <Title></Title>
                <View style={{
                    marginTop: 10,
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

            <View style={{
                marginTop: 30,
                width: '100%',
                }}>
            <Title title="Việc làm nổi bật"></Title>
                <View style={{
                    marginTop: 10,
                    width: '100%',
                    paddingHorizontal:25,
                    justifyContent: 'center',
                    alignItems: 'center',
                }} >
                    <View
                    style = {{
                        width: '100%',
                        height: 90,
                        backgroundColor:'red',
                        borderRadius: 16,
                        backgroundColor: "#fafafa",
                        padding: 15,
                        elevation: 2,
                     }}>

                    </View>
                </View>
            </View>
        </ScrollView>
    </View>
  )
}

export default Home