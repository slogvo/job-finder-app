import { Dimensions, Image } from "react-native"
import banner1 from "../images/banner/banner1.png"
import banner2 from "../images/banner/banner2.png"
import banner3 from "../images/banner/banner3.png"
import banner4 from "../images/banner/banner4.png"

const {width: screenWidth} = Dimensions.get("window");

const BannerList = [
  {
    id: 1,
    image: <Image source={banner1} 
                  style={{
                    width: screenWidth -50 , 
                    height:200, 
                    marginHorizontal: 25,
                    marginLeft: 0,
                    borderRadius:8
                    }} resizeMode="cover"/>
  },
  {
    id: 2,
    image: <Image source={banner2} 
    style={{
      width: screenWidth -50 , 
      height:200, 
      marginHorizontal: 25,
      borderRadius:8
      }} resizeMode="cover"/>
  },
  {
    id: 3,
    image: <Image source={banner3} 
    style={{
      width: screenWidth -50 , 
      height:200, 
      marginHorizontal: 25,
      borderRadius:8
      }} resizeMode="cover"/>
  },
  {
    id: 4,
    image: <Image source={banner4} 
    style={{
      width: screenWidth -50 , 
      height:200, 
      marginHorizontal: 25,
      borderRadius:8
      }} resizeMode="cover"/>
  },
]
export default BannerList;