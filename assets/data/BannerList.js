import ImageBanner from "../../src/component/ImageBanner"
import banner1 from "../images/banner/banner1.png"
import banner2 from "../images/banner/banner2.png"
import banner3 from "../images/banner/banner3.png"
import banner4 from "../images/banner/banner4.png"
import banner5 from "../images/banner/banner5.png"


const BannerList = [
  {
    id: 1,
    image: <ImageBanner src={banner1}/>,
    companyName:"Zalopay, Partnership Marketing Lead"
  },
  {
    id: 2,
    image: <ImageBanner src={banner2}/>
  },
  {
    id: 3,
    image: <ImageBanner src={banner3}/>
  },
  {
    id: 4,
    image: <ImageBanner src={banner4}/>
  },
  {
    id: 5,
    image: <ImageBanner src={banner5}/>
  },
]
export default BannerList;