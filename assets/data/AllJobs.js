import { Image, View } from "react-native";
import Lotte from "../images/logo/Lotte_vn.png"
import Sabeco from "../images/logo/sabeco.jpg"
import asiafoods from "../images/logo/asiafoods.png"
import Tiktok from "../images/alljobs/Tiktok.png"
import Yamaha from "../images/alljobs/Yamaha.png"
import Mufg from "../images/alljobs/MUFG.png"
import WooriBank from "../images/alljobs/WooriBank.png"
import Mercedes from "../images/alljobs/Mercedes.png"
import lg from "../images/alljobs/LG.png"
import fpt from "../images/alljobs/FPT-Telecom.png"
import ghtk from "../images/alljobs/GHTK.png"
import VinHomes from "../images/alljobs/VinHomes.png"

const AllJobs = [
  {
    id: 1,
    companyLogo: <Image style={{ width: 60, height: 60 }} resizeMode="contain" source={Tiktok} />,
    companyName: "TikTok Technologies Vietnam Company Limited",
    companyLocation: "Hồ Chí Minh",
    address: "Tầng 6, Lim Tower 3, 29A Nguyễn Đình Chiểu, Phường Đa Kao, Quận 1, Hồ Chí Minh",
    companyDescription: "SMB Account Manager",
    updated: "11/11/2022",
    salary: "Thương lượng",
    time_remaining: 25,
    form:"Full Time",
    skills: [
      "Media",
      "Digital Media",
      "Media Planning",
    ]
  },
  {
    id: 2,
    companyLogo: <Image style={{ width: 60, height: 60 }} resizeMode="contain" source={Yamaha} />,
    companyName: "Công ty TNHH Yamaha Motor Việt Nam",
    companyLocation: "Ha Noi",
    address: "Lô 50-54, 59-68, KCN Nội Bài, Quang Tiến, Sóc Sơn, Hà Nội; Yamaha Town Hà Nội - 62 Nguyễn Chí Thanh, Đống Đa, HN",
    companyDescription: "Marketing Assistant Manager - Big Bike",
    updated: "07/11/2022",
    salary: "Thương lượng",
    time_remaining: 25,
    form:"Full Time",
    skills: [
      "Team Work",
      "Communication",
      "Digital Marketing",
    ]
  },
  {
    id: 3,
    companyLogo: <Image style={{ width: 50, height: 50 }} resizeMode="contain" source={Mufg} />,
    companyName: "MUFG Bank, Ltd., Hanoi Branch",
    companyLocation: "Hà Nội",
    address: "6th & 7th Floor, Pacific Place, 83B Ly Thuong Kiet, Hoan Kiem, Ha Noi",
    companyDescription: "Assistant Relationship Manager",
    updated: "31/10/2022",
    salary: "Thương lượng",
    time_remaining: 15,
    form:"Full Time",
    skills: [
      "Banking Solutions",
      "Banking Solutions",
      "Negotiation Abilities",
    ]
  },
  {
    id: 4,
    companyLogo: <Image style={{ width: 50, height: 50 }} resizeMode="contain" source={WooriBank} />,
    companyName: "Sabeco - Tổng Công Ty Cổ Phần Bia - Rượu - Nước Giải Khát Sài Gòn",
    companyLocation: "Bình Dương",
    address:"Tầng 10, tòa nhà Becamex, số, 230 Đại lộ Bình Dương, Phú Hoà, Thủ Dầu Một, Bình Dương",
    companyDescription: "Chuyên Viên Tín Dụng",
    update: "31/10/2022",
    salary: "Từ $800",
    time_remaining: 28,
    form:"Full Time",
    skills: [
      "Quan Hệ Khách Hàng",
      "Tín Dụng Doanh Nghiệp",
    ]
  },

  {
    id: 5,
    companyLogo: <Image style={{ width: 50, height: 50 }} resizeMode="contain" source={Mercedes} />,
    companyName: "Mercedes-Benz Vietnam Ltd.",
    companyLocation: "Hồ Chí Minh",
    companyDescription: "Manager, SEDAN and SUV",
    address:"693 Quang Trung, Ward 8, Go Vap District, Ho Chi Minh City, Vietnam",
    updated: "09/11/2022",
    salary: "Thương lượng",
    time_remaining: 21,
    form:"Full Time",
    skills: [
      "Interpersonal Communication Skill",
      "Problem Analysis Skill",
      "English Skill",
    ]
  },
  {
    id: 6,
    companyLogo: <Image style={{ width: 50, height: 50 }} resizeMode="contain" source={lg} />,
    companyName: "LG Vehicle Component Solutions Development Center Vietnam (LG VS DCV)",
    companyLocation: "Hà Nội",
    address:"32F & 36F Keangnam Landmark 72, Pham Hung, Nam Tu Liem, Ha Noi",
    companyDescription: "Software Test Engineer",
    update: "17/10/2022",
    salary: "$700 - $1500",
    time_remaining: 1,
    form:"Full Time",
    skills: [
      "Software Testing",
      "Automation Test",
      "Test Automation Tool",
    ]
  },
  {
    id: 7,
    companyLogo: <Image style={{ width: 50, height: 50 }} resizeMode="contain" source={fpt} />,
    companyName: "FPT Telecom",
    companyLocation: "Hà Nội",
    address:"Tầng 2, Tòa nhà FPT, số 17 Duy Tân, Cầu Giấy, Hà Nội",
    companyDescription: "QA Software",
    update: "17/10/2022",
    salary: "$500 - $1000",
    time_remaining: 7,
    form:"Full Time",
    skills: [
      "QC",
      "QA",
      "Software Testing",
      "Software Engineering"
    ]
  },
  {
    id: 8,
    companyLogo: <Image style={{ width: 50, height: 50 }} resizeMode="contain" source={ghtk} />,
    companyName: "Giao Hàng Tiết Kiệm",
    companyLocation: "Hà Nội",
    address:"GHTK Building, Pham Hung Street, Me Tri Ward, Nam Tu Liem District, Ha Noi",
    companyDescription: "Tester (Middle - Senior)",
    update: "17/10/2022",
    salary: "$400 - $1500",
    time_remaining: 7,
    form:"Full Time",
    skills: [
      "QC",
      "QA",
      "Software Testing",
      "Software Engineering"
    ]
  },
  {
    id: 9,
    companyLogo: <Image style={{ width: 50, height: 50 }} resizeMode="contain" source={VinHomes} />,
    companyName: "Công Ty Cổ Phần Vinhomes",
    companyLocation: "Hà Nội",
    address:"Tòa nhà văn phòng Symphony, Đường Chu Huy Mân, Khu đô thị sinh thái Vinhomes Riverside",
    companyDescription: "Chuyên Viên Thiết Kế Kiến Trúc/ Kết Cấu/ MEP",
    update: "17/10/2022",
    salary: "$400 - $1500",
    time_remaining: 7,
    form:"Full Time",
    skills: [
      "QC",
      "QA",
      "Software Testing",
      "Software Engineering"
    ]
  },
]
export default AllJobs;