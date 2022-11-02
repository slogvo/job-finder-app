import { Image, View } from "react-native";
import Lotte from "../images/logo/Lotte_vn.png"
import Sabeco from "../images/logo/sabeco.jpg"
import asiafoods from "../images/logo/asiafoods.png"

const SmallCategories = [
  {
    id: 1,
    companyLogo:<Image style={{width:60, height:60}} resizeMode="contain" source={Lotte}/>,
    companyName: "Lotte Vina International Co., Ltd",
    companyLocation:"Hồ Chí Minh",
    companyDescription: "General HR Staff",
    update: "28/10/2022",
    salary: "Thương lượng",
    time_remaining: 25,
    skills:[
      "HR General",
      "HR Admin",
      "Consulting",
      "Training",
      "MS Office"
    ]
  },
  {
    id: 2,
    companyLogo:<Image style={{width:50, height:50}} resizeMode="contain" source={asiafoods}/>,
    companyName: "Asiafoods Corporation",
    companyLocation:"Hồ Chí Minh",
    companyDescription: "Marketing Director",
    update: "31/10/2022",
    salary: "$5000 - $7000",
    time_remaining: 15,
    skills:[
      "UI Design",
      "UX Design",
      "Figma",
    ]
  },
  {
    id: 3,
    companyLogo:<Image style={{width:50, height:50}} resizeMode="contain" source={Sabeco}/>,
    companyName: "Sabeco - Tổng Công Ty Cổ Phần Bia - Rượu - Nước Giải Khát Sài Gòn",
    companyLocation:"Hồ Chí Minh",
    companyDescription: "Senior Manager - IT (Commercial)", 
    update: "31/10/2022",
    salary: "$1500 - $2300",
    time_remaining: 21,
    skills:[
      "UI Design",
      "UX Design",
      "Figma",
    ]
  },
  
  {
    id: 4,
    companyLogo:<Image style={{width:50, height:50}} resizeMode="contain" source={Lotte}/>,
    companyName: "Saigon Technology",
    companyLocation:"Hồ Chí Minh",
    companyDescription: "UI/UX Designer",
    update: "31/10/2022",
    salary: "$650 - $800",
    time_remaining: 21,
    skills:[
      "UI Design",
      "UX Design",
      "Figma",
    ]
  },
  {
    id: 5,
    companyLogo:<Image style={{width:50, height:50}} resizeMode="contain" source={Lotte}/>,
    companyName: "Saigon Technology",
    companyLocation:"Hồ Chí Minh",
    companyDescription: "UI/UX Designer",
    update: "31/10/2022",
    salary: "$650 - $800",
    time_remaining: 21,
    skills:[
      "UI Design",
      "UX Design",
      "Figma",
    ]
  },
]
export default SmallCategories;