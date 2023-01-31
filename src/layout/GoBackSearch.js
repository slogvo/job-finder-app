import React, { useState } from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import colors from '../../assets/colors/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const listCategories = [
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
    name: 'Thực tập',
  },
  {
    id: 4,
    name: 'Thiết kế đồ họa',
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
  {
    id: 9,
    name: 'Khác',
  },
];

const GoBackFilter = ({
  value,
  onChangeText,
  navigation,
  onChangeTab = () => {},
  onChange,
  currentType,
}) => {
  const [filter, setFilter] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: '#fff', paddingHorizontal: 25 }}>
      <View
        style={{
          width: '100%',
          paddingBottom: 10,
          position: 'relative',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View
            style={{
              width: 40,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 8,
            }}
          >
            <AntDesign name="closecircle" size={28} color={colors.darkGray} />
          </View>
        </TouchableOpacity>
        <View style={{ width: '85%' }}>
          <Image
            source={require('../../assets/images/icons/search-symbol.png')}
            style={{
              position: 'absolute',
              width: 20,
              height: 20,
              left: 20,
              zIndex: 10,
              top: 16,
            }}
          />
          <TextInput
            value={value}
            onChangeText={onChangeText}
            style={{
              paddingVertical: 12,
              paddingHorizontal: 15,
              paddingLeft: 50,
              borderRadius: 80,
              color: colors.text,
              backgroundColor: '#F7F7F7',
              fontSize: 15,
            }}
            placeholder="Nhập từ khóa tìm kiếm"
          />
        </View>
        {/* <TouchableOpacity
          onPress={() => {
            setFilter(!filter);
            if (filter === true) {
              onChange(0);
            }
          }}
        >
          {filter === false ? (
            <View
              style={{
                backgroundColor: colors.primary,
                width: 40,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 8,
              }}
            >
              <Image
                source={require('../../assets/images/icons/filter.png')}
                style={{
                  width: 30,
                  height: 30,
                  zIndex: 100,
                }}
              />
            </View>
          ) : (
            <View
              style={{
                width: 40,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 8,
              }}
            >
              <AntDesign name="closecircle" size={25} color={colors.darkGray} />
            </View>
          )}
        </TouchableOpacity> */}
      </View>

      {/* advanced filter */}
      {/* <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
          paddingBottom: 10,
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
                    onChangeTab(item.name);
                    console.log('item.name: ', item?.name);
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
      </View> */}
    </View>
  );
};

export default GoBackFilter;
