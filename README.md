# job-finder-app
- npm install để cài đặt các gói cần thiết cho dự án (node_modules)
- Sau khi cài đặt xong, chương trình chưa chạy được vì có một gói thư mục lỗi do version cũ, cần cập nhật lên version mới.
Lỗi thông báo như sau: ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'...
Lỗi này nằm trong đường dẫn: node_modules/react-native-snap-carousel
- Tạm bỏ qua lỗi đó, tiếp tục clone đường dẫn này về: https://github.com/longvoct/rn-snap-carousel.git
- Sau khi clone về, copy toàn bộ thư mục src của gói này rồi ghi/dán đè lên thư mục .../react-native-snap-carouse của dự án.
- Paste xong, chạy lệnh npx react-native run-android

### Xin lỗi vì sự bất tiện này. Sẽ cập nhật phiên bản mới nhất của thư viện "react-native-snap-carousel" để cài đặt chương trình dễ dàng hơn.

## Về cài đặt môi trường

- Đảm bảo rằng máy tính cần có các yếu tố như: jdk, android sdk
1. Về jdk, mình sử dụng Java SE Development Kit 15.0.2 - đường dẫn: https://www.oracle.com/java/technologies/javase/jdk15-archive-downloads.html và download: Windows x64 Installer: jdk-15.0.2_windows-x64_bin.exe
2. Về android sdk, để tránh mắc lỗi, mình đã đownload Android Studio, và thông qua đây - tải các package cần thiết
3. Sau khi đó có jdk và cài đặt android sdk --> Mở environment variables (Windows) để cài đặt các môi trường cần thiết như:
+ User variables: Thêm Variable và VALUE lần lượt: 
-- ANDROID_HOME Variable
```
ANDROID_HOME: C:\Users\yournamepc\AppData\Local\Android\Sdk
```
-- Path Variable, bổ sung:
```
Path: C:\Users\volon\AppData\Local\Android\Sdk\platform-tools
```

-- JAVA_HOME Variable:
```
JAVA_HOME : C:\Program Files\Java\jdk-15.0.1
```

