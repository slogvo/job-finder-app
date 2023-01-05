import { Image, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../assets/colors/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';

const RenderItem = ({
  companyLogo,
  companyName,
  companyAddress,
  wage,
  title,
  career,
  ...props
}) => {
  const companyAddressArr = companyAddress?.split(',');
  return (
    <View
      style={{
        width: 290,
        height: 210,
        borderRadius: 16,
        backgroundColor: '#fff',
        padding: 15,
        elevation: 2,
        marginRight: 30,
      }}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row', width: 200 }}>
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 8,
              elevation: 1,
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 10,
            }}
          >
            <Image
              source={{ uri: companyLogo }}
              style={{ width: 58, height: 58, resizeMode: 'contain' }}
            />
          </View>
          <View style={{}}>
            <Text
              numberOfLines={1}
              style={{
                width: 150,
                fontSize: 15,
                color: colors.text,
                marginBottom: 3,
                fontFamily: 'SanFranciscoDisplay-Bold',
              }}
            >
              {companyName}
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'SanFranciscoDisplay-Medium',
              }}
            >
              {companyAddressArr[companyAddressArr.length - 1]}
            </Text>
          </View>
        </View>
        <AntDesign name="heart" size={20} color={colors.redColor} />
      </View>
      <Text
        numberOfLines={1}
        style={{
          marginTop: 10,
          fontSize: 16,
          color: colors.text,
          fontWeight: '600',
        }}
      >
        {title}
      </Text>
      <Text style={{ marginTop: 4 }} numberOfLines={1}>
        Lĩnh vực: {career}
      </Text>
      <View style={{ flexDirection: 'column', marginTop: 'auto' }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* <View
          style={{
            width: 5,
            height: 5,
            borderRadius: 10,
            backgroundColor: colors.primary,
          }}
        ></View> */}
          <Text
            style={{
              fontSize: 15,
              color: colors.secondary,
              fontWeight: '500',
            }}
          >
            {wage}
          </Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text
            style={{
              fontSize: 14,
              color: colors.darkGray,
              fontFamily: 'SanFranciscoDisplay-Regular',
            }}
          >
            Hết hạn trong 30 ngày
          </Text>
          <TouchableOpacity
            style={{
              marginLeft: 'auto',
              width: '30%',
              height: 40,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors.primary,
              marginRight: 8,
            }}
          >
            <Text style={{ color: '#fff' }}>Nộp đơn</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RenderItem;
