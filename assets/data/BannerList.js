import ImageBanner from '../../src/layout/ImageBanner';
import banner1 from '../images/banner/banner1.png';
import banner2 from '../images/banner/banner2.png';
import banner3 from '../images/banner/banner3.png';
import banner4 from '../images/banner/banner4.png';
import banner5 from '../images/banner/banner5.png';

const BannerList = [
  {
    id: 1,
    image: <ImageBanner src={banner1} />,
    companyName: 'VNG Corporation',
    jobName: 'Zalopay, Partnership Marketing Lead',
  },
  {
    id: 2,
    image: <ImageBanner src={banner2} />,
    companyName: 'Aeon Mall Vietnam Co., Ltd',
    jobName: 'Leasing Officer',
  },
  {
    id: 3,
    image: <ImageBanner src={banner3} />,
    companyName: 'Mondelez Kinh Đô Việt Nam',
    jobName: 'People Experience Advisor, Plant',
  },
  {
    id: 4,
    image: <ImageBanner src={banner4} />,
    companyName: 'Aden Vietnam',
    jobName: 'Senior HR Executive',
  },
  {
    id: 5,
    image: <ImageBanner src={banner5} />,
    companyName: 'Rosemont Business Asia',
    jobName: 'Human Resources Executive',
  },
];
export default BannerList;
