import { ScrollView, FlatList, View } from 'react-native';
import { useEffect, useState } from 'react';
import BannerCarousel from '../layout/BannerCarousel';
import SearchLayout from '../layout/SearchLayout';
import RenderItem from '../../src/layout/RenderItem';
import Title from '../../src/layout/Title';
import CardCategory from '../../src/layout/CardCategory';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const MainHome = ({ navigation }) => {
  const [recommends, setRecommends] = useState([]);
  const [userInfo, setUserInfo] = useState();
  const [userAuth, setUserAuth] = useState('');

  auth().onAuthStateChanged((user) => {
    if (user) {
      setUserAuth(user);
    } else setUserAuth('Unknown');
  });
  // console.log('userAuth.uid', userAuth.uid);

  //Get userInfo
  useEffect(() => {
    firestore()
      .collection('users')
      .where('user_id', '==', `${userAuth.uid}`)
      .onSnapshot((snapshot) => {
        let user = [];
        snapshot.forEach((doc) => {
          user.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setUserInfo(user[0]);
      });
  }, [userAuth]);

  //Get posts
  useEffect(() => {
    firestore()
      .collection('posts')
      .onSnapshot((snapshot) => {
        let posts = [];
        snapshot.forEach((doc) => {
          posts.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setRecommends(posts);
      });
  }, []);

  const renderItem = ({ item }) => (
    <RenderItem
      companyLogo={item.image}
      companyName={item.name_company}
      companyAddress={item.address}
      wage={item.wage}
      career={item.career}
      title={item.title}
      navigation={navigation}
      idPost={item.id}
      userInfo={userInfo}
    />
  );

  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
        paddingTop: 10,
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        persistentScrollbar={true}
        style={{
          backgroundColor: '#fff',
          position: 'relative',
        }}
        stickyHeaderIndices={[0]}
      >
        <SearchLayout navigation={navigation}></SearchLayout>
        <BannerCarousel></BannerCarousel>
        <View
          style={{
            marginTop: 30,
            width: '100%',
          }}
        >
          <Title></Title>
          <View
            style={{
              marginTop: 10,
              width: '100%',
              paddingLeft: 25,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <FlatList
              style={{
                height: 220,
              }}
              contentContainerStyle={{
                flexGrow: 1,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 2,
              }}
              showsHorizontalScrollIndicator={false}
              data={recommends}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              horizontal={true}
            />
          </View>
        </View>

        <View
          style={{
            marginTop: 30,
            width: '100%',
          }}
        >
          <Title title="Việc làm nổi bật"></Title>

          <View
            style={{
              marginTop: 10,
              width: '100%',
              paddingHorizontal: 25,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {recommends?.length > 0 &&
              recommends.map((item) => (
                <CardCategory
                  key={item.id}
                  id={item.id}
                  companyLogo={item.image}
                  companyName={item.name_company}
                  companyAddress={item.address}
                  wage={item.wage}
                  career={item.career}
                  title={item.title}
                  idPost={item.id}
                  userInfo={userInfo}
                />
              ))}
          </View>
        </View>
        <View style={{ marginBottom: 80 }} />
      </ScrollView>
    </View>
  );
};

export default MainHome;
