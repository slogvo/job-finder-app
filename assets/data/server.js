import { createServer } from "miragejs"

if (window.server) {
  server.shutdown()
}

const listProducts = [
  {
    id: 1,
    type: 1,
    companyLogo: require("../images/alljobs/Tiktok.png"),
    companyName: "TikTok Technologies Vietnam Company Limited",
    companyLocation: "Hồ Chí Minh",
    address: "Tầng 6, Lim Tower 3, 29A Nguyễn Đình Chiểu, Phường Đa Kao, Quận 1, Hồ Chí Minh",
    companyDescription: "SMB Account Manager",
    updated: "11/11/2022",
    salary: "Thương lượng",
    time_remaining: 25,
    form: "Full Time",
    skills: [
      "Media",
      "Digital Media",
      "Media Planning",
    ]
  },
  {
    id: 2,
    type: 1,
    companyLogo: require("../images/alljobs/Yamaha.png"),
    companyName: "Công ty TNHH Yamaha Motor Việt Nam",
    companyLocation: "Ha Noi",
    address: "Lô 50-54, 59-68, KCN Nội Bài, Quang Tiến, Sóc Sơn, Hà Nội; Yamaha Town Hà Nội - 62 Nguyễn Chí Thanh, Đống Đa, HN",
    companyDescription: "Marketing Assistant Manager - Big Bike",
    updated: "07/11/2022",
    salary: "Thương lượng",
    time_remaining: 25,
    form: "Full Time",
    skills: [
      "Team Work",
      "Communication",
      "Digital Marketing",
    ]
  },
  {
    id: 3,
    type: 1,
    companyLogo: require("../images/alljobs/MUFG.png"),
    companyName: "MUFG Bank, Ltd., Hanoi Branch",
    companyLocation: "Hà Nội",
    address: "6th & 7th Floor, Pacific Place, 83B Ly Thuong Kiet, Hoan Kiem, Ha Noi",
    companyDescription: "Assistant Relationship Manager",
    updated: "31/10/2022",
    salary: "Thương lượng",
    time_remaining: 15,
    form: "Full Time",
    skills: [
      "Banking Solutions",
      "Banking Solutions",
      "Negotiation Abilities",
    ]
  },
  {
    id: 4,
    type: 2,
    companyLogo: require("../images/alljobs/WooriBank.png"),
    companyName: "Ngân Hàng TNHH MTV Woori Việt Nam",
    companyLocation: "Hà Nội",
    address: "Keangnam Landmark 72, E6 Phạm Hùng, Mễ Trì, Nam Từ Liêm, Hà Nội, Vietnam",
    companyDescription: "Nhân Viên Kế Toán",
    updated: "25/10/2022",
    salary: "Thương lượng",
    time_remaining: 7,
    form: "Full Time",
    skills: [
      "Thúc Đẩy Bán Hàng",
      "Phát Triển Sản Phẩm",
      "Tài Trợ Thương Mại",
      "Trade Finance",
    ]
  },
  {
    id: 5,
    type: 2,
    companyLogo: require("../images/alljobs/Mercedes.png"),
    companyName: "Mercedes-Benz Vietnam Ltd.",
    companyLocation: "Hồ Chí Minh",
    companyDescription: "Manager, SEDAN and SUV",
    address: "693 Quang Trung, Ward 8, Go Vap District, Ho Chi Minh City, Vietnam",
    updated: "09/11/2022",
    salary: "Thương lượng",
    time_remaining: 21,
    form: "Full Time",
    skills: [
      "Interpersonal Communication Skill",
      "Problem Analysis Skill",
      "English Skill",
    ]
  },
  {
    id: 6,
    type: 3,
    companyLogo: require("../images/alljobs/LG.png"),
    companyName: "LG Vehicle Component Solutions Development Center Vietnam (LG VS DCV)",
    companyLocation: "Hà Nội",
    address: "32F & 36F Keangnam Landmark 72, Pham Hung, Nam Tu Liem, Ha Noi",
    companyDescription: "Software Test Engineer",
    update: "17/10/2022",
    salary: "$700 - $1500",
    time_remaining: 1,
    form: "Full Time",
    skills: [
      "Software Testing",
      "Automation Test",
      "Test Automation Tool",
    ]
  },
  {
    id: 7,
    type: 4,
    companyLogo: require("../images/alljobs/FPT-Telecom.png"),
    companyName: "FPT Telecom",
    companyLocation: "Hà Nội",
    address: "Tầng 2, Tòa nhà FPT, số 17 Duy Tân, Cầu Giấy, Hà Nội",
    companyDescription: "QA Software",
    update: "17/10/2022",
    salary: "$500 - $1000",
    time_remaining: 7,
    form: "Full Time",
    skills: [
      "QC",
      "QA",
      "Software Testing",
      "Software Engineering"
    ]
  },
  {
    id: 8,
    type: 4,
    companyLogo: require("../images/alljobs/GHTK.png"),
    companyName: "Giao Hàng Tiết Kiệm",
    companyLocation: "Hà Nội",
    address: "GHTK Building, Pham Hung Street, Me Tri Ward, Nam Tu Liem District, Ha Noi",
    companyDescription: "Tester (Middle - Senior)",
    update: "17/10/2022",
    salary: "$400 - $1500",
    time_remaining: 7,
    form: "Full Time",
    skills: [
      "QC",
      "QA",
      "Software Testing",
      "Software Engineering"
    ]
  },
  {
    id: 9,
    type: 5,
    companyLogo: require("../images/alljobs/VinHomes.png"),
    companyName: "Công Ty Cổ Phần Vinhomes",
    companyLocation: "Hà Nội",
    address: "Tòa nhà văn phòng Symphony, Đường Chu Huy Mân, Khu đô thị sinh thái Vinhomes Riverside",
    companyDescription: "Chuyên Viên Thiết Kế Kiến Trúc/ Kết Cấu/ MEP",
    update: "17/10/2022",
    salary: "$400 - $1500",
    time_remaining: 7,
    form: "Full Time",
    skills: [
      "QC",
      "QA",
      "Software Testing",
      "Software Engineering"
    ]
  },
];

const listCategories = [
  {
    id: 1,
    name: 'Full Time'
  },
  {
    id: 2,
    name: 'Part Time'
  },
  {
    id: 3,
    name: 'Thực tập'
  },
  {
    id: 4,
    name: 'Thiết kế đồ họa'
  },
  {
    id: 5,
    name: 'Tài chính'
  },
  {
    id: 6,
    name: 'Nhân sự'
  },
  {
    id: 7,
    name: 'IT'
  },
  {
    id: 8,
    name: 'Marketing'
  },
  {
    id: 9,
    name: 'Khác'
  }
]

window.server = createServer({
  routes() {
    this.get("/api/product", (schema, req) => {
      return listProducts.map(item => ({
        ...item,
        categoryName: listCategories.find(cat => cat.id == item.type).name,
      })).filter(item => {
        if (req.queryParams.type > 0) {
          return item.type == req.queryParams.type
        }
        return true;
      }).filter(item => 
        item.companyName.toLowerCase().includes(req.queryParams.s.toLowerCase() || '') 
        || item.companyDescription.toLowerCase().includes(req.queryParams.s.toLowerCase() || '')
        || item.companyLocation.toLowerCase().includes(req.queryParams.s.toLowerCase() || '')
        )
    })
    this.get('/api/category', () => {
      return listCategories
    })
  },
})