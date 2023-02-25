import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import CardCategory from '../layout/CardCategory';
import GoBackFilter from '../layout/GoBackSearch';
import colors from '../../assets/colors/colors';
import useRemoveTones from '../hooks/useRemoveTones';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const listCategories = [
  {
    id: 0,
    name: 'Tất cả',
  },
  {
    id: 1,
    name: 'Full-time',
  },
  {
    id: 2,
    name: 'Part-time',
  },
  {
    id: 3,
    name: 'Thực phẩm',
  },
  {
    id: 4,
    name: 'Bán hàng',
  },
  {
    id: 5,
    name: 'Tài chính',
  },
  {
    id: 6,
    name: 'Nhân sự',
  },
  {
    id: 7,
    name: 'IT',
  },
  {
    id: 8,
    name: 'Marketing',
  },
];

const SearchFilterView = ({ navigation }) => {
  const removeVNeTones = useRemoveTones();
  const [queryText, setQueryText] = useState('');
  const [currentType, setCurrentType] = useState(0);
  const [textType, setTextType] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState(false);
  const [catsList, setCatsList] = useState([]);
  const [catsListType, setCatsListType] = useState([]);

  const [userInfo, setUserInfo] = useState();
  const [userAuth, setUserAuth] = useState('');

  auth().onAuthStateChanged((user) => {
    if (user) {
      setUserAuth(user);
    } else setUserAuth('Unknown');
  });

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

  const onChangeText = (text) => {
    if (text.length !== 0) {
      setCurrentType(0);
      setFilter(true);
    } else setFilter(false);
    setQueryText(text);
  };

  useEffect(() => {
    setIsLoading(true);
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
        const list = posts.filter((item) => {
          const addressRef = removeVNeTones(item.address).toLowerCase();
          const careerRef = removeVNeTones(item.career).toLowerCase();
          const titleRef = removeVNeTones(item.title).toLowerCase();
          const wageRef = removeVNeTones(item.wage).toLowerCase();
          const type_jobRef = removeVNeTones(item.type_job).toLowerCase();
          const name_companyRef = removeVNeTones(item.name_company).toLowerCase();
          const queryTextRef = removeVNeTones(queryText).toLowerCase();
          if (
            addressRef.includes(queryTextRef) ||
            wageRef.includes(queryTextRef) ||
            careerRef.includes(queryTextRef) ||
            titleRef.includes(queryTextRef) ||
            type_jobRef.includes(queryTextRef) ||
            name_companyRef.includes(queryTextRef)
          )
            return item;
        });
        setCatsList(list);
        setIsLoading(false);
      });
  }, [queryText]);

  useEffect(() => {
    setIsLoading(true);
    const list = catsList.filter((item) => {
      const addressRef = removeVNeTones(item.address).toLowerCase();
      const careerRef = removeVNeTones(item.career).toLowerCase();
      const titleRef = removeVNeTones(item.title).toLowerCase();
      const wageRef = removeVNeTones(item.wage).toLowerCase();
      const name_companyRef = removeVNeTones(item.name_company).toLowerCase();
      const textTypeRef = removeVNeTones(textType).toLowerCase();
      const type_jobRef = removeVNeTones(item.type_job).toLowerCase();
      if (
        addressRef.includes(textTypeRef) ||
        wageRef.includes(textTypeRef) ||
        type_jobRef.includes(textTypeRef) ||
        careerRef.includes(textTypeRef) ||
        titleRef.includes(textTypeRef) ||
        name_companyRef.includes(textTypeRef)
      )
        return item;
    });
    setCatsListType(list);
    setIsLoading(false);
  }, [textType]);

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
        <GoBackFilter value={queryText} onChangeText={onChangeText} navigation={navigation} />

        {/* advanced filter */}
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            paddingBottom: 10,
            paddingHorizontal: 25,
            alignItems: 'center',
            borderBottomWidth: 0.6,
            borderBottomColor: '#e2e2e2',
            justifyContent: 'space-between',
          }}
        >
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {listCategories?.length > 0 &&
              filter === true &&
              listCategories.map((item) => {
                return (
                  <TouchableOpacity
                    key={item.id}
                    onPress={() => {
                      setCurrentType(item.id);
                      setTextType(item.name);
                    }}
                    style={{
                      paddingHorizontal: 10,
                      height: 40,
                      backgroundColor: currentType == item.id ? colors.primary : colors.lightGray,
                      borderRadius: 6,
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: 10,
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: 'Inter-Medium',
                        color: currentType == item.id ? 'white' : colors.text,
                      }}
                    >
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                );
              })}
          </ScrollView>
        </View>
        <View
          style={{
            marginTop: 20,
            paddingHorizontal: 25,
          }}
        >
          <Text
            style={{
              color: colors.text,
              fontSize: 14,
              fontFamily: 'Inter-Medium',
            }}
          >
            {queryText?.length > 0 && currentType <= 0 && `+${catsList.length} kết quả tìm thấy`}
            {queryText?.length > 0 && currentType > 0 && `+${catsListType.length} kết quả tìm thấy`}
            {queryText?.length <= 0 && `Tất cả kết quả`}
          </Text>
        </View>
        {isLoading ? (
          <View style={{ marginTop: 10 }}>
            <ActivityIndicator size="large" color={colors.primary} />
          </View>
        ) : (
          <View
            style={{
              marginTop: 10,
              width: '100%',
              paddingHorizontal: 25,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {currentType <= 0
              ? catsList?.map((item) => (
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
                    navigation={navigation}
                  />
                ))
              : catsListType?.map((item) => (
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
                    navigation={navigation}
                  />
                ))}
          </View>
        )}

        <View style={{ marginBottom: 80 }}></View>
      </ScrollView>
    </View>
  );
};

export default SearchFilterView;
