import BannerList from "../../assets/data/BannerList";
import React, { useEffect, useRef, useState } from 'react'
import { Dimensions, ScrollView, View } from "react-native";
import colors from "../../assets/colors/colors"

const {width: screenWidth} = Dimensions.get("window");


const BannerCarousel = () => {
  const [imageList,setImageList] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const stepCarousel = useRef(null);
  useEffect(()=>{
    setImageList(BannerList);
  },[])

  let interval = 3000;
  useEffect(()=>{
    if(!imageList) return;
    if(imageList?.length >0){
      let index= 0;
      setInterval(() => {
        stepCarousel?.current?.scrollTo({x: index * screenWidth, y:0 , animated: true});
        if (index === imageList.length - 1) {
          index = 0;
          interval = 0;
        }
        else {
          index += 1;
          interval = 3000;
        }
      }, interval);
    }
  },[imageList])

  const handleScroll = (e) => {
    if(!e) return;
    const {nativeEvent} = e;
    if (nativeEvent && nativeEvent.contentOffset){
      const currentOffset = nativeEvent.contentOffset.x;
      let imageIndex = 0; 
      if (nativeEvent.contentOffset.x > 0) {
        imageIndex = Math.floor((nativeEvent.contentOffset.x + screenWidth /2) / screenWidth);
      }
      setCurrentImage(imageIndex);
    }
  }
  return (
    <View style={{borderRadius:8, paddingHorizontal:25, marginTop:20}}>
      {imageList?.length >0  &&
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      scrollEventThrottle={16}
      contentContainerStyle={{width: screenWidth * imageList.length - 50, height: 200}}
      onScroll={handleScroll}
      ref= {stepCarousel}
      >
        {imageList?.map((item)=>(
          <View key={item.id}>
            <View>{item.image}</View>
          </View>
        ))}
      </ScrollView>}
         {imageList?.length > 0 && 
         <View style={{flexDirection:'row',  alignItems: 'center', justifyContent:"center", marginTop: 20}}>
           {imageList?.map((item, index)=>(
            (currentImage === index) ? 
            <View
             key={item.id}
             style ={{
              width: 15, 
              height:4, 
              alignItems: 'center',
              justifyContent:"center",
              marginHorizontal:3, 
              borderRadius: 3,
              backgroundColor: colors.primary}}
            />:  
             <View 
             key={item.id}
             style ={{
              width: 15, 
              height:4, 
              marginHorizontal:3, 
              alignItems: 'center',
              justifyContent:"center",
              borderRadius: 3,
              backgroundColor: "#EDEDED"}}/>
            ))}
          </View>}
    </View>
  )
}

export default BannerCarousel