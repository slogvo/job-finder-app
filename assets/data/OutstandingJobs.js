import { Image } from "react-native";
import Onew from "../images/outstanding-jobs/Onew.png"
import vinamilk from "../images/outstanding-jobs/vinamilk.png"
import Capgenmini from "../images/outstanding-jobs/Capgenmini.png"
import Rakus from "../images/outstanding-jobs/Rakus.png"
import AsiaPlus from "../images/outstanding-jobs/AsiaPlus.png"

const OutstandingJobs = [
  {
    id: 1,
    companyLogo: <Image style={{ width: 60, height: 60 }} resizeMode="contain" source={Onew} />,
    companyName: "Công Ty Cổ Phần Onew",
    companyLocation: "Ha Noi",
    address:"Tầng 7, 434 Trần Khát Chân, P. Phố Huế, Q.Hai Bà Trưng, Hà Nội",
    companyDescription: "Quản Lý Thiết Kế",
    updated: "28/10/2022",
    salary: "$1500 - $2000",
    time_remaining: 4 ,
    skills: [
      "Quy Hoạch",
      "Kiểm Soát Chất Lượng",
      "Thiết Kế Quy Hoạch Hệ Thống Hạ Tầng Đô Thị",
    ]
  },
  {
    id: 2,
    companyLogo: <Image style={{ width: 50, height: 50 }} resizeMode="contain" source={Capgenmini} />,
    companyName: "Asiafoods Corporation",
    companyLocation: "Hồ Chí Minh",
    address:"Ho Chi Minh City, Vietnam",
    companyDescription: "Scrum Master / Agile PM",
    updated: "08/11/2022",
    salary: "Thương lượng",
    time_remaining: 22,
    skills: [
      "Scrum Master",
      "PMP",
      "Agile",
    ]
  },
  {
    id: 3,
    companyLogo: <Image style={{ width: 50, height: 50 }} resizeMode="contain" source={vinamilk} />,
    companyName: "Sabeco - Tổng Công Ty Cổ Phần Bia - Rượu - Nước Giải Khát Sài Gòn",
    companyLocation: "Hồ Chí Minh",
    address:"Số 10 Tân Trào, Phường Tân Phú, Quận 7",
    companyDescription: "Senior Manager/Senior Product Manager – Digital Transformation - Supply Chains",
    updated: "31/10/2022",
    salary: "Thương lượng",
    time_remaining: 28,
    skills: [
      "Product Management",
      "Strategy",
      "Strategy Planning",
    ]
  },

  {
    id: 4,
    companyLogo: <Image style={{ width: 50, height: 50 }} resizeMode="contain" source={Rakus} />,
    companyName: "Rakus Vietnam Co., Ltd",
    companyLocation: "Hồ Chí Minh",
    companyDescription: "Java Developer (Spring, Sql)_Urgent!",
    updated: "09/11/2022",
    salary: "$1500 - $2000",
    time_remaining: 23,
    skills: [
      "Java",
      "JavaScript",
      "Spring Framework",
    ]
  },
  {
    id: 5,
    companyLogo: <Image style={{ width: 50, height: 50 }} resizeMode="contain" source={AsiaPlus} />,
    companyName: "Asia Plus Inc.",
    companyLocation: "Hồ Chí Minh",
    address:"6F 506 Nguyen Dinh Chieu Street, Ward 4, District 3, Ho Chi Minh City",
    companyDescription: "Mobile Developer (iOS)",
    updated: "31/10/2022",
    salary: "$1000 - $2000",
    time_remaining: 14,
    skills: [
      "UI Design",
      "UX Design",
      "Figma",
    ]
  },
]
export default OutstandingJobs;