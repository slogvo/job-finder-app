import { Image, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../assets/colors/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import firestore from '@react-native-firebase/firestore';

const RenderItem = ({
  companyLogo,
  companyName,
  companyAddress,
  wage,
  title,
  career,
  navigation,
  idPost,
  userInfo,
  ...props
}) => {
  const companyAddressArr = companyAddress?.split(',');

  const favoritesClone = userInfo?.favorites || [];
  const [isFavorite] = favoritesClone
    .filter((item) => item.id === idPost)
    .map((item) => item.isFavorite);

  const handleToggleFavorite = (ID) => {
    const hasPost = favoritesClone?.find((favorite) => favorite.id === ID);
    if (hasPost === undefined) {
      favoritesClone.push({
        id: ID,
        isFavorite: false,
      });
    }
    const updatedArray = favoritesClone?.map((favorite) => {
      if (favorite.id === ID)
        return {
          ...favorite,
          isFavorite: !favorite.isFavorite,
        };
      return favorite;
    });
    firestore()
      .collection('users')
      .doc(userInfo.id)
      .update({
        favorites: updatedArray,
      })
      .then(() => {})
      .catch((err) => console.log(err));
  };

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
                fontWeight: '700',
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
        <TouchableOpacity activeOpacity={0.6} onPress={() => handleToggleFavorite(idPost)}>
          <AntDesign
            name="heart"
            size={20}
            color={isFavorite === true ? colors.redColor : colors.border}
          />
        </TouchableOpacity>
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
            activeOpacity={0.6}
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
            onPress={() => {
              navigation.navigate('JobDetail', { itemId: idPost });
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
