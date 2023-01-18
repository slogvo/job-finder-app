# job-finder-app
- npm install để cài đặt các gói cần thiết cho dự án (node_modules)
- Sau khi cài đặt xong, chương trình chưa chạy được vì có một gói thư mục lỗi do version cũ, cần cập nhật lên version mới.
Lỗi thông báo như sau: ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'...
Lỗi này nằm trong đường dẫn: node_modules/react-native-snap-carousel
- Tạm bỏ qua lỗi đó, tiếp tục clone đường dẫn này về: https://github.com/longvoct/rn-snap-carousel.git
- Sau khi clone về, copy toàn bộ thư mục src của gói này rồi ghi/dán đè lên thư mục .../react-native-snap-carouse của dự án.
- Paste xong, chạy lệnh npx react-native run-android

### Sẽ cập nhật phiên bản mới nhất của thư viện "react-native-snap-carousel" để cài đặt chương trình dễ dàng hơn.
